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
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center ${className}`}
    >
      <span className="text-gray-400 text-sm font-medium text-center px-4">
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
              Creating an easy to use cloud managing portal for enterprise device
              configuration
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
                  Platform
                </p>
                <p className="text-white font-medium">Web (Cloud Portal)</p>
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

      {/* Hero Image Placeholder */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <ImagePlaceholder
          name="knox-configure-hero.png"
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
            {/* Overview */}
            <section id="overview" className="mb-20">
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
                    Samsung Knox Configure is a{" "}
                    <strong className="text-primary-dark">
                      cloud-based solution
                    </strong>{" "}
                    designed to simplify customizing and staging Samsung devices
                    remotely. It offers enterprises a convenient, frictionless
                    setup process for configuring devices at scale.
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    As the{" "}
                    <strong className="text-primary-dark">
                      lead UX designer
                    </strong>
                    , I drove the redesign of the Knox Configure module, taking a
                    holistic approach to restructure the information
                    architecture, streamline enrollment flows, and enhance the
                    interface for a more intuitive experience — ultimately
                    increasing{" "}
                    <strong className="text-primary-dark">
                      customer satisfaction from 60 to 95
                    </strong>
                    .
                  </p>
                </div>

                {/* Challenge / Goal cards */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-card rounded-2xl p-7 border border-border">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                      <span className="text-red-500 text-lg">!</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary-dark mb-2">
                      The Challenge
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Building a product usable by both seasoned IT admins and
                      first-time users required understanding vastly different
                      mental models while simplifying complex device
                      configuration workflows.
                    </p>
                  </div>
                  <div className="bg-card rounded-2xl p-7 border border-border">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-4">
                      <span className="text-green-500 text-lg">&#10003;</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary-dark mb-2">
                      The Goal
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Redesign Knox Configure to give users direct access to
                      features, settings, and customization options — replacing
                      the outdated process where they relied on customer service
                      for assistance.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Research */}
            <section id="research" className="mb-20">
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
                    Heuristic Evaluation
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    I conducted a comprehensive heuristic evaluation of the
                    existing Knox Configure portal to identify key usability
                    issues. This analysis was paired with an information
                    architecture audit and gap analysis to understand where the
                    product fell short.
                  </p>
                  <ImagePlaceholder
                    name="heuristic-evaluation.png"
                    className="w-full h-[280px] mb-6"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Key Findings
                  </h3>
                  <div className="grid md:grid-cols-3 gap-5">
                    <div className="bg-bg rounded-xl p-5">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        01
                      </div>
                      <h4 className="font-semibold text-primary-dark text-sm mb-2">
                        Recognition vs Recall
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Profile names and dates applied didn&apos;t provide
                        context to help users recognize their meaning or
                        relevance, forcing users to recall from memory.
                      </p>
                    </div>
                    <div className="bg-bg rounded-xl p-5">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        02
                      </div>
                      <h4 className="font-semibold text-primary-dark text-sm mb-2">
                        Design Inconsistency
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        The interface lacked consistency with Samsung One UI
                        design system standards, creating a fragmented user
                        experience across the portal.
                      </p>
                    </div>
                    <div className="bg-bg rounded-xl p-5">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        03
                      </div>
                      <h4 className="font-semibold text-primary-dark text-sm mb-2">
                        Insufficient Help
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Help documentation for features like customizations and
                        multi-accessory profiles was lacking, leaving users
                        confused about complex workflows.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    User Personas
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Through user interviews and stakeholder workshops, I
                    identified two primary personas with fundamentally different
                    needs and technical expertise levels.
                  </p>
                  <div className="grid md:grid-cols-2 gap-5">
                    <ImagePlaceholder
                      name="persona-it-admin.png"
                      className="h-[220px]"
                    />
                    <ImagePlaceholder
                      name="persona-first-time-user.png"
                      className="h-[220px]"
                    />
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Define */}
            <section id="define" className="mb-20">
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
                    Information Architecture Restructure
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The existing IA was flat and disorganized, making it
                    difficult for users to navigate between configuration
                    profiles, enrolled devices, and settings. I restructured the
                    entire information hierarchy to create clear, logical
                    pathways.
                  </p>
                  <ImagePlaceholder
                    name="information-architecture-before-after.png"
                    className="w-full h-[320px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    User Flows
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    I mapped out the critical user flows for device enrollment
                    and profile configuration, identifying pain points and
                    opportunities to reduce friction at each step.
                  </p>
                  <ImagePlaceholder
                    name="user-flows.png"
                    className="w-full h-[280px]"
                  />
                </div>
              </motion.div>
            </section>

            {/* Iteration */}
            <section id="iteration" className="mb-20">
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
                    Wireframes & Low-Fidelity Explorations
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    I explored multiple approaches for the dashboard layout,
                    enrollment flow, and profile management. Rapid prototyping
                    and internal reviews helped narrow down the direction.
                  </p>
                  <div className="grid md:grid-cols-2 gap-5 mb-6">
                    <ImagePlaceholder
                      name="wireframe-dashboard-v1.png"
                      className="h-[240px]"
                    />
                    <ImagePlaceholder
                      name="wireframe-dashboard-v2.png"
                      className="h-[240px]"
                    />
                  </div>
                  <ImagePlaceholder
                    name="wireframe-enrollment-flow.png"
                    className="w-full h-[280px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Stakeholder Feedback & Revisions
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Through design reviews with product managers, engineers, and
                    customer support, I incorporated feedback to refine the
                    navigation structure and simplify the profile creation
                    workflow.
                  </p>
                  <ImagePlaceholder
                    name="iteration-feedback-annotations.png"
                    className="w-full h-[260px]"
                  />
                </div>
              </motion.div>
            </section>

            {/* Design */}
            <section id="design" className="mb-20">
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
                    Final Dashboard
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The redesigned dashboard provides users with a clear overview
                    of their enrolled devices, active profiles, and
                    configuration status — all aligned with Samsung One UI design
                    system standards.
                  </p>
                  <ImagePlaceholder
                    name="final-design-dashboard.png"
                    className="w-full h-[350px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Profile Configuration
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The new profile configuration interface addresses the
                    recognition vs recall issue by showing contextual previews,
                    device counts, and last-modified timestamps alongside
                    profile names.
                  </p>
                  <div className="grid md:grid-cols-2 gap-5">
                    <ImagePlaceholder
                      name="final-design-profile-list.png"
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
                    Enrollment Flow
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    The streamlined enrollment flow reduces steps and provides
                    clear progress indicators. Inline help and contextual
                    tooltips guide first-time users through the process.
                  </p>
                  <ImagePlaceholder
                    name="final-design-enrollment-flow.png"
                    className="w-full h-[300px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Design System Alignment
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    All components were rebuilt to align with Samsung One UI
                    design system, ensuring consistency across the Knox product
                    suite while maintaining usability for enterprise users.
                  </p>
                  <ImagePlaceholder
                    name="design-system-components.png"
                    className="w-full h-[280px]"
                  />
                </div>
              </motion.div>
            </section>

            {/* User Testing */}
            <section id="user-testing" className="mb-20">
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
                    Usability Testing
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    I conducted moderated usability testing sessions with IT
                    administrators and first-time users to validate the
                    redesigned flows and identify remaining friction points.
                  </p>
                  <ImagePlaceholder
                    name="usability-testing-sessions.png"
                    className="w-full h-[280px]"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Testing Results
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    Testing revealed significant improvements in task completion
                    rates and user satisfaction. Key findings were incorporated
                    into the final iteration before launch.
                  </p>
                  <ImagePlaceholder
                    name="testing-results-summary.png"
                    className="w-full h-[260px]"
                  />
                </div>
              </motion.div>
            </section>

            {/* Outcome */}
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
                      60 → 95
                    </p>
                    <p className="text-text-secondary text-sm font-medium">
                      Customer Satisfaction Score
                    </p>
                  </div>
                  <div className="bg-card rounded-2xl p-7 border border-border text-center">
                    <p className="text-4xl font-bold text-blue-600 mb-2">
                      40%
                    </p>
                    <p className="text-text-secondary text-sm font-medium">
                      Reduction in Support Tickets
                    </p>
                  </div>
                  <div className="bg-card rounded-2xl p-7 border border-border text-center">
                    <p className="text-4xl font-bold text-blue-600 mb-2">
                      B2B + B2C
                    </p>
                    <p className="text-text-secondary text-sm font-medium">
                      Expanded Market Reach
                    </p>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Impact
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-4">
                    The redesigned Knox Configure portal shipped successfully and
                    served as the foundation for expanding Samsung smart
                    accessories into the B2C space. The rebuilt module gave users
                    direct access to features, settings, and customization
                    options — eliminating the need to rely on customer service
                    for assistance.
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    The project also established new UX patterns and best
                    practices that were adopted across other Knox product
                    modules.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    Reflections
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    This project reinforced the importance of understanding
                    diverse user mental models. By balancing the needs of expert
                    IT admins with first-time users, I learned to design
                    interfaces that are powerful yet approachable — a principle I
                    carry into every project.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Next Project */}
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
