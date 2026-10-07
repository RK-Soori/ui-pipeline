"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { THEME_TOKENS } from "./ThemeTokens";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.45,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  };

  return (
    <section className="relative min-h-[100dvh] pt-24 pb-16 flex items-center justify-center px-6 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: 4-Element Hero Content Budget */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          {/* Element 1: Eyebrow Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border ${THEME_TOKENS.accent.border} ${THEME_TOKENS.radius}`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            v2.4 Kernel Released
          </motion.div>

          {/* Element 2: Headline (<= 2 lines) */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className={`text-4xl sm:text-5xl lg:text-6xl ${THEME_TOKENS.typography.headline} leading-[1.08]`}
          >
            Deterministic Observability for Distributed GPU Fleets
          </motion.h1>

          {/* Element 3: Subtext (<= 20 words, <= 4 lines) */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className={`text-lg sm:text-xl ${THEME_TOKENS.typography.body}`}
          >
            Eliminate silent pipeline stalls with millisecond tensor telemetry and automated memory defragmentation.
          </motion.p>

          {/* Element 4: CTAs (1 primary + max 1 secondary) */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              type="button"
              className={`px-6 py-3.5 text-sm font-semibold text-zinc-950 ${THEME_TOKENS.accent.base} ${THEME_TOKENS.accent.hover} ${THEME_TOKENS.radius} active:scale-[0.98] transition-transform duration-100 shadow-md`}
            >
              Deploy Cluster
            </button>
            <button
              type="button"
              className={`px-6 py-3.5 text-sm font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 ${THEME_TOKENS.radius} active:scale-[0.98] transition-all duration-100`}
            >
              Read Architecture Specs
            </button>
          </motion.div>
        </div>

        {/* Right Column: Grounded Domain Asset (Real Telemetry Matrix) */}
        <div className="lg:col-span-5 w-full">
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className={`${THEME_TOKENS.surface.card} ${THEME_TOKENS.radius} p-6 flex flex-col gap-5`}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-zinc-300">node-us-east-04</span>
              </div>
              <span className="text-xs font-mono text-emerald-400">99.98% Latency Bound</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-zinc-950/70 border border-zinc-800 rounded-lg">
                <span className="text-[11px] text-zinc-400 block">VRAM Utilization</span>
                <span className="text-2xl font-mono font-bold text-zinc-100">76.2 GB</span>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[95%]" />
                </div>
              </div>

              <div className="p-3 bg-zinc-950/70 border border-zinc-800 rounded-lg">
                <span className="text-[11px] text-zinc-400 block">Tensor Interconnect</span>
                <span className="text-2xl font-mono font-bold text-zinc-100">894 GB/s</span>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[88%]" />
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-zinc-400 bg-zinc-950/80 p-3 rounded-lg border border-zinc-800/80">
              <span className="text-emerald-400">$</span> telemetry trace --cluster gpu-prod-8x
              <br />
              <span className="text-zinc-500">[0.02ms]</span> Shard sync acknowledged across 64 nodes.
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
