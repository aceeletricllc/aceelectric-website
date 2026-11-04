import type { ServiceRecord } from './types';
import entries from './entries.json';

export type { ServiceRecord, ServiceFaq } from './types';

const services = entries as ServiceRecord[];

export function getAllServices(): ServiceRecord[] {
  return services;
}

export function getServiceBySlug(slug: string): ServiceRecord | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: ServiceRecord): ServiceRecord[] {
  return service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceRecord => Boolean(s));
}
