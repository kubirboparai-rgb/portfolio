"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

function ImagePlaceholder({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center ${className}`}
    >
      <span className="text-gray-400 text-sm font-medium text-center px-4">
        {name}
      </span>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  }),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-primary-dark text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Hero section — Photo + Intro */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Photo */}
          <motion.div variants={fadeUp} custom={0}>
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portfolio/images/kulbir-avatar.png"
                alt="Kulbir Singh"
                className="w-full h-[420px] object-cover object-top"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </motion.div>

          {/* Intro */}
          <motion.div
            variants={fadeUp}
            custom={0.1}
            className="bg-card rounded-2xl p-8 border border-border flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
              Hey, I&apos;m Kulbir!
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              I&apos;m a product designer who believes great design is invisible
              — when it works, people don&apos;t notice it, they just feel it.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Currently shaping security analytics experiences at{" "}
              <strong className="text-primary-dark">Illumio</strong>, previously
              leading UX for B2B cloud services at{" "}
              <strong className="text-primary-dark">
                Samsung Research America
              </strong>
              . 6+ years of making complex things simple across enterprise and
              consumer products.
            </p>
          </motion.div>
        </motion.div>

        {/* The Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl p-8 md:p-10 border border-border mb-8"
        >
          <h2 className="text-2xl font-bold text-primary-dark mb-6">
            My Story
          </h2>
          <div className="space-y-4 text-text-secondary text-lg leading-relaxed max-w-3xl">
            <p>
              Design wasn&apos;t my first language — I discovered it while
              trying to solve problems that code alone couldn&apos;t fix. That
              curiosity led me from tinkering with interfaces to leading design
              at companies like Samsung and Illumio, where the stakes are high
              and the users are unforgiving.
            </p>
            <p>
              What drives me is the intersection of{" "}
              <strong className="text-primary-dark">system thinking</strong> and{" "}
              <strong className="text-primary-dark">human empathy</strong>. I
              love untangling complex enterprise workflows and turning them into
              experiences that feel obvious in hindsight. The best compliment
              I&apos;ve ever received on my work was: &ldquo;It just makes
              sense.&rdquo;
            </p>
            <p>
              I&apos;m skilled in{" "}
              <strong className="text-primary-dark">
                mixed-methods research
              </strong>
              ,{" "}
              <strong className="text-primary-dark">interaction design</strong>,
              and building{" "}
              <strong className="text-primary-dark">design systems</strong> that
              scale — across desktop, mobile, and web platforms.
            </p>
          </div>
        </motion.div>

        {/* Beyond Design — The fun stuff */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-2xl p-8 md:p-10 border border-border mb-8"
        >
          <h2 className="text-2xl font-bold text-primary-dark mb-6">
            Beyond Design
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-3xl">
            When I&apos;m not pushing pixels or debating information
            architecture with engineers, here&apos;s what I&apos;m usually up
            to:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-bg rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <span className="text-3xl mb-3 block">&#127911;</span>
              <h3 className="font-semibold text-primary-dark mb-1">
                Music & Podcasts
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Always have something playing. Add your favorite genres, artists,
                or podcasts here.
              </p>
            </div>
            <div className="bg-bg rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <span className="text-3xl mb-3 block">&#9992;&#65039;</span>
              <h3 className="font-semibold text-primary-dark mb-1">Travel</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Share your favorite destinations, dream trips, or travel
                philosophy here.
              </p>
            </div>
            <div className="bg-bg rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <span className="text-3xl mb-3 block">&#128247;</span>
              <h3 className="font-semibold text-primary-dark mb-1">
                Photography
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Share your creative side — what you shoot, what catches your
                eye.
              </p>
            </div>
            <div className="bg-bg rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <span className="text-3xl mb-3 block">&#128218;</span>
              <h3 className="font-semibold text-primary-dark mb-1">
                Currently Reading
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Share books that shaped your thinking — design or otherwise.
              </p>
            </div>
            <div className="bg-bg rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <span className="text-3xl mb-3 block">&#127860;</span>
              <h3 className="font-semibold text-primary-dark mb-1">Food</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Your favorite cuisines, cooking adventures, or go-to spots.
              </p>
            </div>
            <div className="bg-bg rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <span className="text-3xl mb-3 block">&#127918;</span>
              <h3 className="font-semibold text-primary-dark mb-1">
                Fun Facts
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                The quirky stuff that makes you, you. Add your fun facts here.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Photo gallery placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 md:p-10 border border-border mb-8"
        >
          <h2 className="text-2xl font-bold text-primary-dark mb-6">
            Life in Pictures
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <ImagePlaceholder
              name="about-photo-1.jpg"
              className="h-[200px] md:h-[240px]"
            />
            <ImagePlaceholder
              name="about-photo-2.jpg"
              className="h-[200px] md:h-[240px]"
            />
            <ImagePlaceholder
              name="about-photo-3.jpg"
              className="h-[200px] md:h-[240px]"
            />
            <ImagePlaceholder
              name="about-photo-4.jpg"
              className="h-[200px] md:h-[240px]"
            />
            <ImagePlaceholder
              name="about-photo-5.jpg"
              className="h-[200px] md:h-[240px]"
            />
            <ImagePlaceholder
              name="about-photo-6.jpg"
              className="h-[200px] md:h-[240px]"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-primary-dark rounded-2xl p-8 md:p-10 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-3">
            Let&apos;s build something together
          </h2>
          <p className="text-white/70 mb-6">
            I&apos;m always open to interesting conversations and
            collaborations.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:Kulboparai97@gmail.com"
              className="px-6 py-3 bg-white text-primary-dark font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              Say Hello
            </a>
            <a
              href="https://www.linkedin.com/in/kulbir-singh2334/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
