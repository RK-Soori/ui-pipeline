/**
 * UI Pipeline Design Tokens
 * Enforces uniform radius lock, single accent color, and typography constraints.
 */

export const THEME_TOKENS = {
  radius: "rounded-xl",
  accent: {
    base: "bg-emerald-500",
    hover: "hover:bg-emerald-400",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_24px_rgba(16,185,129,0.15)]",
  },
  surface: {
    bg: "bg-zinc-950",
    card: "bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-md",
    cardHover: "hover:border-zinc-700 transition-colors duration-200",
  },
  typography: {
    headline: "font-sans font-bold tracking-tight text-zinc-50",
    body: "font-sans text-zinc-400 leading-relaxed max-w-[65ch]",
    code: "font-mono text-zinc-300",
  },
} as const;
