import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import VisitorTracker from "./components/visitor-tracker";

export const metadata: Metadata = {
  title: "RK Creations | Web & App Development | Digital Marketing & SEO",
  description:
    "RK Creations - Experts in Web & App Development, SEO, Digital Marketing & Video Editing. Get top-tier digital solutions to boost your business.",
  openGraph: {
    title: "RK Creations | Web & App Development | Digital Marketing & SEO",
    description:
      "RK Creations - Web & App Development, SEO, Digital Marketing & Video Editing Services.",
    url: "https://www.rkcreations.live/",
    siteName: "RK Creations",
    images: [
      {
        url: "https://rkcreations.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RK Creations - Web & App Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RK Creations | Web & App Development | Digital Marketing & SEO",
    description:
      "RK Creations - Web & App Development, SEO, Digital Marketing & Video Editing Services.",
    images: ["https://rkcreations.live/og-image.jpg"],
    creator: "@rkcreations",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://rkcreations.live"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="font-sans antialiased bg-slate-950 text-white">
        <VisitorTracker />
        <Navbar />
        <div className="min-h-screen w-full bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#0b0f19] transition-all duration-500">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
