// app/not-found.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-[#ff1493]/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 max-w-lg mx-auto"
      >
        {/* 404 Number */}
        <motion.div
          className="text-[120px] sm:text-[160px] md:text-[200px] font-bold text-[#ff1493]/10 leading-none select-none"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          404
        </motion.div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white -mt-12 sm:-mt-16 mb-4">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-gray-400 mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#ff1493] to-pink-600 text-white font-semibold rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-[#ff1493]/25 transition-all text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Home className="w-4 h-4" />
              Go Home
            </motion.button>
          </Link>

          <button
            onClick={() => typeof window !== 'undefined' && window.history.back()}
            className="px-6 py-3 border border-white/20 text-gray-300 font-medium rounded-full flex items-center gap-2 hover:border-white/40 hover:text-white transition-all text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </section>
  );
}