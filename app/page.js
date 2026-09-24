import { getStore, formatPrice } from "@/lib/store";
import { listProducts } from "@/lib/products";

export default function HomePage() {
  const store = getStore();
  const products = listProducts();
  const featured = products[0];

  return (
    <main>
      <section className="hero">
        <div>
          <div className="pill">Simple store · fair paywall · deploy in minutes</div>
          <h1>Sell digital goods.<br />Let agents run the shop.</h1>
          <p className="lede">
            {store.tagline}. Customers see a clean store. You add a few variables
            and publish. Payments, unlocks, and the public pages are already built.
          </p>
          <div className="row">
            <a className="btn" href="/shop">Browse products</a>
            <a className="btn ghost" href="#how">See how it works</a>
          </div>
        </div>
        <aside className="hero-card">
          <div className="badge">{featured.badge || "Featured"}</div>
          <h3 className="serif" style={{ fontSize: 28, margin: "0 0 8px" }}>{featured.name}</h3>
          <p className="muted">{featured.summary}</p>
          <div className="price-lg">{formatPrice(featured.price, featured.currency)}</div>
          <p className="tiny">{featured.deliverable}</p>
          <a className="btn wide" href={`/product/${featured.id}`} style={{ marginTop: 16 }}>
            View and buy
          </a>
        </aside>
      </section>

      <section className="section" id="how">
        <h2>How the store works</h2>
        <p className="muted">Three steps. No dashboard maze.</p>
        <div className="grid-3">
          <article className="card">
            <div className="badge">01</div>
            <h3>Pick a product</h3>
            <p className="muted">Clear names, honest prices, and what the customer actually receives.</p>
          </article>
          <article className="card">
            <div className="badge">02</div>
            <h3>Pay the wall</h3>
            <p className="muted">Stripe Checkout when keys are set. A safe demo checkout when they are not.</p>
          </article>
          <article className="card">
            <div className="badge">03</div>
            <h3>Unlock the file</h3>
            <p className="muted">A signed access token opens the download. Tokens expire. Every purchase is logged.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>On the shelf</h2>
        <p className="muted">Reasonable prices. Instant delivery. Edit products in one JSON file.</p>
        <div className="grid-3">
          {products.map((product) => (
            <article className="card" key={product.id}>
              {product.badge ? <div className="badge">{product.badge}</div> : <div className="badge">Digital</div>}
              <h3>{product.name}</h3>
              <p className="muted">{product.summary}</p>
              <p className="serif" style={{ fontSize: 28, margin: "10px 0" }}>
                {formatPrice(product.price, product.currency)}
                {product.type === "recurring" ? <span className="tiny"> / mo</span> : null}
              </p>
              <a className="btn ghost wide" href={`/product/${product.id}`}>Open</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
