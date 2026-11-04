import { site } from '../config/site';

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') return site.url;
  return `${site.url}${normalized}`;
}

export function pageTitle(pageTitle: string): string {
  if (pageTitle.includes(site.name)) return pageTitle;
  return `${pageTitle} | ${site.name}`;
}

export function buildCanonical(path: string): string {
  return absoluteUrl(path === '' ? '/' : path);
}
