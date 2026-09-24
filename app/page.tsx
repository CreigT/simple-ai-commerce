import Link from "next/link";
export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-medium text-teal">Free to try · no card</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">Your AI front desk that never misses a job.</h1>
          <p className="mt-4 text-lg text-teal-dark/80">Catch every call, send photo quotes, collect deposits, and earn 5-star reviews—automatically.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/signup" className="rounded-full bg-teal px-5 py-3 text-white">Create your free workspace</Link>
            <Link href="/pricing" className="rounded-full border border-teal px-5 py-3 text-teal">See $97/$197 plans</Link>
          </div>
        </div>
        <div className="rounded-2xl bg-teal-mint p-5">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-xs text-teal">Inbox · Demo Clean Co</p>
            <div className="mt-3 space-y-2 text-sm">
              <p className="rounded-2xl bg-teal-mint px-3 py-2">Hi, can you deep clean a 2 bed 2 bath Saturday?</p>
              <p className="ml-8 rounded-2xl bg-teal px-3 py-2 text-white">Yes — 2/2 deep clean is $240. Send 2 photos for an exact quote. $50 holds Saturday 9am.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-teal-mint py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5"><h3 className="font-semibold">1. Sign up free</h3><p className="mt-2 text-sm">10 AI chats and 5 photo estimates. No card.</p></div>
          <div className="rounded-2xl bg-white p-5"><h3 className="font-semibold">2. AI answers</h3><p className="mt-2 text-sm">Missed-call text-back, quotes, deposits.</p></div>
          <div className="rounded-2xl bg-white p-5"><h3 className="font-semibold">3. Upgrade when busy</h3><p className="mt-2 text-sm">Starter $97 or Pro $197 when the sample runs out.</p></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl justify-around px-4 text-center">
          <div><p className="text-3xl font-semibold">128</p><p className="text-sm">calls caught</p></div>
          <div><p className="text-3xl font-semibold">64</p><p className="text-sm">quotes sent</p></div>
          <div><p className="text-3xl font-semibold">$3.2k</p><p className="text-sm">deposits</p></div>
        </div>
      </section>
    </main>
  );
}
