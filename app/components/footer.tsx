"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] text-white py-16 backdrop-blur-xl border-t border-white/10 shadow-2xl overflow-hidden">
      {/* RKCREATIONS Marquee */}
      <div className="absolute top-0 w-full overflow-hidden pointer-events-none">
        <div className="animate-marquee whitespace-nowrap text-center text-6xl md:text-8xl font-black text-white/5 select-none">
          <span className="mx-12">RKCREATIONS</span>
          <span className="mx-12">RKCREATIONS</span>
          <span className="mx-12">RKCREATIONS</span>
          <span className="mx-12">RKCREATIONS</span>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
              About RK Creation
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We specialize in modern web/app development, digital marketing,
              graphic design, and creative video editing. Let’s build your
              digital future together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-400">
              Quick Links
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>
                <Link
                  href="/home"
                  className="hover:text-white transition-all duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-all duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Socials */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">
              Contact Us
            </h2>
            <p className="text-gray-400">Email: ceorkcreations@gmail.com</p>
            <p className="text-gray-400 mb-4">Phone: +91 9667048566</p>
            <div className="flex space-x-5">
              {[
                {
                  icon: <FaFacebookF />,
                  href: "https://www.facebook.com/share/16fqau56gv/",
                },
                {
                  icon: <FaInstagram />,
                  href: "https://www.instagram.com/rkcreactions.in?igsh=MWMzZGptYjB3M2I5Nw==",
                },
                {
                  icon: <FaTwitter />,
                  href: "https://x.com/RajKumar931515?t=D41GK2stCZRxKrY4Mw2Xmg&s=09",
                },
                {
                  icon: <FaLinkedinIn />,
                  href: "https://www.linkedin.com/in/rajkumar-chaudhari-54b9532b5",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl transition-transform transform hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} RK Creation. All rights reserved.
        </div>
      </div>

      {/* Marquee CSS */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </footer>
  );
}
