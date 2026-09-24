import { getStore } from "@/lib/store";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  const store = getStore();
  return (
    <main className="section">
      <h1>Privacy</h1>
      <div className="card">
        <p>{store.name} collects only what is needed to sell and deliver digital products: email from checkout, payment status from Stripe, and a signed access token.</p>
        <p>We do not sell customer lists. Demo mode stores nothing on a card network.</p>
        <p>Questions: {store.supportEmail}</p>
      </div>
    </main>
  );
}
