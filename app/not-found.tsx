import Link from "next/link";
export default function NotFound() {
  return (
    <main className="mx-auto max-w-lg px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold text-teal-dark">Page missing</h1>
      <p className="mt-2 text-sm text-teal-dark/70">That screen is not part of Service AI In-A-Box.</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-teal px-5 py-3 text-white">Back home</Link>
    </main>
  );
}
