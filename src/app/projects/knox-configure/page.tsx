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

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The goal was to{" "}
                    <strong className="text-primary-dark">
                      expand Samsung smart accessories into the B2C space
                    </strong>{" "}
                    by building on Knox Configure — a B2B cloud solution that
                    allows enterprises to customize Samsung devices. We wanted to
                    create a new way for users to customize their devices with
                    smart accessories, creating a more intuitive and meaningful
                    connection with their phones and the brand they love.
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    To achieve this, we took a{" "}
                    <strong className="text-primary-dark">
                      holistic approach
                    </strong>{" "}
                    that included redesigning the Knox Configure module (within
                    settings) to better serve both B2B and B2C audiences,
                    restructuring the Knox Configure information architecture,
                    streamlining enrollment flows, and enhancing the interface
                    for a more intuitive and user-friendly experience.
                  </p>
                </div>

                {/* My Role */}
                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    My Role
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    As the{" "}
                    <strong className="text-primary-dark">
                      lead designer for Samsung Knox Configure, Knox Service
                      Plugin, and Knox Asset Intelligence
                    </strong>
                    , I drove innovation in B2B cloud services at scale. I played
                    a pivotal strategic role, driving initiatives that increased{" "}
                    <strong className="text-primary-dark">
                      customer satisfaction score from 60 to 95
                    </strong>
                    . Building a product to be used by seasoned IT admins and end
                    users using the product for the first time was one of the
                    biggest challenges — requiring significant effort to
                    understand the mental models of these personas to simplify
                    all the complex workflows used in configuring devices.
                  </p>
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
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Through in-depth user research, we uncovered key needs and
                    pain points, enabling us to put the user in the
                    driver&apos;s seat. Our research methods included{" "}
                    <strong className="text-primary-dark">
                      background research, competitive analysis, user interviews,
                      and data analysis
                    </strong>
                    .
                  </p>
                  <ImagePlaceholder
                    name="research-overview.png"
                    className="w-full h-[280px]"
                  />
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
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    I proactively identified friction in the{" "}
                    <strong className="text-primary-dark">
                      signup user journey for Knox Mobile enrollment
                    </strong>{" "}
                    for basic and premium users, and proposed redesigning it —
                    helping prioritize it on the product roadmap. The existing
                    flow was too long and asked too many questions, so we mapped
                    out a streamlined path that reduced unnecessary steps.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/portfolio/images/Knox%20Configure%20Images/User%20Flow%20%20Before%20and%20After.webp"
                      alt="User flow before and after"
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
                  <div className="grid md:grid-cols-2 gap-5">
                    <ImagePlaceholder
                      name="persona-it-admin.png"
                      className="h-[220px]"
                    />
                    <ImagePlaceholder
                      name="persona-b2c-user.png"
                      className="h-[220px]"
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
                    Redesigning the Knox Configure Module
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    We rebuilt the{" "}
                    <strong className="text-primary-dark">
                      Knox Configure module (within settings)
                    </strong>{" "}
                    to give users direct access to features, settings, and
                    customization options — replacing the outdated process where
                    they had to rely on customer service for assistance. Multiple
                    iterations were explored through wireframes and prototypes.
                  </p>
                  <div className="grid md:grid-cols-2 gap-5 mb-6">
                    <ImagePlaceholder
                      name="iteration-wireframe-v1.png"
                      className="h-[240px]"
                    />
                    <ImagePlaceholder
                      name="iteration-wireframe-v2.png"
                      className="h-[240px]"
                    />
                  </div>
                  <ImagePlaceholder
                    name="iteration-wireframe-v3.png"
                    className="w-full h-[280px]"
                  />
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

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Cross-Team Critiques & Feedback
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Throughout the iteration process, we conducted{" "}
                    <strong className="text-primary-dark">
                      cross-team critiques with researchers and product managers
                    </strong>{" "}
                    to validate design decisions and ensure alignment between
                    user needs, business goals, and technical feasibility.
                  </p>
                  <ImagePlaceholder
                    name="iteration-feedback-sessions.png"
                    className="w-full h-[260px]"
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
