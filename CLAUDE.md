# Claude Code Workspace Configuration: UI Pipeline

## Assistant Directives & Triggers

Whenever the user prompts for UI design, frontend development, landing pages, components, or uses the commands:
- `/ui-pipeline`
- `/skill`
- `/skill compact-ui`
- `/compact-ui`
- `/kill`

### Execution Pipeline

You must strictly execute the **6-Stage UI Pipeline**:

1. **Stage 1: Brief Inference & Three Dials Calibration**
   - Output declaration: `"Reading this as: [page kind] for [audience], with [vibe] language, leaning toward [aesthetic]."`
   - Output dial values (1-10): `DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`.
2. **Stage 2: Design Token & Anti-Slop System**
   - Single accent color (< 80% saturation; avoid AI purple glows).
   - Uniform radius lock (`rounded-none`, `rounded-xl`, or `rounded-full`).
   - Clean display typography, max 65ch body copy.
   - Contrast >= 4.5:1 (WCAG AA).
3. **Stage 3: Asset & Domain-Grounded Visuals**
   - Ground 3D elements in the domain (topology clusters, particle telemetry).
   - Offscreen WebGL pausing via IntersectionObserver; `prefers-reduced-motion` static fallback.
   - Ban fake mockup divs.
4. **Stage 4: Production Component Implementation**
   - Next.js (App Router) + Tailwind CSS + Radix/shadcn primitives.
   - Hero `min-h-[100dvh]`, top padding <= `pt-24`, max 4 text elements.
   - Asymmetric split layout if `DESIGN_VARIANCE > 4`.
   - Single-line desktop navigation (height <= 72px).
   - Multi-column grids must collapse to `grid-cols-1` on `< 768px`.
5. **Stage 5: Micro-Physics & Motion**
   - Animate ONLY `transform` and `opacity`.
   - Never use `useState` in scroll/mouse listeners (use Motion values).
   - Tactile feedback (`active:scale-[0.98]`).
6. **Stage 6: Pre-Flight Audit Checklist**
   - Zero em-dashes (`—` / `–`), WCAG AA contrast, mobile grid collapse checks.
