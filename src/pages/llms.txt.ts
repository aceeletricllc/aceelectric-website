import type { APIRoute } from 'astro';
import { business } from '../config/business';
import { llmsCuratedPages, site } from '../config/site';
import { absoluteUrl } from '../utils/seo';

export const GET: APIRoute = () => {
  const links = llmsCuratedPages
    .map((page) => `- [${page.title}](${absoluteUrl(page.path)})`)
    .join('\n');

  const body = `# ${business.displayName}

> ${site.defaultDescription}

## Key pages

${links}

## Contact

Quote form: ${absoluteUrl('/contact')}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
