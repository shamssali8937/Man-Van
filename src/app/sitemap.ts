import type { MetadataRoute } from "next";
import { areas } from "@/content/areas";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { getValidAreaServicePairs } from "@/lib/seo/area-service-content";

import { isTier1City } from "@/lib/seo/tiers";

export default function sitemap(): MetadataRoute.Sitemap {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || siteConfig.url;
  const baseUrl = (
    rawUrl.startsWith("http://") || rawUrl.startsWith("https://")
      ? rawUrl
      : `https://${rawUrl}`
  ).replace(/\/$/, "");
  const currentDate = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/areas",
    "/the-van",
    "/faq",
    "/reviews",
    "/about",
    "/contact",
    "/quote",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const areaRoutes: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Only Tier 1 conurbations are indexed in the sitemap; Tier 2+ are kept out until verified
  const areaServicePairs = getValidAreaServicePairs().filter(({ city }) =>
    isTier1City(city),
  );
  const areaServiceRoutes: MetadataRoute.Sitemap = areaServicePairs.map(
    ({ city, service }) => ({
      url: `${baseUrl}/areas/${city}/${service}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    }),
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...areaServiceRoutes,
  ];
}
