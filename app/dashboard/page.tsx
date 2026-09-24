import Link from "next/link";
import UsageBar from "@/components/UsageBar";
export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Front desk</h1>
      <p className="text-sm text-teal-dark/70">Free plan · Demo Clean Co</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <UsageBar used={5} limit={10} label="AI conversations" />
        <UsageBar used={2} limit={5} label="Photo estimates" />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Link href="/inbox" className="rounded-2xl border p-5">Inbox</Link>
        <Link href="/quote/demo-clean" className="rounded-2xl border p-5">Public quote page</Link>
        <Link href="/settings" className="rounded-2xl border p-5">Settings</Link>
      </div>
      <div className="mt-6 rounded-2xl bg-teal-mint p-5 text-sm">Google Calendar booking 🔒 Pro · Review requests 🔒 Starter</div>
    </main>
  );
}
