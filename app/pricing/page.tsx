import Link from "next/link";
export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-center text-sm font-medium text-[#0F6B5F]">Free sample included - No credit card required</p>
      <h1 className="mt-2 text-center text-4xl font-semibold">Keep the front desk live</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
          <p className="text-sm">FREE</p>
          <p className="mt-2 text-4xl font-semibold">$0<span className="text-base">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>10 AI conversations</li>
            <li>5 Instant photo estimates</li>
            <li>Quote page watermark: Powered by Service AI</li>
            <li>SMS inbox + chat widget (read-only after 10)</li>
            <li>Google Calendar booking locked</li>
            <li>Review requests locked</li>
          </ul>
          <Link href="/signup" className="mt-6 block rounded-full border border-[#E5E7EB] py-3 text-center">Start free</Link>
        </article>
        <article className="rounded-2xl border border-[#0F6B5F] bg-white p-6">
          <p className="text-sm text-[#0F6B5F]">STARTER</p>
          <p className="mt-2 text-4xl font-semibold">$97<span className="text-base">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>AI missed-call text-back (in 3 seconds)</li>
            <li>SMS inbox + chat widget (full)</li>
            <li>Instant photo estimates with $50 deposit via Stripe</li>
            <li>Review + 14/30-day follow-ups</li>
            <li>No watermark</li>
          </ul>
          <Link href="/signup?plan=starter" className="mt-6 block rounded-full bg-[#0F6B5F] py-3 text-center text-white">Upgrade to Starter $97</Link>
        </article>
        <article className="rounded-2xl bg-[#0F3D36] p-6 text-white">
          <p className="text-sm">PRO</p>
          <p className="mt-2 text-4xl font-semibold">$197<span className="text-base">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[#0F3D36]">✓</span> Everything in Starter</li>
            <li className="flex gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[#0F3D36]">✓</span> Google Calendar booking</li>
            <li className="flex gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[#0F3D36]">✓</span> White-label quote page</li>
            <li className="flex gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[#0F3D36]">✓</span> Multi-location ready (up to 3)</li>
          </ul>
          <Link href="/signup?plan=pro" className="mt-6 block rounded-full bg-white py-3 text-center text-[#0F3D36]">Upgrade to Pro $197</Link>
        </article>
      </div>
    </main>
  );
}
