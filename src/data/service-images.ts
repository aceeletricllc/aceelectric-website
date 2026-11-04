/** Local thumbnail paths for service cards and nav (480×360 sources). */
export interface ServiceThumb {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const thumbs = {
  panel: {
    src: '/images/services/thumbs/panel.jpg',
    alt: 'Electrician working at an electrical panel',
    width: 768,
    height: 1024,
  },
  emergency: {
    src: '/images/services/thumbs/emergency.jpg',
    alt: 'Electrician performing electrical repair work',
    width: 480,
    height: 360,
  },
  wiring: {
    src: '/images/services/thumbs/wiring.jpg',
    alt: 'Electrical wiring and cable installation',
    width: 480,
    height: 360,
  },
  ev: {
    src: '/images/services/thumbs/ev-charger.jpg',
    alt: 'Electric vehicle charging equipment',
    width: 480,
    height: 360,
  },
  lighting: {
    src: '/images/services/thumbs/lighting.jpg',
    alt: 'Modern indoor lighting installation',
    width: 480,
    height: 360,
  },
  outdoor: {
    src: '/images/services/thumbs/outdoor-light.jpg',
    alt: 'Outdoor security and landscape lighting',
    width: 480,
    height: 360,
  },
  commercial: {
    src: '/images/services/thumbs/commercial-site.jpg',
    alt: 'Commercial electrical disconnect equipment',
    width: 768,
    height: 1024,
  },
  commercialStock: {
    src: '/images/services/thumbs/commercial.jpg',
    alt: 'Commercial building electrical work',
    width: 480,
    height: 360,
  },
  inspection: {
    src: '/images/services/thumbs/inspection.jpg',
    alt: 'Electrical inspection and testing equipment',
    width: 480,
    height: 360,
  },
  controls: {
    src: '/images/services/thumbs/controls.jpg',
    alt: 'Mechanical timer and control wiring',
    width: 768,
    height: 1024,
  },
  smart: {
    src: '/images/services/thumbs/smart-home.jpg',
    alt: 'Smart home devices and connected controls',
    width: 480,
    height: 360,
  },
} satisfies Record<string, ServiceThumb>;

const slugToThumbKey: Record<string, keyof typeof thumbs> = {
  'emergency-electrical-services': 'emergency',
  'electrical-panel-upgrades': 'panel',
  'electrical-code-violation-corrections': 'inspection',
  'ev-charger-installation': 'ev',
  'electrical-repairs': 'emergency',
  'circuit-breaker-repair-and-replacement': 'panel',
  'wiring-and-rewiring': 'wiring',
  'cloth-wiring-replacement': 'wiring',
  'fuse-box-upgrades': 'panel',
  'gfci-outlet-installation': 'controls',
  'electrical-inspections': 'inspection',
  'smoke-and-carbon-monoxide-detector-installation': 'inspection',
  'indoor-lighting': 'lighting',
  'outlets-and-switches': 'controls',
  'aluminum-wiring-replacement': 'wiring',
  'dedicated-circuits': 'panel',
  'ceiling-fan-installation': 'lighting',
  'led-lighting-upgrades': 'lighting',
  'outdoor-lighting': 'outdoor',
  'landscape-lighting': 'outdoor',
  'security-lighting': 'outdoor',
  'commercial-electrical-services': 'commercial',
  'data-and-ethernet-wiring': 'commercialStock',
  'parking-lot-lighting': 'outdoor',
  'smart-home-wiring': 'smart',
  'fixture-and-chandelier-installation': 'lighting',
  'electrical-troubleshooting': 'inspection',
};

export function getServiceThumbnail(slug: string): ServiceThumb {
  const key = slugToThumbKey[slug] ?? 'emergency';
  return thumbs[key];
}
