import type { Metadata } from "next";
import { areas } from "@/content/areas";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Areas We Cover",
  description:
    "Check the UK regions and postcodes covered by our removal services.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Areas We Cover</h1>
      <ul className="mt-4 space-y-2">
        {areas.map((area) => (
          <li key={area.id} className="text-slate-700">
            {area.name} ({area.county})
          </li>
        ))}
      </ul>
    </main>
  );
}
