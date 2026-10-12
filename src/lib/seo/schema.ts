import { siteConfig } from "@/content/site";

export function generateMovingCompanySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: siteConfig.name,
    telephone: siteConfig.telephone,
    url: siteConfig.url,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.address.addressCountry,
      addressLocality: siteConfig.address.addressLocality,
      postalCode: siteConfig.address.postalCode,
      streetAddress: siteConfig.address.streetAddress,
    },
    areaServed: siteConfig.operatingAreas,
  };
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "MovingCompany",
      name: siteConfig.name,
      telephone: siteConfig.telephone,
      url: siteConfig.url,
    },
  };
}
