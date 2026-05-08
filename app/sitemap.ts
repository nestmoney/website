import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = "https://nestmoney.in";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-05-08"),
    },
    {
      url: `${baseUrl}/#fixed%20deposit`,
      lastModified: new Date("2026-05-08"),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-05-08"),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-05-08"),
    },
  ];
};

export default sitemap;
