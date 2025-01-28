import type { Metadata } from "next";
import { Libre_Baskerville, Rubik, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"



const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fafo = localFont({
  src: [
    {
      path: "./fafo-sans-regular.woff2",
      weight: "400"
    },
    {
      path: "./fafo-sans-bold.woff2",
      weight: "700"
    }
  ],
  variable: "--font-fafo"
})

export const metadata: Metadata = {
  title: "Michael's Corner",
  description: "A Showcase of Michael's Work and Interests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${rubik.variable} ${spaceMono.variable} ${fafo.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
