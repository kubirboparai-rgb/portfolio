"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function LinkedinIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contactLinks = [
  {
    icon: <LinkedinIcon size={28} />,
    label: "@yourlinkedin",
    href: "#",
    color: "hover:bg-blue-50 hover:border-blue-200",
    iconColor: "text-primary-dark",
  },
  {
    icon: <Mail size={28} />,
    label: "your@email.com",
    href: "mailto:your@email.com",
    color: "hover:bg-green-50 hover:border-green-200",
    iconColor: "text-green-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M22 7h-7V2H9v5H2v15h20V7zM9 22H4V12h5v10zm6 0h-4V12h4v10zm5 0h-4V12h4v10zM9 7V4h6v3H9z" />
      </svg>
    ),
    label: "@yourbehance",
    href: "#",
    color: "hover:bg-blue-600 hover:border-blue-600 group",
    iconColor: "text-blue-600 group-hover:text-white",
    labelHoverColor: "group-hover:text-white",
    bgHover: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-4"
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-secondary text-center text-lg mb-14"
        >
          Feel free to reach out for collaborations or just a friendly hello
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`bg-card rounded-2xl p-8 border border-border flex flex-col items-start justify-between min-h-[200px] transition-all duration-300 ${link.color}`}
            >
              <span className={link.iconColor}>{link.icon}</span>
              <span
                className={`text-primary-dark font-medium text-lg mt-auto ${link.labelHoverColor || ""}`}
              >
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <p className="text-text-secondary text-sm">
            Designed & built with care. © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
