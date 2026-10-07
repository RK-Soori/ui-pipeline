// WITHOUT SKILL: Typical Generic "AI Slop" Portfolio
// Tells: AI-purple gradients, em-dash buzzwords, 3 identical cards, mixed border-radii, centered hero cliché.

import React from "react";

export default function GenericAIPortfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Generic Blurred Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/30 blur-[120px] rounded-full pointer-events-none" />

      {/* Nav with generic styling */}
      <nav className="flex justify-between items-center p-6 border-b border-slate-800 max-w-6xl mx-auto">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Alex Dev
        </span>
        <div className="space-x-6 text-slate-400 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* Hero: Generic Centered AI Cliché with buzzwords and em-dash */}
      <section className="py-28 text-center max-w-3xl mx-auto px-4">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 tracking-widest uppercase">
          FULL-STACK WIZARD
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight mt-6 leading-normal">
          Crafting Seamless Experiences —{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            One Line of Code at a Time
          </span>
        </h1>
        <p className="mt-6 text-slate-400 text-lg">
          I am a passionate software engineer dedicated to elevating digital landscapes through innovative solutions, robust architectures, and intuitive user experiences.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          {/* Mixing pill button with rounded-2xl cards below */}
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-medium hover:opacity-90">
            Let's Connect Now
          </button>
          <button className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 font-medium">
            View My Resume
          </button>
        </div>
      </section>

      {/* Section: The Classic "Three Identical Cards" Pattern */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              💻
            </div>
            <h3 className="text-lg font-semibold">Frontend Development</h3>
            <p className="text-slate-400 text-sm mt-2">
              Transforming wireframes into responsive, interactive web applications using modern frameworks.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-semibold">Backend Engineering</h3>
            <p className="text-slate-400 text-sm mt-2">
              Architecting scalable APIs, secure databases, and distributed cloud services for performance.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
              🚀
            </div>
            <h3 className="text-lg font-semibold">DevOps & Cloud</h3>
            <p className="text-slate-400 text-sm mt-2">
              Streamlining CI/CD pipelines and deploying robust cloud infrastructures on AWS and Vercel.
            </p>
          </div>
        </div>
      </section>

      {/* Fake Placeholder Screenshots with Divs */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-6">
            <div className="w-full h-44 bg-slate-800 rounded-lg flex items-center justify-center text-slate-500">
              [Fake Screenshot Placeholder]
            </div>
            <h3 className="text-lg font-bold mt-4">SaaS Platform Alpha</h3>
            <p className="text-slate-400 text-sm mt-1">An all-in-one AI platform to seamlessly empower developers.</p>
          </div>
          <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-6">
            <div className="w-full h-44 bg-slate-800 rounded-lg flex items-center justify-center text-slate-500">
              [Fake Screenshot Placeholder]
            </div>
            <h3 className="text-lg font-bold mt-4">Crypto Wallet Dashboard</h3>
            <p className="text-slate-400 text-sm mt-1">Decentralized finance portal with modern analytics widgets.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
