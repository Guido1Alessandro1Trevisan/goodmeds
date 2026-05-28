#!/usr/bin/env bash
# Generate goodmeds landing-page photo assets via OpenAI gpt-image-2.
# Run: source .env && bash scripts/gen-assets.sh
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
    '{model:$model, prompt:$prompt, size:$size, n:1}')

  echo "[$filename] requesting ($size)…"
  local tmp
  tmp=$(mktemp)
  local code
  code=$(curl -sS -o "$tmp" -w "%{http_code}" \
    -X POST https://api.openai.com/v1/images/generations \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json" \
    -d "$body")

  if [ "$code" != "200" ]; then
    echo "[$filename] FAILED HTTP $code:"
    cat "$tmp" | head -c 800
    echo
    rm -f "$tmp"
    return 1
  fi

  jq -r '.data[0].b64_json' "$tmp" | base64 -D > "$OUT/$filename"
  rm -f "$tmp"
  echo "[$filename] ok → $OUT/$filename ($(du -k "$OUT/$filename" | cut -f1) KB)"
}

# Run both in parallel
gen "hero-still.png" "1024x1536" \
"Editorial wellness still-life photograph, soft natural morning light from a window, shot on medium format film. A single small sage-green hand-thrown ceramic vessel sits on rumpled cream linen fabric on a warm off-white surface. A few fresh eucalyptus stems rest beside it. Negative space, minimalist composition, painterly shadows, calm and luxurious. Color palette: cream off-white, muted sage green, warm shadow. No text, no logos, no people, no medical objects or branding. Magazine-quality editorial photography." &

gen "ritual-texture.png" "1536x1024" \
"Minimalist editorial photograph of folded cream-colored linen drapery with soft natural light falling across it, shot from above at a slight angle. A small fresh olive branch lies casually across the fabric. Color palette: cream, off-white, sage green. Soft painterly shadows, calm and luxurious wellness aesthetic. Negative space, no text, no logos, no people. Magazine-quality editorial still life." &

wait
echo "done."
