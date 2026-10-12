export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
}

export interface Area {
  id: string;
  slug: string;
  name: string;
  county?: string;
  postcodePrefixes: string[];
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "pricing" | "services" | "booking";
}

export interface Review {
  id: string;
  author: string;
  location: string;
  service: string;
  date: string;
  comment: string;
  isVerified: boolean;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  pickupPostcode: string;
  deliveryPostcode: string;
  moveDate: string;
  propertyType?: string;
  itemsDescription?: string;
  additionalDetails?: string;
  turnstileToken?: string;
}
