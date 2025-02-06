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
        black: "#353535",
        green: "#3C6E71",
        grey: "#D9D9D9",
        blue: "#284B63",
        white: "#ffffff",
        red: "#D65790",
        orange: "#EE9480"
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
