"use client";

import { motion } from "framer-motion";

interface Project {
  tag: string;
  company: string;
  title: string;
  categories: string[];
  bgColor: string;
  textColor: string;
  tagBg: string;
  tagText: string;
}

const projects: Project[] = [
  {
    tag: "INDUSTRY PROJECT – SHIPPED",
    company: "Company A",
    title: "Redesigning the funds page for Company A",
    categories: ["FIN-TECH", "PRODUCT DESIGN", "DESKTOP", "MOBILE"],
    bgColor: "from-blue-500 to-blue-600",
    textColor: "text-white",
    tagBg: "bg-white/20",
    tagText: "text-white",
  },
  {
    tag: "INDUSTRY PROJECT – SHIPPED",
    company: "Company A",
    title: "Designing the pricing plans for Company A",
    categories: ["FIN-TECH", "PRODUCT DESIGN", "DESKTOP", "MOBILE"],
    bgColor: "from-orange-400 to-yellow-500",
    textColor: "text-white",
    tagBg: "bg-white/20",
    tagText: "text-white",
  },
  {
    tag: "INDUSTRY PROJECT – SHIPPED",
    company: "Company B",
    title: "Improving support team's workflow by redesigning feedback flow",
    categories: ["FLEET MGMT", "PRODUCT DESIGN", "DESKTOP"],
    bgColor: "from-purple-500 to-purple-600",
    textColor: "text-white",
    tagBg: "bg-white/20",
    tagText: "text-white",
  },
  {
    tag: "INDUSTRY PROJECT – SHIPPED",
    company: "Company B",
    title: "Improving the product's UX by designing meaningful empty states",
    categories: ["FLEET MGMT", "UX DESIGN", "MOBILE"],
    bgColor: "from-teal-400 to-cyan-500",
    textColor: "text-white",
    tagBg: "bg-white/20",
    tagText: "text-white",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-14"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.bgColor} cursor-pointer`}
            >
              <div className="p-8 pb-48 md:pb-56">
                {/* Tag */}
                <span
                  className={`inline-block px-3 py-1 ${project.tagBg} ${project.tagText} text-xs font-semibold tracking-wider rounded-full mb-4 border border-white/30`}
                >
                  {project.tag}
                </span>

                {/* Company */}
                <p
                  className={`${project.textColor} text-sm font-medium opacity-80 mb-2 text-right`}
                >
                  {project.company}
                </p>

                {/* Title */}
                <h3
                  className={`text-2xl md:text-3xl font-bold ${project.textColor} leading-tight mb-4`}
                >
                  {project.title}
                </h3>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className={`px-3 py-1 ${project.tagBg} ${project.tagText} text-xs font-semibold tracking-wider rounded-full border border-white/20`}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Placeholder for project screenshot */}
              <div className="absolute bottom-0 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-t-xl h-40 md:h-48 border border-white/20 border-b-0 flex items-center justify-center">
                  <span className="text-white/40 text-sm font-medium">
                    Project Screenshot
                  </span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
