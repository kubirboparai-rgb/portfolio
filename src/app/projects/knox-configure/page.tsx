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
      className={`bg-blue-50/50 border-2 border-dashed border-blue-200 rounded-xl flex items-center justify-center ${className}`}
    >
      <span className="text-blue-300 text-sm font-medium text-center px-4">
        {name}
      </span>
    </div>
  );
}

export default function KnoxConfigureCaseStudy() {
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
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
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
              Samsung Knox Configure
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-10">
              Creating an easy to use cloud managing portal
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
                  Heuristic Evaluation, Gap Analysis, User Interviews
                </p>
              </div>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                  Tools
                </p>
                <p className="text-white font-medium">Figma, FigJam, Miro</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="w-full h-[300px] md:h-[450px] shadow-xl rounded-2xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portfolio/images/Knox%20Configure%20Images/Cover.webp"
            alt="Knox Configure cover"
            className="w-full h-full object-cover"
          />
        </div>
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
                          ? "bg-blue-600 text-white"
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
                      ? "bg-blue-600 text-white"
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

                {/* Problem & Insights */}
                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold tracking-widest rounded-full uppercase mb-5">
                    Problem &amp; Insights
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-4 leading-snug">
                    Admins struggled to locate features while creating or managing profiles — leading to frustration, endless scrolling, and reliance on customer support
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed mb-8">
                    Knox Configure enabled IT admins to create and manage device profiles through a cloud portal to customize and automate Samsung devices. Yet despite its capabilities, many admins found the experience deeply frustrating.{" "}
                    <strong className="text-primary-dark">Creating and managing profiles should be seamless</strong> — but fragmented navigation, an overloaded feature set, and a complete lack of guided progression left users without the direction they needed. What should have been an empowering tool felt like an obstacle.
                  </p>
                  {/* Two-column images */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="rounded-xl overflow-hidden border border-border h-[220px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/portfolio/images/Knox%20Configure%20Images/Problem%20image%201.webp"
                        alt="Old Knox Configure UI"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-border h-[220px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/portfolio/images/Knox%20Configure%20Images/Problem%20Image%202.webp"
                        alt="Frustrated user"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Captions */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <p className="text-text-secondary text-xs leading-relaxed text-center px-2">
                      Non-linear navigation, feature overload, and no guided process — leaving users to fend for themselves
                    </p>
                    <p className="text-text-secondary text-xs leading-relaxed text-center px-2">
                      Getting lost mid-flow impacts experience — leading to abandonment, loss of trust, and negative sentiment
                    </p>
                  </div>
                  {/* Role summary */}
                  <div className="border-t border-border pt-6">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      As the{" "}
                      <strong className="text-primary-dark">lead UX designer for Knox Configure, Knox Service Plugin, and Knox Asset Intelligence</strong>,
                      I drove end-to-end design across Samsung&apos;s B2B cloud services. My work required deep understanding of two opposing mental models — seasoned IT admins and first-time B2C users — to untangle complex workflows and make them feel intuitive for both.
                    </p>
                  </div>
                </div>

                {/* Goals */}
                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold tracking-widest rounded-full uppercase mb-5">
                    Goals
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-4 leading-snug">
                    Refocusing Knox Configure: from overwhelming feature sprawl to a clear, guided profile creation experience
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed">
                    Leadership&apos;s push to evolve Knox Configure from a{" "}
                    <strong className="text-primary-dark">B2B into a B2B2C service</strong>{" "}
                    created both an opportunity and a design constraint. Users needed a clear path to their most valuable features — particularly branding capabilities that let businesses customize and sell smart accessories. Recognizing an overextended feature set and fragmented user journeys, I organized a{" "}
                    <strong className="text-primary-dark">four-phase strategy</strong>: enhance profile creation efficiency, enable swift feature detection, introduce progress awareness, and offer a preview of the redefined platform — all while lifting both user experience and team morale.
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold tracking-widest rounded-full uppercase mb-5">
                    Solution
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-4 leading-snug">
                    A five-step profile creation process — intuitive to navigate, with a redefined feature hierarchy that makes setup feel effortless
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed">
                    As lead designer, I pivoted Knox Configure from a cumbersome, feature-heavy workflow into a{" "}
                    <strong className="text-primary-dark">dynamic, user-centric interface</strong>. The solution centered on giving users breathing room — clear progress awareness, logical feature categorization, and effortless navigation between steps. By shifting from feature overload to structured progression, the redesign enabled both IT admins and first-time B2C users to create and manage profiles seamlessly,{" "}
                    <strong className="text-primary-dark">without ever needing to contact customer support</strong>.
                  </p>
                </div>

                {/* Before & After */}
                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-8">
                    Before &amp; After
                  </h3>

                  {/* Before row */}
                  <div className="mb-8 pb-8 border-b border-border">
                    <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-5">
                      Before
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                      <div className="space-y-2">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-red-500 mb-3">
                          Pain Points
                        </p>
                        {[
                          "Non-linear navigation with no clear starting point",
                          "Hundreds of feature categories with no hierarchy or grouping",
                          "No progress indicators — users couldn't tell how far along they were",
                          "Impossible to distinguish configured vs. non-configured states at a glance",
                          "Required customer service for tasks users should self-serve",
                          "No real-time device preview to validate changes before applying",
                          "Steep learning curve for both IT admins and first-time B2C users",
                        ].map((point) => (
                          <div key={point} className="flex items-start gap-2">
                            <span className="text-red-400 text-sm shrink-0 mt-0.5">✗</span>
                            <p className="text-text-secondary text-sm leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                      <ImagePlaceholder
                        name="before-knox-configure.png"
                        className="h-[320px]"
                      />
                    </div>
                  </div>

                  {/* After row */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-5">
                      After
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                      <div className="space-y-2">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-green-600 mb-3">
                          Improvements
                        </p>
                        {[
                          "Five-step guided profile creation — reduced from 17 steps",
                          "F-shaped feature hierarchy enabling fast, scannable feature discovery",
                          "Transparent progress indicators throughout the entire flow",
                          "Clear configured vs. non-configured visual states — reduced support tickets",
                          "Self-service experience eliminating reliance on customer support",
                          "Real-time device preview lets users validate changes before applying",
                          "Designed to serve both IT admins and first-time B2C users equally",
                        ].map((point) => (
                          <div key={point} className="flex items-start gap-2">
                            <span className="text-green-500 text-sm shrink-0 mt-0.5">✓</span>
                            <p className="text-text-secondary text-sm leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                      <ImagePlaceholder
                        name="after-knox-configure.png"
                        className="h-[320px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Challenge / Goal */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-card rounded-2xl overflow-hidden border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/portfolio/images/Knox%20Configure%20Images/Problem%20image%201.webp"
                      alt="The Challenge"
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="p-7">
                      <h3 className="text-lg font-bold text-primary-dark mb-2">
                        The Challenge
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Research indicated that the current enrollment flow is too
                        long, asks too many questions, or has excessive steps. The
                        Knox Configure module relied on an outdated process where
                        users had to depend on customer service for assistance
                        rather than having direct access to features and settings.
                      </p>
                    </div>
                  </div>
                  <div className="bg-card rounded-2xl overflow-hidden border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/portfolio/images/Knox%20Configure%20Images/Problem%20Image%202.webp"
                      alt="The Goal"
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="p-7">
                      <h3 className="text-lg font-bold text-primary-dark mb-2">
                        The Goal
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        The large majority of enterprises would consider using Knox
                        Configure for B2B2C purposes if the flow provides
                        simplicity, transparency, and efficiency to maintain user
                        engagement and satisfaction. We aimed to deliver a
                        one-click, effortless experience.
                      </p>
                    </div>
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
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Through in-depth user research, we uncovered key needs and
                    pain points, enabling us to put the user in the
                    driver&apos;s seat. Our research methods included{" "}
                    <strong className="text-primary-dark">
                      background research, competitive analysis, user interviews,
                      and data analysis
                    </strong>
                    .
                  </p>
                </div>

                {/* Methods */}
                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Methods
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    We used{" "}
                    <strong className="text-primary-dark">
                      heuristic evaluation, information architecture analysis,
                      and gap analysis
                    </strong>{" "}
                    to assess the current state. For gap analysis, we conducted{" "}
                    <strong className="text-primary-dark">
                      user interviews, data analysis, and cross-team critiques
                      with researchers and product managers
                    </strong>
                    .
                  </p>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-bg rounded-xl overflow-hidden border border-border">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/portfolio/images/Knox%20Configure%20Images/Heuristic.png"
                        alt="Heuristic Evaluation"
                        className="w-full h-[300px] object-cover object-top"
                      />
                      <div className="p-5">
                        <h4 className="font-semibold text-primary-dark mb-1">
                          Heuristic Evaluation
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          Evaluated the existing interface against usability
                          heuristics to identify pain points, inconsistencies,
                          and areas for improvement across the portal.
                        </p>
                      </div>
                    </div>
                    <div className="bg-bg rounded-xl overflow-hidden border border-border">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/portfolio/images/Knox%20Configure%20Images/Affinity.png"
                        alt="Gap Analysis"
                        className="w-full h-[300px] object-cover object-top"
                      />
                      <div className="p-5">
                        <h4 className="font-semibold text-primary-dark mb-1">
                          Gap Analysis
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          Conducted user interviews, data analysis, and
                          cross-team critiques to map the gap between the
                          current state and real user needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Findings */}
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-6">
                    Key Findings
                  </h3>
                  <div className="grid md:grid-cols-3 gap-5">
                    <div className="bg-blue-50/60 rounded-xl p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-3">
                        01
                      </div>
                      <h4 className="font-semibold text-primary-dark text-sm mb-2">
                        Recognition vs Recall
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Profile names and dates applied didn&apos;t provide any
                        context to help users recognize their meaning or
                        relevance, forcing users to recall information from
                        memory.
                      </p>
                    </div>
                    <div className="bg-blue-50/60 rounded-xl p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-3">
                        02
                      </div>
                      <h4 className="font-semibold text-primary-dark text-sm mb-2">
                        Lack of Consistency
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        The interface lacked consistency with Samsung One UI
                        design system standards, creating a fragmented
                        experience across the portal.
                      </p>
                    </div>
                    <div className="bg-blue-50/60 rounded-xl p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-3">
                        03
                      </div>
                      <h4 className="font-semibold text-primary-dark text-sm mb-2">
                        Insufficient Help & Documentation
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Lack of readily available help or explanation for
                        features like customizations and multi-accessory
                        profiles, leaving users stranded on complex tasks.
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
                    Restructuring the Information Architecture
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    A major part of our holistic approach was restructuring the{" "}
                    <strong className="text-primary-dark">
                      Knox Configure information architecture
                    </strong>
                    . The existing IA made it difficult for users to navigate
                    between configuration profiles, enrolled devices, and
                    settings. We reorganized the hierarchy to create clear,
                    logical pathways for both IT admin and first-time user
                    personas.
                  </p>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-3">
                        Before
                      </p>
                      <div className="rounded-xl overflow-hidden border border-border">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/portfolio/images/Knox%20Configure%20Images/%5BBefore%5D%20-%20Research%20user%20flow%20.webp"
                          alt="Before - Research user flow"
                          className="w-full h-[280px] object-cover object-top"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-3">
                        After
                      </p>
                      <div className="rounded-xl overflow-hidden border border-border">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/portfolio/images/Knox%20Configure%20Images/New%20User%20flow%20architecture.webp"
                          alt="After - New user flow architecture"
                          className="w-full h-[280px] object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Streamlining Enrollment Flows
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-8">
                    I proactively identified friction in the{" "}
                    <strong className="text-primary-dark">
                      signup user journey for Knox Mobile enrollment
                    </strong>{" "}
                    for basic and premium users, and proposed redesigning it —
                    helping prioritize it on the product roadmap. We took the
                    profile creation process from a{" "}
                    <strong className="text-primary-dark">
                      cumbersome 17-step procedure down to 5 simple steps
                    </strong>
                    , eliminating redundant questions and reducing unnecessary
                    friction throughout the flow.
                  </p>

                  {/* Result callout */}
                  <div className="bg-blue-50/60 rounded-2xl p-7 mb-8 border border-blue-100">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-blue-500 mb-3">
                      Result
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-primary-dark leading-snug mb-4">
                      Culminated in a{" "}
                      <span className="text-blue-600">
                        58% increase in user satisfaction
                      </span>{" "}
                      score from 60 to 95, while also decreasing task completion
                      time by 30%.
                    </p>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Feedback from users paints a vivid picture of the impact:
                      many laud the revamped UI for a smoother user journey,
                      while others highlighted in user interviews how they would
                      like to see these features in other Knox Cloud Services. A
                      recurring sentiment was the newly found ability to visually
                      differentiate between features already configured vs
                      non-configured — minimizing information overload, enabling
                      real-time device preview, and delivering a frictionless
                      experience.
                    </p>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/portfolio/images/Knox%20Configure%20Images/User%20Flow%20%20Before%20and%20After.webp"
                      alt="User flow before and after — 17 steps reduced to 5"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Serving Two Audiences
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    One of the unique challenges was designing for{" "}
                    <strong className="text-primary-dark">
                      two fundamentally different user groups
                    </strong>
                    : seasoned IT administrators who needed power and efficiency,
                    and first-time B2C users who needed simplicity and guidance.
                    Understanding the mental models of these personas was
                    critical to simplifying the complex workflows used in
                    configuring devices.
                  </p>
                  <div className="flex flex-col gap-5">
                    <div className="rounded-xl overflow-hidden border border-border">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/portfolio/images/Knox%20Configure%20Images/B2b%20Persona.png"
                        alt="B2B IT Admin Persona"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-border">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/portfolio/images/Knox%20Configure%20Images/B2C%20Persona.png"
                        alt="B2C User Persona"
                        className="w-full h-auto"
                      />
                    </div>
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
                  <h3 className="text-xl font-bold text-primary-dark mb-2">
                    Redesigning the Knox Configure Module
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-8">
                    We rebuilt the{" "}
                    <strong className="text-primary-dark">
                      Knox Configure module (within settings)
                    </strong>{" "}
                    through multiple rounds of iteration — each shaped by feedback
                    from PMs, the design team, and senior stakeholders — working
                    toward a solution that gave users direct access to features
                    without relying on customer service.
                  </p>

                  {/* Iteration 1 */}
                  <div className="mb-6 rounded-2xl border border-border overflow-hidden">
                    <div className="bg-blue-600 px-6 py-3 flex items-center gap-3">
                      <span className="text-white text-xs font-bold uppercase tracking-widest">
                        Iteration 01
                      </span>
                    </div>
                    <div className="border-b border-border">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/portfolio/images/Knox%20Configure%20Images/Iterations%201.png"
                        alt="Iteration 1"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="p-6 bg-card">
                      <h4 className="font-bold text-primary-dark mb-3">
                        Establishing the Foundation
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        The first iteration focused on restructuring the core
                        navigation and surfacing key actions that were previously
                        buried. We moved away from the dependency on customer
                        service by exposing configuration options directly in the
                        module.
                      </p>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-2">
                          Feedback received
                        </p>
                        <ul className="text-text-secondary text-sm leading-relaxed space-y-1.5">
                          <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-amber-500 shrink-0">→</span>
                            <span><strong className="text-primary-dark">PM:</strong> Prioritize the enrollment entry point — it was too hard to find for new users.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-amber-500 shrink-0">→</span>
                            <span><strong className="text-primary-dark">Design team:</strong> Information density was too high on first load; simplify the hierarchy before adding features.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-amber-500 shrink-0">→</span>
                            <span><strong className="text-primary-dark">Stakeholders:</strong> Needed clearer visual differentiation between configured vs. non-configured states to reduce support tickets.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Iteration 2 */}
                  <div className="mb-6 rounded-2xl border border-border overflow-hidden">
                    <div className="bg-blue-700 px-6 py-3 flex items-center gap-3">
                      <span className="text-white text-xs font-bold uppercase tracking-widest">
                        Iteration 02
                      </span>
                    </div>
                    <div className="border-b border-border">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/portfolio/images/Knox%20Configure%20Images/Iterations%202.png"
                        alt="Iteration 2"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="p-6 bg-card">
                      <h4 className="font-bold text-primary-dark mb-3">
                        Addressing Hierarchy & State Clarity
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        Taking the first round of feedback, we restructured the
                        information hierarchy, made enrollment more prominent, and
                        introduced visual indicators for configured vs.
                        non-configured states. The layout was simplified to reduce
                        cognitive load on first load.
                      </p>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-2">
                          Feedback received
                        </p>
                        <ul className="text-text-secondary text-sm leading-relaxed space-y-1.5">
                          <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-amber-500 shrink-0">→</span>
                            <span><strong className="text-primary-dark">PM:</strong> Progress felt clearer but the profile creation flow still had too many steps — push for further simplification.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-amber-500 shrink-0">→</span>
                            <span><strong className="text-primary-dark">Design team:</strong> Typography and spacing needed alignment with Samsung One UI standards across all states.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-amber-500 shrink-0">→</span>
                            <span><strong className="text-primary-dark">Stakeholders:</strong> The real-time device preview concept resonated strongly — make it a focal feature of the final design.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Iteration 3 */}
                  <div className="rounded-2xl border border-border overflow-hidden">
                    <div className="bg-blue-900 px-6 py-3 flex items-center gap-3">
                      <span className="text-white text-xs font-bold uppercase tracking-widest">
                        Iteration 03
                      </span>
                    </div>
                    <div className="border-b border-border">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/portfolio/images/Knox%20Configure%20Images/Iterations%203.png"
                        alt="Iteration 3"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="p-6 bg-card">
                      <h4 className="font-bold text-primary-dark mb-3">
                        Pushing the Interactions Further
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        The third iteration incorporated One UI alignment and an
                        early version of the real-time device preview. While the
                        direction was getting stronger, feedback from cross-team
                        critiques made clear that the design still hadn't hit the
                        bar — more rounds of refinement were needed before it
                        could be considered final.
                      </p>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-2">
                          Feedback received
                        </p>
                        <ul className="text-text-secondary text-sm leading-relaxed space-y-1.5">
                          <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-amber-500 shrink-0">→</span>
                            <span><strong className="text-primary-dark">PM:</strong> Device preview needed to feel more live and reactive — static representation wasn't convincing enough for the B2C pitch.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-amber-500 shrink-0">→</span>
                            <span><strong className="text-primary-dark">Design team:</strong> Component patterns were inconsistent across profile creation and enrollment — needed a unified system before handoff.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-amber-500 shrink-0">→</span>
                            <span><strong className="text-primary-dark">Senior stakeholders:</strong> Wanted to see more iterations exploring edge cases — multi-accessory profiles and error states were still unresolved.</span>
                          </li>
                        </ul>
                        <p className="text-text-secondary text-xs mt-3 italic">
                          The process continued through additional rounds of critique and refinement before arriving at the final design.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Building the B2C Enrollment Flow
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    To deliver a great experience for B2C users, we built a{" "}
                    <strong className="text-primary-dark">
                      streamlined enrollment flow on top of our existing B2B
                      process
                    </strong>
                    , aiming for a one-click, effortless experience where users
                    could watch the process happen without extra steps.
                  </p>
                  <ImagePlaceholder
                    name="iteration-enrollment-flow.png"
                    className="w-full h-[300px]"
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
                    The Redesigned Knox Configure Portal
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The final design gives users{" "}
                    <strong className="text-primary-dark">
                      direct access to features, settings, and customization
                      options
                    </strong>{" "}
                    — all aligned with Samsung One UI design system standards for
                    a consistent experience across the Knox product suite.
                  </p>
                  <ImagePlaceholder
                    name="final-design-dashboard.png"
                    className="w-full h-[380px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Profile Management & Configuration
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The redesigned profile management addresses the recognition
                    vs recall issue by providing contextual information alongside
                    profile names, helping users quickly understand and navigate
                    their configurations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-5">
                    <ImagePlaceholder
                      name="final-design-profile-management.png"
                      className="h-[280px]"
                    />
                    <ImagePlaceholder
                      name="final-design-profile-detail.png"
                      className="h-[280px]"
                    />
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Streamlined Enrollment Experience
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The new enrollment experience provides simplicity,
                    transparency, and efficiency — maintaining user engagement
                    and satisfaction throughout the process. Built-in help and
                    contextual guidance address the documentation gaps identified
                    in research.
                  </p>
                  <ImagePlaceholder
                    name="final-design-enrollment.png"
                    className="w-full h-[320px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Smart Accessories Customization
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    A key part of the B2C expansion — we designed a new way for
                    users to customize their devices with smart accessories,
                    creating a more intuitive and meaningful connection with
                    their phones and the brand they love.
                  </p>
                  <ImagePlaceholder
                    name="final-design-smart-accessories.png"
                    className="w-full h-[300px]"
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
                    Validating with Real Users
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    We conducted usability testing sessions with both IT
                    administrators and first-time B2C users to validate our
                    redesigned flows. Testing confirmed that the streamlined
                    enrollment and improved IA significantly reduced confusion
                    and task completion time.
                  </p>
                  <ImagePlaceholder
                    name="user-testing-sessions.png"
                    className="w-full h-[280px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Key Testing Insights
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Testing validated that providing simplicity, transparency,
                    and efficiency in the flow was critical for both user groups.
                    Findings were incorporated into the final iteration before
                    launch.
                  </p>
                  <ImagePlaceholder
                    name="user-testing-results.png"
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
                    <p className="text-4xl font-bold text-blue-600 mb-2">
                      58%
                    </p>
                    <p className="text-text-secondary text-sm font-medium">
                      Increase in Customer Satisfaction
                    </p>
                    <p className="text-text-secondary text-xs mt-1">
                      Score improved from 60 to 95
                    </p>
                  </div>
                  <div className="bg-card rounded-2xl p-7 border border-border text-center">
                    <p className="text-4xl font-bold text-blue-600 mb-2">
                      B2B → B2C
                    </p>
                    <p className="text-text-secondary text-sm font-medium">
                      Expanded Market Reach
                    </p>
                    <p className="text-text-secondary text-xs mt-1">
                      Smart accessories B2C launch
                    </p>
                  </div>
                  <div className="bg-card rounded-2xl p-7 border border-border text-center">
                    <p className="text-4xl font-bold text-blue-600 mb-2">
                      1-Click
                    </p>
                    <p className="text-text-secondary text-sm font-medium">
                      Effortless Enrollment
                    </p>
                    <p className="text-text-secondary text-xs mt-1">
                      Streamlined B2C onboarding
                    </p>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Impact
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-4">
                    The redesigned Knox Configure portal shipped successfully,
                    serving as the foundation for expanding Samsung smart
                    accessories into the B2C space. The rebuilt module gave users
                    direct access to features, settings, and customization
                    options — eliminating dependence on customer service.
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    The project also established new UX patterns that were
                    adopted across other Knox product modules, including Knox
                    Service Plugin and Knox Asset Intelligence.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Reflections
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    This project reinforced the importance of understanding
                    diverse user mental models. By balancing the needs of expert
                    IT admins with first-time B2C users, I learned how to design
                    interfaces that are both powerful and approachable. The
                    holistic approach — from IA restructuring to enrollment flow
                    optimization — showed the value of addressing systemic UX
                    issues rather than surface-level fixes.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* ===================== CROSS-TEAM CRITIQUES ===================== */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Cross-Team Critiques & Feedback
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Throughout every iteration, we ran{" "}
                    <strong className="text-primary-dark">
                      cross-team critiques with researchers, product managers,
                      and senior stakeholders
                    </strong>{" "}
                    to pressure-test design decisions and ensure alignment
                    between user needs, business goals, and technical
                    feasibility. This ongoing feedback loop — not any single
                    iteration — is what ultimately shaped the final design.
                  </p>
                </div>
              </motion.div>
            </div>

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
