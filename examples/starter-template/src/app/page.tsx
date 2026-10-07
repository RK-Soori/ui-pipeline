import React from "react";
import { Hero } from "../components/Hero";
import { THEME_TOKENS } from "../components/ThemeTokens";

export default function Page() {
  return (
    <main className={`min-h-screen ${THEME_TOKENS.surface.bg} text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300`}>
      {/* Desktop Navigation (Single line, max height 72px) */}
      <header className="fixed top-0 inset-x-0 h-16 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md z-50 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-mono font-bold text-emerald-400">
            UI
          </div>
          <span className="font-semibold tracking-tight text-sm text-zinc-100">
            Pipeline Engine
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
          <a href="#architecture" className="hover:text-zinc-200 transition-colors">Architecture</a>
          <a href="#telemetry" className="hover:text-zinc-200 transition-colors">Telemetry</a>
          <a href="#benchmarks" className="hover:text-zinc-200 transition-colors">Benchmarks</a>
          <a href="#docs" className="hover:text-zinc-200 transition-colors">Docs</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className={`px-4 py-2 text-xs font-semibold text-zinc-950 ${THEME_TOKENS.accent.base} ${THEME_TOKENS.accent.hover} ${THEME_TOKENS.radius} active:scale-[0.98] transition-all`}>
            Launch Console
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Secondary Section (Mobile grid collapse to grid-cols-1) */}
      <section id="architecture" className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Distributed Topology
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mt-2">
              Fault-Tolerant Sharding Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`${THEME_TOKENS.surface.card} ${THEME_TOKENS.radius} p-6`}>
              <h3 className="font-semibold text-zinc-200">Zero Host CPU Intervention</h3>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                Direct RDMA bypass paths between remote memory pools keep latency under 12 microseconds.
              </p>
            </div>
            <div className={`${THEME_TOKENS.surface.card} ${THEME_TOKENS.radius} p-6`}>
              <h3 className="font-semibold text-zinc-200">Autonomous Barrier Healing</h3>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                Straggling nodes are rerouted without halting cluster-wide gradient calculations.
              </p>
            </div>
            <div className={`${THEME_TOKENS.surface.card} ${THEME_TOKENS.radius} p-6`}>
              <h3 className="font-semibold text-zinc-200">Dynamic Quantization</h3>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                Automatic precision switching minimizes bandwidth consumption during interconnect spikes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
