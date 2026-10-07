#!/usr/bin/env bash
# ui-pipeline shell installer
set -e

PLATFORM="${1:-all}"
TARGET="${2:-.}"

python3 "$(dirname "$0")/install.py" --platform "$PLATFORM" --target "$TARGET"
