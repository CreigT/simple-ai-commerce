import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
export const metadata: Metadata = { title: "Service AI In-A-Box", description: "AI front desk that never misses a job for local service businesses." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header className="border-b border-[#E5E7EB]">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold text-[#0F6B5F]">Service AI In-A-Box</Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/pricing">Plans</Link>
              <Link href="/signup" className="rounded-full bg-[#0F6B5F] px-4 py-2 text-white">Create your free workspace</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
