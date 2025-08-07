import React from "react";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Grocery Mahadev",
      link: "https://grocery-mahadev.shop/",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1074&auto=format&fit=crop"
    },
    {
      name: "Travelya",
      link: "http://www.travelya.site",
      img: "https://images.unsplash.com/photo-1754206352604-0a4f13ca2a22?q=80&w=1171&auto=format&fit=crop"
    },
    {
      name: "Artificial Intelligence",
      link: "https://smartfundai.vercel.app/",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop"
    },
    {
      name: "Cyber Security",
      link: "https://warm-sprinkles-a1db70.netlify.app/",
      img: "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1170&auto=format&fit=crop"
    },
    {
      name: "Jarvish",
      link: "https://neuro-twin-gold.vercel.app/",
      img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 ">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">Our Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
          >
            {/* Top Image */}
            <div className="w-full h-48 overflow-hidden rounded-md mb-4">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Name */}
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-3">
              {project.name}
            </h2>

            {/* Link Button */}
            <div className="flex justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
              >
                Visit Site 🔗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
