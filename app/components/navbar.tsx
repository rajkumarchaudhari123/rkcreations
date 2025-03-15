"use client";
"use client";
import React from "react";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 backdrop-blur-xl shadow-3xl border-b border-gray-700 p-3 rounded-b-3xl transition-all duration-500">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-center max-w-7xl mx-auto"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white drop-shadow-2xl tracking-widest uppercase"
        >
          RK Creation
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "Services", "About", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="relative group"
            >
              <Link href={`/${item.toLowerCase()}`} className="text-white text-lg font-semibold tracking-wide hover:text-black transition relative">
                {item}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 -bottom-1 h-1 bg-black group-hover:w-full transition-all duration-500"
                ></motion.span>
              </Link>
            </motion.li>
          ))}

          {/* Portfolio Dropdown */}
          <motion.li
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsPortfolioOpen(true)}
            onMouseLeave={() => setIsPortfolioOpen(false)}
          >
            <div className="flex items-center text-white text-lg font-semibold tracking-wide hover:text-black transition relative">
              Portfolio <ChevronDown className="ml-2 w-4 h-4" />
            </div>
            {isPortfolioOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-8 left-0 bg-white text-black shadow-lg rounded-lg w-48 p-2 space-y-2"
              >
                {["Video Editing", "Web", "Graphics", "Digital Marketing", "UI/UX"].map((category, index) => (
                  <li key={index}>
                    <Link href={`/${category.toLowerCase().replace(/ /g, "-")}`} className="block px-4 py-2 hover:bg-gray-200 rounded-md">
                      {category}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-pink-600 hover:from-pink-600 hover:to-yellow-500 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:hidden bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 bg-opacity-95 rounded-xl mt-3 shadow-2xl overflow-hidden border border-gray-700 transition-all duration-500"
        >
          <ul className="flex flex-col p-4 space-y-4">
            {["Home", "Services", "About", "Contact"].map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }}>
                <Link href={`/${item.toLowerCase()}`} className="block text-center text-white text-lg font-semibold hover:text-black transition-all duration-300">
                  {item}
                </Link>
              </motion.li>
            ))}

            {/* Mobile Portfolio Dropdown */}
            <motion.li className="relative">
              <button
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                className="block w-full text-center text-white text-lg font-semibold hover:text-black transition-all duration-300"
              >
                Portfolio <ChevronDown className="inline w-4 h-4" />
              </button>
              {isPortfolioOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 bg-white text-black shadow-lg rounded-lg p-2 space-y-2"
                >
                  {["Video Editing", "Web", "Graphics", "Digital Marketing", "UI/UX"].map((category, index) => (
                    <li key={index}>
                      <Link href={`/${category.toLowerCase().replace(/ /g, "-")}`} className="block px-4 py-2 hover:bg-gray-200 rounded-md">
                        {category}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
