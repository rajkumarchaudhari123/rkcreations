import React from "react";

export default function ProjectsPage() {
  const projects = [
    { name: "Grocery Mahadev", link: "https://grocery-mahadev.shop/" },
    { name: "Travelya", link: "http://www.travelya.site" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Projects</h1>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-64 px-6 py-3 text-center bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            {project.name} 🔗
          </a>
        ))}
      </div>
    </div>
  );
}
