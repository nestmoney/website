import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = "https://nestmoney.in";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
  ];
};

export default sitemap;
