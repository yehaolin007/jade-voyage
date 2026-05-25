// CF Pages Functions middleware — intercept ALL requests and serve the
// closed.html placeholder. Runs before static asset routing, so it reliably
// covers `/` (where _redirects splat fails due to index.html precedence).
//
// To re-open the site, delete this file (or git revert this commit) and push.

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Let the placeholder itself through, otherwise infinite-rewrite.
  if (url.pathname === '/closed.html') {
    return context.next();
  }

  // Everything else: serve closed.html content while keeping the original URL.
  const placeholderUrl = new URL('/closed.html', url.origin);
  const res = await context.env.ASSETS.fetch(placeholderUrl);

  // Return a new response so headers (status, cache) are clean.
  return new Response(res.body, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, max-age=0',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
