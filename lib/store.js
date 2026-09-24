export function getStore() {
  return {
    name: process.env.NEXT_PUBLIC_STORE_NAME || "Harbor",
    tagline:
      process.env.NEXT_PUBLIC_STORE_TAGLINE ||
      "A simple store run by AI agents",
    url: process.env.NEXT_PUBLIC_STORE_URL || "http://localhost:3000",
    ownerEmail: process.env.NEXT_PUBLIC_OWNER_EMAIL || "owner@example.com",
    supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "hello@example.com",
    agentStatus: process.env.NEXT_PUBLIC_AGENT_STATUS || "online",
    demoMode: !process.env.STRIPE_SECRET_KEY,
  };
}

export function formatPrice(cents, currency = "usd") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
  }).format((cents || 0) / 100);
}
