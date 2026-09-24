import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
export async function POST(req: Request) {
  const stripe = getStripe();
  if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET) return NextResponse.json({ received: true, ignored: "demo" });
  const raw = await req.text();
  const sig = req.headers.get("stripe-signature") || "";
  try {
    stripe.webhooks.constructEvent(raw, sig, process.env.STRIPE_WEBHOOK_SECRET);
    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "webhook error" }, { status: 400 });
  }
}
