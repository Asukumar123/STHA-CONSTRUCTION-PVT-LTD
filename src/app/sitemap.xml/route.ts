import { projects } from '../../../Data/Projects';

const baseUrl = 'https://stha.cloud';

export async function GET() {
  const formatDate = (date: Date) =>
    date.toISOString().split('T')[0]; // Simple YYYY-MM-DD format

  const lastmod = formatDate(new Date());

  const staticPages = [
    { 
      loc: `${baseUrl}/`, 
      lastmod,
      changefreq: 'weekly', 
      priority: '1.0' 
    },
    { 
      loc: `${baseUrl}/Services`, 
      lastmod,
      changefreq: 'monthly', 
      priority: '0.8' 
    },
    { 
      loc: `${baseUrl}/About`, 
      lastmod,
      changefreq: 'monthly', 
      priority: '0.7' 
    },
    { 
      loc: `${baseUrl}/ContactUs`, 
      lastmod,
      changefreq: 'monthly', 
      priority: '0.6' 
    },
    { 
      loc: `${baseUrl}/Architectural`, 
      lastmod,
      changefreq: 'monthly', 
      priority: '0.7' 
    },
  ];

  const projectPages = projects.map((project) => ({
    loc: `${baseUrl}/Project/${project.id}`,
    lastmod,
    changefreq: 'monthly',
    priority: '0.6',
  }));

  const allPages = [...staticPages, ...projectPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
