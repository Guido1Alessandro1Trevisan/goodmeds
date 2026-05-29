#!/usr/bin/env bash
# Generate a GoodMeds product icon via gpt-image-2, then convert to multi-res
# .ico for Next.js app/icon.ico. Run: source .env && bash scripts/gen-icon.sh
set -euo pipefail

if [ -z "${OPENAI_API_KEY:-}" ]; then
  echo "ERROR: OPENAI_API_KEY not set" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP_PNG="$ROOT/public/img/icon-source.png"
OUT_ICO="$ROOT/app/icon.ico"
mkdir -p "$ROOT/public/img"

PROMPT="Premium minimalist app icon design, square format, perfectly centered subject. A single horizontal pharmaceutical capsule shown at a slight 3D angle, with the left half in deep forest sage green (#1f3d2b) and the right half in warm off-white cream (#f7f5f0). Soft subtle drop shadow beneath. Background is solid warm cream (#f7f5f0) with generous padding around the capsule. The capsule fills about 60 percent of the canvas — bold, simple, readable at very small sizes (16x16 pixels). Modern premium wellness brand aesthetic. No text, no letters, no logos, no fine detail."

echo "=== requesting icon from gpt-image-2 (1024x1024, high) ==="
body=$(jq -nc \
  --arg model "gpt-image-2" \
  --arg prompt "$PROMPT" \
  --arg size "1024x1024" \
  --arg quality "high" \
  '{model:$model, prompt:$prompt, size:$size, quality:$quality, n:1}')

tmp=$(mktemp)
code=$(curl -sS -o "$tmp" -w "%{http_code}" \
  -X POST https://api.openai.com/v1/images/generations \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$body")

if [ "$code" != "200" ]; then
  echo "FAILED HTTP $code:"; cat "$tmp" | head -c 800; echo; rm -f "$tmp"; exit 1
fi

jq -r '.data[0].b64_json' "$tmp" | base64 -D > "$TMP_PNG"
rm -f "$tmp"
echo "source PNG → $TMP_PNG ($(du -k "$TMP_PNG" | cut -f1) KB)"

echo ""
echo "=== converting PNG → multi-res ICO (16, 32, 48, 64, 128, 256) ==="
magick "$TMP_PNG" -define icon:auto-resize=256,128,64,48,32,16 "$OUT_ICO"
echo "icon.ico → $OUT_ICO ($(du -k "$OUT_ICO" | cut -f1) KB)"

echo ""
echo "=== removing old favicon.ico (Next.js default logo) ==="
rm -f "$ROOT/app/favicon.ico" && echo "removed" || echo "no old favicon to remove"

echo "done."
