import { NextResponse } from "next/server";
import { getBusinessById, incrementUsage } from "@/lib/business";
import { getOpenAI } from "@/lib/openai";
import { frontDeskPrompt } from "@/lib/prompts";
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const business = await getBusinessById(body.businessId || "demo");
  if (!business) return NextResponse.json({ error: "Business missing" }, { status: 404 });
  if (business.plan === "free" && business.usage_chats >= business.usage_limit_chats) {
    return NextResponse.json({ error: "PAYWALL", paywall: true, message: "Free limit reached. Upgrade to keep AI live." }, { status: 403 });
  }
  const openai = getOpenAI();
  let reply = "Got it — send name, address, beds/baths, and 2 photos. Instant quote next. $50 holds the slot.";
  if (openai) {
    const completion = await openai.chat.completions.create({ model: "gpt-4o", messages: [{ role: "system", content: frontDeskPrompt({ ...business, city: (business.service_area || [])[0] }) }, { role: "user", content: String(body.message || "") }], max_tokens: 120 });
    reply = completion.choices[0]?.message?.content || reply;
  }
  await incrementUsage(business.id, "usage_chats", business.usage_chats);
  return NextResponse.json({ reply, used: business.usage_chats + 1, limit: business.usage_limit_chats });
}
