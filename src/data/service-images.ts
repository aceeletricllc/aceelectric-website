import type { ServiceRecord } from './services/types';
import { getServiceBySlug } from './services';
import meta from './service-thumbs-meta.json';

export interface ServiceThumb {
  src: string;
  alt: string;
  width: number;
  height: number;
}

type ThumbMeta = Record<string, { file: string; width: number; height: number; kind: string }>;

const thumbsMeta = meta as ThumbMeta;

const photoAlt: Record<string, string> = {
  'circuit-breaker-repair-and-replacement':
    'Electrician servicing a breaker panel during repair work',
  'commercial-electrical-services':
    'Commercial 480V transformer disconnect with safety labeling',
  'gfci-outlet-installation':
    'Mechanical timer and wiring at electrical control terminals',
};

export function getServiceThumbnail(slug: string, service?: ServiceRecord): ServiceThumb {
  const entry = thumbsMeta[slug];
  const record = service ?? getServiceBySlug(slug);
  const title = record?.title ?? slug;

  if (!entry) {
    return {
      src: `/images/services/thumbs/${slug}.svg`,
      alt: `Illustration for ${title}`,
      width: 480,
      height: 360,
    };
  }

  const alt =
    entry.kind === 'photo'
      ? (photoAlt[slug] ?? `Project photo related to ${title}`)
      : `Stylized illustration representing ${title}`;

  return {
    src: `/images/services/thumbs/${entry.file}`,
    alt,
    width: entry.width,
    height: entry.height,
  };
}
