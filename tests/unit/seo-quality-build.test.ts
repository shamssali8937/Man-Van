import { describe, expect, it } from "vitest";
import { areas } from "@/content/areas";
import { londonBoroughs } from "@/content/london-boroughs";
import { services } from "@/content/services";
import {
  getAreaServiceContent,
  getValidAreaServicePairs,
} from "@/lib/seo/area-service-content";
import { formatSeoDescription, formatSeoTitle } from "@/lib/seo/metadata";
import {
  generateMovingCompanySchema,
  generateServiceSchema,
} from "@/lib/seo/schema";

describe("Build-Time SEO Quality Assurance", () => {
  it("no meta description ends with ellipsis, contains double spaces, or is outside 120-160 characters", () => {
    const failures: string[] = [];

    // 1. All Area-Service pairs (420 total)
    const pairs = getValidAreaServicePairs();
    for (const { city, service } of pairs) {
      const content = getAreaServiceContent(city, service);
      if (!content) continue;

      const desc = content.seoDescription;
      const url = `/areas/${city}/${service}`;

      if (desc.includes("...") || desc.includes("…")) {
        failures.push(
          `${url}: description ends with or contains ellipsis -> "${desc}"`,
        );
      }
      if (desc.includes("  ")) {
        failures.push(`${url}: description contains double space -> "${desc}"`);
      }
      if (desc.length < 120 || desc.length > 160) {
        failures.push(
          `${url}: description length (${desc.length}) outside 120-160 chars -> "${desc}"`,
        );
      }
    }

    // 2. All Service Hubs
    for (const service of services) {
      const desc = service.seo.description;
      const url = `/services/${service.slug}`;
      if (desc.includes("...") || desc.includes("…")) {
        failures.push(
          `${url}: description ends with or contains ellipsis -> "${desc}"`,
        );
      }
      if (desc.includes("  ")) {
        failures.push(`${url}: description contains double space -> "${desc}"`);
      }
      if (desc.length < 120 || desc.length > 160) {
        failures.push(
          `${url}: description length (${desc.length}) outside 120-160 chars -> "${desc}"`,
        );
      }
    }

    // 3. All Area Hubs
    for (const area of areas) {
      const desc = area.metaDescription || formatSeoDescription(area.intro);
      const url = `/areas/${area.slug}`;
      if (desc.includes("...") || desc.includes("…")) {
        failures.push(
          `${url}: description ends with or contains ellipsis -> "${desc}"`,
        );
      }
      if (desc.includes("  ")) {
        failures.push(`${url}: description contains double space -> "${desc}"`);
      }
      if (desc.length < 120 || desc.length > 160) {
        failures.push(
          `${url}: description length (${desc.length}) outside 120-160 chars -> "${desc}"`,
        );
      }
    }

    // 4. London Borough Pages
    for (const borough of londonBoroughs) {
      const desc = borough.seoDescription;
      const url = `/areas/london/boroughs/${borough.slug}`;
      if (desc.includes("...") || desc.includes("…")) {
        failures.push(
          `${url}: description ends with or contains ellipsis -> "${desc}"`,
        );
      }
      if (desc.includes("  ")) {
        failures.push(`${url}: description contains double space -> "${desc}"`);
      }
      if (desc.length < 120 || desc.length > 160) {
        failures.push(
          `${url}: description length (${desc.length}) outside 120-160 chars -> "${desc}"`,
        );
      }
    }

    expect(failures).toEqual([]);
  });

  it("no FAQ answer or schema description ends with ellipsis or contains double spaces", () => {
    const failures: string[] = [];

    // 1. Area-Service local FAQs and Service Schemas
    const pairs = getValidAreaServicePairs();
    for (const { city, service } of pairs) {
      const content = getAreaServiceContent(city, service);
      if (!content) continue;

      for (const faq of content.localFaqs) {
        if (faq.answer.includes("...") || faq.answer.includes("…")) {
          failures.push(
            `/areas/${city}/${service} FAQ "${faq.question}": answer contains ellipsis`,
          );
        }
        if (faq.answer.includes("  ")) {
          failures.push(
            `/areas/${city}/${service} FAQ "${faq.question}": answer contains double spaces`,
          );
        }
      }

      const schema = generateServiceSchema(
        content.service.name,
        content.seoDescription,
        `/areas/${city}/${service}`,
        content.area.name,
      );
      if (
        schema.description.includes("...") ||
        schema.description.includes("…")
      ) {
        failures.push(
          `/areas/${city}/${service} schema description contains ellipsis`,
        );
      }
      if (schema.description.includes("  ")) {
        failures.push(
          `/areas/${city}/${service} schema description contains double spaces`,
        );
      }
    }

    // 2. London Borough FAQs and Service Schemas
    for (const borough of londonBoroughs) {
      for (const faq of borough.faqs) {
        if (faq.answer.includes("...") || faq.answer.includes("…")) {
          failures.push(
            `/areas/london/boroughs/${borough.slug} FAQ "${faq.question}": answer contains ellipsis`,
          );
        }
        if (faq.answer.includes("  ")) {
          failures.push(
            `/areas/london/boroughs/${borough.slug} FAQ "${faq.question}": answer contains double spaces`,
          );
        }
      }

      const schema = generateServiceSchema(
        "Man and Van",
        borough.seoDescription,
        `/areas/london/boroughs/${borough.slug}`,
        `${borough.name}, London`,
      );
      if (
        schema.description.includes("...") ||
        schema.description.includes("…")
      ) {
        failures.push(
          `/areas/london/boroughs/${borough.slug} schema description contains ellipsis`,
        );
      }
      if (schema.description.includes("  ")) {
        failures.push(
          `/areas/london/boroughs/${borough.slug} schema description contains double spaces`,
        );
      }
    }

    // 3. MovingCompany schema description
    const companySchema = generateMovingCompanySchema();
    if (typeof companySchema.description === "string") {
      if (
        companySchema.description.includes("...") ||
        companySchema.description.includes("…")
      ) {
        failures.push(`MovingCompany schema description contains ellipsis`);
      }
      if (companySchema.description.includes("  ")) {
        failures.push(
          `MovingCompany schema description contains double spaces`,
        );
      }
    }

    expect(failures).toEqual([]);
  });

  it("the brand appears at most once in every page title", () => {
    const failures: string[] = [];
    const titlesToCheck: Array<{ url: string; title: string }> = [
      { url: "/", title: "UK Removals & Man and Van Services | AB Removals" },
      { url: "/contact", title: formatSeoTitle("Contact Us") },
      {
        url: "/services",
        title: formatSeoTitle("Removals & Man and Van Services UK"),
      },
      {
        url: "/areas",
        title: formatSeoTitle("UK Removals Coverage Areas | 30 Cities"),
      },
      { url: "/the-van", title: formatSeoTitle("Fleet & Van Specifications") },
      {
        url: "/faq",
        title: formatSeoTitle("Frequently Asked Questions | Removals FAQ"),
      },
      {
        url: "/reviews",
        title: formatSeoTitle("Customer Reviews | Verified Feedback"),
      },
      {
        url: "/quote",
        title: formatSeoTitle("Free Removals Quote | Man and Van UK"),
      },
      { url: "/about", title: formatSeoTitle("About Us & The Route") },
      { url: "/cookies", title: formatSeoTitle("Cookie Policy") },
      { url: "/privacy", title: formatSeoTitle("Privacy Policy") },
      { url: "/terms", title: formatSeoTitle("Terms and Conditions") },
    ];

    for (const service of services) {
      titlesToCheck.push({
        url: `/services/${service.slug}`,
        title: formatSeoTitle(service.name),
      });
    }

    for (const area of areas) {
      titlesToCheck.push({
        url: `/areas/${area.slug}`,
        title: formatSeoTitle(`Removals in ${area.name}`),
      });
      for (const service of services) {
        const content = getAreaServiceContent(area.slug, service.slug);
        if (content) {
          titlesToCheck.push({
            url: `/areas/${area.slug}/${service.slug}`,
            title: content.seoTitle,
          });
        }
      }
    }

    for (const borough of londonBoroughs) {
      titlesToCheck.push({
        url: `/areas/london/boroughs/${borough.slug}`,
        title: borough.seoTitle,
      });
    }

    for (const { url, title } of titlesToCheck) {
      const matches = title.match(/AB Removals/gi);
      const count = matches ? matches.length : 0;
      if (count > 1) {
        failures.push(`${url}: brand appears ${count} times -> "${title}"`);
      }
    }

    expect(failures).toEqual([]);
  });
});
