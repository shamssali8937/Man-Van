import type { Metadata } from "next";
import { reviews } from "@/content/reviews";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Customer Reviews",
  description:
    "Read genuine feedback from customers who have used AB Removals services.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Customer Reviews</h1>
      {reviews.length === 0 ? (
        <p className="mt-4 text-slate-700">
          Reviews are currently being collated from verified customer bookings.
          [TODO: confirm client reviews from Google / Trustpilot].
        </p>
      ) : (
        <ul className="mt-4 space-y-4">
          {reviews.map((review) => (
            <li key={review.id} className="rounded border p-4">
              <p className="font-semibold">{review.author}</p>
              <p className="text-sm text-slate-500">{review.location}</p>
              <p className="mt-2 text-slate-700">{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
