import { defineConfig } from 'astro/config';

// GitHub Pages: when built in GitHub Actions, `site` and `base` are derived
// from the repository (https://<owner>.github.io/<repo>/).
// Override with the SITE / BASE environment variables if needed,
// e.g. for a user site (<owner>.github.io) set BASE=/.
// Everywhere else (local dev, Netlify, Cloudflare Pages, ...) the defaults
// below apply: edit `site` to your production URL.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');

export default defineConfig({
  site: process.env.SITE ?? (owner ? `https://${owner}.github.io` : 'https://example.com'),
  base: process.env.BASE ?? (repo ? `/${repo}` : '/'),
});
