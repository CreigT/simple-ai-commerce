import Link from "next/link";
import { formatPrice, listProducts } from "@/lib/products";

export default function HomePage() {
  const products = listProducts().slice(0, 3);
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Your AI front desk that <span className="text-[#0A7C6B]">never misses a job.</span>
          </h1>
          <p className="mt-4 text-lg text-[#111827]/80">Catch every call, send photo quotes, collect deposits, and earn 5-star reviews—automatically.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/signup" className="rounded-full bg-[#0F6B5F] px-5 py-3 text-white">Create your free workspace</Link>
            <Link href="/shop" className="rounded-full border border-[#0F6B5F] px-5 py-3 text-[#0F6B5F]">Open Harbor shop</Link>
          </div>
          <p className="mt-4 text-sm">✓ No missed calls ✓ Works with your Google Calendar ✓ Cancel anytime</p>
        </div>
        <div className="rounded-2xl bg-[#E8F5E9] p-4">
          <div className="rounded-2xl bg-white p-4 text-sm space-y-2">
            <p className="rounded-2xl bg-[#E8F5E9] px-3 py-2">Hi, can you clean my patio this Saturday? 10:24 AM</p>
            <p className="ml-6 rounded-2xl bg-[#0F6B5F] px-3 py-2 text-white">Absolutely! What is the best address and can you send a few photos of the patio? 10:25 AM</p>
            <p className="rounded-2xl bg-[#E8F5E9] px-3 py-2">123 Harbor Way. Photos attached. 10:26 AM</p>
            <p className="ml-6 rounded-2xl bg-[#0F6B5F] px-3 py-2 text-white">Thanks! Quote sent for $197. A $50 deposit secures your Saturday spot. 10:28 AM</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Harbor kits</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="rounded-2xl border border-[#E5E7EB] p-5">
              <p className="font-semibold">{product.name}</p>
              <p className="mt-2 text-sm text-[#111827]/80">{product.summary}</p>
              <p className="mt-3 text-[#0F6B5F]">{formatPrice(product)}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
