import { notFound } from "next/navigation";
import { formatPrice, getStore } from "@/lib/store";
import { getProduct } from "@/lib/products";
import BuyButton from "./buy-button";

export default function ProductPage({ params }) {
  const product = getProduct(params.id);
  if (!product) notFound();
  const store = getStore();

  return (
    <main className="hero" style={{ alignItems: "start" }}>
      <div>
        {product.badge ? <div className="badge">{product.badge}</div> : null}
        <h1>{product.name}</h1>
        <p className="lede">{product.description}</p>
        <p className="muted" style={{ marginTop: 18 }}>{product.deliverable}</p>
      </div>
      <aside className="hero-card">
        <div className="tiny">Price</div>
        <div className="price-lg">
          {formatPrice(product.price, product.currency)}
          {product.type === "recurring" ? <span className="tiny"> / month</span> : null}
        </div>
        {store.demoMode ? (
          <div className="notice">
            Demo mode is on. No Stripe keys found, so checkout will unlock a sample file without charging a card.
          </div>
        ) : (
          <p className="tiny">Secure checkout with Stripe.</p>
        )}
        <BuyButton productId={product.id} />
        <p className="tiny" style={{ marginTop: 12 }}>
          Questions? {store.supportEmail}
        </p>
      </aside>
    </main>
  );
}
