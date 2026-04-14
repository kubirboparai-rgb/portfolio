"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
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

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // If near bottom of page, force-activate last section (Contact)
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setActiveSection(navLinks[navLinks.length - 1].name);
        return;
      }

      const sections = navLinks.map((link) => ({
        name: link.name,
        el: document.querySelector(link.href),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-primary-dark tracking-tight z-10"
        >
          KS
        </a>

        {/* Desktop Nav Links — absolutely centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 bg-white/60 backdrop-blur-sm rounded-full px-2 py-1 border border-border">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeSection === link.name
                  ? "text-primary-dark"
                  : "text-text-secondary hover:text-primary-dark"
              }`}
            >
              {activeSection === link.name && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="px-5 py-2.5 bg-primary-dark text-white text-sm font-medium rounded-full hover:bg-accent transition-colors duration-200"
          >
            Resume
          </a>
          <a
            href="#"
            className="p-2.5 border border-border rounded-lg hover:bg-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/60"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.name
                      ? "bg-accent/10 text-accent"
                      : "text-text-secondary hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  className="flex-1 text-center px-5 py-2.5 bg-primary-dark text-white text-sm font-medium rounded-full"
                >
                  Resume
                </a>
                <a
                  href="#"
                  className="p-2.5 border border-border rounded-lg"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
