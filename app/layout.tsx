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
  description: "RK Creations - Experts in Web & App Development, SEO, Digital Marketing & Video Editing. Get top-tier digital solutions to boost your business.",
  openGraph: {
    title: "RK Creations | Web & App Development | Digital Marketing & SEO",
    description: "RK Creations - Web & App Development, SEO, Digital Marketing & Video Editing Services.",
    url: "https://www.rkcreations.live/",
    siteName: "RK Creations",
    images: [
      {
        url: "https://rkcreation.live/og-image.jpg", // Make sure this image exists
        width: 1200,
        height: 630,
        alt: "RK Creations - Web & App Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RK Creations | Web & App Development | Digital Marketing & SEO",
    description: "RK Creations - Web & App Development, SEO, Digital Marketing & Video Editing Services.",
    images: ["https://rkcreation.live/og-image.jpg"],
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
  <Navbar />
  <div className="min-h-screen w-full bg-gradient-to-br from-[#8693AB] to-[#BDD4E7]">
    {children}
  </div>
  <Footer />
</>

      </body>
    </html>
  );
}
