#!/usr/bin/env python3
"""
ui-pipeline installer script.
Installs cross-platform agent skills and rules into any target project workspace.
Supports: Claude Code, Cursor, Antigravity/Gemini, Windsurf, GitHub Copilot.
"""

import os
import sys
import shutil
import argparse
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

PLATFORMS = {
    "cursor": [
        (".cursorrules", ".cursorrules"),
        (".cursor/rules/ui-pipeline.mdc", ".cursor/rules/ui-pipeline.mdc"),
    ],
    "claude": [
        ("CLAUDE.md", "CLAUDE.md"),
        (".claude/skills/ui-pipeline/SKILL.md", ".claude/skills/ui-pipeline/SKILL.md"),
    ],
    "gemini": [
        ("GEMINI.md", "GEMINI.md"),
        (".agents/skills/ui-pipeline/SKILL.md", ".agents/skills/ui-pipeline/SKILL.md"),
        (".agents/skills/ui-pipeline/references/three-dials.md", ".agents/skills/ui-pipeline/references/three-dials.md"),
        (".agents/skills/ui-pipeline/references/anti-slop-rules.md", ".agents/skills/ui-pipeline/references/anti-slop-rules.md"),
    ],
    "antigravity": [
        ("GEMINI.md", "GEMINI.md"),
        (".agents/skills/ui-pipeline/SKILL.md", ".agents/skills/ui-pipeline/SKILL.md"),
    ],
    "windsurf": [
        (".windsurfrules", ".windsurfrules"),
    ],
    "copilot": [
        (".github/copilot-instructions.md", ".github/copilot-instructions.md"),
    ],
}


def install_platform(platform_name: str, target_dir: Path, dry_run: bool = False):
    files_to_copy = PLATFORMS.get(platform_name.lower(), [])
    if not files_to_copy:
        print(f"[!] Unknown platform: {platform_name}")
        return False

    print(f"\n[*] Installing for platform: {platform_name.upper()} -> {target_dir}")
    installed_count = 0
    for src_rel, dst_rel in files_to_copy:
        src_path = REPO_ROOT / src_rel
        dst_path = target_dir / dst_rel

        if not src_path.exists():
            print(f"  [X] Source not found: {src_rel}")
            continue

        if dry_run:
            print(f"  [DRY RUN] Would copy {src_rel} -> {dst_rel}")
            installed_count += 1
            continue

        dst_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src_path, dst_path)
        print(f"  [+] Installed: {dst_rel}")
        installed_count += 1

    return installed_count > 0


def main():
    parser = argparse.ArgumentParser(
        description="Install ui-pipeline skills into any codebase or agent workspace."
    )
    parser.add_argument(
        "--target",
        "-t",
        type=str,
        default=".",
        help="Target project directory (default: current working directory)",
    )
    parser.add_argument(
        "--platform",
        "-p",
        type=str,
        default="all",
        choices=["all", "cursor", "claude", "gemini", "antigravity", "windsurf", "copilot"],
        help="Agent platform to install rules for (default: all)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show planned file actions without modifying filesystem",
    )
    parser.add_argument(
        "--test",
        action="store_true",
        help="Verify all source files exist in this repository",
    )

    args = parser.parse_args()

    if args.test:
        print("[*] Running ui-pipeline source file self-test...")
        all_passed = True
        for plat, mappings in PLATFORMS.items():
            for src_rel, _ in mappings:
                p = REPO_ROOT / src_rel
                if not p.exists():
                    print(f"  [FAIL] Missing source file for {plat}: {src_rel}")
                    all_passed = False
                else:
                    print(f"  [OK] {plat}: {src_rel}")
        if all_passed:
            print("\n[SUCCESS] All platform source files present and verified.")
            sys.exit(0)
        else:
            print("\n[FAIL] Some source files are missing.")
            sys.exit(1)

    target_path = Path(args.target).resolve()
    if not target_path.exists():
        print(f"[-] Target directory does not exist: {target_path}")
        sys.exit(1)

    print(f"==================================================")
    print(f" UI Pipeline: Universal Cross-Platform Agent Installer")
    print(f" Target: {target_path}")
    print(f"==================================================")

    targets = (
        ["cursor", "claude", "gemini", "windsurf", "copilot"]
        if args.platform == "all"
        else [args.platform]
    )

    for plat in targets:
        install_platform(plat, target_path, dry_run=args.dry_run)

    print("\n[DONE] Installation complete!")
    print("Now invoke /ui-pipeline or /skill in your agent session to start designing.")


if __name__ == "__main__":
    main()
