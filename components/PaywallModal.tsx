"use client";
export default function PaywallModal({ open }: { open: boolean }) {
  if (!open) return null;
  async function go(plan: "starter" | "pro") {
    const res = await fetch("/api/stripe/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ plan }) });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  }
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="max-w-md rounded-2xl bg-white p-6">
        <h2 className="text-xl font-semibold">You&apos;ve used your free sample!</h2>
        <p className="mt-2 text-sm">5 businesses booked jobs this week. Upgrade to keep your AI front desk live.</p>
        <div className="mt-5 grid gap-3">
          <button className="rounded-full bg-[#0F6B5F] py-3 text-white" onClick={() => go("starter")}>Upgrade to Starter $97/mo</button>
          <button className="rounded-full bg-[#0F3D36] py-3 text-white" onClick={() => go("pro")}>Upgrade to Pro $197/mo</button>
        </div>
      </div>
    </div>
  );
}
