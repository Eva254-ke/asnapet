// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The production origin. Everything SEO-related derives from this single value:
// canonical URLs, Open Graph tags, sitemap.xml, robots.txt and JSON-LD.
// When the real domain is purchased, change this one line and rebuild.
const SITE = 'https://asnapettreasures.co.ke';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'never',

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/takeaway-packaging'),
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        // Home is the primary entry point; inner pages rank below it.
        // Compared without a trailing slash so it matches either form.
        const isHome = item.url.replace(/\/$/, '') === SITE;
        return { ...item, priority: isHome ? 1.0 : 0.8 };
      },
    }),
  ],

  build: {
    // Emit `/products.html` rather than `/products/index.html` so built URLs
    // stay extensionless and match `trailingSlash: 'never'`.
    format: 'file',
    inlineStylesheets: 'auto',
  },

  compressHTML: true,
});

