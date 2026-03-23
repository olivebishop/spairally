import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-white/60 transition-colors hover:text-white/90"
        >
          ← Back to home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Privacy Policy
        </h1>
        <p className="mt-4 leading-relaxed text-white/65">
          This page is under construction. Privacy Policy will be available soon.
        </p>
      </div>
    </main>
  );
}
