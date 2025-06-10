"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const navItems = ["Home", "About", "Contact"];
  const portfolioItems = [
    "Video Editing",
    "Web",
    "Graphics",
    "Digital Marketing",
    "UI/UX",
  ];

  if (!mounted) return null;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-lg shadow-md border-b border-white/10 px-4 py-3">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center max-w-7xl mx-auto"
      >
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ rotate: 6, scale: 1.05 }}
            className="cursor-pointer"
          >
            <Image
              src="/rklogo.PNG"
              alt="RK Logo"
              className="bg-white rounded-3xl"
              width={100}
              height={80}
            />
          </motion.div>
        </Link>

        {/* Theme Toggle + Desktop Menu */}
        <div className="flex items-center space-x-6">
          {/* Theme Switch */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-white hover:text-yellow-400 transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            {navItems.map((item, index) => {
              const href = `/${item.toLowerCase()}`;
              const isActive =
                pathname === href || (pathname === "/" && item === "Home");
              return (
                <li key={index} className="relative group">
                  <Link
                    href={href}
                    className={`text-lg font-medium tracking-wide transition duration-200 ${
                      isActive
                        ? "text-pink-400"
                        : "text-white hover:text-pink-300"
                    }`}
                  >
                    {item}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-pink-400 shadow-[0_0_8px_#ec4899] rounded-full"
                      />
                    )}
                  </Link>
                </li>
              );
            })}

            {/* Portfolio Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setIsPortfolioOpen(true)}
              onMouseLeave={() => setIsPortfolioOpen(false)}
            >
              <div className="flex items-center text-white font-medium cursor-pointer hover:text-pink-300 transition">
                Portfolio <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              {isPortfolioOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-7 left-0 w-48 bg-white text-black shadow-xl rounded-xl p-2 z-50"
                >
                  {portfolioItems.map((category, index) => {
                    const href = `/${category
                      .toLowerCase()
                      .replace(/ /g, "-")}`;
                    return (
                      <li key={index}>
                        <Link
                          href={href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                        >
                          {category}
                        </Link>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </li>

            {/* CTA Button */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-5 py-2 rounded-full shadow hover:shadow-lg font-semibold transition"
              >
                Get a Quote
              </motion.button>
            </Link>
          </ul>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-gradient-to-r from-yellow-500 to-pink-600 text-white p-2 rounded-lg"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 px-4"
        >
          <div className="bg-gradient-to-tr from-purple-800 via-pink-600 to-yellow-500 p-4 rounded-2xl shadow-xl space-y-4 text-white">
            {navItems.map((item, i) => {
              const href = `/${item.toLowerCase()}`;
              return (
                <Link
                  key={i}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-semibold hover:text-black"
                >
                  {item}
                </Link>
              );
            })}
            <div>
              <button
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                className="w-full text-left text-lg font-semibold flex justify-between items-center"
              >
                Portfolio <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isPortfolioOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 space-y-2 bg-white text-black p-2 rounded-lg"
                >
                  {portfolioItems.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-1 text-sm hover:bg-gray-200 rounded"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full bg-white text-black px-5 py-2 mt-2 rounded-full font-semibold"
              >
                Get a Quote
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
