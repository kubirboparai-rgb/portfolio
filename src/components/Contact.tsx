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
    label: "linkedin.com/in/kulbir-singh2334",
    href: "https://www.linkedin.com/in/kulbir-singh2334/",
    color: "hover:bg-blue-50 hover:border-blue-200",
    iconColor: "text-primary-dark",
    external: true,
  },
  {
    icon: <Mail size={28} />,
    label: "Kulboparai97@gmail.com",
    href: "mailto:Kulboparai97@gmail.com",
    color: "hover:bg-green-50 hover:border-green-200",
    iconColor: "text-green-600",
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-5">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`bg-card rounded-2xl p-8 border border-border flex flex-col items-start justify-between min-h-[200px] transition-all duration-300 ${link.color}`}
            >
              <span className={link.iconColor}>{link.icon}</span>
              <span className="text-primary-dark font-medium text-lg mt-auto">
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
