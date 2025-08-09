module.exports = {
  siteUrl: 'https://sthaconstruction.com',
  generateRobotsTxt: true,
  exclude: ['/dashboard/*', '/admin/*', '/api/*'],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/admin/', '/api/']
      }
    ],
    additionalSitemaps: [
      'https://sthaconstruction.com/sitemap.xml',
    ]
  },
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.5
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    } else if (path.includes('/Services')) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path.includes('/About')) {
      priority = 0.7
      changefreq = 'monthly'
    } else if (path.includes('/Project/')) {
      priority = 0.6
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  }
}