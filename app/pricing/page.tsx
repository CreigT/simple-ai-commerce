import Link from "next/link";
export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-center text-4xl font-semibold">Pick a desk. Start free.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-teal/20 bg-white p-6">
          <p className="text-sm text-teal">FREE</p>
          <p className="mt-2 text-4xl font-semibold">$0<span className="text-base">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm"><li>10 chats + 5 estimates</li><li>Watermarked quote page</li><li>Start free, no card</li></ul>
          <Link href="/signup" className="mt-6 block rounded-full border border-teal py-3 text-center text-teal">Start free</Link>
        </article>
        <article className="rounded-2xl border border-teal/20 bg-white p-6">
          <p className="text-sm text-teal">STARTER</p>
          <p className="mt-2 text-4xl font-semibold">$97<span className="text-base">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm"><li>AI missed-call text-back</li><li>SMS inbox + chat widget</li><li>Instant photo estimates</li><li>Review + 14/30-day follow-ups</li><li>Deposit collection</li></ul>
          <Link href="/signup?plan=starter" className="mt-6 block rounded-full bg-teal py-3 text-center text-white">Choose Starter</Link>
        </article>
        <article className="rounded-2xl bg-teal p-6 text-white">
          <p className="text-sm text-teal-mint">PRO</p>
          <p className="mt-2 text-4xl font-semibold">$197<span className="text-base">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm"><li>Everything in Starter</li><li>Google Calendar booking</li><li>White-label quote page</li><li>Priority + multi-location ready</li></ul>
          <Link href="/signup?plan=pro" className="mt-6 block rounded-full bg-white py-3 text-center text-teal-dark">Choose Pro</Link>
        </article>
      </div>
    </main>
  );
}
