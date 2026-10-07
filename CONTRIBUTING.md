# Contributing to UI Pipeline

Thank you for your interest in contributing to `ui-pipeline`! We welcome contributions to expand platform support, refine design tokens, and eliminate AI design clichés.

## Code of Conduct

Be welcoming, constructive, and respectful. We are building tooling to elevate the craft of frontend design across all agent platforms.

## How to Contribute

### 1. Adding Platform Adapters
If you use an agentic platform not currently covered (e.g. Aider, Roo Code, Devon), submit a PR adding:
- An adapter configuration file in the appropriate directory or dotfile.
- Integration instructions in `README.md`.
- Platform support in `scripts/install.py`.

### 2. Improving Anti-Slop Rules
If you identify new recurring AI failure modes (such as inappropriate micro-animations, broken viewport units, or uncalibrated color combinations):
- Propose an addition to `.agents/skills/ui-pipeline/references/anti-slop-rules.md`.
- Ensure it includes the symptom, the underlying rationale, and the strict rule.

### 3. Presets and Templates
- We welcome PRs introducing archetypal Three Dials presets (e.g. Media Publisher, Crypto Trading Terminal).
- Ensure presets conform to the Dial matrix scale (1-10) and provide concrete color/font suggestions.

## Development Workflow

1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/ui-pipeline.git
   cd ui-pipeline
   ```
3. Create a feature branch:
   ```bash
   git checkout -b feature/new-preset
   ```
4. Test the installation script locally:
   ```bash
   python scripts/install.py --test
   ```
5. Commit your changes with clear, descriptive commit messages.
6. Push to your fork and submit a Pull Request.

## Pull Request Guidelines

- Ensure zero em-dashes (`—` / `–`) in any added documentation.
- Maintain consistent markdown formatting.
- Verify that links in `README.md` are valid.
