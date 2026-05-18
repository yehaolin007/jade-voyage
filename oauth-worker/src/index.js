/**
 * Jade Voyage · Decap CMS GitHub OAuth Proxy
 * Cloudflare Worker that bridges Decap CMS to GitHub OAuth.
 *
 * Required secrets:
 *   GITHUB_CLIENT_ID
 *   GITHUB_CLIENT_SECRET
 */

// Origins we'll accept handshakes from / actively broadcast to.
// Matches the production site + CF preview deployment subdomains + local dev.
const ORIGIN_PATTERNS = [
  /^https:\/\/jade-voyage\.pages\.dev$/,
  /^https:\/\/[a-z0-9-]+\.jade-voyage\.pages\.dev$/,
  /^http:\/\/localhost:\d+$/,
];

const PRIMARY_ORIGINS = [
  'https://jade-voyage.pages.dev',
  'http://localhost:4321',
];

function escapeJson(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function isAllowedOrigin(origin) {
  return ORIGIN_PATTERNS.some((p) => p.test(origin));
}

function popupResponse(status, content) {
  const payload = `authorization:github:${status}:${escapeJson(content)}`;
  const primaryOriginsJson = JSON.stringify(PRIMARY_ORIGINS);
  const patternSources = JSON.stringify(ORIGIN_PATTERNS.map((p) => p.source));
  const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>Authenticating…</title></head>
<body style="font-family:system-ui;padding:32px;color:#1F3A36;max-width:520px;margin:0 auto">
  <h2 style="font-family:Georgia,serif">Returning you to the admin…</h2>
  <p id="status">Talking to the parent window. This tab should close in a moment.</p>
  <p style="color:#8A8076;font-size:13px;margin-top:24px">If this tab doesn't close on its own, you can close it manually and return to <a href="https://jade-voyage.pages.dev/admin/">the admin</a>.</p>
  <script>
    (function () {
      var payload = ${JSON.stringify(payload)};
      var primary = ${primaryOriginsJson};
      var patterns = ${patternSources}.map(function (s) { return new RegExp(s); });
      var opener = window.opener;
      function allowed(o) { return patterns.some(function (p) { return p.test(o); }); }
      function postTo(target, origin) {
        try { target.postMessage(payload, origin); } catch (_) {}
      }
      // 1. Respond to Decap's "authorizing:github" handshake using its own origin.
      window.addEventListener('message', function (e) {
        if (typeof e.data === 'string' && e.data.indexOf('authorizing:github') === 0 && allowed(e.origin)) {
          postTo(e.source || opener, e.origin);
        }
      });
      // 2. Proactively broadcast to known primary origins (in case the handshake never arrives).
      if (opener) {
        primary.forEach(function (o) { postTo(opener, o); });
        // 3. Last-resort broadcast — receiver still verifies e.origin, so the token can only be used by Decap.
        postTo(opener, '*');
      } else {
        document.getElementById('status').textContent = 'No opener window found. Close this tab and try again from /admin/.';
      }
      // 4. Re-broadcast in 600ms — covers slow Decap listeners on a cold tab.
      setTimeout(function () {
        if (opener) {
          primary.forEach(function (o) { postTo(opener, o); });
          postTo(opener, '*');
        }
      }, 600);
      // 5. Close the tab after the message has had time to flow.
      setTimeout(function () { window.close(); }, 2800);
    })();
  </script>
</body></html>`;
  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/' || url.pathname === '') {
      return new Response(
        'Jade Voyage · Decap OAuth proxy\n\nEndpoints:\n  GET /auth      — start GitHub OAuth\n  GET /callback  — handle GitHub callback\n',
        { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
      );
    }

    if (url.pathname === '/auth') {
      if (!env.GITHUB_CLIENT_ID) {
        return new Response('GITHUB_CLIENT_ID secret is not set on this Worker.', { status: 500 });
      }
      const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        redirect_uri: `${url.origin}/callback`,
        scope: 'repo,user',
        allow_signup: 'false',
      });
      return Response.redirect(
        `https://github.com/login/oauth/authorize?${params.toString()}`,
        302
      );
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      const error = url.searchParams.get('error');
      if (error) return popupResponse('error', { message: error });
      if (!code) return new Response('Missing ?code parameter', { status: 400 });
      if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
        return new Response('Worker secrets GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET are not set.', { status: 500 });
      }

      let tokenJson;
      try {
        const resp = await fetch('https://github.com/login/oauth/access_token', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'jade-voyage-oauth-worker',
          },
          body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code,
            redirect_uri: `${url.origin}/callback`,
          }),
        });
        tokenJson = await resp.json();
      } catch (e) {
        return popupResponse('error', { message: 'Network error talking to GitHub: ' + e.message });
      }

      if (tokenJson.error || !tokenJson.access_token) {
        return popupResponse('error', tokenJson);
      }

      return popupResponse('success', { token: tokenJson.access_token, provider: 'github' });
    }

    return new Response('Not Found', { status: 404 });
  },
};
