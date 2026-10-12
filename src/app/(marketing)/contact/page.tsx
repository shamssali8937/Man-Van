import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us",
  description:
    "Get in touch with AB Removals. Call 07405 328 674 for prompt removals assistance.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4 text-slate-700">
        Direct telephone:{" "}
        <a
          href={siteConfig.telHref}
          className="font-semibold text-[#0B2152] underline"
        >
          {siteConfig.telephone}
        </a>
      </p>
      <p className="mt-2 text-slate-700">Email: {siteConfig.email}</p>
    </main>
  );
}
