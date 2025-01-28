import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#252422",
        brown: "#403D39",
        tan: "#CCC5B9",
        red: "#EB5E28",
        white: "#FFFCF2"
      },
      fontFamily: {
        sans: ["var(--font-rubik)"],
        serif: ["var(--font-libre-baskerville)"],
        mono: ["var(--font-space-mono)"]
      }
    },
  },
  plugins: [],
} satisfies Config;
