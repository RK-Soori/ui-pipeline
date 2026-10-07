# Design Token Specification: Minimalist SaaS Archetype

> Generated via **UI Pipeline** (Dial Configuration: Variance 6, Motion 4, Density 3)

## 1. Palette Lock
- **Base Canvas**: `bg-zinc-950` (`#09090b`)
- **Card Surface**: `bg-zinc-900/70` (`#18181b` at 70% opacity with backdrop-blur)
- **Border**: `border-zinc-800/80` (`#27272a`)
- **Single Accent**: `emerald-500` (`#10b981`, saturation 76%)
- **Accent Hover**: `emerald-400` (`#34d399`)
- **Text Primary**: `text-zinc-50` (`#fafafa`)
- **Text Secondary**: `text-zinc-400` (`#a1a1aa`, WCAG AA verified)
- **Banned**: No AI purple radial gradients, no generic cream/clay.

## 2. Corner Radius Lock
- **Selected Scale**: `rounded-xl` (12px)
- **Rules**:
  - Cards: `rounded-xl`
  - Buttons: `rounded-xl`
  - Badges: `rounded-xl`
  - Modals: `rounded-xl`
  - Inputs: `rounded-xl`
  *(No mixing square cards with pill buttons)*

## 3. Typography
- **Display Headlines**: Geist Sans / Outfit (`tracking-tight`, `leading-tight`)
- **Body**: Inter / Geist Sans (`leading-relaxed`, max line width `65ch`)
- **Code / Monospace**: Geist Mono / JetBrains Mono

## 4. Hero Content Budget
1. **Eyebrow**: `"v2.4 Kernel Released"` (emerald badge)
2. **Headline**: `"Deterministic Observability for Distributed GPU Fleets"` (max 2 lines)
3. **Subtext**: `"Eliminate silent pipeline stalls with millisecond tensor telemetry and automated memory defragmentation."` (14 words)
4. **CTAs**: Primary `"Deploy Cluster"`, Secondary `"Read Specs"`

## 5. Micro-Motion
- Properties: `opacity` and `transform: translateY` only.
- Spring: `stiffness: 280, damping: 24`
- Active click: `active:scale-[0.98]`
- Fallback: `prefers-reduced-motion: reduce` disables all translation offsets.
