import { NextResponse } from "next/server";
export type Biz = { id: string; plan: string; usage_chats: number; usage_estimates: number; usage_limit_chats: number; usage_limit_estimates: number };
export function chatPaywall(business: Biz) {
  if (business.plan === "free" && business.usage_chats >= business.usage_limit_chats) {
    return NextResponse.json({ paywall: true, code: "FREE_LIMIT_REACHED", upgrade_url: "/pricing", message: "Free sample limit reached - 10/10 chats used. Upgrade to keep AI live." }, { status: 403 });
  }
  return null;
}
export function estimatePaywall(business: Biz) {
  if (business.plan === "free" && business.usage_estimates >= business.usage_limit_estimates) {
    return NextResponse.json({ paywall: true, code: "FREE_LIMIT_REACHED", upgrade_url: "/pricing", message: "Free sample limit reached - 5/5 estimates used. Upgrade to keep quoting." }, { status: 403 });
  }
  return null;
}
