---
name: ui-pipeline
description: Production-grade frontend UI/UX design and engineering pipeline skill for AI agents. Combines prompt intent inference, DESIGN.md token locking, anti-slop design rules, asymmetric layout diversification, Radix/shadcn primitives, fluid micro-motion physics, and Garry Tan visual audit loops. Triggered automatically on UI/website design requests, or explicitly via /ui-pipeline, /skill, /skill compact-ui, or /kill.
---

# UI Pipeline: Production-Grade Frontend Skill

> **Slash Triggers**: `/ui-pipeline`, `/skill`, `/skill compact-ui`, `/compact-ui`, `/kill`

## 1. BRIEF INFERENCE & THE THREE DIALS
Before writing markup or styles, declare a one-line **Design Read**:
`"Reading this as: <page kind> for <audience>, with <vibe> language, leaning toward <design system or aesthetic family>."`

Configure the Three Dials (values 1 to 10):
- **`DESIGN_VARIANCE`** (Default 7): 1 = Rigid Symmetry, 10 = Asymmetric / Expressive
- **`MOTION_INTENSITY`** (Default 6): 1 = Completely Static, 10 = Cinematic Spring Physics
- **`VISUAL_DENSITY`** (Default 4): 1 = Airy Luxury, 10 = High-Density Cockpit

*Preset Overrides*:
- Minimalist SaaS: `6 / 4 / 3`
- Premium Consumer: `7 / 6 / 3`
- Developer Tool / CLI: `6 / 5 / 4`
- Trust-First / Regulated / Gov: `3 / 2 / 5`
- Creative / Portfolio: `8 / 7 / 2`

---

## 2. DESIGN TOKENS & ANTI-SLOP DISCIPLINE (`DESIGN.md` Standard)
- **Color Calibration**:
  - Exactly ONE accent color (saturation <80%).
  - Never default to AI violet/purple glows or generic warm cream (`#f5f1ea`) + clay (`#b6553a`).
  - Lock the palette globally: all sections share the same base theme (no dark/light flips mid-page).
- **Typography Rules**:
  - Default sans display: Geist, Outfit, Satoshi, Cabinet Grotesk.
  - Serifs banned as default: Never use Fraunces or Instrument Serif unless the brief explicitly specifies heritage/manuscript craft.
  - Display headlines: `leading-none` or `leading-tight`. For italic descenders (`g, y, p, q`), enforce `leading-[1.1]` with `pb-1` clearance.
  - Body copy: max `65ch` line width, `leading-relaxed`.
- **Corner Radius Lock**: Pick ONE uniform radius scale (all-sharp `rounded-none`, all-12px `rounded-xl`, or all-pill `rounded-full`). Never mix square cards with pill buttons.
- **Accessibility & Contrast**:
  - Buttons and inputs must pass WCAG AA contrast (>= 4.5:1).
  - Primary button text must fit on a single line at desktop (max 2-3 words).

---

## 3. LAYOUT & VIEWPORT ARCHITECTURE
- **Hero Viewport**: Always use `min-h-[100dvh]` (never `h-screen`). Hero top padding capped at `pt-24`.
- **Hero Content Budget (Max 4 text elements)**:
  1. Eyebrow label OR brand strip (optional)
  2. Headline (max 2 lines)
  3. Subtext (max 20 words, max 4 lines)
  4. CTAs (1 primary + max 1 secondary)
  *Move logo walls, feature bullets, and pricing teasers below the hero.*
- **Anti-Center Bias**: When `DESIGN_VARIANCE > 4`, avoid centered hero layouts. Use 50/50 split-screen or asymmetric compositions.
- **Eyebrow Restraint**: Maximum 1 eyebrow label per 3 sections.
- **Section Layout Diversity**: Never stack consecutive identical layouts. Max 2 zigzag alternating rows in sequence.
- **Desktop Navigation**: Must render on a single line; max height 72px.
- **Mobile Grid Collapse**: Explicitly collapse multi-column grids to `grid-cols-1` on `< 768px`.

---

## 4. ASSET & 3D / SOCIAL PROOF STRATEGY
- **Contextual 3D Discipline**:
  - Ground 3D elements in the domain (e.g. data topologies, physical shaders, particle telemetry).
  - WebGL materials inherit exact project tokens.
  - Core Web Vitals Guard: `IntersectionObserver` to halt WebGL animation loops when offscreen.
  - Accessibility: `prefers-reduced-motion` static isometric fallback.
- **No Div-Based Fake Screenshots**: Do not build mock dashboards using empty `<div>` boxes. Use real screenshots, image generation tools, or interactive mini-components.
- **Social Proof Logos**: Real SVG logos via Simple Icons (`https://cdn.simpleicons.org/{slug}`) or clean inline SVG monograms. No plain-text wordmarks.

---

## 5. INTERACTION & MOTION PHYSICS
- **Component Stack**: Next.js (App Router) + Tailwind CSS (v4) + Radix UI / `shadcn/ui`.
- **RSC Safety**: Interactive components must be isolated leaf components with `"use client"`.
- **Motion Rules**:
  - Animate ONLY `transform` and `opacity`. Never animate `top`, `left`, `width`, or `height`.
  - Never use `useState` for pointer tracking or scroll listeners. Use Motion's `useMotionValue`, `useTransform`, or `useScroll`.
  - Motivate motion: Every animation must communicate hierarchy or tactile feedback (`active:scale-[0.98]`).
  - Mandatory `useReducedMotion()` fallback degrading animations to clean static states.

---

## 6. PRE-FLIGHT AUDIT CHECKLIST (Mandatory Pass Before Delivery)
- [ ] **Brief Inference**: Declared in output (`"Reading this as: ..."`).
- [ ] **Zero Em-Dashes**: No `—` or `–` characters in headlines, labels, body, quotes, or buttons (use regular hyphens `-`).
- [ ] **Hero Budget**: Headline <= 2 lines, subtext <= 20 words, CTA visible without scrolling on 1080p and 1440p displays.
- [ ] **Hero Padding**: Desktop top padding <= `pt-24`.
- [ ] **Navigation**: Desktop nav renders on a single line at `lg` (1024px+).
- [ ] **Contrast**: WCAG AA verified on all buttons, badges, and form inputs.
- [ ] **Eyebrow Ratio**: Number of section eyebrows <= `ceil(totalSections / 3)`.
- [ ] **Theme Lock**: Entire page locked to single theme (no mid-scroll color flips).
- [ ] **Mobile Collapse**: Multi-column grids explicitly collapse to `grid-cols-1` on `< 768px`.
