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
  images/      Site images
  styles/      Global and component CSS
src/
  components/  Reusable Astro components
  layout/      Shared page layout
  pages/       Astro routes
```

## Contact Links

The site uses WhatsApp and phone CTAs for catalog requests and customer inquiries.