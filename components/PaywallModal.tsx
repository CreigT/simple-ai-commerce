"use client";
export default function PaywallModal({ open }: { open: boolean }) {
  if (!open) return null;
  async function upgrade(plan: "starter" | "pro") {
    const res = await fetch("/api/stripe/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ plan }) });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  }
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="max-w-md rounded-2xl bg-white p-6">
        <h2 className="text-xl font-semibold text-teal-dark">You&apos;ve used your free sample!</h2>
        <p className="mt-2 text-sm text-teal-dark/80">5 businesses booked jobs this week. Upgrade to keep your AI front desk live.</p>
        <div className="mt-5 grid gap-3">
          <button onClick={() => upgrade("starter")} className="rounded-full bg-teal px-4 py-3 text-white">Upgrade to Starter $97</button>
          <button onClick={() => upgrade("pro")} className="rounded-full bg-teal-dark px-4 py-3 text-white">Upgrade to Pro $197</button>
        </div>
      </div>
    </div>
  );
}
