/**
 * Central business + SEO facts for Asnapet Treasures.
 *
 * Components and structured data both read from here so contact details,
 * opening hours and copy never drift between the page and the JSON-LD.
 */

export const business = {
  name: 'Asnapet Treasures',
  legalName: 'Asnapet Treasures Ltd',
  tagline: 'Farm inputs & household essentials, supplied across Nairobi',
  description:
    'Asnapet Treasures is a registered Kenyan supplier of farm inputs, household essentials and practical daily goods, serving homes, farms, kiosks and small businesses across Nairobi with availability checks and direct WhatsApp support.',

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

  // Kahawa Wendani, Nairobi — used for geo meta tags and LocalBusiness schema.
  latitude: -1.1876,
  longitude: 36.9226,

  currency: 'KES',
  freeDeliveryThreshold: 'KSh 2,000',

  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday'], opens: '08:00', closes: '16:00' },
  ],

  /** Areas we actively supply — feeds both the footer and `areaServed` schema. */
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

  /**
   * Social profiles. Empty strings are filtered out of `sameAs` so the schema
   * never advertises a profile that does not exist yet.
   */
  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
  },
} as const;

/** Build a prefilled WhatsApp deep link. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waLinks = {
  catalog: whatsappLink('Hello Asnapet Treasures, I would like to request your catalog.'),
  household: whatsappLink('Hello Asnapet Treasures, I am interested in your Household Essentials catalog.'),
  fullCatalog: whatsappLink('Hello Asnapet Treasures, I would like the full product catalog.'),
  quote: whatsappLink('Hello Asnapet Treasures, I would like a quote. Here is my list:'),
};

/** Shared FAQ content — rendered on the page and emitted as FAQPage JSON-LD. */
export const faqs = [
  {
    question: 'Which areas do you deliver to in Nairobi?',
    answer:
      'We deliver across Nairobi, with fastest turnaround around Kahawa Wendani, Kahawa Sukari, Kasarani, Roysambu, Githurai, Ruiru and the wider Thika Road corridor. Deliveries outside these areas are arranged on request.',
  },
  {
    question: 'Is there a minimum order?',
    answer:
      'There is no minimum order for collection. For delivery, orders above KSh 2,000 are delivered free within our core Nairobi zones; smaller orders are delivered at a small fee confirmed before dispatch.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Send your list on WhatsApp or call us. We confirm what is currently in stock, share pricing, then agree on collection or delivery. There is no online checkout to work through, and nothing is charged until you confirm.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept M-Pesa and cash. A receipt is issued for every confirmed purchase, and bank transfer can be arranged for larger business or bulk orders.',
  },
  {
    question: 'Can you supply bulk orders for shops and offices?',
    answer:
      'Yes. We regularly supply kiosks, offices, schools and small retailers with mixed consumables and household lines. Send your list and we will quote based on current supplier pricing and quantity.',
  },
  {
    question: 'Are your products genuine?',
    answer:
      'We source through trusted manufacturers and established distributors rather than open-market resellers. If a specific brand matters for your order, tell us and we will confirm the exact brand available before you commit.',
  },
] as const;
