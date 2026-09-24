import { NextResponse } from "next/server";
import { getStripe, plans } from "@/lib/stripe";
export async function POST(req: Request) {
  const { plan } = await req.json().catch(() => ({ plan: "starter" }));
  const stripe = getStripe();
  const origin = process.env.NEXT_PUBLIC_APP_URL || "https://simple-ai-commerce.vercel.app";
  if (!stripe) return NextResponse.json({ url: `${origin}/pricing?demo=1&plan=${plan}` });
  const selected = plan === "pro" ? plans.pro : plans.starter;
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: selected.priceId ? [{ price: selected.priceId, quantity: 1 }] : [{ quantity: 1, price_data: { currency: "usd", unit_amount: selected.amount, recurring: { interval: "month" }, product_data: { name: `Service AI ${selected.name}` } } }],
    success_url: `${origin}/dashboard?upgraded=1`,
    cancel_url: `${origin}/pricing`,
  });
  return NextResponse.json({ url: session.url });
}
