---
name: ui-pipeline
description: Universal, cross-platform frontend UI/UX design and engineering pipeline for AI agents. Combines prompt intent inference, DESIGN.md token locking, anti-slop design discipline, asymmetric layout diversification, Radix/shadcn primitives, fluid micro-motion physics, and Garry Tan visual audit loops. Triggered via /ui-pipeline, /skill, /skill compact-ui, or on frontend UI design requests.
version: 1.0.0
author: RK-Soori
license: MIT
---

# UI Pipeline: Production-Grade Frontend Design & Engineering Skill

> **Universal Triggers**: `/ui-pipeline`, `/skill`, `/skill compact-ui`, `/compact-ui`, `/kill`  
> **Platforms Supported**: Claude Code, Cursor, Antigravity / Gemini CLI, Windsurf / Codeium, GitHub Copilot

`ui-pipeline` is a disciplined 6-stage frontend design pipeline that eliminates generic AI "slop" (cliché violet gradients, low-contrast buttons, decorative fake dashboard divs, em-dashes, and unresponsive layouts) and produces production-ready, accessible, visually distinctive interfaces.

---

## 1. STAGE 1: BRIEF INFERENCE & THE THREE DIALS

Before generating HTML, JSX, or Tailwind classes, declare a one-line **Design Read**:

```text
"Reading this as: <page kind> for <audience>, with <vibe> language, leaning toward <design system or aesthetic family>."
```

Immediately calibrate the **Three Dials** (values 1 to 10):
- **`DESIGN_VARIANCE`** (Default: 7): 1 = Rigid Symmetry, 10 = Asymmetric / Expressive Editorial
- **`MOTION_INTENSITY`** (Default: 6): 1 = Completely Static, 10 = Cinematic Spring Physics
- **`VISUAL_DENSITY`** (Default: 4): 1 = Airy Luxury, 10 = High-Density Cockpit

### Preset Dial Matrix
| Archetype | Variance | Motion | Density | Accent Guidance |
| :--- | :---: | :---: | :---: | :--- |
| **Minimalist B2B SaaS** | 6 | 4 | 3 | Slate / Deep Teal / Steel Blue |
| **Premium Consumer / D2C** | 7 | 6 | 3 | Warm Ochre / Terracotta / Emerald |
| **Developer Tool / CLI** | 6 | 5 | 4 | Electric Amber / Cyber Mint / Acid Lime |
| **Trust-First / FinTech / Gov** | 3 | 2 | 5 | Navy / Forest Green / Cobalt |
| **Creative Portfolio / Studio** | 8 | 7 | 2 | Monochrome + Monochromatic Pigment |

---

## 2. STAGE 2: DESIGN TOKENS & ANTI-SLOP DISCIPLINE (`DESIGN.md`)

Lock in tokens before coding components:

### Color Palette Rules
- **Single Accent Color**: Exactly ONE accent color with saturation < 80%.
- **Banned AI Tropes**:
  - Never default to AI violet / purple glows (`indigo-600` to `purple-500` mesh gradients).
  - Never use the clichéd warm cream (`#f5f1ea`) paired with clay (`#b6553a`).
  - Never invert base themes mid-page (no dark hero immediately followed by a blinding pure white section).
- **Background Depth**: Use layered neutral tints (`bg-neutral-950` with `bg-neutral-900/60` cards) rather than flat solid black or harsh stark white.

### Typography Rules
- **Sans Display Default**: Geist, Outfit, Satoshi, Cabinet Grotesk, or Inter with custom tracking.
- **Banned Default Serifs**: Never inject Fraunces or Instrument Serif unless explicitly instructed by a heritage brief.
- **Display Headlines**: Tight tracking (`tracking-tight`), `leading-none` or `leading-[1.1]`. For descenders (`g, y, p, q`), provide bottom clearance (`pb-1`).
- **Body Copy**: Maximum line width `65ch`, `leading-relaxed`.

### Corner Radius Lock
Pick **ONE** uniform radius scale across the entire application:
- `rounded-none` (Brutalist, architectural, technical)
- `rounded-xl` (Modern, clean, balanced)
- `rounded-full` (Fluid, organic, playful)  
*Never mix sharp square cards with pill buttons or circular tags.*

### Contrast & Usability
- All text and interactive states must satisfy **WCAG AA** contrast (>= 4.5:1).
- Primary button copy must fit on a single line at desktop (2 to 3 words maximum).

---

## 3. STAGE 3: ASSET & 3D / SOCIAL PROOF STRATEGY

### Grounded 3D Discipline
- **Domain-Grounded Context**: 3D elements must represent real domain data (e.g. topology clusters, particle telemetry, physical wireframes), never generic floating iridescent toruses or purposeless metallic spheres.
- **Color Token Inherited**: WebGL materials must inherit the project's exact color tokens.
- **Core Web Vitals Guard**: Enforce `IntersectionObserver` to halt WebGL render loops when canvas elements scroll out of viewport.
- **Reduced Motion Fallback**: Provide a static isometric SVG/PNG fallback when `prefers-reduced-motion` is detected.

### Social Proof & Visual Assets
- **No Div-Based Fake Screenshots**: Banish empty nested divs pretending to be dashboards. Use actual UI screenshots, vector wireframes, or interactive live micro-components.
- **Real SVG Monograms / Logos**: Load official SVGs via Simple Icons (`https://cdn.simpleicons.org/{slug}`) or clean inline SVG monograms. No plain-text sans wordmarks.

---

## 4. STAGE 4: PRODUCTION COMPONENT IMPLEMENTATION

### Hero Viewport Architecture
- Viewport unit: Use `min-h-[100dvh]` (never `h-screen` due to mobile browser URL bar jumps).
- Hero desktop top padding capped at `pt-24` (never push hero content below the fold).
- **4-Element Hero Content Budget**:
  1. Eyebrow badge or brand strip (optional)
  2. Headline (maximum 2 lines)
  3. Subtext (maximum 20 words, maximum 4 lines)
  4. CTAs (1 primary + max 1 secondary)  
  *All logos, feature grids, and metrics belong strictly below the hero.*

### Layout Diversification
- **Anti-Center Bias**: When `DESIGN_VARIANCE > 4`, avoid centered hero layouts. Employ 50/50 split-screen or asymmetric 60/40 layouts.
- **Eyebrow Restraint**: Maximum 1 eyebrow label per 3 sections.
- **Section Diversity**: Avoid consecutive repetitive grid layouts. Limit zigzag alternating sections to 2 rows maximum.
- **Desktop Navigation**: Single line, max height `72px`, fixed or sticky with subtle backdrop blur.
- **Mobile First Collapse**: Multi-column grids must explicitly collapse to `grid-cols-1` under `768px` (`md:`).

---

## 5. STAGE 5: MICRO-PHYSICS & MOTION

- **Tech Stack**: Next.js (App Router), Tailwind CSS (v4), Radix UI / `shadcn/ui`, Motion (Framer Motion).
- **RSC Isolation**: Interactive components must be isolated leaf components marked with `"use client"`.
- **Hardware-Accelerated Properties**: Animate ONLY `transform` and `opacity`. Never animate layout properties (`top`, `left`, `width`, `height`).
- **Zero State Lag**: Never trigger React `useState` re-renders in scroll or mousemove listeners. Use `useMotionValue`, `useTransform`, or `useScroll`.
- **Tactile Feedback**: Interactive buttons and cards must respond to user touch/click with `active:scale-[0.98]`.
- **Accessible Motion**: Mandatory `useReducedMotion()` fallback removing spring trajectories.

---

## 6. STAGE 6: PRE-FLIGHT AUDIT CHECKLIST

Before marking any UI generation task complete, perform this mandatory audit:

- [ ] **Brief Inference**: Declared in output (`"Reading this as: ..."`).
- [ ] **Zero Em-Dashes**: No `—` or `–` characters anywhere in headlines, body copy, tooltips, or buttons (use hyphens `-`).
- [ ] **Hero Content Budget**: Headline <= 2 lines, subtext <= 20 words, CTA visible without scrolling on 1080p and 1440p viewports.
- [ ] **Hero Padding**: Desktop top padding <= `pt-24`.
- [ ] **Navigation**: Desktop nav renders on a single line at `lg` (1024px+), height <= 72px.
- [ ] **Contrast**: WCAG AA verified (>= 4.5:1) on all buttons, badges, and form inputs.
- [ ] **Eyebrow Ratio**: Number of section eyebrows <= `ceil(totalSections / 3)`.
- [ ] **Theme Lock**: Entire page locked to single theme (no mid-scroll dark-to-light flips).
- [ ] **Mobile Collapse**: Multi-column grids explicitly collapse to `grid-cols-1` on `< 768px`.
