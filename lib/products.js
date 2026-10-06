import { readFileSync } from "fs";
import path from "path";

function loadProducts() {
  const file = path.join(process.cwd(), "config", "products.json");
  const raw = readFileSync(file, "utf8");
  const products = JSON.parse(raw);
  return Array.isArray(products) ? products : [];
}

export function listProducts() {
  return loadProducts();
}

export function getProduct(id) {
  if (!id) return null;
  return loadProducts().find((product) => product.id === id) || null;
}

export function formatPrice(product) {
  const dollars = (Number(product.price) || 0) / 100;
  const amount = dollars.toLocaleString("en-US", {
    style: "currency",
    currency: (product.currency || "usd").toUpperCase(),
  });
  return product.type === "recurring" ? `${amount}/mo` : amount;
}
