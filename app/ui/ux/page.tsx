import React from "react";
import { FaBehance } from "react-icons/fa";

export default function UIUXPortfolio() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-6 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-3xl w-full">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900">UI/UX Portfolio</h1>
        <p className="mt-4 text-lg text-gray-700">
          Showcasing the best of our UI/UX designs, wireframes, and user-centric solutions.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {/* Project 1 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-900">📱 Mobile App UI</h2>
            <p className="text-gray-700 mt-2">A seamless and intuitive mobile experience for users.</p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-900">💻 Website Redesign</h2>
            <p className="text-gray-700 mt-2">Modern and user-friendly web UI revamp.</p>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-900">🎨 Dashboard UI</h2>
            <p className="text-gray-700 mt-2">Data-driven, aesthetically pleasing UI for analytics.</p>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-900">📑 Landing Page</h2>
            <p className="text-gray-700 mt-2">Engaging and high-converting landing page designs.</p>
          </div>
        </div>

        {/* Behance Button */}
        <a
          href="https://www.behance.net/jvm11"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition text-lg font-semibold"
        >
          <FaBehance className="mr-3 text-2xl" /> View on Behance
        </a>
      </div>
    </div>
  );
}
