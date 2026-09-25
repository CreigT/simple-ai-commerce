import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function slugify(value: string) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 48); }
export const defaultPriceSheet = {"standard":{"1b1b":130,"2b1b":150,"2b2b":175,"3b2b":205,"3b3b":250,"4b3b":295},"deep":{"1b1b":190,"2b1b":220,"2b2b":260,"3b2b":310,"3b3b":365,"4b3b":420},"move_in_out":{"1b1b":210,"2b1b":250,"2b2b":300,"3b2b":360,"3b3b":420,"4b3b":480},"addons":{"fridge":35,"oven":35,"baseboards":30,"interior_windows":60,"laundry":35,"dishes":25}};
