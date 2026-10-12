import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return constructMetadata({ title: "Service Not Found" });
  }

  return constructMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { service: slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{service.title}</h1>
      <p className="mt-4 text-slate-700">{service.description}</p>
    </main>
  );
}
