import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata();

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{siteConfig.name}</h1>
      <p className="mt-2 text-slate-600">{siteConfig.tagline}</p>
    </main>
  );
}
