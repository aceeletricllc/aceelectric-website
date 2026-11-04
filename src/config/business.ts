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

  primaryCity: 'TODO: add primary service city' as ConfigValue,
  primaryState: 'TODO: add primary service state' as ConfigValue,
  /** Comma-separated or list of neighborhoods/cities served */
  serviceAreas: [] as string[],

  businessHours: 'TODO: add business hours (e.g. Mon–Fri 8am–5pm)' as ConfigValue,
  licenseNumber: 'TODO: add electrical license number' as ConfigValue,
  /** e.g. "Fully insured" — only shown when not TODO */
  insuranceStatus: 'TODO: add insurance status wording' as ConfigValue,
  /** e.g. "24/7 emergency service available" — only when verified */
  emergencyServiceAvailability: 'TODO: confirm emergency service availability' as ConfigValue,
  yearsInBusiness: 'TODO: add years in business if you want it published' as ConfigValue,

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
