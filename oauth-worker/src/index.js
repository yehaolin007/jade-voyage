/**
 * Harmony Retreats · Decap CMS GitHub OAuth Proxy
 * Cloudflare Worker that bridges Decap CMS to GitHub OAuth.
 *
 * Required secrets:
 *   GITHUB_CLIENT_ID
 *   GITHUB_CLIENT_SECRET
 */

// The pages.dev origin we redirect back to. Worker → admin/ is same-origin
// inside pages.dev, which sidesteps cross-origin postMessage being silently
// dropped by Chrome storage partitioning / Firefox TCP / Safari ITP.
const ADMIN_URL = 'https://jade-voyage.pages.dev/admin/';

function redirectToAdmin(params) {
  const qs = Object.entries(params)
    .filter(([, v]) => v != null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
  return Response.redirect(`${ADMIN_URL}#${qs}`, 302);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/' || url.pathname === '') {
      return new Response(
        'Harmony Retreats · Decap OAuth proxy\n\nEndpoints:\n  GET /auth      — start GitHub OAuth\n  GET /callback  — handle GitHub callback\n',
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
      if (error) return redirectToAdmin({ auth_error: error });
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
        return redirectToAdmin({ auth_error: 'network: ' + e.message });
      }

      if (tokenJson.error || !tokenJson.access_token) {
        return redirectToAdmin({ auth_error: tokenJson.error || 'no_token' });
      }

      return redirectToAdmin({ auth_token: tokenJson.access_token });
    }

    return new Response('Not Found', { status: 404 });
  },
};
