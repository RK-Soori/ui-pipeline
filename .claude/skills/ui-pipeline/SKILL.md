---
name: ui-pipeline
description: Frontend UI/UX design pipeline skill for Claude Code. Enforces intent inference, DESIGN.md token locking, anti-slop rules, asymmetric layouts, Radix/shadcn primitives, fluid micro-motion physics, and pre-flight visual audit.
---

# UI Pipeline Skill for Claude Code

When asked to design, build, or refactor a UI component, landing page, dashboard, or website, execute the following 6-stage pipeline:

## Stage 1: Brief Inference & Three Dials
- Output: `"Reading this as: <page kind> for <audience>, with <vibe> language, leaning toward <aesthetic>."`
- Declare dials (1-10): `DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`.

## Stage 2: Tokens & Anti-Slop
- Single accent color (<80% saturation). No generic AI purple gradients.
- Lock radius: `rounded-none`, `rounded-xl`, or `rounded-full`.
- Display sans: Geist, Outfit, Satoshi, Cabinet Grotesk.
- Body max 65ch.
- WCAG AA contrast (>= 4.5:1).

## Stage 3: Assets & 3D Strategy
- Grounded 3D only. Pause offscreen with IntersectionObserver. Reduced-motion fallback.
- No fake mockup divs. Real SVGs from Simple Icons.

## Stage 4: Production Components
- Next.js (App Router) + Tailwind CSS + Radix/shadcn.
- Hero `min-h-[100dvh]`, top padding <= `pt-24`.
- Max 4 text elements in hero budget.
- Anti-center bias when variance > 4.
- Desktop nav single line (height <= 72px).
- Mobile collapse to `grid-cols-1`.

## Stage 5: Micro-Physics
- Animate only `transform` and `opacity`.
- Zero useState in scroll/mouse listeners.
- Tactile feedback `active:scale-[0.98]`.

## Stage 6: Pre-Flight Audit
- Zero em-dashes (`—` / `–`).
- All 9 checklist items verified before delivery.
