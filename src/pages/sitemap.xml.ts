import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

// Sitemap generado automáticamente: incluye la home, el índice del blog
// y cada artículo publicado (los borradores quedan fuera).
export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const urls = [
    { loc: `${site.url}/`, changefreq: 'monthly', priority: '1.0' },
    { loc: `${site.url}/blog/`, changefreq: 'weekly', priority: '0.8' },
    ...posts
      .sort((a, b) => b.data.date.localeCompare(a.data.date))
      .map((post) => ({
        loc: `${site.url}/blog/${post.slug}/`,
        lastmod: post.data.date,
        changefreq: 'yearly',
        priority: '0.7',
      })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) =>
    [
      '  <url>',
      `    <loc>${u.loc}</loc>`,
      'lastmod' in u ? `    <lastmod>${u.lastmod}</lastmod>` : null,
      `    <changefreq>${u.changefreq}</changefreq>`,
      `    <priority>${u.priority}</priority>`,
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n')
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
