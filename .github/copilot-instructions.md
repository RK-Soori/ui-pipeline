# GitHub Copilot Instructions: UI Pipeline

When generating frontend code, components, or entire views, follow the 6-stage UI Pipeline:

1. **Brief Inference**: Begin with: `"Reading this as: <page kind> for <audience>, with <vibe> language, leaning toward <aesthetic>."` Set dials (1-10): `DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`.
2. **Design Tokens**: Exactly one accent color (<80% saturation). No AI purple gradients or cliché cream+clay. Lock corner radius to ONE standard (`rounded-none`, `rounded-xl`, or `rounded-full`). Sans display font. Body max 65ch. WCAG AA contrast.
3. **Assets & 3D**: Grounded 3D only. WebGL pause offscreen. Static fallback for reduced motion. No fake dashboard mockups with empty divs. Real SVGs from Simple Icons.
4. **Layout**: Hero `min-h-[100dvh]`, top padding <= `pt-24`. Hero budget max 4 text items. Split layout when variance > 4. Nav single line <= 72px. Mobile collapse to `grid-cols-1`.
5. **Micro-Physics**: Animate only `transform` and `opacity`. Never `useState` in scroll/mouse listeners. Tactile `active:scale-[0.98]`.
6. **Audit**: Zero em-dashes (`—` / `–`). Check all 9 points before completing.
