/**
 * Merges per-service copy into entries.json (keeps relatedSlugs and titles).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { contentBySlug } from './service-unique-content.mjs';

const root = join(import.meta.dirname, '..');
const path = join(root, 'src/data/services/entries.json');
const entries = JSON.parse(readFileSync(path, 'utf8'));

const updated = entries.map((entry) => {
  const patch = contentBySlug[entry.slug];
  if (!patch) {
    throw new Error(`Missing unique copy for ${entry.slug}`);
  }
  return { ...entry, ...patch };
});

writeFileSync(path, `${JSON.stringify(updated, null, 2)}\n`);
console.log('Updated', updated.length, 'service entries');
