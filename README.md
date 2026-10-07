# UI Pipeline (`ui-pipeline`)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform: Claude Code](https://img.shields.io/badge/Platform-Claude%20Code-orange.svg)](#claude-code)
[![Platform: Cursor](https://img.shields.io/badge/Platform-Cursor-purple.svg)](#cursor)
[![Platform: Antigravity / Gemini](https://img.shields.io/badge/Platform-Antigravity%20%7C%20Gemini-blue.svg)](#antigravity--gemini)
[![Platform: Windsurf](https://img.shields.io/badge/Platform-Windsurf-teal.svg)](#windsurf)
[![Platform: GitHub Copilot](https://img.shields.io/badge/Platform-Copilot-black.svg)](#github-copilot)
[![Framework: Next.js 14/15](https://img.shields.io/badge/Next.js-14%2B%20%7C%2015-black.svg)](https://nextjs.org)
[![CSS: Tailwind CSS v3/v4](https://img.shields.io/badge/Tailwind%20CSS-v3%20%7C%20v4-38bdf8.svg)](https://tailwindcss.com)

> **A production-grade, cross-platform 6-stage frontend UI/UX design and engineering skill for AI coding agents.**  
> Eliminates generic AI "slop" (cliché violet gradients, low-contrast buttons, decorative fake dashboard divs, em-dash spam, and broken viewport units) to produce resilient, accessible, and distinctive interfaces.

---

## Architecture Overview

```text
  Prompt / Brief
       │
       ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ STAGE 1: Brief Inference & Three Dials Calibration          │
 │ • Design Read: <kind> for <audience> with <vibe>            │
 │ • Calibrate: DESIGN_VARIANCE / MOTION_INTENSITY / DENSITY   │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ STAGE 2: DESIGN.md Design Token & Anti-Slop Specification   │
 │ • Single accent (<80% sat)  • Banish AI purple & clay tropes│
 │ • Locked radius scale       • Geist/Outfit display sans     │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ STAGE 3: Asset & 3D WebGL Strategy                          │
 │ • Domain-grounded 3D        • IntersectionObserver pause    │
 │ • Zero fake dashboard divs  • Simple Icons official SVGs    │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ STAGE 4: Production Component Implementation                │
 │ • min-h-[100dvh] viewport   • Max 4-element hero budget     │
 │ • Anti-center bias          • Single-line nav (<= 72px)     │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ STAGE 5: Micro-Physics & Motion                             │
 │ • Hardware-accel (transform/opacity only)                   │
 │ • Zero useState in scroll   • Tactile active:scale-[0.98]   │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │ STAGE 6: Garry Tan Pre-Flight Visual Audit                  │
 │ • Zero em-dashes            • WCAG AA contrast (>= 4.5:1)   │
 │ • Mobile grid collapse      • Single theme page lock        │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
                    Ship Production Code 🚀
```

---

## The Problem: The Epidemic of AI Frontend Slop

When prompted for web interfaces, modern LLMs consistently revert to low-effort heuristics:
- **The AI Purple Gradient**: Radial gradients blending `indigo-600` into `purple-500` behind every headline.
- **The Cliché Cream & Clay**: `#f5f1ea` background paired with `#b6553a` terracotta accents.
- **The 20-Element Hero**: Viewports overwhelmed with badges, taglines, sub-subtitles, star ratings, avatar stacks, client logos, and multiple CTAs above the fold.
- **Fake Dashboard Divs**: Three gray nested `<div>` cards with wavy SVG lines pretending to be a complex product interface.
- **Mismatched Radii**: Mixing sharp square cards (`rounded-none`) with circular pill buttons (`rounded-full`).
- **Em-Dash Spam**: Cramming `—` into every sentence, button label, and header.
- **Layout Jitter**: Animating `height`, `top`, or `left`, or triggering React state re-renders inside scroll event listeners.

`ui-pipeline` intercepts these tendencies by establishing mathematical constraints, design token specifications, and pre-flight visual validation gates.

---

## The 6-Stage Pipeline

### Stage 1: Brief Inference & The Three Dials
Before producing markup, the agent outputs a single-sentence **Design Read**:
```text
"Reading this as: <page kind> for <audience>, with <vibe> language, leaning toward <aesthetic>."
```
It immediately sets the **Three Dials** (1 to 10):
- **`DESIGN_VARIANCE`** (Default: 7): Layout departure from conventional symmetry (1 = rigid symmetry, 10 = expressive asymmetry).
- **`MOTION_INTENSITY`** (Default: 6): Physics and interaction dynamics (1 = static print, 10 = spatial spring physics).
- **`VISUAL_DENSITY`** (Default: 4): Viewport information packing (1 = airy luxury, 10 = telemetry cockpit).

#### Archetype Presets
| Preset Archetype | Variance | Motion | Density | Accent Strategy |
| :--- | :---: | :---: | :---: | :--- |
| **Minimalist B2B SaaS** | 6 | 4 | 3 | Slate / Deep Teal / Steel Blue |
| **Premium Consumer / D2C** | 7 | 6 | 3 | Warm Ochre / Terracotta / Emerald |
| **Developer Tool / CLI** | 6 | 5 | 4 | Electric Amber / Cyber Mint / Acid Lime |
| **Trust-First / FinTech / Gov** | 3 | 2 | 5 | Navy / Forest Green / Cobalt |
| **Creative Portfolio / Studio** | 8 | 7 | 2 | High-contrast Monolith + Monochromatic Pigment |

### Stage 2: DESIGN.md Token & Anti-Slop Specification
- **Color Discipline**: Exactly ONE accent color with saturation < 80%. AI violet glows and generic warm cream + clay pairings are banned.
- **Typography Lock**: Sans display default (Geist, Outfit, Satoshi, Cabinet Grotesk). Fraunces and Instrument Serif banned unless specifically requested. Body copy capped at `65ch`.
- **Corner Radius Lock**: Single uniform radius across all components (`rounded-none`, `rounded-xl`, or `rounded-full`). Never mix mismatched corner geometries.
- **Accessibility**: Buttons and inputs must pass WCAG AA contrast (>= 4.5:1).

### Stage 3: Asset & 3D WebGL Strategy
- **Domain-Grounded Context**: Any 3D elements must reflect domain reality (data topology, particle telemetry, physical wireframes). Generic iridescent spheres and floating shapes are banned.
- **Core Web Vitals Guard**: Enforces `IntersectionObserver` to halt WebGL render loops when offscreen.
- **Motion Accessibility**: Static isometric SVG/PNG fallback when `prefers-reduced-motion` is active.
- **Zero Fake Mockup Divs**: Product previews must use real UI screenshots or fully functional mini-components.
- **Real SVGs**: SVGs loaded via Simple Icons (`https://cdn.simpleicons.org/{slug}`) or clean inline SVG paths.

### Stage 4: Production Component Implementation
- **Hero Viewport**: Built with `min-h-[100dvh]` (never `h-screen`). Hero desktop top padding capped at `pt-24`.
- **Strict 4-Element Hero Budget**:
  1. Eyebrow badge or brand strip (optional)
  2. Headline (maximum 2 lines)
  3. Subtext (maximum 20 words, maximum 4 lines)
  4. CTAs (1 primary + max 1 secondary)
- **Anti-Center Bias**: When `DESIGN_VARIANCE > 4`, centered hero layouts are banned in favor of asymmetric or 50/50 split layouts.
- **Desktop Navigation**: Single line, max height `72px`, fixed or sticky with backdrop blur.
- **Mobile First Collapse**: Multi-column grids must explicitly collapse to `grid-cols-1` under `768px` (`md:`).

### Stage 5: Micro-Physics & Motion
- **Properties**: Animate ONLY `transform` and `opacity`. Animating `height`, `top`, or `margin` is prohibited.
- **Zero State Lag**: React `useState` is prohibited inside scroll or pointer listeners. Use `useMotionValue` or `useScroll`.
- **Tactile Feedback**: Buttons and cards must feature tactile click responses (`active:scale-[0.98]`).
- **Reduced Motion**: Mandatory `useReducedMotion()` fallback.

### Stage 6: Garry Tan Pre-Flight Visual Audit
Before outputting code or marking tasks complete, the agent verifies:
- [ ] **Brief Inference**: Declared in output (`"Reading this as: ..."`).
- [ ] **Zero Em-Dashes**: No `—` or `–` characters in headlines, labels, body, or buttons.
- [ ] **Hero Content Budget**: Headline <= 2 lines, subtext <= 20 words, CTA visible without scrolling.
- [ ] **Hero Padding**: Desktop top padding <= `pt-24`.
- [ ] **Navigation**: Desktop nav renders on a single line at `lg` (1024px+), height <= 72px.
- [ ] **Contrast**: WCAG AA verified (>= 4.5:1) on all buttons, badges, and form inputs.
- [ ] **Eyebrow Ratio**: Number of section eyebrows <= `ceil(totalSections / 3)`.
- [ ] **Theme Lock**: Entire page locked to single theme (no mid-scroll dark-to-light flips).
- [ ] **Mobile Collapse**: Multi-column grids explicitly collapse to `grid-cols-1` on `< 768px`.

---

## Universal Cross-Platform Support

`ui-pipeline` is packaged to work natively across major agentic platforms:

| Platform | Configuration / Skill Path | Slash Trigger |
| :--- | :--- | :--- |
| **Cursor** | `.cursor/rules/ui-pipeline.mdc` & `.cursorrules` | Automatic on UI globs |
| **Claude Code** | `CLAUDE.md` & `.claude/skills/ui-pipeline/SKILL.md` | `/ui-pipeline`, `/skill` |
| **Antigravity / Gemini** | `GEMINI.md` & `.agents/skills/ui-pipeline/SKILL.md` | `/ui-pipeline`, `/skill`, `/compact-ui` |
| **Windsurf / Codeium** | `.windsurfrules` | Cascade agent triggers |
| **GitHub Copilot** | `.github/copilot-instructions.md` | Workspace instructions |
| **Universal Spec** | `SKILL.md` (Agent standard format) | Portable skill |

---

## Installation

### 1. Zero-Dependency CLI Installers (Node, Python, Bash, PowerShell)

You can install `ui-pipeline` into any existing codebase with your preferred tooling:

#### Via Node / npx (Zero dependencies required)
```bash
# Clone the repository
git clone https://github.com/RK-Soori/ui-pipeline.git

# Install into current project for all platforms
node ui-pipeline/scripts/install.js --target . --platform all

# Or install for a specific platform only
node ui-pipeline/scripts/install.js --target . --platform cursor
node ui-pipeline/scripts/install.js --target . --platform claude
node ui-pipeline/scripts/install.js --target . --platform antigravity
node ui-pipeline/scripts/install.js --target . --platform windsurf
node ui-pipeline/scripts/install.js --target . --platform copilot
```

#### Via Python
```bash
# Install into current project for all platforms
python ui-pipeline/scripts/install.py --target . --platform all

# Or install for a specific platform only
python ui-pipeline/scripts/install.py --target . --platform antigravity
```

#### Via PowerShell (Windows)
```powershell
powershell -File ui-pipeline/scripts/install.ps1 -Platform all -Target .
```

#### Via Bash (macOS / Linux)
```bash
bash ui-pipeline/scripts/install.sh all .
```

### 2. Manual Platform Setup

#### Cursor
Copy `.cursor/rules/ui-pipeline.mdc` and `.cursorrules` to the root of your project:
```bash
cp -r ui-pipeline/.cursor/rules/ui-pipeline.mdc your-project/.cursor/rules/
cp ui-pipeline/.cursorrules your-project/.cursorrules
```

#### Claude Code
Copy `CLAUDE.md` and the skill folder:
```bash
cp ui-pipeline/CLAUDE.md your-project/CLAUDE.md
mkdir -p your-project/.claude/skills/ui-pipeline
cp ui-pipeline/.claude/skills/ui-pipeline/SKILL.md your-project/.claude/skills/ui-pipeline/
```

#### Antigravity / Gemini CLI
Copy `GEMINI.md` and `.agents/skills/ui-pipeline/`:
```bash
cp ui-pipeline/GEMINI.md your-project/GEMINI.md
mkdir -p your-project/.agents/skills/ui-pipeline
cp -r ui-pipeline/.agents/skills/ui-pipeline/* your-project/.agents/skills/ui-pipeline/
```

#### Windsurf
Copy `.windsurfrules`:
```bash
cp ui-pipeline/.windsurfrules your-project/.windsurfrules
```

#### GitHub Copilot
Copy `.github/copilot-instructions.md`:
```bash
mkdir -p your-project/.github
cp ui-pipeline/.github/copilot-instructions.md your-project/.github/
```

---

## Live Comparison: Without Skill vs. With `ui-pipeline`

This repository includes a live interactive comparison viewer in `examples/before-and-after/`:

| Dimension | Default LLM Output (Without Skill) | With `ui-pipeline` Output |
| :--- | :--- | :--- |
| **Palette** | Generic purple/indigo mesh gradient with pink accents | Locked neutral `zinc-950` with single `emerald-500` accent |
| **Hero Budget** | 12+ cluttered elements, social proof logos jammed in hero | Strict 4-element budget: eyebrow, 2-line title, 14-word subtext, 2 CTAs |
| **Layout** | Symmetrical centered column | 60/40 Asymmetric split with real telemetry component |
| **Corner Radius** | Mixed sharp cards with pill buttons | Uniform `rounded-xl` locked across all cards, buttons, badges |
| **Typography** | Generic serif headers with em-dash spam | Geist Sans display typography, zero em-dashes |
| **Responsiveness** | Horizontal scroll bugs on small screens | Multi-column grid collapses cleanly to `grid-cols-1` |

To preview the comparison locally:
```bash
# Open the interactive split viewer
open examples/before-and-after/index.html
```

---

## Starter Template

A production-ready reference implementation is provided in [`examples/starter-template/`](examples/starter-template/):
- [`DESIGN.md`](examples/starter-template/DESIGN.md): Pre-calibrated token specification
- [`src/app/layout.tsx`](examples/starter-template/src/app/layout.tsx): Next.js App Router root layout with metadata, viewport, and theme lock
- [`src/app/page.tsx`](examples/starter-template/src/app/page.tsx): Complete layout with 72px nav and responsive section grids
- [`src/app/globals.css`](examples/starter-template/src/app/globals.css): Tailwind base directives and theme CSS variables
- [`src/components/Hero.tsx`](examples/starter-template/src/components/Hero.tsx): Production-grade Next.js + Tailwind + Motion hero component
- [`src/components/ThemeTokens.ts`](examples/starter-template/src/components/ThemeTokens.ts): Type-safe theme configuration
- [`postcss.config.js`](examples/starter-template/postcss.config.js) & [`tailwind.config.ts`](examples/starter-template/tailwind.config.ts): Complete build configurations

---

## Verification & Testing

Verify that all platform rules and paths are intact:
```bash
npm test
# Or test individual engines directly:
node scripts/install.js --test
python scripts/install.py --test
```

---

## Contributing

Contributions to add agent adapters, new dial presets, or anti-slop rules are welcome! Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) for pull request guidelines.

---

## License

This project is licensed under the [MIT License](LICENSE) &copy; 2026 Kavinda Sooriyaarachchi (RK-Soori).
