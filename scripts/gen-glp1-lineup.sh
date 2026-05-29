#!/usr/bin/env bash
# Generate GLP-1 product variant images for the lineup carousel.
set -euo pipefail

if [ -z "${OPENAI_API_KEY:-}" ]; then
  echo "ERROR: OPENAI_API_KEY not set" >&2; exit 1
fi
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/img"
mkdir -p "$OUT"

gen() {
  local filename="$1" prompt="$2"
  local body
  body=$(jq -nc --arg model "gpt-image-2" --arg prompt "$prompt" --arg size "1024x1024" --arg quality "high" \
    '{model:$model, prompt:$prompt, size:$size, quality:$quality, n:1}')
  echo "[$filename] requesting…"
  local tmp; tmp=$(mktemp)
  local code
  code=$(curl --http1.1 -sS -o "$tmp" -w "%{http_code}" -X POST https://api.openai.com/v1/images/generations \
    -H "Authorization: Bearer $OPENAI_API_KEY" -H "Content-Type: application/json" -d "$body")
  if [ "$code" != "200" ]; then
    echo "[$filename] FAIL $code:"; cat "$tmp" | head -c 600; echo; rm -f "$tmp"; return 1
  fi
  jq -r '.data[0].b64_json' "$tmp" | base64 -D > "$OUT/$filename"
  rm -f "$tmp"
  echo "[$filename] ok ($(du -k "$OUT/$filename" | cut -f1) KB)"
}

# Cleaner backgrounds (warm cream) for the dark-brown carousel — products will pop.
BASE="3D-rendered editorial product photograph on a soft warm cream background with subtle drop shadow. Modern minimalist pharmaceutical aesthetic. Centered subject. Magazine-quality. No text, no labels, no logos, no branding, no medication brand names."

gen "glp1-pen-standing.png" \
"$BASE A single sleek minimalist medical injection pen standing vertically. The pen has a deep forest sage-green body with a warm cream cap. Bold simple silhouette."
gen "glp1-vial.png" \
"$BASE A single small clear-glass medication vial with a warm cream rubber stopper and slim metal collar, standing upright. Slight liquid visible inside (clear). The vial is the only object."
gen "glp1-capsule.png" \
"$BASE Two minimalist pharmaceutical capsules in two-tone color (one half sage green, one half warm cream), arranged at a slight angle next to each other."
gen "glp1-dropper.png" \
"$BASE A single small amber-tinted glass dropper bottle with a cream rubber bulb at the top, standing upright. Just the dropper, nothing else."
echo "done."
