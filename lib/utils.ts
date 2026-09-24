import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export const defaultPriceSheet = { standard: { "1b1b": 120, "2b2b": 165, "3b2b": 195 }, deep: { "1b1b": 180, "2b2b": 240 }, move_out: { "1b1b": 200, "2b2b": 280 }, addons: { fridge: 35, oven: 35, baseboards: 25, windows: 50 } };
