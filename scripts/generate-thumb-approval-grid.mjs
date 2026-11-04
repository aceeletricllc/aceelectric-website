/**
 * Generates public/thumb-approval/index.html for batch thumbnail review.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const entries = JSON.parse(readFileSync(join(root, 'src/data/services/entries.json'), 'utf8'));
const meta = JSON.parse(readFileSync(join(root, 'src/data/service-thumbs-meta.json'), 'utf8'));
const pending = JSON.parse(
  readFileSync(join(root, 'src/data/service-thumb-pending-candidates.json'), 'utf8'),
);

const approved = new Set(
  Object.entries(meta)
    .filter(([, v]) => v.source === 'client-provided' || v.source === 'approved-stock')
    .map(([slug]) => slug),
);

function titleFor(slug) {
  return entries.find((e) => e.slug === slug)?.title ?? slug;
}

function card(slug, mode) {
  const current = meta[slug];
  const currentSrc = current
    ? `/images/services/thumbs/${current.file}`
    : `/images/services/thumbs/${slug}.jpg`;
  const previewSrc = `/images/services/thumbs/_approval-preview-${slug}.jpg`;
  const cand = pending[slug];
  const note = cand?.note ? `<p class="note">${escapeHtml(cand.note)}</p>` : '';
  const credit = cand
    ? `<p class="credit"><a href="${escapeHtml(cand.creditUrl)}" rel="noopener noreferrer">${escapeHtml(cand.credit)}</a> (${escapeHtml(cand.provider)})</p>`
    : '';

  if (mode === 'approved') {
    return `<article class="card card--done">
  <h2>${escapeHtml(titleFor(slug))}</h2>
  <p class="slug">${escapeHtml(slug)}</p>
  <figure><img src="${currentSrc}" alt="Approved thumbnail for ${escapeHtml(titleFor(slug))}" width="800" height="600" loading="lazy" /></figure>
</article>`;
  }

  return `<article class="card">
  <h2>${escapeHtml(titleFor(slug))}</h2>
  <p class="slug">${escapeHtml(slug)}</p>
  <div class="pair">
    <figure>
      <figcaption>Current (wrong stock)</figcaption>
      <img src="${currentSrc}" alt="Current thumbnail for ${escapeHtml(titleFor(slug))}" width="800" height="600" loading="lazy" />
    </figure>
    <figure>
      <figcaption>Proposed preview</figcaption>
      <img src="${previewSrc}" alt="Proposed preview for ${escapeHtml(titleFor(slug))}" width="800" height="600" loading="lazy" />
    </figure>
  </div>
  ${credit}${note}
</article>`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const approvedSlugs = entries.map((e) => e.slug).filter((s) => approved.has(s));
const pendingSlugs = entries.map((e) => e.slug).filter((s) => pending[s]);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Service thumbnail approval grid | Ace Electric</title>
  <style>
    :root {
      color-scheme: light dark;
      --bg: #0f0f10;
      --surface: #1a1a1d;
      --text: #f4f4f5;
      --muted: #a1a1aa;
      --accent: #b22222;
      --border: #3f3f46;
      --focus: #fbbf24;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.5;
    }
    main { max-width: 120rem; margin: 0 auto; padding: 1.5rem; }
    h1 { font-size: 1.75rem; margin-bottom: 0.25rem; }
    .lede { color: var(--muted); max-width: 70ch; margin-bottom: 2rem; }
    h2.section { margin: 2.5rem 0 1rem; font-size: 1.25rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
      gap: 1.25rem;
    }
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .card--done { border-color: #166534; }
    .card h2 { font-size: 1rem; margin: 0 0 0.25rem; }
    .slug { font-size: 0.8rem; color: var(--muted); margin: 0 0 0.75rem; word-break: break-all; }
    .pair { display: grid; gap: 0.75rem; }
    figcaption { font-size: 0.75rem; color: var(--muted); margin-bottom: 0.35rem; }
    img {
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      border-radius: 0.25rem;
      background: #000;
    }
    .credit, .note { font-size: 0.8rem; margin: 0.75rem 0 0; }
    .note { color: #fcd34d; }
    a { color: #fca5a5; }
    a:focus-visible { outline: 3px solid var(--focus); outline-offset: 2px; }
  </style>
</head>
<body>
  <main>
    <h1>Service thumbnail approval</h1>
    <p class="lede">Review proposed previews before they go live. Reply in chat with slug lists: <strong>approve all</strong>, <strong>approve: slug1, slug2</strong>, or <strong>deny: slug</strong> plus optional replacement photos. Pexels bulk IDs were unreliable; pending previews use verified Unsplash, Wikimedia, or your gallery where noted.</p>
    <h2 class="section">Done (${approvedSlugs.length})</h2>
    <div class="grid">${approvedSlugs.map((s) => card(s, 'approved')).join('\n')}</div>
    <h2 class="section">Pending review (${pendingSlugs.length})</h2>
    <div class="grid">${pendingSlugs.map((s) => card(s, 'pending')).join('\n')}</div>
  </main>
</body>
</html>
`;

const outDir = join(root, 'public/thumb-approval');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'index.html'), html);
console.log('Wrote public/thumb-approval/index.html');
