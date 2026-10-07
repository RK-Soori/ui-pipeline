// WITH SKILL: compact-ui-designer Production Portfolio
// Reading this as: Personal engineering portfolio for a systems engineer, with quiet craftsman language, leaning toward Linear/Vercel dark minimalist aesthetic.
// Dials: DESIGN_VARIANCE: 7 | MOTION_INTENSITY: 5 | VISUAL_DENSITY: 4

"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const PROJECTS = [
  {
    year: "2025",
    title: "Atlas Key-Value Engine",
    role: "Lead Architect",
    summary: "LSM-tree storage engine in Rust with io_uring disk pipelining and zero-copy reads.",
    metrics: "140k ops/sec",
    href: "https://github.com",
    tags: ["Rust", "Storage", "Linux"]
  },
  {
    year: "2024",
    title: "Pulse Edge Telemetry",
    role: "Creator",
    summary: "Distributed tracing aggregator handling 12M events/min with eBPF kernel probes.",
    metrics: "0.4ms p99",
    href: "https://github.com",
    tags: ["Go", "eBPF", "Kafka"]
  },
  {
    year: "2024",
    title: "Prism Schema Compiler",
    role: "Core Author",
    summary: "Deterministic schema migration planner generating zero-downtime PostgreSQL DDL.",
    metrics: "2.1k GitHub Stars",
    href: "https://github.com",
    tags: ["TypeScript", "Postgres", "AST"]
  }
];

export default function CraftedEngineerPortfolio() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<"projects" | "writing">("projects");

  return (
    <div className="min-h-[100dvh] bg-[#0c0d0e] text-[#ededed] font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Global Theme Lock: 1px subtle hairline border, no neon glows */}
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Navigation: Strictly single-line, max height 64px */}
        <header className="h-16 flex items-center justify-between border-b border-[#232528]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium tracking-tight text-[#f4f4f5]">Alex Mercer</span>
            <span className="text-xs text-[#71717a] hidden sm:inline">Systems & Infrastructure</span>
          </div>

          <nav className="flex items-center gap-6 text-xs text-[#a1a1aa]">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a 
              href="mailto:alex@mercer.dev" 
              className="text-white hover:text-emerald-400 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Hero Viewport: Asymmetric Split (Anti-Center Bias) */}
        <section className="pt-20 pb-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-b border-[#232528]">
          
          {/* Left Column (Text Budget: Max 4 elements) */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#18191b] border border-[#27282b] text-xs text-[#a1a1aa]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Available for Q2 Staff Engineering roles
            </div>

            {/* Headline: Max 2 lines, tight leading, no em-dashes */}
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
              Building distributed engines and low-latency data pipelines.
            </h1>

            {/* Subtext: Max 20 words */}
            <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-[55ch]">
              Ten years architecting storage kernels, eBPF telemetry, and mission-critical cloud infrastructure at hyperscale.
            </p>

            {/* CTAs: Primary + Secondary, strictly single-line, tactile scale feedback */}
            <div className="flex items-center gap-3 pt-2">
              <motion.a
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                href="#work"
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#0c0d0e] text-xs font-semibold tracking-tight transition-colors"
              >
                Inspect Work
              </motion.a>

              <motion.a
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#18191b] hover:bg-[#202124] border border-[#27282b] text-xs text-[#d4d4d8] font-medium transition-colors"
              >
                GitHub Profile
              </motion.a>
            </div>
          </div>

          {/* Right Column: Live Context Card (No fake screenshot divs) */}
          <div className="md:col-span-5 bg-[#131416] border border-[#232528] rounded-lg p-5 text-xs font-mono space-y-4">
            <div className="flex items-center justify-between border-b border-[#232528] pb-3 text-[#71717a]">
              <span>SYSTEM PROFILE</span>
              <span className="text-emerald-400">OPERATIONAL</span>
            </div>
            <div className="space-y-2 text-[#a1a1aa]">
              <div className="flex justify-between">
                <span className="text-[#71717a]">Focus</span>
                <span className="text-white">LSM Trees, Raft, eBPF</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71717a]">Primary Stack</span>
                <span className="text-white">Rust, C++, Go, Linux</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71717a]">Location</span>
                <span className="text-white">San Francisco, CA (UTC-7)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71717a]">Open Source</span>
                <span className="text-white">12 crates published</span>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work: Asymmetric Interactive Ledger (No 3-equal-box cliché) */}
        <section id="work" className="py-16 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold tracking-tight text-white">
              Selected Systems
            </h2>
            <div className="flex gap-1 p-1 bg-[#131416] border border-[#232528] rounded-lg text-xs">
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === "projects" ? "bg-[#232528] text-white" : "text-[#71717a]"
                }`}
              >
                Production Systems
              </button>
            </div>
          </div>

          {/* Ledger List */}
          <div className="divide-y divide-[#1e2023] border-y border-[#232528]">
            {PROJECTS.map((project, i) => (
              <motion.article
                key={project.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.06 }}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#111214] px-3 -mx-3 rounded-lg transition-colors group"
              >
                <div className="md:col-span-2 text-xs font-mono text-[#71717a]">
                  {project.year}
                </div>
                
                <div className="md:col-span-6 space-y-1">
                  <h3 className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="flex gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-[#18191b] border border-[#232528] text-[#71717a]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-6 text-xs font-mono">
                  <span className="text-emerald-400">{project.metrics}</span>
                  <a
                    href={project.href}
                    className="text-[#71717a] group-hover:text-white transition-colors"
                  >
                    Source -&gt;
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Footer: Single line, minimal signature */}
        <footer className="py-12 border-t border-[#232528] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <p>© 2026 Alex Mercer. Deterministic systems engineering.</p>
          <div className="flex gap-6">
            <a href="https://github.com" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://twitter.com" className="hover:text-white transition-colors">Twitter</a>
            <a href="mailto:alex@mercer.dev" className="hover:text-white transition-colors">Email</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
