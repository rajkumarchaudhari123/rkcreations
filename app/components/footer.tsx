"use client"; // Ensure the component is client-side

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16">
      {/* Scrolling RKCREATIONS Text */}
      <div className="overflow-hidden mb-10">
        <div className="animate-marquee whitespace-nowrap text-center text-5xl md:text-7xl font-extrabold text-white">
          <span className="mx-8 transform scale-125">RKCREATIONS</span>
          <span className="mx-8 transform scale-125">RKCREATIONS</span>
          <span className="mx-8 transform scale-125">RKCREATIONS</span>
          <span className="mx-8 transform scale-125">RKCREATIONS</span>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              About RK Creation
            </h2>
            <p className="text-gray-300">
              We provide top-notch web and app development, digital marketing,
              graphic design, and video editing services. Transforming your
              ideas into digital reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Quick Links
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li>
                <a href="home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Contact Us
            </h2>
            <p className="text-gray-300">Email: ceorkcreations@gmail.com</p>
            <p className="text-gray-300">Phone: +91 9667048566</p>
            <div className="flex space-x-6 mt-4">
              <a
                href="https://www.facebook.com/share/16fqau56gv/"
                className="text-gray-300 hover:text-white text-3xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/rkcreactions.in?igsh=MWMzZGptYjB3M2I5Nw=="
                className="text-gray-300 hover:text-white text-3xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/RajKumar931515?t=D41GK2stCZRxKrY4Mw2Xmg&s=09"
                className="text-gray-300 hover:text-white text-3xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/rajkumar-chaudhari-54b9532b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-gray-300 hover:text-white text-3xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} RK Creation. All rights reserved.
        </div>
      </div>

      {/* Custom CSS for marquee animation */}
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
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </footer>
  );
}
