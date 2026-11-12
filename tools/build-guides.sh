#!/bin/bash
# Rebuilds the two setup-guide pages and the download zip from the pack.
# Run after any change to the pack's guides or files, then commit the results.
# Needs pandoc. Override PACK_REPO or SITE_REPO to use other locations.
set -euo pipefail

PACK_REPO="${PACK_REPO:-/Users/moopuna/Code/Personal/noteOS-starter}"
SITE_REPO="${SITE_REPO:-/Users/moopuna/Code/Personal/noteOS-site}"
TEMPLATE="$SITE_REPO/tools/guide-template.html"

# Zip with no folder prefix. The person's computer names the folder after the zip.
rm -f "$SITE_REPO/noteOS.zip"
git -C "$PACK_REPO" archive --format=zip -o "$SITE_REPO/noteOS.zip" HEAD:starter

build_guide() {
  local src="$1" out="$2" pagetitle="$3" description="$4"
  local title
  title="$(sed -n '1s/^# //p' "$src")"
  # Drop the first "# " line (the template prints it as the h1), then convert.
  sed '1d' "$src" | pandoc -f gfm -t html --toc --toc-depth=2 \
    --template="$TEMPLATE" \
    -V "title=$title" -V "pagetitle=$pagetitle" -V "description=$description" \
    -V "srcname=$(basename "$src")" \
    -o "$out"
}

build_guide "$PACK_REPO/starter/Setup Guide - Mac.md" "$SITE_REPO/setup-guide-mac.html" \
  "Mac Setup Guide" "Step by step setup for noteOS Starter on a Mac."
build_guide "$PACK_REPO/starter/Setup Guide - Windows.md" "$SITE_REPO/setup-guide-windows.html" \
  "Windows Setup Guide" "Step by step setup for noteOS Starter on a Windows PC."

echo "Built noteOS.zip ($(stat -f %z "$SITE_REPO/noteOS.zip") bytes), setup-guide-mac.html, setup-guide-windows.html"
