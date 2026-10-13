export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "AB Removals – Man and Van",
  shortName: "AB Removals",
  tagline: "Professional Removals and Man & Van Services across the UK",
  description:
    "Reliable removals, man and van, and furniture collection services. Professional handling, punctual service, and transparent quotes.",
  url: "https://abremovals.co.uk",
  concept: "The Route",

  // Direct Communication Channels
  telephone: "07405 328 674",
  telHref: "tel:+447405328674",
  whatsappNumber: "+447405328674",
  whatsappHref: "https://wa.me/447405328674",
  email: "quotes@abremovals.co.uk",

  // Address & Operating Details
  address: {
    streetAddress: "Unit 4, Gateway Business Park, Silvertown Way",
    addressLocality: "London",
    postalCode: "E16 1EA",
    addressCountry: "GB",
    formatted: "Unit 4, Gateway Business Park, Silvertown Way, London, E16 1EA",
  },
  openingHours: "Mon – Sat: 7:00 AM – 8:00 PM | Sun: 8:00 AM – 6:00 PM",
  operatingAreas: "London, Midlands, and Nationwide UK Routes",
  insuranceDetails:
    "£50,000 Goods in Transit & £2,000,000 Public Liability Insurance",
  accreditations: ["Environment Agency Registered Waste Carrier (CBDU489120)"],
  currency: "GBP",
  locale: "en-GB",
  copyrightYear: 2026,

  // Main Navigation Items
  navigation: [
    { label: "Services", href: "/services" },
    { label: "Areas", href: "/areas" },
    { label: "The Van", href: "/the-van" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ] as const satisfies readonly NavItem[],

  // Highlighted Services for Header & Footer
  serviceLinks: [
    { label: "House Removals", href: "/services/house-removals" },
    { label: "Man & Van Services", href: "/services/man-and-van" },
    {
      label: "Furniture Collection & Delivery",
      href: "/services/furniture-collection-and-delivery",
    },
    { label: "Office Relocations", href: "/services/office-relocations" },
    { label: "Student Moves", href: "/services/student-moves" },
    { label: "Single Item Transport", href: "/services/single-item-transport" },
  ] as const satisfies readonly FooterLink[],

  // Key UK Areas for Footer Directory
  keyAreaLinks: [
    { label: "London Removals", href: "/areas/london" },
    { label: "Birmingham Removals", href: "/areas/birmingham" },
    { label: "Manchester Removals", href: "/areas/manchester" },
    { label: "Leeds Removals", href: "/areas/leeds" },
    { label: "Bristol Removals", href: "/areas/bristol" },
    { label: "Cardiff Removals", href: "/areas/cardiff" },
  ] as const satisfies readonly FooterLink[],

  // Legal Compliance Links
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ] as const satisfies readonly FooterLink[],

  // Social / Messaging Channels
  socialLinks: [
    {
      name: "WhatsApp",
      href: "https://wa.me/447405328674",
      handle: "+44 7405 328 674",
    },
  ] as const,
} as const;

export type SiteConfig = typeof siteConfig;
