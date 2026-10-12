import type { Metadata } from "next";
import { services } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Our Removal Services",
  description:
    "Explore our complete range of house removals, man and van, and delivery services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Our Removal Services</h1>
      <ul className="mt-4 space-y-2">
        {services.map((service) => (
          <li key={service.id} className="text-slate-700">
            {service.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
