# Asnapet Treasures

Astro website for Asnapet Treasures, a Nairobi-based supplier of household essentials, personal care goods, cleaning products, bedding, kitchen items, and agriculture-related products.

## Tech Stack

- Astro 7
- Static HTML/CSS
- Vanilla JavaScript for the mobile navigation

## Pages

- `/` - main landing page
- `/products` - product catalog overview
- `/household` - household essentials category page
- `/404` - not-found page (excluded from the sitemap, `noindex`)

## Before going live: set the domain

The production origin lives in **one place**, `astro.config.mjs`:

```js
const SITE = 'https://asnapettreasures.co.ke';
```

Canonical URLs, Open Graph tags, `sitemap-index.xml` and all JSON-LD derive from
it, so changing that line and rebuilding updates the whole site. The one file
that repeats the domain is `public/robots.txt` (static files cannot read config)
— update the `Sitemap:` line there to match.

After deploying:

1. Submit `https<your-domain>/sitemap-index.xml` in Google Search Console.
2. Check the pages in the [Rich Results Test](https://search.google.com/test/rich-results) — the
   home page should report `Store`, `FAQPage` and `ItemList`.
3. Create the Google Business Profile for Kahawa Wendani, and add the resulting
   social/profile URLs to `social` in `src/data/site.ts` so they appear in `sameAs`.

## Editing content

Business facts are centralised so page copy and structured data cannot drift:

- `src/data/site.ts` - contact details, address, geo coordinates, opening hours,
  service areas, WhatsApp message templates, and the FAQ questions (which are
  rendered on the page *and* emitted as `FAQPage` schema).
- `src/data/categories.ts` - the product categories shared by `/` and `/products`.

## Development

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npx astro dev --background
```

Manage the background dev server:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

Build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Project Structure

```text
public/
  images/          Site images (all served locally, no hotlinks)
  robots.txt       Crawl rules + sitemap reference
  site.webmanifest PWA manifest
src/
  components/      Reusable Astro components (incl. Seo.astro)
  data/            Business facts and product categories
  layout/          Shared page layout
  pages/           Astro routes
  styles/          CSS, imported by the layout so Astro bundles and minifies it
```

CSS lives in `src/styles/` rather than `public/` on purpose: importing it from
`Layout.astro` lets Astro bundle the seven files into one minified,
fingerprinted stylesheet instead of seven render-blocking requests.

## Contact Links

The site uses WhatsApp and phone CTAs for catalog requests and customer inquiries.