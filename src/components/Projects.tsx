"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  tag: string;
  company: string;
  title: string;
  categories: string[];
  bgColor: string;
  tagBg: string;
  href?: string;
}

const projects: Project[] = [
  {
    tag: "INDUSTRY PROJECT – SHIPPED",
    company: "Samsung Research America",
    title: "Samsung Knox Configure- Creating easy to use cloud managing portal",
    categories: ["ENTERPRISE", "CLOUD", "DESKTOP"],
    bgColor: "from-blue-500 to-blue-700",
    tagBg: "bg-white/20",
    href: "/portfolio/projects/knox-configure",
  },
  {
    tag: "INDUSTRY PROJECT – SHIPPED",
    company: "Samsung Research America",
    title: "Samsung Smart Accessories — Empowering users to personalize their devices in seconds",
    categories: ["B2C", "MOBILE", "NFC", "PERSONALIZATION"],
    bgColor: "from-violet-500 to-indigo-700",
    tagBg: "bg-white/20",
    href: "/portfolio/projects/smart-accessories",
  },
  {
    tag: "INDUSTRY PROJECT – SHIPPED",
    company: "Infor",
    title: "Designing the next-gen information architecture",
    categories: ["ENTERPRISE", "IA", "DESKTOP", "MOBILE"],
    bgColor: "from-orange-400 to-amber-500",
    tagBg: "bg-white/20",
  },
  {
    tag: "INDUSTRY PROJECT – SHIPPED",
    company: "Illumio",
    title: "Improving security workflow with better UX patterns",
    categories: ["SECURITY", "PRODUCT DESIGN", "DESKTOP"],
    bgColor: "from-purple-500 to-violet-600",
    tagBg: "bg-white/20",
  },
  {
    tag: "INDUSTRY PROJECT – SHIPPED",
    company: "Illumio",
    title: "Designing meaningful empty states to improve product UX",
    categories: ["PRODUCT DESIGN", "UX DESIGN", "MOBILE"],
    bgColor: "from-teal-400 to-cyan-600",
    tagBg: "bg-white/20",
  },
];

export default function Projects() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCursor((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
  }, []);

  const handleMouseEnterCard = useCallback(() => {
    setCursor((prev) => ({ ...prev, visible: true }));
  }, []);

  const handleMouseLeaveCard = useCallback(() => {
    setCursor((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <section
      id="projects"
      className="py-8 px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Custom floating cursor */}
      <AnimatePresence>
        {cursor.visible && (
          <motion.div
            className="fixed z-50 pointer-events-none"
            style={{ left: cursor.x, top: cursor.y }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2, ease: "easeOut" as const }}
          >
            <div
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#5B8DEF] border-2 border-white shadow-xl"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="white" stroke="#1a202c" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="5" fill="#8B4513"/>
                <circle cx="12" cy="12" r="2.5" fill="#1a202c"/>
                <circle cx="13" cy="11" r="0.8" fill="white"/>
              </svg>
              <span className="text-white text-sm font-bold whitespace-nowrap">
                View Project
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.href || "#"}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onMouseEnter={handleMouseEnterCard}
              onMouseLeave={handleMouseLeaveCard}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.bgColor} cursor-none block`}
            >
              <div className="p-7 pb-52">
                {/* Top row: tag + company */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <span
                    className={`inline-block px-3 py-1 ${project.tagBg} text-white text-[10px] font-bold tracking-widest rounded-full border border-white/30 uppercase`}
                  >
                    {project.tag}
                  </span>
                  <span className="text-white/70 text-xs font-semibold shrink-0">
                    {project.company}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-[1.65rem] font-bold text-white leading-snug mb-5">
                  {project.title}
                </h3>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className={`px-3 py-1 ${project.tagBg} text-white text-[10px] font-bold tracking-widest rounded-full border border-white/20 uppercase`}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Screenshot placeholder */}
              <div className="absolute bottom-0 left-7 right-7">
                <div className="bg-white/10 backdrop-blur-sm rounded-t-xl h-44 border border-white/20 border-b-0 flex items-center justify-center">
                  <span className="text-white/30 text-xs font-medium tracking-wide uppercase">
                    Project Screenshot
                  </span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
