"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PhoneCall, Sparkles, CheckCircle2, Send, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function LeadPopup() {
  const phoneNumber = "+919667048566";
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Business Website (₹25,000)",
  });

  useEffect(() => {
    // Open popup after 6 seconds if not dismissed previously in session
    const dismissed = sessionStorage.getItem("rk_lead_popup_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("rk_lead_popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);

    try {
      // 1. Send Lead payload to Telegram Alert API
      await fetch("/api/visitor-alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "lead",
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: "Requested 1-Click Fast Callback",
        }),
      });

      // 2. Also open WhatsApp for direct conversation
      const whatsappMsg = `Hi RK Creations! My name is ${formData.name} (${formData.phone}). I am interested in: ${formData.service}. Please call me back!`;
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`;
      window.open(whatsappURL, "_blank");

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        handleClose();
      }, 4000);
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Small Sticky Callback Trigger Button on Bottom-Left */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#ff1493] to-pink-600 text-white text-xs font-bold shadow-lg shadow-[#ff1493]/30 flex items-center gap-2 border border-white/20 backdrop-blur-md cursor-pointer"
        >
          <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
          <span>Get Free Callback</span>
        </motion.button>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10"
            >
              {/* Decorative Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff1493]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800/80 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Callback Requested!</h3>
                  <p className="text-gray-300 text-sm">
                    Thank you <span className="text-cyan-300 font-semibold">{formData.name}</span>. Our technical team will call you back on <span className="text-green-400 font-bold">{formData.phone}</span> within 15 minutes!
                  </p>
                </div>
              ) : (
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4 text-[#ff1493]" />
                    <span>Instant 1-Click Callback</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                    Get Free Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] to-cyan-400">Estimate & Advice</span>
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-6">
                    Enter your name and phone number for a free 5-minute consultation.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase">
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase">
                        Select Requirement
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Basic Website (₹15,000)">Basic Website (₹15,000)</option>
                        <option value="Business Website (₹25,000)">Business Website (₹25,000)</option>
                        <option value="Premium / E-Commerce (₹30,000)">Premium / E-Commerce (₹30,000)</option>
                        <option value="Custom Web / Mobile App">Custom Web / Mobile App</option>
                      </select>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-[#ff1493] via-pink-600 to-cyan-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#ff1493]/30 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Callback & Chat on WhatsApp</span>
                        </>
                      )}
                    </motion.button>
                  </form>

                  <div className="mt-4 text-center flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                    <span>Your privacy is 100% protected. No spam calls.</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
