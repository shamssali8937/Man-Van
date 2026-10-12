import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-[#0B2152]">
        Page Not Found
      </h1>
      <p className="mt-4 text-lg text-slate-700">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="rounded-md bg-[#0B2152] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0B2152]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2152]"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
