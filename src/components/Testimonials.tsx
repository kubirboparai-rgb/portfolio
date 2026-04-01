"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  highlights: string[];
}

const testimonials: Testimonial[] = [
  {
    name: "Steve Dunn",
    title: "Director of Product Management, Netradyne",
    quote:
      'I worked with [Name] for a couple of years on many projects at [Company]. They can <highlight>take messy product ideas and turn them into interfaces that make sense</highlight>. They\'re not shy about asking the right questions to understand the problem so a proper solution can be designed. This saves the PM and dev teams time and effort during the planning and development of a feature. <highlight>[Name] thinks ahead. They spot potential problems for users and always bring solutions to the table</highlight>. If you need a UX designer who actually solved problems and not just makes things look pretty, give them a shout.',
    highlights: [],
  },
  {
    name: "Jane Smith",
    title: "Engineering Lead, TechCorp",
    quote:
      "Working with [Name] was a game changer for our product team. <highlight>Their ability to translate complex requirements into intuitive designs</highlight> is unmatched. They consistently delivered work that exceeded expectations and helped us ship features faster. <highlight>A true systems thinker who understands both user needs and technical constraints</highlight>.",
    highlights: [],
  },
  {
    name: "Alex Chen",
    title: "CEO, StartupXYZ",
    quote:
      "[Name] joined us when we were still figuring out our product direction. <highlight>They helped us define our design language from scratch and built a system that scaled</highlight> as we grew. Their attention to detail and user empathy made a huge difference in our product quality. <highlight>They don't just design screens—they solve problems</highlight>.",
    highlights: [],
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

  return (
    <section id="testimonials" className="py-20 px-6 bg-bg">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-14"
        >
          What my ex-teammates say about working with me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden"
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Author info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <span className="text-lg font-bold text-text-secondary">
                    {testimonials[current].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {testimonials[current].title}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-lg leading-relaxed text-text-secondary">
                {renderQuote(testimonials[current].quote)}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={() => navigate(-1)}
            className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary-dark transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary-dark transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-accent w-6"
                  : "bg-border hover:bg-text-secondary"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
