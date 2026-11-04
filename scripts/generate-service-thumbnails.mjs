/**
 * Generates one unique thumbnail per service slug under public/images/services/thumbs/
 */
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const outDir = join(root, 'public', 'images', 'services', 'thumbs');
mkdirSync(outDir, { recursive: true });

const slugs = [
  'emergency-electrical-services',
  'electrical-panel-upgrades',
  'electrical-code-violation-corrections',
  'ev-charger-installation',
  'electrical-repairs',
  'circuit-breaker-repair-and-replacement',
  'wiring-and-rewiring',
  'cloth-wiring-replacement',
  'fuse-box-upgrades',
  'gfci-outlet-installation',
  'electrical-inspections',
  'smoke-and-carbon-monoxide-detector-installation',
  'indoor-lighting',
  'outlets-and-switches',
  'aluminum-wiring-replacement',
  'dedicated-circuits',
  'ceiling-fan-installation',
  'led-lighting-upgrades',
  'outdoor-lighting',
  'landscape-lighting',
  'security-lighting',
  'commercial-electrical-services',
  'data-and-ethernet-wiring',
  'parking-lot-lighting',
  'smart-home-wiring',
  'fixture-and-chandelier-installation',
  'electrical-troubleshooting',
];

/** Slugs that use a real project photograph (each photo used once). */
const photoSources = {
  'circuit-breaker-repair-and-replacement': join(
    root,
    'public/images/gallery/panel-breaker-service.jpg',
  ),
  'commercial-electrical-services': join(
    root,
    'public/images/gallery/commercial-480v-disconnect.jpg',
  ),
  'gfci-outlet-installation': join(
    root,
    'public/images/gallery/mechanical-timer-service.jpg',
  ),
};

/** Unique SVG markup per slug (480×360, brand colors). */
const svgBySlug = {
  'emergency-electrical-services': svg('Emergency service', '#b22222', lightning()),
  'electrical-panel-upgrades': svg('Panel upgrade', '#1a1a1a', panelRows()),
  'electrical-code-violation-corrections': svg('Code corrections', '#8b1a1a', clipboard()),
  'ev-charger-installation': svg('EV charger', '#2d2d2d', evPlug()),
  'electrical-repairs': svg('Electrical repair', '#b22222', wrench()),
  'wiring-and-rewiring': svg('Wiring', '#1a1a1a', wireBundle()),
  'cloth-wiring-replacement': svg('Cloth wiring', '#5a3a2a', clothWire()),
  'fuse-box-upgrades': svg('Fuse box upgrade', '#333333', fuseBox()),
  'electrical-inspections': svg('Inspection', '#1a1a1a', magnifierOutlet()),
  'smoke-and-carbon-monoxide-detector-installation': svg('Detectors', '#444444', detector()),
  'indoor-lighting': svg('Indoor lighting', '#2a2a2a', ceilingLight()),
  'outlets-and-switches': svg('Outlets & switches', '#1a1a1a', duplexOutlet()),
  'aluminum-wiring-replacement': svg('Aluminum wiring', '#6a6a6a', wireAlert()),
  'dedicated-circuits': svg('Dedicated circuit', '#b22222', appliancePlug()),
  'ceiling-fan-installation': svg('Ceiling fan', '#2d2d2d', fanBlades()),
  'led-lighting-upgrades': svg('LED upgrade', '#e6b800', ledBulb()),
  'outdoor-lighting': svg('Outdoor lighting', '#1a1a1a', wallLantern()),
  'landscape-lighting': svg('Landscape lighting', '#1f3324', pathLight()),
  'security-lighting': svg('Security lighting', '#111111', floodLight()),
  'data-and-ethernet-wiring': svg('Data wiring', '#1a2332', ethernetJack()),
  'parking-lot-lighting': svg('Parking lot lighting', '#222222', poleLight()),
  'smart-home-wiring': svg('Smart home', '#2a2a2a', smartHome()),
  'fixture-and-chandelier-installation': svg('Fixtures', '#3d2b1f', chandelier()),
  'electrical-troubleshooting': svg('Troubleshooting', '#b22222', multimeter()),
};

function svg(label, accent, inner) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360" role="img">
  <title>${label}</title>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="${accent}"/>
    </linearGradient>
  </defs>
  <rect width="480" height="360" fill="url(#bg)"/>
  <rect x="24" y="24" width="432" height="312" rx="16" fill="rgb(255 255 255 / 6%)" stroke="#e6b800" stroke-width="3"/>
  <g transform="translate(240 165)" fill="none" stroke="#f5f5f5" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
    ${inner}
  </g>
  <text x="240" y="310" text-anchor="middle" fill="#ffffff" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="600">${label}</text>
</svg>`;
}

function lightning() {
  return `<path d="M20-70 L-5 5 H25 L0 80" stroke="#e6b800" fill="none"/>`;
}
function panelRows() {
  return `<rect x="-55" y="-55" width="110" height="110" rx="8" fill="rgb(255 255 255 / 10%)"/>
    <path d="M-35-30 H35 M-35 0 H35 M-35 30 H35" stroke="#e6b800"/>`;
}
function clipboard() {
  return `<rect x="-40" y="-50" width="80" height="100" rx="6" fill="rgb(255 255 255 / 12%)"/>
    <path d="M-15-60 H15 V-45 H-15 Z" fill="#e6b800" stroke="none"/>
    <path d="M-20 10 L-5 25 L25-15" stroke="#e6b800"/>`;
}
function evPlug() {
  return `<rect x="-35" y="-20" width="70" height="50" rx="10" fill="rgb(255 255 255 / 12%)"/>
    <circle cx="-12" cy="5" r="6" fill="#e6b800" stroke="none"/>
    <circle cx="12" cy="5" r="6" fill="#e6b800" stroke="none"/>
    <path d="M0-20 V-45" stroke="#e6b800"/>`;
}
function wrench() {
  return `<path d="M-45-10 Q-10-45 25-10 L45 10 Q10 45 -25 10 Z" fill="rgb(255 255 255 / 8%)"/>
    <circle cx="30" cy="-25" r="18" fill="none"/>`;
}
function wireBundle() {
  return `<path d="M-50 40 C-20-40 20-40 50 40 M-50 20 C-20-60 20-60 50 20 M-50 0 C-20-80 20-80 50 0" stroke="#e6b800"/>`;
}
function clothWire() {
  return `<path d="M-55 30 Q-25-50 5 30 T65 30" stroke="#c4a484" stroke-width="8"/>
    <path d="M-55 10 Q-25-70 5 10 T65 10" stroke="#f5f5f5" stroke-width="4" stroke-dasharray="8 8"/>`;
}
function fuseBox() {
  return `<rect x="-50" y="-45" width="100" height="90" rx="6" fill="rgb(255 255 255 / 10%)"/>
    <circle cx="-20" cy="0" r="12" stroke="#e6b800"/>
    <circle cx="20" cy="0" r="12" stroke="#e6b800"/>`;
}
function magnifierOutlet() {
  return `<circle cx="15" cy="-15" r="35" stroke="#e6b800"/>
    <path d="M40 10 L60 30"/>
    <rect x="-55" y="15" width="45" height="35" rx="4" fill="rgb(255 255 255 / 12%)" stroke="#f5f5f5"/>`;
}
function detector() {
  return `<circle cx="0" cy="0" r="45" fill="rgb(255 255 255 / 12%)"/>
    <circle cx="0" cy="0" r="18" fill="#e6b800" stroke="none"/>
    <path d="M-30 35 H30" stroke="#e6b800"/>`;
}
function ceilingLight() {
  return `<path d="M0-60 V-20" stroke="#e6b800"/>
    <ellipse cx="0" cy="15" rx="55" ry="25" fill="rgb(255 255 255 / 15%)"/>
    <path d="M-55 15 Q0 55 55 15" fill="rgb(230 184 0 / 35%)" stroke="none"/>`;
}
function duplexOutlet() {
  return `<rect x="-40" y="-35" width="80" height="70" rx="6" fill="rgb(255 255 255 / 12%)"/>
    <circle cx="-15" cy="-5" r="7" fill="#e6b800" stroke="none"/>
    <circle cx="15" cy="-5" r="7" fill="#e6b800" stroke="none"/>
    <rect x="-8" y="20" width="16" height="8" rx="2" fill="#e6b800" stroke="none"/>`;
}
function wireAlert() {
  return `<path d="M0-55 L45 40 H-45 Z" fill="rgb(178 34 34 / 35%)" stroke="#e6b800"/>
    <path d="M0-25 V5 M0 20 V25" stroke="#fff"/>`;
}
function appliancePlug() {
  return `<rect x="-30" y="-15" width="60" height="40" rx="6" fill="rgb(255 255 255 / 12%)"/>
    <path d="M-10-15 V-40 M10-15 V-40" stroke="#e6b800"/>
    <path d="M-50 25 H50" stroke="#f5f5f5"/>`;
}
function fanBlades() {
  return `<circle cx="0" cy="0" r="12" fill="#e6b800" stroke="none"/>
    <path d="M0-55 Q25-25 0 0 Q-25-25 0-55 M0 55 Q25 25 0 0 Q-25 25 0 55 M-55 0 Q-25 25 0 0 Q-25-25-55 0 M55 0 Q25-25 0 0 Q25 25 55 0" fill="rgb(255 255 255 / 20%)" stroke="#f5f5f5"/>`;
}
function ledBulb() {
  return `<path d="M-25 10 Q0-60 25 10" fill="rgb(230 184 0 / 45%)" stroke="#e6b800"/>
    <rect x="-18" y="10" width="36" height="35" rx="4" fill="rgb(255 255 255 / 15%)"/>`;
}
function wallLantern() {
  return `<rect x="-8" y="-50" width="16" height="30" fill="#e6b800" stroke="none"/>
    <path d="M-30 10 H30 V45 H-30 Z" fill="rgb(255 255 255 / 15%)" stroke="#f5f5f5"/>
    <path d="M0-20 V10" stroke="#e6b800"/>`;
}
function pathLight() {
  return `<path d="M0 50 V-10" stroke="#e6b800"/>
    <path d="M-25 50 Q0 10 25 50" fill="rgb(230 184 0 / 40%)" stroke="none"/>
    <ellipse cx="0" cy="-20" rx="22" ry="12" fill="rgb(255 255 255 / 18%)"/>`;
}
function floodLight() {
  return `<rect x="-15" y="-10" width="30" height="35" fill="rgb(255 255 255 / 15%)"/>
    <path d="M-45 25 L0-35 L45 25 Z" fill="rgb(230 184 0 / 25%)" stroke="#e6b800"/>`;
}
function ethernetJack() {
  return `<rect x="-45" y="-30" width="90" height="60" rx="8" fill="rgb(255 255 255 / 12%)"/>
    <rect x="-30" y="-10" width="60" height="25" rx="3" fill="#111" stroke="#e6b800"/>
    <path d="M-20 0 H20 M-20 10 H20" stroke="#e6b800" stroke-width="3"/>`;
}
function poleLight() {
  return `<path d="M0 60 V-50" stroke="#e6b800"/>
    <circle cx="0" cy="-55" r="18" fill="rgb(230 184 0 / 45%)" stroke="#fff"/>
    <ellipse cx="0" cy="60" rx="35" ry="8" fill="rgb(255 255 255 / 10%)"/>`;
}
function smartHome() {
  return `<path d="M-45 30 V-5 L0-45 L45-5 V30 Z" fill="rgb(255 255 255 / 12%)"/>
    <path d="M-55-55 Q0-85 55-55" stroke="#e6b800" fill="none"/>
    <circle cx="0" cy="-65" r="6" fill="#e6b800" stroke="none"/>`;
}
function chandelier() {
  return `<path d="M0-55 V-25" stroke="#e6b800"/>
    <path d="M-50 10 Q0-10 50 10" stroke="#f5f5f5"/>
    <path d="M-35 10 V35 M0 0 V35 M35 10 V35" stroke="#e6b800"/>
    <circle cx="-35" cy="40" r="8" fill="rgb(230 184 0 / 50%)" stroke="none"/>
    <circle cx="0" cy="40" r="8" fill="rgb(230 184 0 / 50%)" stroke="none"/>
    <circle cx="35" cy="40" r="8" fill="rgb(230 184 0 / 50%)" stroke="none"/>`;
}
function multimeter() {
  return `<rect x="-50" y="-35" width="100" height="70" rx="10" fill="rgb(255 255 255 / 12%)"/>
    <rect x="-30" y="-15" width="60" height="25" rx="4" fill="#111" stroke="#e6b800"/>
    <path d="M-50 35 L-70 55 M50 35 L70 55" stroke="#e6b800"/>`;
}

const meta = {};

for (const slug of slugs) {
  const photo = photoSources[slug];
  if (photo) {
    const dest = join(outDir, `${slug}.jpg`);
    copyFileSync(photo, dest);
    meta[slug] = { file: `${slug}.jpg`, width: 768, height: 1024, kind: 'photo' };
    continue;
  }

  const markup = svgBySlug[slug];
  if (!markup) {
    throw new Error(`Missing SVG for ${slug}`);
  }
  writeFileSync(join(outDir, `${slug}.svg`), markup, 'utf8');
  meta[slug] = { file: `${slug}.svg`, width: 480, height: 360, kind: 'svg' };
}

writeFileSync(join(root, 'src/data/service-thumbs-meta.json'), JSON.stringify(meta, null, 2));
console.log('Generated', Object.keys(meta).length, 'unique thumbnails');
