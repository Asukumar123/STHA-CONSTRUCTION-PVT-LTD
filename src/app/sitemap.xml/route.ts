import { projects } from '../../../Data/Projects';


const baseUrl = 'https://stha.cloud';

export async function GET() {
  const formatDate = (date: Date) =>
    date.toISOString().split('.')[0] + '+00:00'; // Remove ms, add timezone

  const staticPages = [
    { loc: `${baseUrl}/`, changefreq: 'weekly', priority: 1.0 },
    { loc: `${baseUrl}/Services`, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/About`, changefreq: 'monthly', priority: 0.7 },
    { loc: `${baseUrl}/ContactUs`, changefreq: 'monthly', priority: 0.6 },
    { loc: `${baseUrl}/Architectural`, changefreq: 'monthly', priority: 0.7 },
  ];

  const projectPages = projects.map((project) => ({
    loc: `${baseUrl}/Project/${project.id}`,
    changefreq: 'monthly',
    priority: 0.6,
  }));

  const allPages = [...staticPages, ...projectPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages
      .map(
        (page) => `
      <url>
        <loc>${page.loc}</loc>
        <lastmod>${formatDate(new Date())}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>`
      )
      .join('')}
  </urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
