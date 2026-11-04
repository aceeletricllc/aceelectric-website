/**
 * Download unique Pexels stock photos (640×480 crop) for each service slug.
 * License: https://www.pexels.com/license/
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const outDir = join(root, 'public', 'images', 'services', 'thumbs');

/** slug -> Pexels photo ID (each ID used once). */
const slugToPexelsId = {
  'emergency-electrical-services': 5691502,
  'electrical-panel-upgrades': 257736,
  'electrical-code-violation-corrections': 4108710,
  'ev-charger-installation': 33751729,
  'electrical-repairs': 14319099,
  'circuit-breaker-repair-and-replacement': 34054464,
  'wiring-and-rewiring': 38171148,
  'cloth-wiring-replacement': 4391482,
  'fuse-box-upgrades': 1024313,
  'gfci-outlet-installation': 6968382,
  'electrical-inspections': 1181243,
  'smoke-and-carbon-monoxide-detector-installation': 10967135,
  'indoor-lighting': 305821,
  'outlets-and-switches': 6466147,
  'aluminum-wiring-replacement': 534216,
  'dedicated-circuits': 280221,
  'ceiling-fan-installation': 8488187,
  'led-lighting-upgrades': 577514,
  'outdoor-lighting': 1793030,
  'landscape-lighting': 265124,
  'security-lighting': 2085998,
  'commercial-electrical-services': 356040,
  'data-and-ethernet-wiring': 821738,
  'parking-lot-lighting': 1036654,
  'smart-home-wiring': 8960464,
  'fixture-and-chandelier-installation': 271816,
  'electrical-troubleshooting': 19059594,
};

const attribution = [];

function pexelsUrl(id) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=640&h=480&fit=crop`;
}

async function download(slug, id) {
  const url = pexelsUrl(id);
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${slug} (${id})`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) {
    throw new Error(`File too small for ${slug} (${buf.length} bytes)`);
  }
  const dest = join(outDir, `${slug}.jpg`);
  writeFileSync(dest, buf);
  attribution.push({
    slug,
    pexelsId: id,
    page: `https://www.pexels.com/photo/${id}/`,
  });
  return { width: 640, height: 480 };
}

const meta = {};

for (const [slug, id] of Object.entries(slugToPexelsId)) {
  const dims = await download(slug, id);
  meta[slug] = { file: `${slug}.jpg`, width: dims.width, height: dims.height, kind: 'photo', pexelsId: id };
  console.log('OK', slug, id);
}

writeFileSync(join(root, 'src/data/service-thumbs-meta.json'), JSON.stringify(meta, null, 2));

const attrMd = `# Service thumbnail photo credits

Photos from [Pexels](https://www.pexels.com/) (Pexels License — free for commercial use).

| Service slug | Pexels |
| --- | --- |
${attribution.map((a) => `| ${a.slug} | [Photo ${a.pexelsId}](${a.page}) |`).join('\n')}
`;

writeFileSync(join(root, 'public/images/services/ATTRIBUTION.md'), attrMd);
console.log('Done:', Object.keys(meta).length, 'photos');
