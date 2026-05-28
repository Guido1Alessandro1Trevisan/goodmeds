#!/usr/bin/env bash
# Regenerate goodmeds hero + texture at high quality.
# Outputs to public/img/*-v2.png so you can compare before swapping in.
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

  echo "[$filename] requesting ($size, high)…"
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

# Hero — pushed toward Aman-resort luxury minimalism. More negative space,
# more refined light, more painterly.
gen "hero-still-v2.png" "1024x1536" \
"Editorial wellness still-life photograph in the style of Kinfolk magazine or an Aman resort brochure. Shot on medium format film with a 90mm lens, very shallow depth of field, soft natural late-morning window light raking from the right with painterly shadows. A single small sage-green hand-thrown stoneware ceramic vessel with subtle glaze drips sits in the lower-left third of the frame on rumpled raw-cream linen on a warm bone-colored plaster surface. One or two stems of fresh silver-dollar eucalyptus rest naturally beside it, slightly out of focus. Generous negative space in the upper right. Color palette: bone cream, raw linen, soft warm shadow, single muted sage-green accent. Mood: calm, luxurious, intentional, expensive restraint. No text, no logos, no people, no medical objects, no branding, no syringes, no medication packaging. Hyper-realistic, magazine cover quality." &

# Texture — same direction, more refined drape, single olive sprig.
gen "ritual-texture-v2.png" "1536x1024" \
"Editorial overhead photograph for a luxury wellness brand, shot on medium format film. Beautifully draped raw-cream linen fabric with sculptural folds catching soft directional late-afternoon sunlight, casting long painterly leaf-shaped shadows from off-frame foliage across the left half of the image. A single fresh olive branch with five or six leaves rests casually in the lower-right third on the linen. Shallow depth of field with sharp focus on the olive branch. Color palette: bone, warm cream, off-white, muted sage green on the olive leaves. Mood: meditative, refined, intentional. Negative space throughout the left two-thirds for layout text overlay. No text, no logos, no people, no medical objects, no branding. Hyper-realistic, magazine quality, Kinfolk aesthetic." &

wait
echo "done."
