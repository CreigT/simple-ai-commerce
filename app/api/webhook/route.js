import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(request) {
  const stripe = getStripe();
  if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ received: true, ignored: "demo" });
  }

  const raw = await request.text();
  const sig = request.headers.get("stripe-signature");
  try {
    const event = stripe.webhooks.constructEvent(raw, sig, process.env.STRIPE_WEBHOOK_SECRET);
    console.log("stripe_event", event.type, event.id);
    return NextResponse.json({ received: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
