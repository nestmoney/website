import type { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: 'https://www.nestmoney.in',
      lastModified: new Date(),
    },
  ];
};

export default sitemap;