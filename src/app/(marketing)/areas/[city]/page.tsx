import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas } from "@/content/areas";
import { constructMetadata } from "@/lib/seo/metadata";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    return constructMetadata({ title: "Area Not Found" });
  }

  return constructMetadata({
    title: `Removals in ${area.name}`,
    description: area.description,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaCityPage({ params }: Props) {
  const { city: slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Removals in {area.name}</h1>
      <p className="mt-4 text-slate-700">{area.description}</p>
    </main>
  );
}
