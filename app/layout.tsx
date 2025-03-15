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
  title: "RK Creations - Best Web & App Development | Digital Solutions",
  description: "RK Creations is a top-tier web and app development agency offering expert digital solutions, including UI/UX design, SEO, digital marketing, and video editing. Build your brand with cutting-edge technology and creative solutions.",
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
