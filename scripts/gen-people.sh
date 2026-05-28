#!/usr/bin/env bash
# Generate goodmeds lifestyle people photos via OpenAI gpt-image-2.
# Diverse, candid, wellness-aesthetic — modelled on MEDVi-style imagery.
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

# Person 1: portrait, woman, headshot — calm confident wellness vibe
gen "person-portrait.png" "1024x1280" \
"Editorial wellness portrait photograph, shot on medium format film. A confident Latina woman in her early 30s wearing a soft cream linen shirt, photographed at a 3/4 angle near a window with warm soft morning light falling across her face. Natural makeup, hair tucked behind one ear, a calm half-smile, looking thoughtfully off to one side. Background is softly blurred warm-cream wall with one sage-green eucalyptus plant slightly out of focus. Candid not posed, magazine-quality, no medical objects, no logos, no text, no branding. Color palette: warm cream, soft natural skin tones, muted sage." &

# Person 2: outdoors walking — freedom / lifestyle
gen "person-walking.png" "1024x1280" \
"Editorial wellness lifestyle photograph, shot on medium format film with shallow depth of field. A Black woman in her late 30s wearing relaxed cream-colored casual clothes (linen pants, soft knit sweater), walking confidently down a tree-lined sidewalk in a sunlit residential neighborhood in early autumn. Hands in pockets, gentle natural smile, hair loose. Soft warm afternoon golden-hour light. Candid not posed, magazine-quality, no medical objects, no logos, no text, no branding. Color palette: warm cream, golden afternoon light, muted sage and amber trees." &

# Person 3: joy / connection — laughing outdoor cafe
gen "person-laughing.png" "1024x1280" \
"Editorial wellness lifestyle photograph, shot on medium format film. An East Asian man in his 30s laughing genuinely at something off-camera, sitting at a small outdoor cafe table with a ceramic coffee cup, wearing a soft cream-colored knit sweater. Warm morning sunlight, soft shadows. Candid not posed, authentic moment of joy, magazine-quality. Background is softly blurred cafe with cream walls and one potted olive tree. No medical objects, no logos, no text, no branding. Color palette: warm cream, natural skin tones, muted sage greens." &

wait
echo "done."
