/**
 * Central business configuration for Ace Electric LLC.
 * Replace TODO values before publishing claims on the live site.
 */

export type ConfigValue = string | null;

export const business = {
  legalName: 'Ace Electric LLC' as const,
  /** Shown in header, titles, and schema when set */
  displayName: 'Ace Electric LLC' as const,

  phone: '(505) 388-6402' as ConfigValue,
  smsNumber: '(505) 388-6402' as ConfigValue,
  email: 'adam@aceelectric.llc' as ConfigValue,

  streetAddress: 'TODO: add street address if publicly displayed' as ConfigValue,
  addressLocality: 'TODO: add city' as ConfigValue,
  addressRegion: 'TODO: add state abbreviation' as ConfigValue,
  postalCode: 'TODO: add ZIP' as ConfigValue,

  primaryCity: 'Albuquerque' as ConfigValue,
  primaryState: 'New Mexico' as ConfigValue,
  /** Comma-separated or list of neighborhoods/cities served */
  serviceAreas: [
    'Albuquerque',
    'Rio Rancho',
    'Santa Fe',
    'Los Lunas',
    'Belen',
    'Surrounding communities across the Southwest',
  ],

  businessHours: 'TODO: add business hours (e.g. Mon–Fri 8am–5pm)' as ConfigValue,
  licenseNumber: '404693' as ConfigValue,
  insuranceStatus: 'Insured and bonded' as ConfigValue,
  /** e.g. "24/7 emergency service available" — only when verified */
  emergencyServiceAvailability: 'TODO: confirm emergency service availability' as ConfigValue,
  yearsInBusiness: '24+' as ConfigValue,

  socialProfiles: {
    facebook: 'TODO: add Facebook URL' as ConfigValue,
    instagram: 'TODO: add Instagram URL' as ConfigValue,
    linkedin: 'TODO: add LinkedIn URL' as ConfigValue,
    googleBusiness: 'TODO: add Google Business Profile URL' as ConfigValue,
  },

  formspreeEndpoint: 'https://formspree.io/f/moeerljd',
  /** Absolute URL for Formspree redirect after successful submit */
  formspreeThankYouUrl: 'https://aceelectric.llc/thank-you',
} as const;

export type BusinessConfig = typeof business;
