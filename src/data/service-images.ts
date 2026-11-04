import type { ServiceRecord } from './services/types';
import { getServiceBySlug } from './services';
import meta from './service-thumbs-meta.json';

export interface ServiceThumb {
  src: string;
  alt: string;
  width: number;
  height: number;
}

type ThumbMeta = Record<
  string,
  { file: string; width: number; height: number; kind: string; pexelsId?: number }
>;

const thumbsMeta = meta as ThumbMeta;

export function getServiceThumbnail(slug: string, service?: ServiceRecord): ServiceThumb {
  const entry = thumbsMeta[slug];
  const record = service ?? getServiceBySlug(slug);
  const title = record?.title ?? slug;

  if (!entry) {
    return {
      src: `/images/services/thumbs/${slug}.jpg`,
      alt: `Photo representing ${title}`,
      width: 640,
      height: 480,
    };
  }

  return {
    src: `/images/services/thumbs/${entry.file}`,
    alt: `Stock photo illustrating ${title}`,
    width: entry.width,
    height: entry.height,
  };
}
