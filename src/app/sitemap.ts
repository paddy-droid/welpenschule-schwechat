import { MetadataRoute } from 'next';
import { getAllRegionSlugs } from '@/lib/regionData';
import { kurse } from '@/lib/kurseData';

// Stabiler Redaktions-Stand statt new Date() — vermeidet, dass jeder Build bei
// allen URLs ein frisches lastmod vortäuscht. Bei echten Inhaltsupdates erhöhen.
const lastModified = '2026-07-01';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://welpenschule-schwechat.at';

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mobiles-hundetraining`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kurse`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...kurse.map((k) => ({
      url: `${baseUrl}/kurse/${k.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    ...getAllRegionSlugs().map((region) => ({
      url: `${baseUrl}/mobiles-hundetraining/${region}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/impressum`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
