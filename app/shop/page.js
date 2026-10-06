import Link from "next/link";
import { formatPrice, listProducts } from "@/lib/products";

export const metadata = {
  title: "Harbor shop",
  description: "Digital kits for a local service front desk.",
};

export default function ShopPage() {
  const products = listProducts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-sm font-medium text-[#0F6B5F]">Harbor</p>
      <h1 className="mt-2 text-4xl font-semibold">Kits you can sell today</h1>
      <p className="mt-3 max-w-2xl text-[#111827]/80">
        Change prices and names in config/products.json. Each card opens its own product page.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <article key={product.id} className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <p className="text-sm text-[#0F6B5F]">{product.type === "recurring" ? "Monthly" : "One time"}</p>
            <h2 className="mt-2 text-2xl font-semibold">{product.name}</h2>
            <p className="mt-2 text-sm text-[#111827]/80">{product.summary}</p>
            <p className="mt-4 text-2xl font-semibold">{formatPrice(product)}</p>
            <Link href={`/product/${product.id}`} className="mt-6 inline-block rounded-full bg-[#0F6B5F] px-5 py-3 text-white">
              Open product page
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
