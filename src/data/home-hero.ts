export type HeroSlide = {
  src: string;
  alt: string;
};

/** Home hero carousel — replace files in public/images/home/hero-*.jpg as needed. */
export const homeHeroSlides: HeroSlide[] = [
  {
    src: '/images/home/hero-1.jpg',
    alt: 'Electrician installing a Level 2 EV charger on a home exterior wall',
  },
  {
    src: '/images/home/hero-2.jpg',
    alt: 'Open electrical panel and meter equipment mounted on a residential brick wall',
  },
  {
    src: '/images/home/hero-3.jpg',
    alt: 'Southwestern home at dusk with warm exterior lighting',
  },
];
