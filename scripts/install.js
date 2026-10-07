#!/usr/bin/env node

/**
 * ui-pipeline cross-platform installer (Node.js engine).
 * Installs agent skills and rules into any target project workspace.
 * Supports: Claude Code, Cursor, Antigravity / Gemini, Windsurf, Copilot, Universal.
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');

const PLATFORMS = {
  cursor: [
    ['.cursorrules', '.cursorrules'],
    ['.cursor/rules/ui-pipeline.mdc', '.cursor/rules/ui-pipeline.mdc'],
  ],
  claude: [
    ['CLAUDE.md', 'CLAUDE.md'],
    ['.claude/skills/ui-pipeline/SKILL.md', '.claude/skills/ui-pipeline/SKILL.md'],
  ],
  gemini: [
    ['GEMINI.md', 'GEMINI.md'],
    ['.agents/skills/ui-pipeline/SKILL.md', '.agents/skills/ui-pipeline/SKILL.md'],
    ['.agents/skills/ui-pipeline/references/three-dials.md', '.agents/skills/ui-pipeline/references/three-dials.md'],
    ['.agents/skills/ui-pipeline/references/anti-slop-rules.md', '.agents/skills/ui-pipeline/references/anti-slop-rules.md'],
  ],
  antigravity: [
    ['GEMINI.md', 'GEMINI.md'],
    ['.agents/skills/ui-pipeline/SKILL.md', '.agents/skills/ui-pipeline/SKILL.md'],
    ['.agents/skills/ui-pipeline/references/three-dials.md', '.agents/skills/ui-pipeline/references/three-dials.md'],
    ['.agents/skills/ui-pipeline/references/anti-slop-rules.md', '.agents/skills/ui-pipeline/references/anti-slop-rules.md'],
  ],
  windsurf: [
    ['.windsurfrules', '.windsurfrules'],
  ],
  copilot: [
    ['.github/copilot-instructions.md', '.github/copilot-instructions.md'],
  ],
  universal: [
    ['SKILL.md', 'SKILL.md'],
  ],
};

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    platform: 'all',
    target: '.',
    dryRun: false,
    test: false,
    help: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--test') {
      options.test = true;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--platform' || arg === '-p') {
      options.platform = args[++i] || 'all';
    } else if (arg === '--target' || arg === '-t') {
      options.target = args[++i] || '.';
    }
  }

  return options;
}

function installPlatform(platformName, targetDir, dryRun = false) {
  const files = PLATFORMS[platformName.toLowerCase()];
  if (!files) {
    console.log(`[!] Unknown platform: ${platformName}`);
    return false;
  }

  console.log(`\n[*] Installing for platform: ${platformName.toUpperCase()} -> ${targetDir}`);
  let count = 0;

  for (const [srcRel, dstRel] of files) {
    const srcPath = path.join(REPO_ROOT, srcRel);
    const dstPath = path.join(targetDir, dstRel);

    if (!fs.existsSync(srcPath)) {
      console.log(`  [X] Source not found: ${srcRel}`);
      continue;
    }

    if (dryRun) {
      console.log(`  [DRY RUN] Would copy ${srcRel} -> ${dstRel}`);
      count++;
      continue;
    }

    fs.mkdirSync(path.dirname(dstPath), { recursive: true });
    fs.copyFileSync(srcPath, dstPath);
    console.log(`  [+] Installed: ${dstRel}`);
    count++;
  }

  return count > 0;
}

function runSelfTest() {
  console.log('[*] Running ui-pipeline source file self-test (Node engine)...');
  let allPassed = true;

  for (const [plat, mappings] of Object.entries(PLATFORMS)) {
    for (const [srcRel] of mappings) {
      const srcPath = path.join(REPO_ROOT, srcRel);
      if (!fs.existsSync(srcPath)) {
        console.log(`  [FAIL] Missing source file for ${plat}: ${srcRel}`);
        allPassed = false;
      } else {
        console.log(`  [OK] ${plat}: ${srcRel}`);
      }
    }
  }

  if (allPassed) {
    console.log('\n[SUCCESS] All platform source files present and verified.');
    process.exit(0);
  } else {
    console.log('\n[FAIL] Some source files are missing.');
    process.exit(1);
  }
}

function printHelp() {
  console.log(`
UI Pipeline Installer (Node.js engine)

Usage:
  node scripts/install.js [options]
  npx ui-pipeline [options]

Options:
  --platform, -p <name>   Platform to install for (default: all)
                          Choices: all, cursor, claude, gemini, antigravity, windsurf, copilot, universal
  --target, -t <dir>      Target project directory (default: current directory)
  --dry-run               Show planned file copies without writing
  --test                  Verify all source files in repository
  --help, -h              Show this help message
`);
}

function main() {
  const options = parseArgs();

  if (options.help) {
    printHelp();
    return;
  }

  if (options.test) {
    runSelfTest();
    return;
  }

  const targetPath = path.resolve(options.target);
  fs.mkdirSync(targetPath, { recursive: true });

  console.log('==================================================');
  console.log(' UI Pipeline: Universal Cross-Platform Agent Installer');
  console.log(` Target: ${targetPath}`);
  console.log('==================================================');

  const targets = options.platform === 'all'
    ? ['cursor', 'claude', 'antigravity', 'windsurf', 'copilot', 'universal']
    : [options.platform];

  for (const plat of targets) {
    installPlatform(plat, targetPath, options.dryRun);
  }

  console.log('\n[DONE] Installation complete!');
  console.log('Now invoke /ui-pipeline or /skill in your agent session to start designing.');
}

if (require.main === module) {
  main();
}

module.exports = { PLATFORMS, installPlatform, main };
