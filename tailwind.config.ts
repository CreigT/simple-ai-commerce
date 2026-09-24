import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: "#0F6B5F", dark: "#0A4A42", mint: "#E8F5E9" },
      },
    },
  },
  plugins: [],
};
export default config;
