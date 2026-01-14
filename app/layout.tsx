import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        url: "https://rkcreations.live/og-image.jpg", // Corrected URL spelling
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
    images: ["https://rkcreations.live/og-image.jpg"], // Corrected spelling
    creator: "@rkcreations", // (optional) if you have a Twitter account
  },
  metadataBase: new URL("https://rkcreations.live"), // Optional but helpful
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 👇 Custom Favicon Link Here */}
        <link rel="icon" href="http://localhost:3000/_next/image?url=%2Frklogo.PNG&w=256&q=75" type="image/png" />
        <title>My Custom App</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
          <Navbar />
          <div
            className="pt-[13px] min-h-screen w-full bg-gradient-to-br from-[#0f172a]
to-[#334155] transition-all duration-1000 ease-in-out"
          >
            {children}
          </div>

          <Footer />
        </>
      </body>
    </html>
  );
}
