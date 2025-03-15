import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function InstagramProfile() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-100 font-sans">
      {/* RK Creations Branding */}
      <div className="text-center mb-12 mt-12">  
        <h1 className="text-4xl font-extrabold text-gray-900">
          <span className="text-blue-600">RK</span> Creations
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Experience <span className="font-semibold text-blue-500">stunning logo animations</span> &  
          <span className="font-semibold text-pink-500"> high-quality video editing.</span>
        </p>
      </div>

      {/* Instagram Video Preview */}
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-lg w-full mt-8">
        {/* Instagram Logo */}
        <div className="flex justify-center mb-6">
          <FaInstagram className="text-pink-500 text-6xl" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">Watch Our Logo Animations</h2>
        <p className="mt-4 text-lg text-gray-700">
          Check out our latest <span className="font-semibold text-blue-500">logo animations</span> & branding videos.
        </p>

        {/* Embedded Instagram Video */}
        <div className="mt-6">
          <iframe
            src="https://www.instagram.com/p/C2vWDK3J9lD/embed"  
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Visit Instagram Button */}
        <a
          href="https://www.instagram.com/akashhh_o2_?igsh=bnBiYm0zeW1mZWI5"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-md hover:scale-105 transition text-lg font-semibold"
        >
          <FaInstagram className="mr-3 text-2xl" /> Watch More Videos
        </a>
      </div>
    </div>
  );
}
