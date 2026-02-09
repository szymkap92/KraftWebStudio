import type { MetadataRoute } from "next";

const BASE_URL = "https://kraftweb.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["de", "pl"];
  const routes = ["", "/impressum"];
  const privacyRoutes: Record<string, string> = {
    de: "/datenschutz",
    pl: "/polityka-prywatnosci",
  };

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.3,
        alternates: {
          languages: {
            de: `${BASE_URL}/de${route}`,
            pl: `${BASE_URL}/pl${route}`,
          },
        },
      });
    }

    entries.push({
      url: `${BASE_URL}/${locale}${privacyRoutes[locale]}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
      alternates: {
        languages: {
          de: `${BASE_URL}/de/datenschutz`,
          pl: `${BASE_URL}/pl/polityka-prywatnosci`,
        },
      },
    });
  }

  return entries;
}
