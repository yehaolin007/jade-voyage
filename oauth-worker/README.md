# Harmony Retreats · Decap CMS OAuth Worker

A 110-line Cloudflare Worker that lets Decap CMS authenticate against GitHub
without exposing the OAuth client secret to the browser.

## One-time setup

### 1. Create the GitHub OAuth App

1. Open https://github.com/settings/applications/new
2. Fill in:
   - **Application name**: `Harmony Retreats CMS`
   - **Homepage URL**: `https://jade-voyage.pages.dev`
   - **Authorization callback URL**: `https://jade-voyage-oauth.<your-cf-subdomain>.workers.dev/callback`
     (you'll know `<your-cf-subdomain>` after the first `wrangler deploy` — for the first registration, fill any placeholder and edit it after deploy)
3. Click **Register application**
4. On the next page, copy the **Client ID** and click **Generate a new client secret** → copy the secret

### 2. Deploy the Worker

```bash
cd oauth-worker
npx wrangler login           # one-time browser OAuth
npx wrangler deploy          # publishes the Worker, prints the *.workers.dev URL
npx wrangler secret put GITHUB_CLIENT_ID      # paste Client ID  → Enter
npx wrangler secret put GITHUB_CLIENT_SECRET  # paste secret      → Enter
```

### 3. Update GitHub OAuth App callback

Go back to the OAuth App on GitHub and set **Authorization callback URL** to
the real Worker URL printed by `wrangler deploy`, with `/callback` appended.

### 4. Point Decap CMS at the Worker

Edit `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: yehaolin007/jade-voyage
  branch: main
  base_url: https://jade-voyage-oauth.<your-cf-subdomain>.workers.dev
  auth_endpoint: /auth
# local_backend: true      ← comment this out for production
```

Commit + push. Cloudflare Pages will rebuild the site within ~60s.

Open `https://jade-voyage.pages.dev/admin/` → click **Login with GitHub**.

## Endpoints

- `GET /` — health check
- `GET /auth` — redirects to GitHub authorize page
- `GET /callback` — exchanges `code` for `access_token`, postMessages it back to the opener
