/**
 * Food and beverage supply categories shared by the home page and /products page
 * so the two never fall out of sync.
 */

import drinks from '../assets/images/sheddys-soda-can.jpg';
import juices from '../assets/images/sheddys-juice.jpg';
import grains from '../assets/images/sheddys-healthy-bowls.jpg';
import dairy from '../assets/images/sheddys-milk.jpg';
import sauces from '../assets/images/sheddys-hero-pasta.jpg';
import snacks from '../assets/images/sheddys-snacks.jpg';
import canned from '../assets/images/sheddys-hero-pasta.jpg';

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
  detail: string;
  icon: PackIcon;
  image?: ImageMetadata;
  alt?: string;
  href: string;
}

export const categories: Category[] = [
  {
    title: 'Energy Drinks',
    eyebrow: 'Food & beverage',
    description: 'Supplying leading local and international energy drink brands.',
    detail: 'Supplying leading local and international energy drink brands.',
    icon: 'bottle',
    image: drinks,
    alt: 'A soda can splashing through dark liquid',
    href: '/products',
  },
  {
    title: 'Fruit Juices & Soft Drinks',
    eyebrow: 'Food & beverage',
    description: 'Refreshing, flavorful, and perfect for all occasions.',
    detail: 'Refreshing, flavorful, and perfect for all occasions.',
    icon: 'cup',
    image: juices,
    alt: 'Glass pitchers of grapefruit juice with citrus slices',
    href: '/products',
  },
  {
    title: 'Cereals, Dried Foods & Grains',
    eyebrow: 'Food & beverage',
    description: 'Including rice, maize flour, wheat flour, oats, beans, and other essentials.',
    detail: 'Including rice, maize flour, wheat flour, oats, beans, and other essentials.',
    icon: 'bag',
    image: grains,
    alt: 'Prepared grain and dried food bowls',
    href: '/products',
  },
  {
    title: 'Milk & Dairy Products',
    eyebrow: 'Food & beverage',
    description: 'Fresh and long-life milk, yogurt, butter, cheese, and other dairy items.',
    detail: 'Fresh and long-life milk, yogurt, butter, cheese, and other dairy items.',
    icon: 'carton',
    image: dairy,
    alt: 'Classic glass bottle of milk',
    href: '/products',
  },
  {
    title: 'Sauces & Condiments',
    eyebrow: 'Food & beverage',
    description: 'Tomato paste, ketchup, mayonnaise, salad dressings, spices, and cooking sauces.',
    detail: 'Tomato paste, ketchup, mayonnaise, salad dressings, spices, and cooking sauces.',
    icon: 'bottle',
    image: sauces,
    alt: 'Spiral pasta with different seasonings on a grey desk',
    href: '/products',
  },
  {
    title: 'Snacks',
    eyebrow: 'Food & beverage',
    description: 'Crisps, biscuits, chocolates, nuts, and dried fruits.',
    detail: 'Crisps, biscuits, chocolates, nuts, and dried fruits.',
    icon: 'pouch',
    image: snacks,
    alt: 'Assortment of packaged snacks',
    href: '/products',
  },
  {
    title: 'Canned Foods',
    eyebrow: 'Food & beverage',
    description: 'Beans, vegetables, fruits, fish, meat, and soups with long shelf life.',
    detail: 'Beans, vegetables, fruits, fish, meat, and soups with long shelf life.',
    icon: 'container',
    image: canned,
    alt: 'Spiral pasta and pantry staples on a grey desk',
    href: '/products',
  },
];

export const homeCategories = categories.filter((category) => category.title !== 'Canned Foods');
export const categoryNames = categories.map((c) => c.title);
