#!/usr/bin/env bash
# ui-pipeline shell installer
set -e

PLATFORM="${1:-all}"
TARGET="${2:-.}"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if command -v node >/dev/null 2>&1; then
    node "$DIR/install.js" --platform "$PLATFORM" --target "$TARGET"
elif command -v python3 >/dev/null 2>&1; then
    python3 "$DIR/install.py" --platform "$PLATFORM" --target "$TARGET"
elif command -v python >/dev/null 2>&1; then
    python "$DIR/install.py" --platform "$PLATFORM" --target "$TARGET"
else
    echo "[!] Neither node nor python was found on PATH." >&2
    exit 1
fi
