import { areas } from "@/content/areas";
import { reviews } from "@/content/reviews";
import { siteConfig } from "@/content/site";

/**
 * Escapes any raw HTML tag openers in serialized JSON-LD
 * to prevent Cross-Site Scripting (XSS) / script break-out attacks.
 */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * Schema.org MovingCompany / LocalBusiness structured data.
 * Validates strictly: no invented ratings or addresses.
 * Reviews and AggregateRating are only included if verified reviews exist in reviews.ts.
 */
export function generateMovingCompanySchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": `${siteConfig.url}/#movingcompany`,
    name: siteConfig.name,
    alternateName: [
      siteConfig.shortName,
      "AB Man and Van",
      "AB Removals and Transport",
      "AB Removals & Transport Ltd",
    ],
    legalName: "AB Removals & Transport Ltd",
    url: siteConfig.url,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    logo: `${siteConfig.url}/brand/logo.svg`,
    image: `${siteConfig.url}/opengraph-image`,
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
    sameAs: [siteConfig.whatsappHref],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      ...areas.map((a) => ({
        "@type": "City",
        name: a.name,
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
    ],
  };

  // Only add AggregateRating and Review if real verified reviews exist
  const ratedReviews = reviews.filter(
    (r): r is typeof r & { rating: number } => typeof r.rating === "number",
  );
  if (ratedReviews.length > 0) {
    const totalRating = ratedReviews.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = (totalRating / ratedReviews.length).toFixed(1);

    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: ratedReviews.length,
      bestRating: "5",
      worstRating: "1",
    };

    schema.review = ratedReviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.comment,
      datePublished: r.date,
    }));
  }

  return schema;
}

/**
 * Schema.org WebSite structured data.
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: ["AB Removals", "AB Man and Van"],
    description: siteConfig.description,
    inLanguage: "en-GB",
    publisher: {
      "@id": `${siteConfig.url}/#movingcompany`,
    },
  };
}

/**
 * Schema.org Service structured data for specific removal services.
 */
export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  urlPath?: string,
  areaName?: string,
) {
  const serviceUrl = urlPath
    ? `${siteConfig.url}${urlPath}`
    : `${siteConfig.url}/services`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: areaName ? `${serviceName} in ${areaName}` : serviceName,
    serviceType: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      "@type": "MovingCompany",
      name: siteConfig.name,
      telephone: siteConfig.telephone,
      url: siteConfig.url,
    },
    areaServed: areaName
      ? {
          "@type": "City",
          name: areaName,
        }
      : {
          "@type": "Country",
          name: "United Kingdom",
        },
  };
}

/**
 * Schema.org FAQPage structured data for pages displaying FAQs.
 */
export function generateFaqPageSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Schema.org BreadcrumbList structured data.
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const fullUrl = item.url
        ? item.url.startsWith("http")
          ? item.url
          : `${siteConfig.url}${item.url}`
        : undefined;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        ...(fullUrl ? { item: fullUrl } : {}),
      };
    }),
  };
}
