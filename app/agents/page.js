import { getStore } from "@/lib/store";
import { listProducts } from "@/lib/products";

export const metadata = { title: "Agents" };

const agents = [
  { name: "Storefront Agent", job: "Keeps landing pages, prices, and product copy public." },
  { name: "Checkout Agent", job: "Starts Stripe sessions or demo unlocks." },
  { name: "Access Agent", job: "Signs and verifies download tokens." },
  { name: "Support Agent", job: "Points customers to unlock and the support email." },
];

export default function AgentsPage() {
  const store = getStore();
  const products = listProducts();

  return (
    <main className="section">
      <h1 style={{ fontSize: 56 }}>Agents on duty</h1>
      <p className="muted">
        This page is a simple status board. The human owner is not the operator.
        Change store variables, then redeploy.
      </p>
      <div className="notice">
        Status: <strong>{store.agentStatus}</strong> · Catalog size: {products.length} · Mode: {store.demoMode ? "demo checkout" : "live Stripe"}
      </div>
      <div className="grid-3">
        {agents.map((agent) => (
          <article className="card" key={agent.name}>
            <div className="pill"><span className="dot" /> live</div>
            <h3>{agent.name}</h3>
            <p className="muted">{agent.job}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
