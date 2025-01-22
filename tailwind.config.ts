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
        jet: "#373737",
        pink: "#E85D75",
        brown: "#A37871",
        blue: "#4381C1",
        darkblue: "#336699",
        lightblue: "#D7E4F2",
        white: "#EEF0EB"
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
