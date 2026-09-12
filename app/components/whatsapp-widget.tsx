"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X, MessageSquare } from "lucide-react";

export default function WhatsAppWidget() {
  const phoneNumber = "+919667048566";
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Interactive Tooltip Badge */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-3 relative bg-slate-900 border border-green-500/40 text-white text-xs px-4 py-2.5 rounded-2xl shadow-xl shadow-green-500/20 backdrop-blur-xl flex items-center gap-2 max-w-[220px]"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            <span className="font-semibold text-gray-200">
              Need a custom website? Chat on WhatsApp!
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-white ml-1 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          "Hi RK Creations! I am browsing your website and want to get a free website quote."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-green-500/40 border-2 border-white/20 group cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring background */}
        <span className="absolute -inset-1 rounded-full bg-green-500 opacity-75 animate-ping -z-10" />

        <FaWhatsapp className="text-3xl text-white group-hover:scale-110 transition-transform" />
      </motion.a>
    </div>
  );
}
