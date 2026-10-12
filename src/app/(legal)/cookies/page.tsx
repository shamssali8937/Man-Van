import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Cookie Policy",
  description: "Information regarding cookie usage on the AB Removals website.",
  path: "/cookies",
  noIndex: true,
});

export default function CookiesPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Cookie Policy</h1>
      <p className="mt-4 text-slate-700">
        The {siteConfig.name} website uses only essential cookies strictly
        required for security and operation.
      </p>
      <p className="mt-2 text-slate-700 leading-relaxed max-w-3xl">
        We do not deploy intrusive third-party advertising cookies or
        cross-domain profiling trackers. Only strictly necessary operational
        cookies required for CSRF security, quote form session validation, and
        site navigation performance are retained.
      </p>
    </main>
  );
}
