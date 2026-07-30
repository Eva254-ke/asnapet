/**
 * Central business + SEO facts for Asnapet Treasures.
 *
 * Components and structured data both read from here so contact details,
 * opening hours and copy never drift between the page and the JSON-LD.
 */

export const business = {
  name: 'Asnapet Treasures',
  legalName: 'Asnapet Treasures Ltd',
  tagline: 'Food and beverage supplies you can count on',
  description:
    'Asnapet Treasures supplies quality food, beverage and household essentials to retailers, hotels, restaurants, offices and families across Nairobi.',

  phone: '+254707429706',
  phoneDisplay: '+254 707 429706',
  whatsapp: '254707429706',
  email: 'info@asnapettreasures.co.ke',

  street: 'Kahawa Wendani',
  city: 'Nairobi',
  region: 'Nairobi County',
  postalCode: '00100',
  country: 'KE',
  countryName: 'Kenya',

  latitude: -1.1876,
  longitude: 36.9226,

  currency: 'KES',
  freeDeliveryThreshold: 'KSh 2,000',

  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday'], opens: '08:00', closes: '16:00' },
  ],

  areasServed: [
    'Nairobi',
    'Kahawa Wendani',
    'Kahawa Sukari',
    'Kasarani',
    'Ruiru',
    'Githurai',
    'Thika Road',
    'Roysambu',
  ],

  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
  },
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waLinks = {
  catalog: whatsappLink('Hello Asnapet Treasures, I would like to request your product catalog and price list.'),
  takeaway: whatsappLink('Hello Asnapet Treasures, I am interested in your food and beverage supply range.'),
  fullCatalog: whatsappLink('Hello Asnapet Treasures, I would like the full food and beverage catalog and price list.'),
  quote: whatsappLink('Hello Asnapet Treasures, I would like a quote. Here is what I need:'),
  branding: whatsappLink('Hello Asnapet Treasures, I would like a quote for wholesale supply.'),
  samples: whatsappLink('Hello Asnapet Treasures, I would like to confirm product availability before ordering.'),
};

export const faqs = [
  {
    question: 'Do you supply both retail and wholesale customers?',
    answer:
      'Yes. We serve supermarkets, shops, hotels, restaurants, offices and family buyers. Send the items and quantities you need and we will confirm availability and pricing.',
  },
  {
    question: 'What are your minimum order quantities?',
    answer:
      'Minimums depend on the product and whether the order is retail or wholesale. We confirm the exact quantity before you commit.',
  },
  {
    question: 'Are your food and beverage products safe?',
    answer:
      'We source through trusted supplier channels and focus on quality, sealed and properly handled products. Availability and brands may vary, so we confirm details when you enquire.',
  },
  {
    question: 'Which product categories do you handle?',
    answer:
      'Our main categories include drinks, juices, cereals, grains, dairy items, sauces, condiments, snacks and canned foods.',
  },
  {
    question: 'Can you source an item that is not listed?',
    answer:
      'Yes, where our supplier network can provide it. Send the product name, size, brand preference and quantity, and we will confirm if we can source it.',
  },
  {
    question: 'Do you deliver, and which areas do you cover?',
    answer:
      'We deliver across Nairobi, with fastest turnaround around Kahawa Wendani, Kahawa Sukari, Kasarani, Roysambu, Githurai, Ruiru and the wider Thika Road corridor. Deliveries outside these areas are arranged on request.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept M-Pesa and cash, and a receipt is issued for every confirmed purchase. Bank transfer can be arranged for larger or recurring business orders.',
  },
] as const;
