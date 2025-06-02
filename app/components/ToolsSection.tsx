"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpo, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

export default function ToolsSection() {
  return (
    <div className="py-20 px-4 sm:px-8  text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-transparent bg-clip-text text-center mb-16 transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Built Using Trusted & Scalable Tools
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ToolCard name={tool.name} icon={tool.icon} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ToolCard({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white border border-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
      {icon}
      <h3 className="mt-3 text-lg font-semibold text-gray-800">{name}</h3>
    </div>
  );
}

const tools = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
  {
    name: "React",
    icon: <FaReact className="text-cyan-500 text-5xl animate-spin-slow" />,
  },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-5xl" /> },
  {
    name: "React Native Expo",
    icon: <SiExpo className="text-gray-700 text-5xl" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-700 text-5xl" /> },
];
