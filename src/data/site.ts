/**
 * Central business + SEO facts for Asnapet Treasures.
 *
 * Components and structured data both read from here so contact details,
 * opening hours and copy never drift between the page and the JSON-LD.
 */

export const business = {
  name: 'Asnapet Treasures',
  legalName: 'Asnapet Treasures Ltd',
  tagline: 'Food & beverage packaging, supplied across Nairobi',
  description:
    'Asnapet Treasures is a registered Kenyan supplier of food and beverage packaging — takeaway containers, cups and lids, bottles, pouches, paper bags, bakery cartons and custom-branded packaging — serving restaurants, cafes, bakeries, delis and food processors across Nairobi.',

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
  catalog: whatsappLink('Hello Asnapet Treasures, I would like to request your packaging catalog and price list.'),
  takeaway: whatsappLink('Hello Asnapet Treasures, I am interested in your takeaway packaging range.'),
  fullCatalog: whatsappLink('Hello Asnapet Treasures, I would like the full packaging catalog and price list.'),
  quote: whatsappLink('Hello Asnapet Treasures, I would like a quote. Here is what I need:'),
  branding: whatsappLink('Hello Asnapet Treasures, I would like a quote for custom-branded packaging.'),
  samples: whatsappLink('Hello Asnapet Treasures, I would like to request samples before ordering.'),
};

/**
 * Shared FAQ content — rendered on the page and emitted as FAQPage JSON-LD.
 *
 * NOTE: these answers deliberately avoid stating specific minimum order
 * quantities, lead times or unit prices, because those are commercial terms
 * only the business can confirm. Because this content is emitted as FAQPage
 * structured data, an invented figure here would surface as a factual claim in
 * Google results. Replace the "confirmed when you enquire" phrasing with real
 * numbers once they are settled.
 */
export const faqs = [
  {
    question: 'Do you supply custom-branded packaging?',
    answer:
      'Yes. We supply printed and branded packaging — cups, containers, paper bags, labels and sleeves — using your own artwork or logo. Send us the design along with the item and quantity you need, and we will confirm the print options, minimum quantity and lead time before anything is committed.',
  },
  {
    question: 'What are your minimum order quantities?',
    answer:
      'Stock lines can be bought in small quantities, including single packs for collection. Custom-printed packaging carries a minimum quantity that depends on the item and the print method, so we confirm it against your specific order rather than quoting a blanket figure.',
  },
  {
    question: 'Is your packaging food-grade and safe for hot food?',
    answer:
      'We source food-contact packaging through established manufacturers and distributors. Heat tolerance varies by item — a paper cup, a bagasse clamshell and a PET container behave very differently with hot or oily food. Tell us what you are packing and we will confirm the correct grade for that use.',
  },
  {
    question: 'Do you stock biodegradable or eco-friendly packaging?',
    answer:
      'Yes, where it is available for the item you need. Kraft paper bags and boxes, bagasse containers and wooden cutlery are the most commonly requested alternatives to plastic. We will tell you honestly which lines have a genuine eco option and which do not.',
  },
  {
    question: 'Can I get samples before placing a large order?',
    answer:
      'Yes. For most stock lines we can provide samples so you can check size, sturdiness and fit with your own food before committing to volume. Ask for samples when you send your enquiry.',
  },
  {
    question: 'Do you deliver, and which areas do you cover?',
    answer:
      'We deliver across Nairobi, with fastest turnaround around Kahawa Wendani, Kahawa Sukari, Kasarani, Roysambu, Githurai, Ruiru and the wider Thika Road corridor. Deliveries outside these areas are arranged on request. Orders above KSh 2,000 are delivered free within our core Nairobi zones.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept M-Pesa and cash, and a receipt is issued for every confirmed purchase. Bank transfer can be arranged for larger or recurring business orders.',
  },
] as const;
