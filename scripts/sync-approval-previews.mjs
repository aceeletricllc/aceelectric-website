/**
 * Copies verified candidate files to _approval-preview-{slug}.jpg for review.
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const candidatesDir = join(root, 'public/images/services/thumbs/_candidates');
const thumbsDir = join(root, 'public/images/services/thumbs');
const pending = JSON.parse(
  readFileSync(join(root, 'src/data/service-thumb-pending-candidates.json'), 'utf8'),
);

mkdirSync(candidatesDir, { recursive: true });

let ok = 0;
for (const [slug, entry] of Object.entries(pending)) {
  const src = join(candidatesDir, entry.file);
  const dest = join(thumbsDir, `_approval-preview-${slug}.jpg`);
  if (!existsSync(src)) {
    console.error('MISSING', slug, entry.file);
    continue;
  }
  copyFileSync(src, dest);
  ok++;
  console.log('preview', slug);
}

console.log('Done:', ok, 'previews');
