"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const phoneNumber = "+919667048566";
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle SMS submission
  const handleSMS = (e: React.FormEvent) => {
    e.preventDefault();
    const smsText = `Name: ${formData.name}%0A${formData.message}`;
    window.location.href = `sms:${phoneNumber}?body=${smsText}`;
  };

  return (
    <div className="relative  mt-5 flex flex-col items-center px-6 py-12 font-sans text-white">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center"
      >
        Get in Touch
      </motion.h1>
      <p className="text-lg text-white/80 mt-2 text-center">
        We&apos;d love to hear from you! Reach out to us anytime.
      </p>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
      >
        {/* Address */}
        <div className="flex flex-col items-center bg-black p-6 rounded-2xl shadow-lg border border-white/30 backdrop-blur-md">
          <FaMapMarkerAlt className="text-3xl text-white" />
          <h3 className="text-2xl font-semibold mt-3">Our Address</h3>
          <p className="text-white/80 text-center mt-2">
            Noida, Sector 93, Geijha, Uttar Pradesh
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center bg-black p-6 rounded-2xl shadow-lg border border-white/30 backdrop-blur-md">
          <FaPhoneAlt className="text-3xl text-white" />
          <h3 className="text-2xl font-semibold mt-3">Call Us</h3>
          <a
            href={`tel:${phoneNumber}`}
            className="text-white/80 mt-2 underline hover:text-blue-300"
          >
            {phoneNumber}
          </a>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center bg-black p-6 rounded-2xl shadow-lg border border-white/30 backdrop-blur-md">
          <FaEnvelope className="text-3xl text-white" />
          <h3 className="text-2xl font-semibold mt-3">Email Us</h3>
          <p className="text-white/80 mt-2">info@rkcreation.com</p>
        </div>
      </motion.div>

      {/* Direct Contact Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 flex items-center bg-green-600 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition"
        >
          <FaWhatsapp className="mr-2 text-2xl" /> WhatsApp Now
        </a>

        <a
          href={`tel:${phoneNumber}`}
          className="px-6 py-3 flex items-center bg-red-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition"
        >
          📞 Call Now
        </a>
      </div>

      {/* Contact Form for SMS */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        onSubmit={handleSMS}
        className="mt-12 w-full max-w-3xl bg-black p-8 rounded-2xl shadow-lg border border-white/30 backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-center">Send a Message via SMS</h2>
        <p className="text-white/80 text-center mt-2">
          Fill out the form and send your message directly via SMS.
        </p>

        <div className="mt-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none"
            required
          />
        </div>

        <div className="mt-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none h-32"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white font-bold py-3 rounded-lg transition-all hover:scale-105"
        >
          📩 Send SMS
        </button>
      </motion.form>

      {/* Google Map Embed */}
      <div className="mt-12 w-full max-w-4xl h-64 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.522352118052!2d77.3775532023939!3d28.520760061611682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce898ec5837bb%3A0x675258ba5194748d!2sSector%2093%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1742010099970!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
