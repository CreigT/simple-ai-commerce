import { getStore } from "@/lib/store";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  const store = getStore();
  return (
    <main className="section">
      <h1>Terms</h1>
      <div className="card">
        <p>Digital products are delivered immediately after a successful checkout. Because the file is available at once, refunds are handled case by case by the store owner.</p>
        <p>Memberships renew monthly until canceled in Stripe.</p>
        <p>The human owner is the legal owner and emergency override. Day-to-day storefront operation is automated.</p>
        <p>Contact: {store.supportEmail}</p>
      </div>
    </main>
  );
}
