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
  { file: string; width: number; height: number; kind: string; pexelsId?: number; source?: string }
>;

const thumbsMeta = meta as ThumbMeta;

const photoAlt: Record<string, string> = {
  'emergency-electrical-services':
    'Open electrical panel with arc flash, sparks, and smoke illustrating an electrical emergency',
  'circuit-breaker-repair-and-replacement':
    'Electrician servicing an open breaker panel during repair work',
  'commercial-electrical-services':
    'Commercial electrical equipment including transformers, panels, and safety bollards in a facility',
  'gfci-outlet-installation':
    'GFCI outlet being wired into a blue electrical box with test and reset buttons visible',
  'electrical-repairs':
    'Electrician using a multimeter to test industrial electrical control wiring',
  'electrical-troubleshooting':
    'Electrician using a multimeter to test connections in an electrical panel',
  'electrical-panel-upgrades':
    'Open electrical panel showing organized breakers and color-coded branch circuit wiring',
  'ev-charger-installation':
    'Grizzl-E Level 2 EV charger mounted on a wall with charging handle in holster',
  'electrical-code-violation-corrections':
    'Electrician correcting branch circuit wiring inside a breaker panel',
  'wiring-and-rewiring':
    'Electrician using pliers to terminate wires at ceiling junction boxes during rewiring',
  'cloth-wiring-replacement':
    'Frayed cloth-insulated wires connected to breakers in an open electrical panel',
  'fuse-box-upgrades':
    'New residential load center with main breaker and Square D branch breakers for panel upgrade',
  'electrical-inspections':
    'Inspector in a safety vest using a flashlight and clipboard while examining an open breaker panel',
  'smoke-and-carbon-monoxide-detector-installation':
    'Ceiling-mounted combination smoke and carbon monoxide alarm with indicator light in smoky conditions',
  'indoor-lighting':
    'Vaulted living room with recessed can lights, ceiling fan, and fireplace lighting rough-in',
  'outlets-and-switches':
    'Recessed media box with duplex outlets, coax, and Ethernet jacks for TV wall installation',
  'aluminum-wiring-replacement':
    'Comparison of aluminum branch circuit wires and copper replacement conductors at an outlet box',
  'dedicated-circuits':
    'Wiring diagram showing a dedicated outlet box fed separately from a daisy-chained outlet run',
  'led-lighting-upgrades':
    'Open living and dining space with color-changing LED accent and pendant lighting',
  'landscape-lighting':
    'Residential front yard at dusk with path lights, uplights on stone and trees, and landscape accents',
  'outdoor-lighting':
    'Pair of illuminated carriage-style wall lanterns on exterior siding at dusk',
  'security-lighting':
    'Dual-head LED motion floodlight mounted above a garage door at dusk',
  'data-and-ethernet-wiring':
    'Technician terminating blue Ethernet cables on a patch panel in a server rack',
  'parking-lot-lighting':
    'Twin-head LED shoebox fixtures on a parking lot pole against a twilight sky',
  'ceiling-fan-installation':
    'Installer attaching the light kit globe to a Hunter ceiling fan mounted on a downrod',
  'fixture-and-chandelier-installation':
    'Two-tier black metal chandelier with candle-style bulbs hanging in a bright room',
  'smart-home-wiring':
    'Wall-mounted smart home control panel with climate, security, and device icons',
};

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

  const alt =
    photoAlt[slug] ??
    (entry.source === 'client-provided'
      ? `Project photo illustrating ${title}`
      : `Stock photo illustrating ${title}`);

  return {
    src: `/images/services/thumbs/${entry.file}`,
    alt,
    width: entry.width,
    height: entry.height,
  };
}
