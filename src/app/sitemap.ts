import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cba-tv.ca';

  // Static pages - public only
  const staticPages = [
    '',
    '/about',
    '/issues',
    '/resources',
    '/resources/how-to-complain',
    '/resources/how-to-intervene',
    '/contact',
    '/take-action',
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/take-action' ? 0.9 : 0.8,
  }));
}
