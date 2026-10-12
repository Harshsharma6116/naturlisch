import type { Metadata } from "next";
import { Abril_Fatface, Montserrat } from "next/font/google";
import "./globals.css";

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Natürlisch | Real Beauty",
  description: "Authentic personal care and a genuine approach to aesthetics with natural products.",
  icons: {
    icon: [
      { url: "/icon.svg?v=7", type: "image/svg+xml" },
      { url: "/favicon.ico?v=7", sizes: "any" },
      { url: "/icon.png?v=7", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png?v=7", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=7",
  },
  manifest: "/manifest.json",
};

import AnnouncementTicker from "@/components/common/AnnouncementTicker";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${abrilFatface.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <AnnouncementTicker />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
