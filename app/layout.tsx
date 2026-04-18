import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/whatsapp/WhatsApp";
import { CartProvider } from "../context/CartContext";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gaujanani.in"), 

  title: {
    default: "Janani Farms - Natural Desi Cow Products",
    template: "%s | Janani Farms",
  },

  description:
    "Buy natural, chemical-free desi cow products from Janani Farms. Pure, sustainable, and rooted in tradition.",

  keywords: [
    "desi cow products",
    "organic ghee",
    "gau products",
    "natural farming india",
    "janani farms",
  ],

  authors: [{ name: "Janani Farms" }],
  creator: "Janani Farms",
  publisher: "Janani Farms",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Janani Farms",
    description:
      "Natural desi cow products crafted with purity and tradition.",
    url: "https://gaujanani.in",
    siteName: "Janani Farms",
    images: [
      {
        url: "/images/og.jpg", // 🔥 make sure this exists
        width: 1200,
        height: 630,
        alt: "Janani Farms",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Janani Farms",
    description:
      "Natural desi cow products crafted with purity and tradition.",
    images: ["/images/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}