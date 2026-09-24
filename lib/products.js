import fs from "fs";
import path from "path";

export function listProducts() {
  const file = path.join(process.cwd(), "config", "products.json");
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function getProduct(id) {
  return listProducts().find((item) => item.id === id) || null;
}
