# Workspace Agent Instructions & Command Mappings

## Custom Slash Command Triggers

### UI Design Pipeline (`/ui-pipeline`, `/skill`, `/kill`, `/compact-ui`)
Whenever the user invokes any of the following slash commands in their prompt:
- `/ui-pipeline`
- `/skill` (or `/skill <args>`)
- `/kill` (recognized as a quick alias/typo for `/skill`)
- `/compact-ui`

**Directive**:
Immediately activate and execute the **`ui-pipeline`** skill located at `.agents/skills/ui-pipeline/SKILL.md` (or globally at `~/.gemini/config/skills/ui-pipeline/SKILL.md`).

Execute the 6-stage pipeline:
1. **Stage 1: Brief Inference & Three Dials Calibration**
   - Output: `"Reading this as: [page kind] for [audience], with [vibe] language, leaning toward [aesthetic]."`
   - Declare values for `DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`.
2. **Stage 2: Design Token & System Spec**
   - Single accent color (<80% saturation; avoid AI purple).
   - Uniform radius lock (`rounded-none`, `rounded-xl`, or `rounded-full`).
   - Clean display typography, max 65ch body copy.
3. **Stage 3: Asset & 3D WebGL Strategy**
   - Ground 3D elements in the domain (e.g. topology clusters, data particles).
   - Enforce `IntersectionObserver` offscreen pausing & `prefers-reduced-motion` static fallback.
   - Ban fake mockup divs.
4. **Stage 4: Production Component Implementation**
   - Hero `min-h-[100dvh]`, top padding <= `pt-24`, max 4 text elements.
   - Asymmetric split layout if variance > 4.
   - Single-line desktop navigation (height <= 72px).
5. **Stage 5: Micro-Physics & Motion**
   - Animate only `transform` and `opacity`.
   - Never use `useState` in scroll/mouse listeners.
   - Tactile feedback (`active:scale-[0.98]`).
6. **Stage 6: Pre-Flight Audit Checklist**
   - Zero em-dashes (`—` / `–`), WCAG AA contrast (>= 4.5:1), and mobile grid collapse checks.
