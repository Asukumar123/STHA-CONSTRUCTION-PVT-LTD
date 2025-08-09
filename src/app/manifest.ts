import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'STHA Construction - Quality Construction Services',
    short_name: 'STHA Construction',
    description: 'Premier construction company in Patna, Bihar offering architectural design, structural engineering, and construction services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#111247',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}