"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Sparkles, Star, ShieldCheck, Calculator } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function PricingSection() {
  const phoneNumber = "+919667048566";
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const pricingPlans = [
    {
      id: "basic",
      name: "Basic Website",
      price: "₹15,000",
      originalPrice: "₹18,000",
      discount: "17% OFF",
      popular: false,
      tagline: "Essential digital presence for small businesses & personal brands",
      gradient: "from-blue-600 to-indigo-600",
      borderGlow: "group-hover:border-blue-400/50",
      features: [
        "1 to 5 Fully Responsive Custom Pages",
        "Mobile & Tablet 100% Optimized",
        "Contact Form & Direct WhatsApp Chat",
        "Fast Page Speed & Basic SEO Setup",
        "Social Media & Google Maps Integration",
        "Free SSL Certificate Setup",
        "1 Month Free Maintenance & Support",
      ],
      whatsappMsg: "Hi RK Creations! I want to start with the Basic Website plan (₹15,000). Please share details."
    },
    {
      id: "business",
      name: "Business Website",
      price: "₹20,000",
      originalPrice: "₹25,000",
      discount: "20% OFF",
      popular: true,
      tagline: "Best for growing startups, agencies & professional companies",
      gradient: "from-[#ff1493] via-pink-600 to-purple-600",
      borderGlow: "border-[#ff1493]/50 shadow-[0_0_25px_rgba(255,20,147,0.3)]",
      features: [
        "Up to 10 Dynamic High-Converting Pages",
        "Modern Custom UI/UX & Sleek Animations",
        "Dynamic Blog / Portfolio Showcase",
        "Advanced On-Page & Technical SEO",
        "Lead Capture Forms with Email Alerts",
        "Google Analytics & Search Console Setup",
        "Admin Dashboard / CMS Management",
        "3 Months Free Maintenance & Support",
      ],
      whatsappMsg: "Hi RK Creations! I am interested in the Business Website plan (₹20,000). Let's connect!"
    },
    {
      id: "premium",
      name: "Premium / E-Commerce",
      price: "₹30,000",
      originalPrice: "₹38,000",
      discount: "21% OFF",
      popular: false,
      tagline: "Complete enterprise solution for e-commerce, custom web apps & AI",
      gradient: "from-cyan-500 via-blue-600 to-indigo-600",
      borderGlow: "group-hover:border-cyan-400/50",
      features: [
        "Unlimited Pages / Custom Full-Stack Web App",
        "E-Commerce Store & Payment Gateway Setup",
        "AI Chatbot / Automation Integration",
        "3D Graphics & Framer Motion Animations",
        "Database Architecture & User Auth",
        "Google Business & Local SEO Optimization",
        "Priority 24/7 Dedicated Developer Support",
        "6 Months Free Maintenance & Backups",
      ],
      whatsappMsg: "Hi RK Creations! I am interested in the Premium / E-Commerce plan (₹30,000). Please contact me."
    }
  ];

  const addonsList = [
    { id: "payment", name: "Payment Gateway", price: 2500 },
    { id: "ai_bot", name: "AI Chatbot Integration", price: 3500 },
    { id: "logo", name: "Brand Logo & Design Kit", price: 2000 },
    { id: "seo_pro", name: "PRO Monthly SEO Package", price: 4000 },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const calculatedBasePrice = 15000;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = addonsList.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const calculatedTotal = calculatedBasePrice + addonsTotal;

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden" id="pricing">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#ff1493]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ff1493]/15 to-cyan-500/15 border border-[#ff1493]/30 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#ff1493]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] to-cyan-300">
              TRANSPARENT PRICING
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
          >
            Affordable Plans For <span className="bg-gradient-to-r from-[#ff1493] via-pink-400 to-cyan-400 bg-clip-text text-transparent">Every Business</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto"
          >
            High-quality custom websites starting from <span className="text-white font-bold underline decoration-[#ff1493]">₹15,000 to ₹30,000</span>. No hidden costs. 100% Satisfaction guaranteed.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between backdrop-blur-xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-gray-900/90 via-slate-900/95 to-black/90 " + plan.borderGlow
                  : "bg-gradient-to-b from-gray-900/60 to-black/60 border-white/10 hover:border-blue-400/40"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ff1493] to-pink-500 text-white text-xs font-bold shadow-lg shadow-[#ff1493]/40 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  MOST POPULAR
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-300 border border-green-500/30">
                    {plan.discount}
                  </span>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm mb-6 min-h-[40px]">
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-3">
                    <span className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-lg line-through">
                      {plan.originalPrice}
                    </span>
                  </div>
                  <span className="text-xs text-cyan-400 font-medium mt-1 block">
                    One-time payment • No monthly fees
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  <p className="text-xs font-bold tracking-wider text-gray-300 uppercase">What&apos;s Included:</p>
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(plan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold text-sm sm:text-base text-white flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#ff1493] to-pink-500 hover:shadow-[#ff1493]/30"
                        : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-cyan-500/20"
                    }`}
                  >
                    <FaWhatsapp className="text-lg" />
                    Select Plan on WhatsApp
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Custom Package Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-blue-950/60 via-slate-900/60 to-purple-950/60 border border-blue-400/30 p-8 sm:p-10 backdrop-blur-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-cyan-300 font-bold mb-2">
                <Calculator className="w-5 h-5" />
                <span>BUILD YOUR CUSTOM PACKAGE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Need Specific Custom Features?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6">
                Select additional modules to estimate your project cost in real time.
              </p>

              {/* Addons Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? "bg-[#ff1493]/20 border-[#ff1493] text-white"
                          : "bg-blue-900/20 border-white/10 text-gray-300 hover:border-white/30"
                      }`}
                    >
                      <span className="text-sm font-semibold">{addon.name}</span>
                      <span className="text-xs font-bold text-cyan-300">+₹{addon.price.toLocaleString()}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Box & Action */}
            <div className="w-full lg:w-80 bg-black/60 rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center justify-center">
              <span className="text-xs text-gray-400 uppercase font-semibold">Estimated Total Cost</span>
              <div className="text-4xl font-black text-white my-2">
                ₹{calculatedTotal.toLocaleString()}
              </div>
              <p className="text-xs text-cyan-400 mb-6">Base Package (₹15,000) + Add-ons</p>

              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  `Hi RK Creations! I created a custom website plan estimation of ₹${calculatedTotal.toLocaleString()} with features: ${
                    selectedAddons.length > 0 ? selectedAddons.join(", ") : "Basic Website"
                  }. Let's discuss!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 cursor-pointer"
                >
                  <FaWhatsapp className="text-base" />
                  Get Custom Quote
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Guarantee Banner */}
        <div className="mt-16 text-center grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
            <Zap className="w-8 h-8 text-[#ff1493] mb-3" />
            <h4 className="text-white font-bold text-base mb-1">Superfast Delivery</h4>
            <p className="text-gray-400 text-xs">Get your website live in 3 to 7 working days.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
            <ShieldCheck className="w-8 h-8 text-cyan-400 mb-3" />
            <h4 className="text-white font-bold text-base mb-1">100% Code Ownership</h4>
            <p className="text-gray-400 text-xs">Full source code, domain, and server rights are yours.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
            <Sparkles className="w-8 h-8 text-purple-400 mb-3" />
            <h4 className="text-white font-bold text-base mb-1">Free Ongoing Support</h4>
            <p className="text-gray-400 text-xs">Dedicated technical support to help you scale seamlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
