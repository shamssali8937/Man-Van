export interface HeroTrustItem {
  id: string;
  label: string;
  line1?: string;
  line2?: string;
  description?: string;
}

export const heroContent = {
  eyebrow: "PROFESSIONAL MAN & VAN SERVICES",
  h1Line1: "Man and Van Removals",
  h1Line2: "Across London & the UK",
  paragraph:
    "Reliable, affordable and professional man and van services for homes, offices and businesses. We handle your items with care, from collection to delivery — anywhere in the UK.",
  primaryCta: {
    label: "Get a Free Quote",
    href: "/quote",
  },
  secondaryCta: {
    label: "Call 07405 328 674",
    href: "tel:+447405328674",
  },
  trustStrip: [
    {
      id: "experienced-team",
      label: "Experienced Team",
      line1: "Experienced",
      line2: "Team",
    },
    {
      id: "fully-insured",
      label: "Fully Insured",
      line1: "Fully Insured",
      line2: undefined,
    },
    {
      id: "on-time-reliable",
      label: "On Time & Reliable",
      line1: "On Time",
      line2: "& Reliable",
    },
    {
      id: "nationwide-coverage",
      label: "Nationwide Coverage",
      line1: "Nationwide",
      line2: "Coverage",
    },
  ] as const satisfies readonly HeroTrustItem[],
  images: {
    desktop: "/images/hero/hero-desktop.jpg",
    mobile: "/images/hero/hero-mobile.jpg",
    alt: "AB Removals man and van Luton van in London",
  },
} as const;

export type HeroContent = typeof heroContent;
