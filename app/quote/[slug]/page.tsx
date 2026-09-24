"use client";
import { useState } from "react";
import PaywallModal from "@/components/PaywallModal";
export default function QuotePage({ params }: { params: { slug: string } }) {
  const [paywall, setPaywall] = useState(false);
  const [result, setResult] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/estimate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug: params.slug, name: form.get("name"), phone: form.get("phone"), address: form.get("address"), bedrooms: Number(form.get("bedrooms")), bathrooms: Number(form.get("bathrooms")), service_type: form.get("service_type") }) });
    const data = await res.json();
    setBusy(false);
    if (data.paywall || data.error === "PAYWALL") setPaywall(true);
    else setResult(data.customer_message || data.message || "Quote ready.");
  }
  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Instant photo estimate</h1>
      <form onSubmit={submit} className="mt-6 grid gap-3">
        <input name="name" required placeholder="Name" className="rounded-xl border px-3 py-3" />
        <input name="phone" required placeholder="Phone" className="rounded-xl border px-3 py-3" />
        <input name="address" required placeholder="Address" className="rounded-xl border px-3 py-3" />
        <input name="bedrooms" type="number" defaultValue={2} className="rounded-xl border px-3 py-3" />
        <input name="bathrooms" type="number" defaultValue={2} className="rounded-xl border px-3 py-3" />
        <select name="service_type" className="rounded-xl border px-3 py-3"><option value="standard">Standard</option><option value="deep">Deep</option><option value="move_out">Move out</option></select>
        <input type="file" accept="image/*" multiple className="rounded-xl border px-3 py-3" />
        <button disabled={busy} className="rounded-full bg-teal py-3 text-white">{busy ? "Estimating…" : "Get instant quote"}</button>
      </form>
      {result ? <p className="mt-4 rounded-2xl bg-teal-mint p-4 text-sm">{result}</p> : null}
      <p className="mt-4 text-center text-xs text-teal-dark/60">Powered by Service AI · Upgrade to remove watermark</p>
      <PaywallModal open={paywall} />
    </main>
  );
}
