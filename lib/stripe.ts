import Stripe from "stripe";
export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) return null;
  return new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
}
export const plans = {
  free: { name: "Free", amount: 0 },
  starter: { name: "Starter", amount: 9700, priceId: process.env.STRIPE_PRICE_STARTER },
  pro: { name: "Pro", amount: 19700, priceId: process.env.STRIPE_PRICE_PRO },
} as const;
