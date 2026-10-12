import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas } from "@/content/areas";
import { services } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

interface Props {
  params: Promise<{ city: string; service: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const area = areas.find((a) => a.slug === citySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!area || !service) {
    return constructMetadata({ title: "Page Not Found" });
  }

  return constructMetadata({
    title: `${service.title} in ${area.name}`,
    description: `Professional ${service.title.toLowerCase()} in ${area.name}. Fast quotes, reliable van and driver.`,
    path: `/areas/${area.slug}/${service.slug}`,
  });
}

export default async function AreaServicePage({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;
  const area = areas.find((a) => a.slug === citySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!area || !service) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        {service.title} in {area.name}
      </h1>
      <p className="mt-4 text-slate-700">
        Providing reliable {service.title.toLowerCase()} across {area.name} and
        surrounding areas.
      </p>
    </main>
  );
}
