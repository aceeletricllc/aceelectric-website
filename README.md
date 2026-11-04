# Ace Electric LLC website

Static marketing site for [Ace Electric LLC](https://aceelectric.llc), built with [Astro](https://astro.build) for fast, crawlable HTML and deployment on Cloudflare Pages.

## Requirements

- Node.js 22+ (see `package.json` engines)

## Install

```bash
npm install
```

## Local development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:4321`).

## Production build

```bash
npm run build
```

Output is written to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## Edit business information

Update [`src/config/business.ts`](src/config/business.ts). Fields that still contain `TODO:` are placeholders and are not treated as public claims in the UI or structured data.

Also review [`src/config/site.ts`](src/config/site.ts) for navigation and default SEO text.

## Services content

Service pages are generated from [`src/data/services/entries.json`](src/data/services/entries.json). Regenerate baseline entries with:

```bash
node scripts/generate-services.mjs
```

Adjust copy in `scripts/generate-services.mjs` or edit `entries.json` directly, then rebuild.

## Gallery images

1. Add photos under [`public/images/gallery/`](public/images/gallery/) (see [`public/images/gallery/README.md`](public/images/gallery/README.md)).
2. Update [`src/data/gallery.ts`](src/data/gallery.ts) with paths, dimensions, alt text, captions, and categories.
3. Run `npm run build`.

## Service card thumbnails (Pexels stock)

Each service uses a unique photo in `public/images/services/thumbs/{slug}.jpg`.

- Re-download all thumbnails: `node scripts/download-service-stock-photos.mjs`
- Photo credits: [`public/images/services/ATTRIBUTION.md`](public/images/services/ATTRIBUTION.md) (Pexels License)

## Formspree quote form

1. Create a form at [Formspree](https://formspree.io).
2. Set `formspreeEndpoint` in [`src/config/business.ts`](src/config/business.ts) to `https://formspree.io/f/YOUR_FORM_ID`.
3. Confirm `formspreeThankYouUrl` points to `https://aceelectric.llc/thank-you` (or your preview URL while testing).

## GitHub repository (manual, later)

1. Sign in to GitHub as `aceelectricllc`.
2. Create a new repository named `aceelectric-website`.
3. From this project folder:

```bash
git remote add origin git@github.com:aceelectricllc/aceelectric-website.git
git push -u origin main
```

## Cloudflare Pages (manual, later)

1. In Cloudflare Dashboard, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select `aceelectricllc/aceelectric-website`.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy, then add custom domain **aceelectric.llc** under the project’s **Custom domains** settings and follow DNS instructions.

## Project structure

- `src/pages/` — routes (home, services, gallery, contact, policies)
- `src/components/` — header, footer, forms, shared UI
- `src/layouts/` — base and service layouts
- `src/config/` — business and site configuration
- `src/data/` — services and gallery data
- `public/` — static assets (favicons, images, manifest)

## License

Proprietary — Ace Electric LLC.
