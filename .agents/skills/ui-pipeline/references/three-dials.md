# The Three Dials Calibration Framework

Every UI brief carries an innate intent. Rather than defaulting to uniform boilerplate styling, `ui-pipeline` uses three orthogonal numerical dials (1 to 10) to parameterize layout, animation, and information architecture.

## Dial Definitions

### 1. `DESIGN_VARIANCE` (Default: 7)
Measures the layout's structural departure from conventional corporate grids.
- **1-3 (Rigid Symmetry)**: Symmetrical centered columns, strict uniform card grids, enterprise predictability.
- **4-6 (Balanced Dynamic)**: Off-center hero headlines, 2-column asymmetric splits, staggered card sizes.
- **7-8 (Expressive Editorial)**: Overlapping planes, sticky column rails, dynamic horizontal scroll strips, asymmetric whitespace.
- **9-10 (Avant-Garde / Brutalist)**: Broken grids, oversized typography bleeding off-canvas, stark contrast collisions.

### 2. `MOTION_INTENSITY` (Default: 6)
Governs how fluidly interactive elements react to viewports and user input.
- **1-2 (Static / Print)**: Zero entrance animations, instant hover state toggles.
- **3-4 (Subtle Utility)**: 150ms opacity transitions, subtle border glows on focus.
- **5-7 (Cinematic Spring)**: Physics-based spring interpolations (`stiffness: 300, damping: 25`), staggered entrance reveals, micro-scale tactile feedback (`active:scale-[0.98]`).
- **8-10 (Immersive WebGL / Parallax)**: Cursor-following magnetic elements, WebGL fluid shaders, spatial canvas interaction.

### 3. `VISUAL_DENSITY` (Default: 4)
Defines how much information is packed per square viewport unit.
- **1-3 (Airy Luxury / Brand Flagship)**: Generous whitespace (`py-28`), large headlines, single focal points, minimal simultaneous copy.
- **4-6 (Standard SaaS / Product Web)**: Balanced padding (`py-16`), 3-column feature cards, clear content chunks.
- **7-8 (Developer Console / Power User)**: Compact tables, dense stat counters, inline badges, tight gutters.
- **9-10 (Bloomberg / Cockpit)**: Maximal data per inch, real-time telemetry, miniature sparklines, tabbed micro-views.

## Preset Matrix
| Category | Variance | Motion | Density | Ideal Stack |
| :--- | :---: | :---: | :---: | :--- |
| Minimalist SaaS | 6 | 4 | 3 | Next.js + Tailwind + Radix |
| Premium Consumer | 7 | 6 | 3 | Next.js + Framer Motion + Tailwind |
| Developer Tool / CLI | 6 | 5 | 4 | Next.js + Tailwind + Lucide + Geist Mono |
| Enterprise / Regulated | 3 | 2 | 5 | Next.js + Tailwind + shadcn/ui |
| Creative Portfolio | 8 | 7 | 2 | Next.js + Tailwind + Canvas/WebGL + Custom Cursor |
