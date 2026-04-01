"use client";

import { motion } from "framer-motion";
import { CheckCircle, Briefcase } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 px-6 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-5 gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-3">
          <motion.div
            className="bg-card rounded-2xl p-8 md:p-12 border border-border"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
          >
            {/* Avatar */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="w-24 h-24 rounded-full bg-gray-200 mb-8 overflow-hidden flex items-center justify-center"
            >
              <div className="w-full h-full bg-gradient-to-br from-accent-light to-accent rounded-full flex items-center justify-center text-white text-3xl font-bold">
                YN
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-tight tracking-tight text-primary-dark"
            >
              I&apos;m <span className="text-accent">[Your Name]</span>, a
              senior product designer specialized in{" "}
              <span className="text-accent">systems thinking</span>
            </motion.h1>

            {/* Subtexts */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-8 space-y-3"
            >
              <p className="text-text-secondary text-lg flex items-start gap-2">
                <span className="text-xl">💼</span>
                <span>
                  Worked with{" "}
                  <strong className="text-primary-dark">
                    Y Combinator backed B2B startups
                  </strong>{" "}
                  like <strong className="text-primary-dark">Aspire</strong>.
                </span>
              </p>
              <p className="text-text-secondary text-lg flex items-start gap-2">
                <span className="text-xl">🎨</span>
                <span>
                  Currently obsessing over{" "}
                  <strong className="text-primary-dark">design systems</strong>,{" "}
                  <strong className="text-primary-dark">genAI</strong> &{" "}
                  <strong className="text-primary-dark">AR/VR design</strong>.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Stats Cards */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Stat Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-5">
              <CheckCircle className="text-green-500" size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-2">
              10+ products shipped
            </h3>
            <p className="text-text-secondary">
              Across multiple{" "}
              <strong className="text-accent">startups</strong> in the domain of{" "}
              <strong className="text-accent">fintech</strong>,{" "}
              <strong className="text-accent">agritech</strong> and{" "}
              <strong className="text-accent">fleet management</strong>
            </p>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
              <Briefcase className="text-blue-500" size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-2">
              6+ years experience
            </h3>
            <p className="text-text-secondary">
              In{" "}
              <strong className="text-accent">collaborating</strong> with
              cross-functional teams to{" "}
              <strong className="text-accent">solve customer problems</strong>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
