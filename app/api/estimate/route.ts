import { NextResponse } from "next/server";
import { getBusinessBySlug, incrementUsage } from "@/lib/business";
import { getOpenAI } from "@/lib/openai";
import { estimatorPrompt } from "@/lib/prompts";
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const business = await getBusinessBySlug(body.slug || "demo-clean");
  if (!business) return NextResponse.json({ error: "Business missing" }, { status: 404 });
  if (business.plan === "free" && business.usage_estimates >= business.usage_limit_estimates) {
    return NextResponse.json({ error: "PAYWALL", paywall: true, message: "Free limit reached. Upgrade to keep AI live." }, { status: 403 });
  }
  const fallback = { base_price: 165, mess_level: 3, mess_reason: "Typical lived-in home", recommended_service: body.service_type || "deep", final_price: 240, upsells: [{ name: "Inside Fridge", price: 35, reason: "Common add-on" }], customer_message: "Got it! For your 2/2, Deep Clean $240. Add Fridge $35? I can hold Fri 10am or Sat 9am. $50 deposit holds it." };
  const openai = getOpenAI();
  let payload = fallback;
  if (openai) {
    const completion = await openai.chat.completions.create({ model: "gpt-4o", response_format: { type: "json_object" }, messages: [{ role: "system", content: estimatorPrompt({ business_name: business.business_name, price_sheet: business.price_sheet, bedrooms: Number(body.bedrooms || 2), bathrooms: Number(body.bathrooms || 2), sqft: Number(body.sqft || 0), service_type: String(body.service_type || "standard") }) }, { role: "user", content: "Return JSON estimate only." }] });
    try { payload = JSON.parse(completion.choices[0]?.message?.content || "{}"); } catch { payload = fallback; }
  }
  await incrementUsage(business.id, "usage_estimates", business.usage_estimates);
  return NextResponse.json(payload);
}
