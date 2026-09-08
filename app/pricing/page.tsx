"use client";

import React from "react";
import PricingSection from "../components/pricing";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-20 overflow-hidden">
      {/* Page Header */}
      <div className="relative z-10 pt-12 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-semibold tracking-widest text-xs sm:text-sm uppercase">
            PLANS & PACKAGES
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-2 mb-4 bg-gradient-to-r from-blue-100 via-cyan-100 to-pink-200 bg-clip-text text-transparent">
            Choose The Perfect Plan For Your Web Project
          </h1>
        </motion.div>
      </div>

      {/* Pricing Section */}
      <PricingSection />
    </div>
  );
}
