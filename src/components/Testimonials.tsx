"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sylvia Leung",
    title: "Senior Staff UX & Visual Designer | UX Manager at Samsung Research America",
    image: "/portfolio/images/sylvia.jpg",
    quote:
      "I've had the pleasure of working with Kulbir at Samsung Research America. He is highly independent, able to take ownership of projects and drive them to completion with minimal oversight. <highlight>He's great at seeking and incorporating feedback then iterating on designs until the end result is the best possible one</highlight>. He's also always eager to take on new challenges and continuously learn, which makes him a valuable asset to any team. His proactive approach, combined with his openness to growth, sets him apart as a UX designer. <highlight>I highly recommend him to anyone looking for a dedicated and adaptable professional</highlight>.",
  },
  {
    name: "Pete Yang, MBA, M.Eng",
    title: "Product Manager @ Samsung",
    image: "/portfolio/images/pete.jpg",
    quote:
      "I had the pleasure of working with Kulbir and was always impressed by his strong UX design expertise. <highlight>He has a great ability to bring thoughtful, functional design solutions, especially in a B2B context, where usability and efficiency are key</highlight>. Beyond his skills, Kulbir is a kind and collaborative team player. He's always open to feedback and works well with others to create the best possible outcomes. <highlight>Any team would benefit from his expertise and positive approach to problem-solving</highlight>.",
  },
  {
    name: "Deepali Vinay",
    title: "Lead Product Designer at Atlassian",
    image: "/portfolio/images/deepali.jpg",
    quote:
      "<highlight>What stands out about Kulbir is his strong sense of ownership over the products he designs</highlight>. He is a dependable team player who actively seeks feedback, embraces iteration, and continuously improves his work. <highlight>He communicates his design decisions with clarity, enabling alignment among stakeholders and helping projects move forward smoothly</highlight>. I am confident he will continue to grow and achieve great things in his design career.",
  },
];

function renderQuote(quote: string) {
  const parts = quote.split(/<highlight>(.*?)<\/highlight>/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-primary-dark font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent(
      (prev) => (prev + dir + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const t = testimonials[current];
  const initials = t.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="testimonials" className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl p-8 md:p-10 border border-border relative overflow-hidden"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-10">
            What my ex-teammates say about working with me
          </h2>

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-4xl mx-auto"
            >
              {/* Author info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover absolute inset-0"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                  <span className="text-lg font-bold text-text-secondary">
                    {initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark">{t.name}</h4>
                  <p className="text-sm text-text-secondary">{t.title}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-lg leading-relaxed text-text-secondary">
                {renderQuote(t.quote)}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary-dark transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2 mx-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-accent w-6"
                      : "bg-border hover:bg-text-secondary w-2"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => navigate(1)}
              className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary-dark transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
