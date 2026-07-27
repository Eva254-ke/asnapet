# Asnapet Treasures

Astro website for Asnapet Treasures, a Nairobi-based supplier of food and beverage packaging: takeaway containers, cups and lids, bottles and jars, pouches and films, paper bags, bakery cartons, labels and disposable cutlery — supplied plain or printed with the customer's branding.

## Tech Stack

- Astro 7
- Static HTML/CSS
- Vanilla JavaScript for the mobile navigation

## Pages

- `/` - main landing page
- `/products` - full packaging catalog overview
- `/takeaway-packaging` - takeaway range deep-dive page
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
- `src/data/categories.ts` - the packaging categories shared by `/` and `/products`.

## Adding the client's photos

The site currently ships with **no product photography**. Rather than showing
unrelated stock images, every photo slot falls back to a branded icon tile
(`src/components/PackShot.astro`), so nothing on the page misrepresents what is
being sold.

To add a real photo:

1. Drop the file in `src/assets/images/` (ideally ~1600px wide).
2. Import it in the relevant file and set `image:` plus a descriptive `alt:`.

Astro generates resized WebP variants with a `srcset` automatically. Lines
without a photo keep their icon tile, so photos can be added one at a time.

| Slot | File to edit |
| --- | --- |
| The 8 packaging categories | `src/data/categories.ts` |
| Takeaway sub-lines | `src/pages/takeaway-packaging.astro` |
| Hero background | `src/components/Hero.astro` (uncomment the marked block) |
| About section | `src/components/About.astro` (uncomment the marked block) |
| Social share card | replace `public/og-image.jpg` (must be 1200x630) |

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