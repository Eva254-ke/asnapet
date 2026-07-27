/**
 * Food & beverage packaging lines, shared by the home page grid and the
 * /products page so the two never fall out of sync.
 *
 * ── Adding the client's photos ──────────────────────────────────────────────
 * Lines without a photo fall back to a branded icon tile (see PackShot.astro),
 * so photos can be added one at a time. To add one:
 *
 *   1. Drop the file in `src/assets/images/` (ideally ~1600px wide).
 *   2. Import it at the top of this file.
 *   3. Set `image:` on that category and write a descriptive `alt:`.
 *
 * Astro then generates resized WebP variants with a srcset automatically, and
 * PackShot caps the requested widths at the file's own width so a small source
 * is never upscaled.
 *
 * Every line now carries a photo, so the icon tiles no longer appear on the
 * home grid or /products. The fallback stays wired up for any line added later.
 */

import takeawayContainers from '../assets/images/pack-takeaway-containers.jpg';
import cupsLidsStraws from '../assets/images/pack-cups-lids-straws.webp';
import bottlesJars from '../assets/images/pack-bottles-jars.webp';
import pouchesFilms from '../assets/images/pack-pouches-films.webp';
import paperBags from '../assets/images/pack-paper-bags.webp';
import bakeryCartons from '../assets/images/pack-bakery-cartons.webp';
import labelsBranding from '../assets/images/pack-labels-branding.webp';
import cutleryServiceware from '../assets/images/pack-cutlery-serviceware.webp';

export type PackIcon =
  | 'container'
  | 'cup'
  | 'bottle'
  | 'pouch'
  | 'bag'
  | 'carton'
  | 'label'
  | 'cutlery';

export interface Category {
  title: string;
  eyebrow: string;
  description: string;
  /** Longer copy for the /products listing page. */
  detail: string;
  /** Icon used when no photo has been supplied yet. */
  icon: PackIcon;
  /** Optional photo. Import it above, then set it here. */
  image?: ImageMetadata;
  /** Descriptive alt text. Required whenever `image` is set. */
  alt?: string;
  href: string;
}

export const categories: Category[] = [
  {
    title: 'Takeaway Containers',
    eyebrow: 'Clamshells, bowls, trays',
    description: 'Hinged clamshells, lunch boxes, bowls and sealable trays for takeaway and delivery.',
    detail:
      'Hinged clamshells, compartment lunch boxes, round bowls and sealable trays in plastic, bagasse and foil — sized for single meals through to family portions.',
    icon: 'container',
    image: takeawayContainers,
    alt: 'Stacked bagasse clamshell boxes, one open with a compartmented meal inside',
    href: '/takeaway-packaging',
  },
  {
    title: 'Cups, Lids & Straws',
    eyebrow: 'Hot and cold drinks',
    description: 'Paper and plastic cups with matching lids, sleeves and straws for hot and cold service.',
    detail:
      'Single and double-wall paper cups for hot drinks, clear PET cups for cold, plus matching flat and dome lids, insulating sleeves, stirrers and paper or wooden straws.',
    icon: 'cup',
    image: cupsLidsStraws,
    alt: 'Three logo-printed drink cups with dome and sip lids and a straw',
    href: '/products',
  },
  {
    title: 'Bottles, Jars & Caps',
    eyebrow: 'Juice, sauces, preserves',
    description: 'PET and glass bottles and jars with sealing caps for juices, sauces and preserves.',
    detail:
      'PET and glass bottles and jars in a range of capacities, with matching screw caps, tamper-evident seals and pouring inserts for juices, sauces, honey and preserves.',
    icon: 'bottle',
    image: bottlesJars,
    alt: 'Small glass jars of preserves with wooden spoons on a serving board',
    href: '/products',
  },
  {
    title: 'Pouches & Films',
    eyebrow: 'Sealing and wrapping',
    description: 'Stand-up pouches, vacuum bags, cling film and sealing rolls for packing and preserving.',
    detail:
      'Stand-up and zip-lock pouches, vacuum and boilable bags, cling film, aluminium foil and heat-sealing rolls for portioning, preserving and freezing.',
    icon: 'pouch',
    image: pouchesFilms,
    alt: 'Three frosted stand-up zip pouches holding juice, seeds and granola',
    href: '/products',
  },
  {
    title: 'Paper Bags & Carriers',
    eyebrow: 'Kraft, carriers, handles',
    description: 'Kraft paper bags, carrier bags and grease-resistant sleeves for counter service.',
    detail:
      'Flat and gusseted kraft bags, twisted and flat-handle carrier bags, grease-resistant sleeves and wraps for bakery counters, delis and takeaway service.',
    icon: 'bag',
    image: paperBags,
    alt: 'A plain kraft paper carrier bag with twisted paper handles',
    href: '/products',
  },
  {
    title: 'Bakery & Pizza Cartons',
    eyebrow: 'Boxes, inserts, trays',
    description: 'Cake boards, pastry boxes, pizza cartons and egg trays for bakeries and kitchens.',
    detail:
      'Corrugated pizza cartons, window pastry and cake boxes, cake boards and drums, cupcake inserts and moulded egg trays for bakeries and commercial kitchens.',
    icon: 'carton',
    image: bakeryCartons,
    alt: 'A decorated layer cake on a corrugated cake board, with a stack of spare boards behind',
    href: '/products',
  },
  {
    title: 'Labels & Custom Branding',
    eyebrow: 'Printed to your artwork',
    description: 'Printed labels, stickers and sleeves, plus custom-branded cups, bags and containers.',
    detail:
      'Product and ingredient labels, tamper seals, roll stickers and shrink sleeves, plus custom printing of your logo onto cups, paper bags, containers and cartons.',
    icon: 'label',
    image: labelsBranding,
    alt: 'Rolls of printed labels beside coffee bags, jars and tubs wearing the finished labels',
    href: '/products',
  },
  {
    title: 'Disposable Cutlery & Serviceware',
    eyebrow: 'Cutlery, napkins, gloves',
    description: 'Wooden and plastic cutlery, napkins, food gloves and counter serviceware.',
    detail:
      'Wooden and plastic cutlery sets, serviettes and napkins, food-handling gloves, portion cups, skewers and toothpicks for service counters and delivery orders.',
    icon: 'cutlery',
    image: cutleryServiceware,
    alt: 'Wooden sporks standing in a holder beside folded napkin wraps',
    href: '/products',
  },
];

/** Category names for ItemList structured data. */
export const categoryNames = categories.map((c) => c.title);
