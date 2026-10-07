# Anti-Slop Frontend Rules & Garry Tan Visual Audit

AI models default to repetitive tropes when generating user interfaces. This document codifies the strict constraints that eliminate low-effort patterns.

## The Banned Tropes

### 1. The "AI Violet" Gradient Glow
- **Symptom**: Giant radial blurs of `#6366f1` (indigo) and `#a855f7` (purple) centered behind hero headlines.
- **Rule**: Never use AI violet/purple glows unless requested by name. Pick intentional, brand-specific accent colors with saturation below 80%.

### 2. The Cliché Warm Cream & Clay
- **Symptom**: `#f5f1ea` warm cream background paired with `#b6553a` clay / terracotta text.
- **Rule**: Do not default to this palette. Pick neutral slate, crisp cool white, deep obsidian, or custom brand tokens.

### 3. The 20-Element Hero
- **Symptom**: Hero viewport jammed with eyebrow, badge, title, subtitle, 2 CTAs, avatar social proof row, 5 sponsor logos, and 3 feature preview pills.
- **Rule**: Strict 4-element limit:
  1. Eyebrow OR brand strip (optional)
  2. Headline (<= 2 lines)
  3. Subtext (<= 20 words)
  4. CTA (max 1 primary + 1 secondary)

### 4. Fake Dashboard Divs
- **Symptom**: A section claiming "See our intuitive platform" rendered as 3 gray nested `<div>` cards with fake squiggly lines.
- **Rule**: If demonstrating a product UI, use real screenshots, high-fidelity SVGs, or a functional interactive mini-component with real state and typography.

### 5. Em-Dash Addiction
- **Symptom**: AI writing uses em-dashes (`—` and `–`) in every paragraph, headline, and quote.
- **Rule**: Zero em-dashes. Use regular hyphens `-`, commas, or separate sentences cleanly.

### 6. Mixed Corner Radii
- **Symptom**: A website with `rounded-3xl` cards, `rounded-md` inputs, and `rounded-full` pill buttons.
- **Rule**: Lock ONE uniform radius scale across the entire component system.

### 7. Mid-Scroll Theme Flipping
- **Symptom**: Hero is dark theme, next section flips abruptly to pure white, next flips back to dark.
- **Rule**: Maintain consistent theme hierarchy across the whole page.
