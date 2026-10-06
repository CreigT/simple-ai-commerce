import Link from "next/link";
import { notFound } from "next/navigation";
import BuyButton from "./buy-button";
import { formatPrice, getProduct, listProducts } from "@/lib/products";

export function generateStaticParams() {
  return listProducts().map((product) => ({ id: product.id }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.id);
  if (!product) return { title: "Product not found" };
  return { title: `${product.name} · Harbor`, description: product.summary };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-sm text-[#0F6B5F]">
        <Link href="/shop">Harbor shop</Link>
      </p>
      <h1 className="mt-2 text-4xl font-semibold">{product.name}</h1>
      <p className="mt-3 text-lg text-[#111827]/80">{product.summary}</p>
      <p className="mt-6 text-3xl font-semibold">{formatPrice(product)}</p>
      <ul className="mt-6 space-y-2 text-sm">
        {(product.includes || []).map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
      <div className="mt-8 max-w-sm">
        <BuyButton productId={product.id} />
      </div>
      <p className="mt-4 text-sm text-[#111827]/70">
        Demo checkout works with no Stripe key. Add STRIPE_SECRET_KEY to take live cards.
        Refunds: digital kits are refundable within 7 days if the file was not downloaded.
      </p>
    </main>
  );
}
