/**
 * Product categories, shared by the home page grid and the /products page,
 * so the two never fall out of sync.
 *
 * Images are imported (not referenced by URL) so `astro:assets` can emit
 * resized, modern-format variants with a srcset at build time. Nothing here
 * hotlinks a third party.
 */

import agriculture from '../assets/images/products-agriculture.jpg';
import household from '../assets/images/products-household.webp';
import bulkSupply from '../assets/images/products-bulk-supply.webp';
import cleaning from '../assets/images/products-cleaning.jpg';
import kitchenDining from '../assets/images/products-kitchen-dining.jpg';
import beddingBath from '../assets/images/products-bedding-bath.jpg';
import homeAppliances from '../assets/images/products-home-appliances.png';
import storage from '../assets/images/products-storage-organization.webp';
import personalCare from '../assets/images/products-personal-care.jpg';

export interface Category {
  title: string;
  eyebrow: string;
  description: string;
  /** Longer copy for the /products listing page. */
  detail: string;
  image: ImageMetadata;
  /** Descriptive alt text — not a duplicate of the title. */
  alt: string;
  href: string;
}

export const categories: Category[] = [
  {
    title: 'Farming & Agriculture',
    eyebrow: 'Seeds, feeds, tools',
    description: 'Farm inputs, sprayers, feeds and tools selected for small farms and local growers.',
    detail: 'Seeds, fertilizers, feeds, sprayers and practical tools for small and medium farms.',
    image: agriculture,
    alt: 'Farm inputs and hand tools laid out for small-scale growers',
    href: '/products',
  },
  {
    title: 'Household Essentials',
    eyebrow: 'Kitchen, cleaning, comfort',
    description: 'Kitchenware, cleaning items, storage and home basics for everyday Kenyan homes.',
    detail: 'Kitchenware, cleaning items, storage solutions and day-to-day home essentials.',
    image: household,
    alt: 'Everyday household essentials arranged on a kitchen counter',
    href: '/household',
  },
  {
    title: 'Shop & Bulk Supply',
    eyebrow: 'Retail, kiosks, offices',
    description: 'Useful consumables and mixed supplies for small businesses, offices and resellers.',
    detail: 'Bulk consumables and mixed supply lines for kiosks, offices and local resellers.',
    image: bulkSupply,
    alt: 'Stacked bulk supply cartons ready for shop and office resupply',
    href: '/products',
  },
  {
    title: 'Cleaning & Care',
    eyebrow: 'Laundry, home care',
    description: 'Cleaning equipment, detergents and practical household care products.',
    detail: 'Laundry detergents, cleaning equipment and practical household care products.',
    image: cleaning,
    alt: 'Detergents, brushes and cleaning equipment for household care',
    href: '/household',
  },
  {
    title: 'Kitchen & Dining',
    eyebrow: 'Cookware, utensils',
    description: 'Cookware, utensils and food storage items for the modern home.',
    detail: 'Cookware, utensils, serving pieces and food storage items for the modern home.',
    image: kitchenDining,
    alt: 'Cookware, utensils and dining pieces set out on a table',
    href: '/household',
  },
  {
    title: 'Bedding & Bath',
    eyebrow: 'Comfort basics',
    description: 'Bedsheets, towels and bathroom essentials selected for comfort and durability.',
    detail: 'Bedsheets, towels and bathroom essentials selected for comfort and durability.',
    image: beddingBath,
    alt: 'Folded bedsheets and towels stacked as bedding and bath basics',
    href: '/household',
  },
  {
    title: 'Home Appliances',
    eyebrow: 'Daily convenience',
    description: 'Electric kettles, blenders, irons and handy appliances for smoother home routines.',
    detail: 'Electric kettles, blenders, irons and handy appliances for smoother home routines.',
    image: homeAppliances,
    alt: 'Small home appliances including a kettle, blender and iron',
    href: '/household',
  },
  {
    title: 'Storage & Organization',
    eyebrow: 'Bins, baskets, shelves',
    description: 'Storage containers, organizers and space-saving items for tidier homes and shops.',
    detail: 'Storage containers, organizers and space-saving items for tidier homes and shops.',
    image: storage,
    alt: 'Storage bins and woven baskets used to organise a home',
    href: '/household',
  },
  {
    title: 'Personal Care',
    eyebrow: 'Everyday wellness',
    description: 'Bath, grooming and personal care basics for families, offices and small retailers.',
    detail: 'Bath, grooming and personal care basics for families, offices and small retailers.',
    image: personalCare,
    alt: 'Bath and grooming personal care products for family use',
    href: '/household',
  },
];

/** Category names for ItemList structured data. */
export const categoryNames = categories.map((c) => c.title);
