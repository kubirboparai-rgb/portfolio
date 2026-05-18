"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "iteration", label: "Iteration" },
  { id: "design", label: "Design" },
  { id: "user-testing", label: "User Testing" },
  { id: "outcome", label: "Outcome" },
];

function ImagePlaceholder({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-violet-50/50 border-2 border-dashed border-violet-200 rounded-xl flex items-center justify-center ${className}`}
    >
      <span className="text-violet-300 text-sm font-medium text-center px-4">
        {name}
      </span>
    </div>
  );
}

export default function SmartAccessoriesCaseStudy() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero */}
      <div className="bg-gradient-to-br from-violet-500 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-16">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-10 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-[10px] font-bold tracking-widest rounded-full border border-white/30 uppercase mb-6">
              INDUSTRY PROJECT – SHIPPED
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl">
              Samsung Smart Accessories
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-10">
              Bringing device personalization to consumers — designing the
              experience that lets users transform their Samsung devices in
              seconds through NFC-powered smart accessories
            </p>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                  Role
                </p>
                <p className="text-white font-medium">Lead UX Designer</p>
              </div>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                  Company
                </p>
                <p className="text-white font-medium">
                  Samsung Research America
                </p>
              </div>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                  Methods
                </p>
                <p className="text-white font-medium">
                  User Interviews, Competitive Analysis, Gap Analysis, Data
                  Analysis
                </p>
              </div>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                  Platform
                </p>
                <p className="text-white font-medium">Mobile (Android)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <ImagePlaceholder
          name="smart-accessories-hero.png"
          className="w-full h-[300px] md:h-[450px] shadow-xl"
        />
      </div>

      {/* Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex gap-12">
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-48 shrink-0">
            <nav className="sticky top-24">
              <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-4">
                Contents
              </p>
              <ul className="space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        activeSection === s.id
                          ? "bg-violet-600 text-white"
                          : "text-text-secondary hover:text-primary-dark hover:bg-gray-100"
                      }`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Mobile section nav */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-lg border-t border-border px-4 py-3">
            <div className="flex gap-1 overflow-x-auto">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all ${
                    activeSection === s.id
                      ? "bg-violet-600 text-white"
                      : "text-text-secondary bg-gray-100"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* ===================== OVERVIEW ===================== */}
            <section id="overview" className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-primary-dark mb-6">
                  Overview
                </h2>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Beyond the Screen
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Samsung Knox Configure had been a powerful B2B tool for
                    years — letting enterprises customize thousands of devices
                    at scale. But there was a bigger opportunity sitting right in
                    front of us:{" "}
                    <strong className="text-primary-dark">
                      what if everyday consumers could experience that same magic
                      of device personalization?
                    </strong>
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The goal was to expand Samsung smart accessories into the B2C
                    space by building on Knox Configure — creating a new way for
                    users to customize their devices with smart accessories, and
                    building a{" "}
                    <strong className="text-primary-dark">
                      more intuitive and meaningful connection with their phones
                      and the brand they love
                    </strong>
                    .
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Imagine tapping an NFC accessory to your phone and watching
                    it instantly transform — new themes, wallpapers, apps, and
                    boot animations — all in seconds, no setup menus required.
                    That was the vision we set out to bring to life.
                  </p>
                </div>

                {/* Challenge / Goal */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-card rounded-2xl p-7 border border-border">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                      <span className="text-red-500 text-lg font-bold">!</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary-dark mb-2">
                      The Problem
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      The existing Knox Configure was built for IT
                      administrators — not consumers. The enrollment flow was too
                      long, asked too many questions, and had excessive steps.
                      Users had to rely on customer service rather than having
                      direct access to features. It was powerful, but not
                      approachable.
                    </p>
                  </div>
                  <div className="bg-card rounded-2xl p-7 border border-border">
                    <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center mb-4">
                      <span className="text-violet-600 text-lg">&#9733;</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary-dark mb-2">
                      The Vision
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Create a one-click, effortless experience where consumers
                      could pair a smart accessory and watch their phone
                      transform — without extra steps. If it didn&apos;t feel
                      like magic, we hadn&apos;t gone far enough.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* ===================== RESEARCH ===================== */}
            <section id="research" className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-primary-dark mb-6">
                  Research
                </h2>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Putting the User in the Driver&apos;s Seat
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Before designing anything, we needed to deeply understand who
                    we were designing for and why the current experience fell
                    short. Through in-depth user research, we uncovered key needs
                    and pain points that would shape every decision going
                    forward.
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed mb-8">
                    Our research approach combined multiple methods to build a
                    complete picture:
                  </p>

                  <div className="grid md:grid-cols-2 gap-5 mb-8">
                    <div className="bg-violet-50/40 rounded-xl p-6">
                      <h4 className="font-semibold text-primary-dark mb-2">
                        Background Research
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Studied the NFC accessories landscape, existing Knox
                        Configure usage patterns, and how consumers currently
                        personalize their devices — from Galaxy Themes to
                        third-party launchers.
                      </p>
                    </div>
                    <div className="bg-violet-50/40 rounded-xl p-6">
                      <h4 className="font-semibold text-primary-dark mb-2">
                        Competitive Analysis
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Analyzed how competitors approached device
                        personalization and NFC-based interactions, identifying
                        gaps and opportunities unique to Samsung&apos;s
                        ecosystem.
                      </p>
                    </div>
                    <div className="bg-violet-50/40 rounded-xl p-6">
                      <h4 className="font-semibold text-primary-dark mb-2">
                        User Interviews
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Spoke with both enterprise IT admins familiar with Knox
                        and everyday Samsung users to understand their mental
                        models around device setup and customization.
                      </p>
                    </div>
                    <div className="bg-violet-50/40 rounded-xl p-6">
                      <h4 className="font-semibold text-primary-dark mb-2">
                        Data Analysis
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Analyzed existing enrollment funnel data to pinpoint
                        exactly where users dropped off and which steps caused
                        the most friction.
                      </p>
                    </div>
                  </div>

                  <ImagePlaceholder
                    name="research-synthesis.png"
                    className="w-full h-[280px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Gap Analysis
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    We conducted{" "}
                    <strong className="text-primary-dark">
                      cross-team critiques with researchers and product managers
                    </strong>{" "}
                    to identify the gaps between what the product offered and
                    what users actually needed. This revealed a critical insight:
                  </p>
                  <div className="bg-violet-50/40 rounded-xl p-6 border-l-4 border-violet-500 mb-6">
                    <p className="text-primary-dark text-lg font-medium italic">
                      &ldquo;The large majority of enterprises would consider
                      using Knox Configure for B2B2C purposes if the flow
                      provides simplicity, transparency, and efficiency to
                      maintain user engagement and satisfaction.&rdquo;
                    </p>
                  </div>
                  <ImagePlaceholder
                    name="gap-analysis-findings.png"
                    className="w-full h-[260px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-6">
                    What We Learned
                  </h3>
                  <div className="grid md:grid-cols-3 gap-5">
                    <div className="bg-violet-50/40 rounded-xl p-6">
                      <div className="text-2xl font-bold text-violet-600 mb-3">
                        01
                      </div>
                      <h4 className="font-semibold text-primary-dark text-sm mb-2">
                        Enrollment Was a Wall
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        The current flow was too long, asked too many questions,
                        and had excessive steps — the opposite of the effortless
                        experience consumers expect.
                      </p>
                    </div>
                    <div className="bg-violet-50/40 rounded-xl p-6">
                      <div className="text-2xl font-bold text-violet-600 mb-3">
                        02
                      </div>
                      <h4 className="font-semibold text-primary-dark text-sm mb-2">
                        Two Worlds, One Product
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        IT admins needed power and control. Consumers needed
                        simplicity and delight. Designing for both without
                        compromising either required rethinking the core
                        experience.
                      </p>
                    </div>
                    <div className="bg-violet-50/40 rounded-xl p-6">
                      <div className="text-2xl font-bold text-violet-600 mb-3">
                        03
                      </div>
                      <h4 className="font-semibold text-primary-dark text-sm mb-2">
                        Emotional Connection Matters
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Users wanted personalization to feel personal — not
                        transactional. The accessory pairing needed to feel like
                        a moment of discovery, not a configuration step.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* ===================== DEFINE ===================== */}
            <section id="define" className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-primary-dark mb-6">
                  Define
                </h2>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    A Holistic Approach
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Rather than patching the existing B2B flow, we took a{" "}
                    <strong className="text-primary-dark">
                      holistic approach
                    </strong>{" "}
                    that addressed the experience from the ground up. Our
                    strategy had four pillars:
                  </p>
                  <div className="grid md:grid-cols-2 gap-5 mb-8">
                    <div className="p-5 rounded-xl border border-border">
                      <p className="text-violet-600 font-bold text-sm mb-1">
                        01
                      </p>
                      <p className="text-primary-dark font-medium text-sm">
                        Redesign the Knox Configure module to serve both B2B and
                        B2C audiences
                      </p>
                    </div>
                    <div className="p-5 rounded-xl border border-border">
                      <p className="text-violet-600 font-bold text-sm mb-1">
                        02
                      </p>
                      <p className="text-primary-dark font-medium text-sm">
                        Restructure the information architecture for clarity and
                        discoverability
                      </p>
                    </div>
                    <div className="p-5 rounded-xl border border-border">
                      <p className="text-violet-600 font-bold text-sm mb-1">
                        03
                      </p>
                      <p className="text-primary-dark font-medium text-sm">
                        Streamline enrollment into a frictionless, one-tap flow
                      </p>
                    </div>
                    <div className="p-5 rounded-xl border border-border">
                      <p className="text-violet-600 font-bold text-sm mb-1">
                        04
                      </p>
                      <p className="text-primary-dark font-medium text-sm">
                        Enhance the interface to create emotional connection
                        through personalization
                      </p>
                    </div>
                  </div>
                  <ImagePlaceholder
                    name="strategy-framework.png"
                    className="w-full h-[280px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Reimagining the NFC Pairing Experience
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The core interaction was deceptively simple: tap an NFC
                    accessory to your phone, and your device transforms. But
                    beneath that simplicity lay complex decisions about what
                    happens during that tap — enrolling the device, applying a
                    Knox Configure profile, triggering custom themes, wallpapers,
                    apps, and boot animations — all without the user feeling any
                    of that complexity.
                  </p>
                  <ImagePlaceholder
                    name="nfc-pairing-flow-diagram.png"
                    className="w-full h-[260px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Understanding Mental Models
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The biggest design challenge was bridging{" "}
                    <strong className="text-primary-dark">
                      two fundamentally different mental models
                    </strong>
                    . IT admins think in profiles, policies, and device groups.
                    Consumers think in themes, aesthetics, and self-expression.
                    We needed a single product that spoke both languages
                    fluently.
                  </p>
                  <div className="grid md:grid-cols-2 gap-5">
                    <ImagePlaceholder
                      name="mental-model-it-admin.png"
                      className="h-[200px]"
                    />
                    <ImagePlaceholder
                      name="mental-model-consumer.png"
                      className="h-[200px]"
                    />
                  </div>
                </div>
              </motion.div>
            </section>

            {/* ===================== ITERATION ===================== */}
            <section id="iteration" className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-primary-dark mb-6">
                  Iteration
                </h2>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    From Complex to One-Click
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The most critical design decision was how to transform the
                    multi-step B2B enrollment into something that felt effortless
                    for consumers. We built a{" "}
                    <strong className="text-primary-dark">
                      streamlined enrollment flow on top of the existing B2B
                      process
                    </strong>
                    , aiming for a one-click experience where users could watch
                    the process happen without extra steps.
                  </p>
                  <ImagePlaceholder
                    name="iteration-enrollment-before-after.png"
                    className="w-full h-[320px] mb-6"
                  />
                  <p className="text-text-secondary text-sm italic">
                    The enrollment flow went from 12+ steps to a single NFC tap
                    with a visual progress animation.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Exploring the Customization Interface
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    We explored multiple directions for how users would browse
                    and apply customizations from their smart accessories —
                    Galaxy themes, wallpapers, apps, and boot/shutdown
                    animations. Each iteration was tested against our core
                    principle: does this feel like personalization or
                    configuration?
                  </p>
                  <div className="grid md:grid-cols-3 gap-5">
                    <ImagePlaceholder
                      name="iteration-customization-v1.png"
                      className="h-[260px]"
                    />
                    <ImagePlaceholder
                      name="iteration-customization-v2.png"
                      className="h-[260px]"
                    />
                    <ImagePlaceholder
                      name="iteration-customization-v3.png"
                      className="h-[260px]"
                    />
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Cross-Team Critiques
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Throughout the process, we ran cross-team critiques with
                    researchers and product managers to pressure-test our
                    designs. These sessions surfaced edge cases around
                    multi-accessory support — users linking multiple NFC
                    accessories from different brands and choosing which to apply
                    — that significantly shaped the final interaction model.
                  </p>
                  <ImagePlaceholder
                    name="iteration-critique-notes.png"
                    className="w-full h-[240px]"
                  />
                </div>
              </motion.div>
            </section>

            {/* ===================== DESIGN ===================== */}
            <section id="design" className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-primary-dark mb-6">
                  Design
                </h2>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    The Tap-and-Transform Experience
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The final design centers around the moment of magic: the user
                    taps their NFC accessory, and the phone comes alive with
                    their chosen personality. A real-time animation shows the
                    transformation happening — wallpaper shifting, theme
                    applying, apps appearing — making the technology feel
                    tangible and delightful.
                  </p>
                  <ImagePlaceholder
                    name="final-design-tap-experience.png"
                    className="w-full h-[380px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Accessory Management
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Users can link multiple NFC accessories from different
                    brands — a sports team case, an artist collaboration, a work
                    profile — and seamlessly switch between them. Each accessory
                    carries its own personality: custom themes, unique
                    wallpapers, curated apps, and engaging boot/shutdown
                    animations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-5">
                    <ImagePlaceholder
                      name="final-design-accessory-list.png"
                      className="h-[300px]"
                    />
                    <ImagePlaceholder
                      name="final-design-accessory-detail.png"
                      className="h-[300px]"
                    />
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    The Knox Configure Module (Redesigned)
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Under the hood, we rebuilt the Knox Configure module within
                    settings to give users direct access to features, settings,
                    and customization options — replacing the outdated process
                    where they had to rely on customer service for assistance.
                    The B2B power is still there; it&apos;s just no longer in the
                    consumer&apos;s way.
                  </p>
                  <ImagePlaceholder
                    name="final-design-settings-module.png"
                    className="w-full h-[320px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Creating Emotional Connection
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The design goes beyond functionality. By pairing devices to
                    NFC accessories, brands can trigger experiences based on
                    users&apos; favorite designers, artists, or sports teams —
                    building brand awareness in an intimate setting and creating
                    a meaningful connection between the user and their device.
                  </p>
                  <ImagePlaceholder
                    name="final-design-brand-experiences.png"
                    className="w-full h-[280px]"
                  />
                </div>
              </motion.div>
            </section>

            {/* ===================== USER TESTING ===================== */}
            <section id="user-testing" className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-primary-dark mb-6">
                  User Testing
                </h2>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Validating the Magic
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    We tested the NFC pairing experience with both consumer
                    users and enterprise administrators. The critical question
                    wasn&apos;t just &ldquo;can they complete the task?&rdquo;
                    — it was &ldquo;does this feel effortless?&rdquo; We watched
                    for the moment of delight when the phone transformed, and
                    measured whether the experience delivered on our one-click
                    promise.
                  </p>
                  <ImagePlaceholder
                    name="user-testing-sessions.png"
                    className="w-full h-[280px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    What Testing Revealed
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Testing confirmed that users valued simplicity, transparency,
                    and efficiency in the flow. The real-time transformation
                    animation was a key differentiator — users consistently
                    described the NFC tap moment as &ldquo;satisfying&rdquo; and
                    &ldquo;fun.&rdquo; Feedback was incorporated into the final
                    iteration before launch.
                  </p>
                  <ImagePlaceholder
                    name="user-testing-insights.png"
                    className="w-full h-[260px]"
                  />
                </div>
              </motion.div>
            </section>

            {/* ===================== OUTCOME ===================== */}
            <section id="outcome" className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-primary-dark mb-6">
                  Outcome
                </h2>

                <div className="grid md:grid-cols-3 gap-5 mb-8">
                  <div className="bg-card rounded-2xl p-7 border border-border text-center">
                    <p className="text-4xl font-bold text-violet-600 mb-2">
                      60 → 95
                    </p>
                    <p className="text-text-secondary text-sm font-medium">
                      Customer Satisfaction Score
                    </p>
                    <p className="text-text-secondary text-xs mt-1">
                      58% improvement
                    </p>
                  </div>
                  <div className="bg-card rounded-2xl p-7 border border-border text-center">
                    <p className="text-4xl font-bold text-violet-600 mb-2">
                      B2C
                    </p>
                    <p className="text-text-secondary text-sm font-medium">
                      New Market Launched
                    </p>
                    <p className="text-text-secondary text-xs mt-1">
                      Samsung smart accessories for consumers
                    </p>
                  </div>
                  <div className="bg-card rounded-2xl p-7 border border-border text-center">
                    <p className="text-4xl font-bold text-violet-600 mb-2">
                      1 Tap
                    </p>
                    <p className="text-text-secondary text-sm font-medium">
                      Device Personalization
                    </p>
                    <p className="text-text-secondary text-xs mt-1">
                      Down from 12+ steps
                    </p>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Impact
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-4">
                    The Samsung Smart Accessories experience shipped
                    successfully, marking Samsung&apos;s entry into B2C device
                    personalization through Knox Configure. The redesigned module
                    gave users direct access to features, settings, and
                    customization — all through the intuitive NFC accessory
                    pairing that we envisioned from day one.
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    The project established a new design paradigm for Samsung —
                    proving that enterprise-grade technology can deliver
                    consumer-grade delight when you design with empathy and
                    intentionality.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    What I Learned
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    This project taught me that the hardest design problems
                    aren&apos;t about making things look good — they&apos;re
                    about making complexity invisible. Taking a B2B tool and
                    turning it into a consumer-facing experience required
                    rethinking every assumption about who the user is and what
                    they need. The most rewarding moment wasn&apos;t seeing the
                    final screens — it was watching a test user tap the NFC
                    accessory, see their phone transform, and smile.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Back */}
            <div className="border-t border-border pt-10">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-primary-dark text-sm font-medium transition-colors"
              >
                <ArrowLeft size={16} />
                Back to all projects
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
