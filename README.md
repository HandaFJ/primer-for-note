# Primer: an Astro theme for learning materials and digital products

A one-page theme built with Astro 7 only (no UI framework, no CSS library).

The bundled sample content is in Japanese (`lang: 'ja'`). Replace the text in `src/config.ts` to use any language.

Sections: **Hero → About → Strengths → List (with optional bundles) → CTA**

## Features
- All text, links, images, menu items and colors are set in one file: `src/config.ts`
- CSS-only full-screen menu (a few lines of JS close it on link click and Escape)
- Responsive, keyboard-friendly, skip link, visible focus, `prefers-reduced-motion` respected
- SEO basics: title, description, canonical, Open Graph / Twitter tags
- Works from a sub-path (e.g. GitHub Pages project sites) via the `base` setting
- Plain-CSS design tokens (`--color-primary`, `--color-accent`, ...)

## Requirements
Node.js 22.23.4 or later.

## Quick start
```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview  # serve the built site locally
```
> Open the built site with `npm run preview`, not by double-clicking `dist/index.html`:
> the built files use root-relative paths and need a web server.

## Deploy
### GitHub Pages
1. Push to a repository whose default branch is `main`.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push. `.github/workflows/deploy.yml` builds and publishes the site.

In GitHub Actions, `site` and `base` are derived from the repository
(`https://<owner>.github.io/<repo>/`). For a user site (`<owner>.github.io`)
or a custom domain, set the `BASE` / `SITE` environment variables in the
workflow, or edit `astro.config.mjs`.

### Other hosts (Netlify, Cloudflare Pages, Vercel, ...)
Build command `npm run build`, output directory `dist`. Set `site` in
`astro.config.mjs` to your production URL.

## Customize
| What | Where |
| --- | --- |
| Site name, language, description | `site` in `src/config.ts` |
| Colors and font | `theme` in `src/config.ts` |
| Menu | `nav` (match `href` to section ids) |
| Section content | `hero`, `about`, `strengths`, `list`, `cta` |
| Hide bundles | set `list.bundles.items` to `[]` |
| Images | replace files in `public/images/` |
| Layout and styling | `src/styles/global.css`, `src/styles/menu.css` |

Image paths in `config.ts` start with `/` and are resolved against `base`
by `src/utils/url.ts`, so keep that convention.

## Structure
```
.github/workflows/deploy.yml   # GitHub Pages deployment
src/
├─ config.ts                   # all content and settings
├─ layouts/BaseLayout.astro
├─ components/                 # Header, Hero, About, Strengths, ItemList, Cta, Footer
├─ pages/index.astro
├─ styles/                     # global.css, menu.css
└─ utils/url.ts                # base-aware URL helper
public/images/                 # placeholder SVGs
```

## License
MIT
