import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.welpenschule-schwechat.at/sitemap.xml',
    host: 'https://www.welpenschule-schwechat.at',
  };
}
