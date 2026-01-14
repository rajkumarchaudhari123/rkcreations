"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTelegram, FaClock, FaPaperPlane, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsSendCheck } from "react-icons/bs";

export default function ContactPage() {
  const phoneNumber = "+919667048566";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    message: "",
    phone: "",
    email: "",
    service: "",
  });

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Digital Marketing",
    "Branding",
    "AI Solutions",
    "Other"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbw0X6vwE9pre_Am8uwonCUIhNMGKQxrgzunf9I8itd0Il84gGgVF6NpeoLPEwN9B23Umg/exec";

    const formDataToSend = new URLSearchParams();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("service", formData.service);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      // Open WhatsApp
      const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
      window.open(whatsappURL, "_blank");

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", message: "", phone: "", email: "", service: "" });
      }, 3000);
    } catch (error) {
      console.error("Error!", error);
      alert("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <span className="text-cyan-400 font-semibold tracking-widest">CONTACT US</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            Let&apos;s Create Something
            <span className="block text-cyan-400 mt-2">Extraordinary Together</span>
          </h1>
          
          <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with our team of experts 
            for a free consultation and project estimate.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {/* Address Card */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-8 backdrop-blur-xl">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur" />
                <FaMapMarkerAlt className="text-4xl text-cyan-300 mb-4 relative" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Address</h3>
              <p className="text-blue-200/80 leading-relaxed">
                Noida, Sector 93<br />
                Geijha, Uttar Pradesh<br />
                India - 201304
              </p>
              <div className="mt-6 pt-6 border-t border-blue-400/20">
                <p className="text-sm text-blue-300/60">📍 Easy to reach location</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-xl">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur" />
                <FaPhoneAlt className="text-4xl text-blue-300 mb-4 relative" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Call Us</h3>
              <a
                href={`tel:${phoneNumber}`}
                className="text-2xl font-bold text-cyan-300 hover:text-cyan-200 transition-colors block mb-2"
              >
                +91 9667 048 566
              </a>
              <p className="text-blue-200/80 text-sm">Mon-Sat: 9:00 AM - 8:00 PM</p>
              <div className="mt-6 pt-6 border-t border-cyan-400/20">
                <p className="text-sm text-cyan-300/60">📞 24/7 Support Available</p>
              </div>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-400/30 rounded-2xl p-8 backdrop-blur-xl">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur" />
                <FaEnvelope className="text-4xl text-pink-300 mb-4 relative" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Email Us</h3>
              <a
                href="mailto:ceorkcreations@gmail.com"
                className="text-xl text-pink-300 hover:text-pink-200 transition-colors block mb-2 break-all"
              >
                ceorkcreations@gmail.com
              </a>
              <p className="text-blue-200/80 text-sm">Response within 2 hours</p>
              <div className="mt-6 pt-6 border-t border-purple-400/20">
                <p className="text-sm text-pink-300/60">📧 Business inquiries welcome</p>
              </div>
            </div>
          </motion.div>

          {/* Support Card */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border border-yellow-400/30 rounded-2xl p-8 backdrop-blur-xl">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl blur" />
                <MdOutlineSupportAgent className="text-4xl text-yellow-300 mb-4 relative" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Live Support</h3>
              <p className="text-blue-200/80 mb-4">Get instant help from our experts</p>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-green-500/30 transition-all"
                >
                  <FaWhatsapp className="inline mr-2" /> WhatsApp
                </a>
                <a
                  href="https://t.me/rkcreations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  <FaTelegram className="inline mr-2" /> Telegram
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Contact Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <motion.a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-green-500/30 transition-all"
          >
            <FaWhatsapp className="text-2xl" />
            <div className="text-left">
              <div className="text-lg">Chat on WhatsApp</div>
              <div className="text-sm opacity-90">Instant Response</div>
            </div>
          </motion.a>

          <motion.a
            href={`tel:${phoneNumber}`}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-red-500/30 transition-all"
          >
            <FaPhoneAlt className="text-2xl" />
            <div className="text-left">
              <div className="text-lg">Call Now</div>
              <div className="text-sm opacity-90">Direct Conversation</div>
            </div>
          </motion.a>

          <motion.a
            href="mailto:ceorkcreations@gmail.com"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all"
          >
            <FaEnvelope className="text-2xl" />
            <div className="text-left">
              <div className="text-lg">Send Email</div>
              <div className="text-sm opacity-90">Detailed discussions</div>
            </div>
          </motion.a>
        </motion.div>

        {/* Main Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <IoChatbubbles className="text-2xl text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Send a Message</h2>
                  <p className="text-blue-200/80">We typically respond within 1 hour</p>
                </div>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <BsSendCheck className="text-2xl text-green-400" />
                    <div>
                      <p className="text-green-300 font-semibold">Message Sent Successfully!</p>
                      <p className="text-green-300/80 text-sm">We&apos;ll contact you shortly via WhatsApp</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-blue-200 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-blue-900/30 border border-blue-400/30 text-white placeholder-blue-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 12345 67890"
                      className="w-full px-4 py-3 rounded-xl bg-blue-900/30 border border-blue-400/30 text-white placeholder-blue-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-blue-200 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-blue-900/30 border border-blue-400/30 text-white placeholder-blue-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-blue-200 mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-blue-900/30 border border-blue-400/30 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-blue-200 mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-blue-900/30 border border-blue-400/30 text-white placeholder-blue-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all h-40 resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    isSubmitting
                      ? 'bg-gradient-to-r from-gray-600 to-gray-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/30'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <FaPaperPlane className="text-xl" />
                      Send Message & Connect on WhatsApp
                    </div>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            {/* Business Hours */}
            <div className="relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-400/30 rounded-2xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <FaClock className="text-3xl text-purple-300" />
                <h3 className="text-2xl font-bold text-white">Business Hours</h3>
              </div>
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 6:00 PM" },
                  { day: "Sunday", time: "Emergency Support Only" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-purple-400/10">
                    <span className="text-blue-200">{item.day}</span>
                    <span className="text-cyan-300 font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-purple-500/10 rounded-xl">
                <p className="text-purple-300 text-sm">💡 <span className="font-semibold">Emergency Support:</span> Available 24/7 for existing clients</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="relative bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
              <p className="text-blue-200/80 mb-6">Follow us for updates, tips, and behind-the-scenes</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <FaWhatsapp />, name: "WhatsApp", color: "from-green-500 to-emerald-600", href: `https://wa.me/${phoneNumber}` },
                  { icon: <FaInstagram />, name: "Instagram", color: "from-pink-500 to-purple-600", href: "https://instagram.com/rkcreations" },
                  { icon: <FaLinkedin />, name: "LinkedIn", color: "from-blue-500 to-cyan-600", href: "https://linkedin.com/company/rkcreations" },
                  { icon: <FaTelegram />, name: "Telegram", color: "from-blue-400 to-cyan-500", href: "https://t.me/rkcreations" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${social.color} text-white p-4 rounded-xl flex flex-col items-center justify-center hover:shadow-lg transition-all`}
                  >
                    <div className="text-2xl mb-2">{social.icon}</div>
                    <span className="font-semibold">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose RK Creations?</h3>
              <div className="space-y-4">
                {[
                  "✅ 24/7 Customer Support",
                  "✅ Free Initial Consultation",
                  "✅ Transparent Pricing",
                  "✅ 100% Satisfaction Guarantee",
                  "✅ Fast Response Time",
                  "✅ Expert Technical Team"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-blue-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Visit Our Office</h3>
                <p className="text-blue-200/80">Noida, Uttar Pradesh - Easy to locate</p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-cyan-300">
                <FaMapMarkerAlt />
                <span>📍 Get Directions</span>
              </div>
            </div>
            
            <div className="h-96 rounded-xl overflow-hidden border border-blue-400/20 shadow-2xl">
              <iframe
                className="w-full h-full border-none"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.522352118052!2d77.3775532023939!3d28.520760061611682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce898ec5837bb%3A0x675258ba5194748d!2sSector%2093%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1742010099970!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RK Creations Office Location"
              />
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-blue-800/30">
                <p className="text-cyan-300 font-semibold">🚗 Parking Available</p>
                <p className="text-blue-200/80 text-sm">Ample parking space</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-blue-800/30">
                <p className="text-cyan-300 font-semibold">🚇 Metro Nearby</p>
                <p className="text-blue-200/80 text-sm">Close to Sector 93 Metro</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-blue-800/30">
                <p className="text-cyan-300 font-semibold">🕒 Flexible Timing</p>
                <p className="text-blue-200/80 text-sm">Schedule your visit</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-200/80 mb-8 max-w-3xl mx-auto">
            Don&apos;t hesitate to reach out. Our team is here to help you bring your digital vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-green-500/30"
            >
              <FaWhatsapp className="text-2xl" />
              Chat Now on WhatsApp
            </motion.a>
            <motion.a
              href={`tel:${phoneNumber}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30"
            >
              <FaPhoneAlt className="text-2xl" />
              Call for Instant Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}