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
<body style="font-family:system-ui;padding:24px;color:#1F3A36;max-width:580px;margin:0 auto;background:#FFF">
  <h2 style="font-family:Georgia,serif;margin:0 0 6px">Returning you to the admin…</h2>
  <p id="status" style="color:#4A5C58;margin:0 0 12px">Initializing diagnostics…</p>
  <pre id="log" style="font:11px/1.5 ui-monospace,Menlo,monospace;background:#F7F4EC;border:1px solid #E6E2D9;border-radius:6px;padding:12px;max-height:300px;overflow:auto;white-space:pre-wrap;word-break:break-all;margin:0"></pre>
  <p style="margin-top:14px;font-size:12px;color:#8A8076">
    Auto-close in <span id="cd">15</span>s.
    If the admin tab did not redirect, screenshot this whole window and share it.
  </p>
  <script>
    (function () {
      var payload = ${JSON.stringify(payload)};
      var primary = ${primaryOriginsJson};
      var patterns = ${patternSources}.map(function (s) { return new RegExp(s); });
      var log = document.getElementById('log');
      var status = document.getElementById('status');
      function out(s) { log.textContent += s + '\\n'; }
      function allowed(o) { return patterns.some(function (p) { return p.test(o); }); }

      out('[1] payload prefix: ' + payload.substring(0, 80));
      out('[2] payload length: ' + payload.length + ' chars');
      out('[3] window.opener present: ' + (!!window.opener));
      try {
        out('[4] window.opener.closed: ' + (window.opener && window.opener.closed));
      } catch (e) {
        out('[4] could not read opener.closed (cross-origin): ' + e.message);
      }

      if (!window.opener) {
        status.textContent = 'No parent window — likely COOP isolation. Need to switch flow.';
        out('!!! opener is null. GitHub COOP probably broke the link.');
        return;
      }

      function postTo(origin, label) {
        try {
          window.opener.postMessage(payload, origin);
          out('  ✓ postMessage targetOrigin=' + label);
        } catch (e) {
          out('  ✗ postMessage targetOrigin=' + label + ' threw: ' + e.message);
        }
      }

      out('[5] Listening for Decap handshake...');
      window.addEventListener('message', function (e) {
        var preview = typeof e.data === 'string' ? e.data.substring(0, 60) : JSON.stringify(e.data).substring(0, 60);
        out('  ← message from ' + e.origin + ': ' + preview);
        if (typeof e.data === 'string' && e.data.indexOf('authorizing:github') === 0) {
          out('  ↳ Decap handshake detected, replying to ' + e.origin);
          postTo(e.origin, e.origin + ' (handshake reply)');
        }
      });

      out('[6] Broadcasting payload to known origins:');
      primary.forEach(function (o) { postTo(o, o); });
      postTo('*', '*');

      setTimeout(function () {
        out('[7] Re-broadcasting at +600ms:');
        primary.forEach(function (o) { postTo(o, o); });
        postTo('*', '*');
      }, 600);

      status.textContent = 'Token broadcast complete. Check the admin tab — if still on login, screenshot this log.';

      var cd = 15;
      var cdEl = document.getElementById('cd');
      var timer = setInterval(function () {
        cd--;
        if (cdEl) cdEl.textContent = cd;
        if (cd <= 0) {
          clearInterval(timer);
          try { window.close(); } catch (_) {}
        }
      }, 1000);
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
