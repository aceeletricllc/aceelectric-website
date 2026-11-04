/** Card and detail copy: drop legacy "Example:" prefix and sentence-case the line. */
export function formatServiceExample(example: string): string {
  const text = example.replace(/^Example:\s*/i, '').trim();
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}
