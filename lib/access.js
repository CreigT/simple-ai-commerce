import crypto from "crypto";

function secret() {
  return process.env.ACCESS_SECRET || "dev-only-change-me";
}

export function createAccessToken(productId, days = 30) {
  const exp = Date.now() + days * 24 * 60 * 60 * 1000;
  const payload = `${productId}.${exp}`;
  const sig = crypto.createHmac("sha256", secret()).update(payload).digest("hex");
  return Buffer.from(`${payload}.${sig}`).toString("base64url");
}

export function verifyAccessToken(token) {
  try {
    const raw = Buffer.from(token, "base64url").toString("utf8");
    const [productId, exp, sig] = raw.split(".");
    if (!productId || !exp || !sig) return null;
    const payload = `${productId}.${exp}`;
    const expected = crypto.createHmac("sha256", secret()).update(payload).digest("hex");
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
    if (Number(exp) < Date.now()) return null;
    return { productId, exp: Number(exp) };
  } catch {
    return null;
  }
}
