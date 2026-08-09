"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-10 border border-border"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-10">
            About Me
          </h2>

          <div className="max-w-4xl mx-auto text-text-secondary text-lg leading-relaxed">
            <p>
              Product Designer with{" "}
              <strong className="text-primary-dark">
                6+ years of experience
              </strong>{" "}
              driving end-to-end UX across enterprise and consumer platforms —
              blending roles at tech giants like{" "}
              <strong className="text-primary-dark">Samsung</strong> with
              fast-moving startup environments. Currently shaping{" "}
              <strong className="text-primary-dark">
                AI-driven security analytics, policy-management, and AI security
                experiences at Illumio
              </strong>
              , while driving AI-powered design workflows that boosted team
              productivity by 140%; previously led UX for{" "}
              <strong className="text-primary-dark">
                B2B and B2B2C cloud services at Samsung
              </strong>
              . Skilled in{" "}
              <strong className="text-primary-dark">
                mixed-methods research
              </strong>
              ,{" "}
              <strong className="text-primary-dark">systems thinking</strong>,
              and{" "}
              <strong className="text-primary-dark">interaction design</strong>{" "}
              across desktop, mobile, and web.
            </p>
          </div>

          {/* Skills */}
          <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Product Design",
                "UX Research",
                "Design Systems",
                "Prototyping",
                "User Testing",
                "Figma",
                "Systems Thinking",
                "Cross-functional Collaboration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-bg text-text-secondary text-sm font-medium rounded-full border border-border hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learn More */}
          <div className="max-w-4xl mx-auto mt-8 text-center">
            <a
              href="/portfolio/about"
              className="inline-block px-6 py-3 bg-primary-dark text-white font-medium rounded-full hover:bg-accent transition-colors duration-200"
            >
              Learn more about me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
