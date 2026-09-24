import { formatPrice } from "@/lib/store";
import { listProducts } from "@/lib/products";

export const metadata = { title: "Shop" };

export default function ShopPage() {
  const products = listProducts();
  return (
    <main className="section">
      <h1 style={{ fontSize: 56, marginBottom: 8 }}>Shop</h1>
      <p className="muted">Digital products with a simple paywall. Buy once, unlock instantly.</p>
      <div className="grid-3" style={{ marginTop: 28 }}>
        {products.map((product) => (
          <article className="card" key={product.id}>
            {product.badge ? <div className="badge">{product.badge}</div> : null}
            <h3>{product.name}</h3>
            <p className="muted">{product.summary}</p>
            <p className="serif" style={{ fontSize: 30 }}>
              {formatPrice(product.price, product.currency)}
              {product.type === "recurring" ? <span className="tiny"> / month</span> : null}
            </p>
            <a className="btn wide" href={`/product/${product.id}`}>View product</a>
          </article>
        ))}
      </div>
    </main>
  );
}
