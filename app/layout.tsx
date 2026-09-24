import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
export const metadata: Metadata = { title: "Service AI In-A-Box", description: "Free-to-try AI front desk for local service businesses. Sponsored by Creignificent LLC." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-teal/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-lg font-semibold text-teal">Service AI In-A-Box</Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/pricing">Plans</Link>
              <Link href="/quote/demo-clean">Try a quote</Link>
              <Link href="/login">Log in</Link>
              <Link href="/signup" className="rounded-full bg-teal px-4 py-2 text-white">Create free workspace</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-teal/10 py-8 text-center text-xs text-teal-dark/70">Sponsored by Creignificent LLC · Free sample, then $97 / $197</footer>
      </body>
    </html>
  );
}
