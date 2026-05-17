"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Briefcase } from "lucide-react";

const rotatingWords = [
  "Systems Thinking",
  "Interaction Design",
  "Prototyping",
  "Visual Design",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="pt-20 pb-8 px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-5 gap-5 items-stretch">
        {/* Left Column */}
        <div className="lg:col-span-3 flex">
          <motion.div
            className="bg-card rounded-2xl p-8 md:p-10 border border-border flex flex-col w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
          >
            {/* Avatar */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="w-20 h-20 rounded-full bg-gray-100 mb-6 overflow-hidden ring-4 ring-gray-100 shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portfolio/images/kulbir-avatar.png"
                alt="Kulbir Singh"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Heading + rotating word */}
            <motion.div variants={fadeUp} custom={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight tracking-tight text-primary-dark">
                I&apos;m{" "}
                <span className="text-accent">Kulbir Singh</span>, a senior
                product designer specialized in
              </h1>

              {/* Rotating word — slides up like a ticker */}
              <div className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight tracking-tight overflow-hidden h-[1.25em] mt-0.5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{
                      duration: 0.42,
                      ease: "easeInOut" as const,
                    }}
                    className="block text-accent"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Subtexts */}
            <motion.div variants={fadeUp} custom={0.25} className="mt-7 space-y-3">
              <p className="text-text-secondary text-base flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0">💼</span>
                <span>
                  Worked with{" "}
                  <strong className="text-primary-dark">large enterprises</strong>{" "}
                  like{" "}
                  <strong className="text-primary-dark">
                    Samsung Research America
                  </strong>{" "}
                  and <strong className="text-primary-dark">Infor</strong>.
                </span>
              </p>
              <p className="text-text-secondary text-base flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0">🎨</span>
                <span>
                  Currently working with{" "}
                  <strong className="text-primary-dark">Design Systems</strong>,{" "}
                  <strong className="text-primary-dark">
                    Information Architecture
                  </strong>
                  , <strong className="text-primary-dark">Gen AI</strong> and
                  solving real world problems.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column — Stats Cards */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* Stat Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="bg-card rounded-2xl p-7 border border-border hover:shadow-md transition-shadow duration-300 flex-1 flex flex-col justify-center"
          >
            <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <CheckCircle className="text-green-500" size={22} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-2">
              10+ products shipped
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Across <strong className="text-accent">high-growth startups</strong>{" "}
              like <strong className="text-accent">Illumio</strong> and big tech
              like{" "}
              <strong className="text-accent">Samsung Research America</strong>{" "}
              and <strong className="text-accent">Infor</strong>
            </p>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="bg-card rounded-2xl p-7 border border-border hover:shadow-md transition-shadow duration-300 flex-1 flex flex-col justify-center"
          >
            <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Briefcase className="text-blue-500" size={22} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-2">
              6+ years experience
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
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
