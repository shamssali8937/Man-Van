import type { FAQ } from "@/types";

export const faqs: FAQ[] = [
  {
    id: "booking-notice",
    category: "booking",
    question: "How far in advance should I book my move?",
    answer:
      "We recommend booking as soon as your moving date is confirmed. However, we also cater to short-notice and same-day enquiries subject to van and driver availability.",
  },
  {
    id: "quote-pricing",
    category: "pricing",
    question: "How is the quote calculated?",
    answer:
      "Quotes are based on the distance between postcodes, volume of items, required van size, number of helpers needed, and access specifics (e.g. flights of stairs). Fill in our quote form or call 07405 328 674 for a bespoke price.",
  },
  {
    id: "furniture-protection",
    category: "services",
    question: "How do you protect furniture during transit?",
    answer:
      "We use protective transit blankets, mattress protectors, and heavy-duty tie-down ratchet straps inside the van to ensure your possessions remain secure throughout the journey.",
  },
  {
    id: "dismantling-service",
    category: "services",
    question: "Can you dismantle and assemble beds and wardrobes?",
    answer:
      "Yes. Our Furniture Dismantling and Assembly service covers bed frames, wardrobes, desks, and dining sets. Please mention this requirement when requesting your quote.",
  },
  {
    id: "payment-methods",
    category: "pricing",
    question: "What payment methods are accepted?",
    answer:
      "[TODO: confirm accepted payment methods e.g. bank transfer, card, cash upon completion].",
  },
  {
    id: "insurance-coverage",
    category: "general",
    question: "Are my items insured during transport?",
    answer:
      "[TODO: confirm exact Goods in Transit and Public Liability policy limits].",
  },
];
