#!/usr/bin/env bash
# Generate 6 product category images for GoodMeds via OpenAI gpt-image-2.
# Each category gets a tinted product still-life matching its accent color.
set -euo pipefail

if [ -z "${OPENAI_API_KEY:-}" ]; then
  echo "ERROR: OPENAI_API_KEY not set" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/img"
mkdir -p "$OUT"

gen() {
  local filename="$1" size="$2" prompt="$3"
  local body
  body=$(jq -nc \
    --arg model "gpt-image-2" \
    --arg prompt "$prompt" \
    --arg size "$size" \
    --arg quality "high" \
    '{model:$model, prompt:$prompt, size:$size, quality:$quality, n:1}')

  echo "[$filename] requesting…"
  local tmp; tmp=$(mktemp)
  local code
  code=$(curl -sS -o "$tmp" -w "%{http_code}" \
    -X POST https://api.openai.com/v1/images/generations \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json" \
    -d "$body")
  if [ "$code" != "200" ]; then
    echo "[$filename] FAIL HTTP $code:"; cat "$tmp" | head -c 600; echo; rm -f "$tmp"; return 1
  fi
  jq -r '.data[0].b64_json' "$tmp" | base64 -D > "$OUT/$filename"
  rm -f "$tmp"
  echo "[$filename] ok ($(du -k "$OUT/$filename" | cut -f1) KB)"
}

BASE="Editorial product photograph, shot on medium format film with soft warm natural light and subtle drop shadow. Premium pharmaceutical/wellness brand aesthetic. Centered minimalist composition on a soft warm cream background. Magazine-quality. No text, no labels, no logos, no branding, no fine print."

gen "category-weight-loss.png" "1024x1024" \
"$BASE A single sleek minimalist injection pen with a deep forest sage-green body and warm cream cap, lying at a slight 3D angle on the cream surface. The pen is the only object." &

gen "category-sexual-health.png" "1024x1024" \
"$BASE Two small minimalist pharmaceutical capsules in soft warm coral/terracotta color, arranged together on the cream surface. Just the two capsules." &

gen "category-hair.png" "1024x1024" \
"$BASE A single small amber-brown glass dropper bottle with a cream stopper, standing upright. Just the bottle, nothing else." &

gen "category-skin.png" "1024x1024" \
"$BASE A single small handmade ceramic jar in soft blush-pink with a cream stoneware lid, standing upright on the cream surface." &

gen "category-daily-health.png" "1024x1024" \
"$BASE A single minimalist supplement bottle in soft pale powder-blue frosted glass with a cream cap, standing upright on the cream surface." &

gen "category-mental-health.png" "1024x1024" \
"$BASE Two small minimalist pharmaceutical capsules in soft muted lavender-purple color, arranged together on the cream surface." &

wait
echo "done."
