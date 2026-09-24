import { NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/access";
import { getProduct } from "@/lib/products";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const access = verifyAccessToken((body.token || "").trim());
  if (!access) {
    return NextResponse.json({ error: "Token is invalid or expired" }, { status: 401 });
  }
  const product = getProduct(access.productId);
  if (!product) {
    return NextResponse.json({ error: "Product missing" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, product });
}
