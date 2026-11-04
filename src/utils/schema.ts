import { business } from '../config/business';
import { site } from '../config/site';
import { isConfigured } from './config';
import { absoluteUrl } from './seo';
import type { ServiceRecord } from '../data/services';
import type { GalleryItem } from '../data/gallery';

type JsonLd = Record<string, unknown>;

function stripUndefined(obj: JsonLd): JsonLd {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined && v !== null),
  );
}

export function organizationJsonLd(): JsonLd {
  const sameAs = Object.values(business.socialProfiles).filter(isConfigured);
  return stripUndefined({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: business.displayName,
    url: site.url,
    email: isConfigured(business.email) ? business.email : undefined,
    telephone: isConfigured(business.phone) ? business.phone : undefined,
    sameAs: sameAs.length ? sameAs : undefined,
  });
}

export function webSiteJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    publisher: {
      '@type': 'Organization',
      name: business.displayName,
    },
  };
}

export function localBusinessJsonLd(): JsonLd | null {
  if (!isConfigured(business.displayName)) return null;

  const address =
    isConfigured(business.streetAddress) &&
    isConfigured(business.addressLocality) &&
    isConfigured(business.addressRegion) &&
    isConfigured(business.postalCode)
      ? {
          '@type': 'PostalAddress',
          streetAddress: business.streetAddress,
          addressLocality: business.addressLocality,
          addressRegion: business.addressRegion,
          postalCode: business.postalCode,
          addressCountry: 'US',
        }
      : undefined;

  return stripUndefined({
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: business.displayName,
    url: site.url,
    telephone: isConfigured(business.phone) ? business.phone : undefined,
    email: isConfigured(business.email) ? business.email : undefined,
    address,
    areaServed: business.serviceAreas.length
      ? business.serviceAreas.map((name) => ({ '@type': 'Place', name }))
      : undefined,
  });
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: ServiceRecord): JsonLd {
  return stripUndefined({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      '@type': 'Organization',
      name: business.displayName,
      url: site.url,
    },
    areaServed: business.serviceAreas.length
      ? business.serviceAreas.map((name) => ({ '@type': 'Place', name }))
      : undefined,
  });
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function galleryImageObjects(items: GalleryItem[]): JsonLd[] {
  return items.map((item) =>
    stripUndefined({
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      name: item.title,
      description: item.caption,
      contentUrl: absoluteUrl(item.src),
      width: item.width,
      height: item.height,
    }),
  );
}

export function graphJsonLd(...nodes: (JsonLd | JsonLd[] | null)[]): string {
  const flat = nodes.flatMap((n) => {
    if (n == null) return [];
    return Array.isArray(n) ? n : [n];
  });
  if (flat.length === 1) return JSON.stringify(flat[0]);
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': flat });
}
