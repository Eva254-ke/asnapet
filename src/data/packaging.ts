/**
 * Food service packaging lines and desk contacts, shared by the home page and
 * /products so the two never fall out of sync. Mirrors the shape of
 * categories.ts, including the PackIcon fallback used when a photo is missing.
 */

import takeawayContainers from '../assets/images/pack-takeaway-containers.jpg';
import cupsLidsStraws from '../assets/images/pack-cups-lids-straws.webp';
import paperBags from '../assets/images/pack-paper-bags.webp';
import pouchesFilms from '../assets/images/pack-pouches-films.webp';

import type { PackIcon } from './categories';

export interface PackagingSolution {
  title: string;
  detail: string;
  icon: PackIcon;
  image?: ImageMetadata;
  alt?: string;
  /**
   * Optional `object-position` for the card photo. The cards crop every source
   * to 1.35/1, so a portrait shot whose subject sits high needs nudging or the
   * crop cuts the top off. Omit to centre.
   */
  focus?: string;
}

export const packagingSolutions: PackagingSolution[] = [
  {
    title: 'Takeaway containers',
    detail: 'Hinged clamshells and compartment trays for hot meals, in single and family sizes.',
    icon: 'container',
    image: takeawayContainers,
    alt: 'Stacks of moulded fibre takeaway clamshell containers, one holding a packed meal',
  },
  {
    title: 'Cups, lids and straws',
    detail: 'Hot and cold drink cups with matching lids, domes and straws.',
    icon: 'cup',
    image: cupsLidsStraws,
    alt: 'Branded hot and cold drink cups with lids and a straw',
    focus: '50% 35%',
  },
  {
    title: 'Paper bags and bakery cartons',
    detail: 'Kraft carrier bags and bakery cartons for counter service and deliveries.',
    icon: 'bag',
    image: paperBags,
    alt: 'Brown kraft paper carrier bag with twisted handles',
  },
  {
    title: 'Pouches, films and branded labels',
    detail: 'Stand-up pouches, sealing films and printed labels for your own branding.',
    icon: 'pouch',
    image: pouchesFilms,
    alt: 'Three clear stand-up pouches filled with juice, grains and dried fruit',
  },
];

export const employeeContacts = [
  { name: 'Riley Kamau', role: 'Catalog support' },
  { name: 'Morgan Wanjiku', role: 'Wholesale orders' },
  { name: 'Alex Otieno', role: 'Packaging enquiries' },
];
