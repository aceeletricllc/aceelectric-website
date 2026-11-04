export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  alt: string;
  src: string;
  width: number;
  height: number;
  category: GalleryCategory;
}

export type GalleryCategory =
  | 'all'
  | 'residential'
  | 'commercial'
  | 'lighting'
  | 'panels'
  | 'ev-charging';

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'lighting', label: 'Lighting' },
  { id: 'panels', label: 'Panels' },
  { id: 'ev-charging', label: 'EV charging' },
];

/** Project photos live in public/images/gallery/ — see README in that folder. */
export const galleryItems: GalleryItem[] = [
  {
    id: 'panel-breaker-service',
    title: 'Panel and breaker service',
    caption:
      'Breaker replacement and panel work with organized grounding and branch circuits.',
    alt: 'Electrician servicing an open breaker panel, holding a removed 15-amp breaker',
    src: '/images/gallery/panel-breaker-service.jpg',
    width: 768,
    height: 1024,
    category: 'panels',
  },
  {
    id: 'commercial-480v-disconnect',
    title: 'Commercial 480V disconnect',
    caption:
      'Outdoor commercial service equipment including a labeled 480V transformer disconnect.',
    alt: '480V transformer disconnect with Square D safety labeling and emergency disconnect sign',
    src: '/images/gallery/commercial-480v-disconnect.jpg',
    width: 768,
    height: 1024,
    category: 'commercial',
  },
  {
    id: 'mechanical-timer-service',
    title: 'Mechanical timer service',
    caption: 'Mechanical timer inspection and wiring at terminal connections.',
    alt: 'Open mechanical timer enclosure showing yellow 24-hour dial and wire terminations',
    src: '/images/gallery/mechanical-timer-service.jpg',
    width: 768,
    height: 1024,
    category: 'residential',
  },
];
