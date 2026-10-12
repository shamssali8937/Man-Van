import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "About Us",
  description:
    "Learn more about AB Removals – your dedicated removals and man & van partner.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">About {siteConfig.name}</h1>
      <p className="mt-4 text-slate-700">
        Professional removals and transport services. [TODO: confirm business
        background, founder story, and operating history].
      </p>
    </main>
  );
}
