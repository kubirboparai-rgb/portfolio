"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-14"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 md:p-12 border border-border"
        >
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              I&apos;m a senior product designer with{" "}
              <strong className="text-primary-dark">6+ years of experience</strong>{" "}
              crafting user-centered digital products. My approach combines systems
              thinking with deep user empathy to create interfaces that are both
              beautiful and functional.
            </p>
            <p>
              I&apos;ve worked with{" "}
              <strong className="text-primary-dark">
                Y Combinator backed startups
              </strong>{" "}
              across fintech, agritech, and fleet management, shipping 10+
              products that serve thousands of users daily.
            </p>
            <p>
              When I&apos;m not designing, you&apos;ll find me exploring the
              latest in{" "}
              <strong className="text-primary-dark">design systems</strong>,{" "}
              <strong className="text-primary-dark">generative AI</strong>, and{" "}
              <strong className="text-primary-dark">AR/VR design</strong>.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-10 pt-8 border-t border-border">
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
        </motion.div>
      </div>
    </section>
  );
}
