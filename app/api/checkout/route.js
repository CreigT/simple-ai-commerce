import { NextResponse } from "next/server";
import { getProduct } from "@/lib/products";
import { getStore } from "@/lib/store";
import { getStripe } from "@/lib/stripe";
import { createAccessToken } from "@/lib/access";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const product = getProduct(body.productId);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const store = getStore();
  const headerOrigin = request.headers.get("origin");
  const origin = (headerOrigin || store.url).replace(/\/$/, "");
  const stripe = getStripe();

  if (!stripe) {
    const token = createAccessToken(product.id);
    return NextResponse.json({
      url: `${origin}/success?token=${token}&product=${product.id}&demo=1`,
      mode: "demo",
    });
  }

  const token = createAccessToken(product.id);
  const session = await stripe.checkout.sessions.create({
    mode: product.type === "recurring" ? "subscription" : "payment",
    customer_email: body.email || undefined,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: product.currency,
          unit_amount: product.price,
          product_data: { name: product.name, description: product.summary },
          ...(product.type === "recurring"
            ? { recurring: { interval: product.interval || "month" } }
            : {}),
        },
      },
    ],
    metadata: { productId: product.id },
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&product=${product.id}&token=${token}`,
    cancel_url: `${origin}/product/${product.id}`,
  });

  return NextResponse.json({ url: session.url, mode: "live" });
}
