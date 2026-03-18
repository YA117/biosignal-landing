import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE_URL = 'https://biosignal.co.uk'

export default function robots(): MetadataRoute.Robots {
  return {
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
    ],
  }
}
