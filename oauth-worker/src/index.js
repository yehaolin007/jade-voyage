/**
 * Jade Voyage · Decap CMS GitHub OAuth Proxy
 * Cloudflare Worker that bridges Decap CMS to GitHub OAuth.
 *
 * Flow:
 *   1. Decap pops up `${WORKER_URL}/auth` → we redirect to GitHub authorize.
 *   2. GitHub redirects back to `${WORKER_URL}/callback?code=...`.
 *   3. We exchange the code for an access_token using the secret.
 *   4. We postMessage() the token back to the Decap window that opened us.
 *
 * Required secrets (set via `wrangler secret put`):
 *   GITHUB_CLIENT_ID
 *   GITHUB_CLIENT_SECRET
 */

const ORIGIN_ALLOWLIST = [
  'https://jade-voyage.pages.dev',
  'http://localhost:4321',
];

function escapeJson(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function popupResponse(status, content, allowedOrigin) {
  const payload = `authorization:github:${status}:${escapeJson(content)}`;
  const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>Authenticating…</title></head>
<body style="font-family:system-ui;padding:32px;color:#1F3A36">
  <p>Returning you to the admin…</p>
  <script>
    (function () {
      var allowed = ${JSON.stringify(ORIGIN_ALLOWLIST)};
      var payload = ${JSON.stringify(payload)};
      function send() {
        if (!window.opener) {
          document.body.innerHTML += '<p style="color:#B23A3A">No opener window. Close this tab and retry from /admin/.</p>';
          return;
        }
        allowed.forEach(function (origin) {
          window.opener.postMessage(payload, origin);
        });
      }
      window.addEventListener('message', function (e) {
        if (typeof e.data === 'string' && e.data.indexOf('authorizing:github') === 0) send();
      });
      send();
      setTimeout(function () { window.close(); }, 1500);
    })();
  </script>
</body></html>`;
  return new Response(html, { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
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
      if (error) return popupResponse('error', { message: error }, ORIGIN_ALLOWLIST[0]);
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
        return popupResponse('error', { message: 'Network error talking to GitHub: ' + e.message }, ORIGIN_ALLOWLIST[0]);
      }

      if (tokenJson.error || !tokenJson.access_token) {
        return popupResponse('error', tokenJson, ORIGIN_ALLOWLIST[0]);
      }

      return popupResponse(
        'success',
        { token: tokenJson.access_token, provider: 'github' },
        ORIGIN_ALLOWLIST[0]
      );
    }

    return new Response('Not Found', { status: 404 });
  },
};
