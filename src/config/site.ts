import { business } from './business';

export const site = {
  url: 'https://aceelectric.llc',
  name: business.displayName,
  defaultTitle: `${business.displayName} | Licensed Electrical Services`,
  defaultDescription:
    'Professional residential and commercial electrical services. Panel upgrades, repairs, lighting, EV chargers, and more. Request a quote today.',
  defaultOgImage: '/images/brand/ace-electric-logo.png',
  twitterHandle: null as string | null,
  logo: {
    src: '/images/brand/ace-electric-logo.png',
    width: 1024,
    height: 466,
    alt: 'Ace Electric — New Mexico Zia symbol with Ace Electric lettering',
  },
} as const;

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerServiceLinks = [
  { label: 'Panel upgrades', href: '/services/electrical-panel-upgrades' },
  { label: 'EV charger installation', href: '/services/ev-charger-installation' },
  { label: 'Electrical repairs', href: '/services/electrical-repairs' },
  { label: 'Indoor lighting', href: '/services/indoor-lighting' },
  { label: 'Commercial electrical', href: '/services/commercial-electrical-services' },
] as const;

export const llmsCuratedPages = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'Request a quote', path: '/contact' },
  { title: 'About', path: '/about' },
  { title: 'Privacy policy', path: '/privacy' },
] as const;
