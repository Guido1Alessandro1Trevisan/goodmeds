#!/usr/bin/env python3
"""
One-shot generator for goodmeds landing-page photo assets.
Uses OpenAI gpt-image-2. Saves PNGs into /public/img/.
Run: OPENAI_API_KEY=... python3 scripts/gen-assets.py
"""

import base64
import concurrent.futures as cf
import json
import os
import sys
import urllib.request
from pathlib import Path

API_KEY = os.environ.get("OPENAI_API_KEY")
if not API_KEY:
    print("ERROR: OPENAI_API_KEY not set", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "img"
OUT.mkdir(parents=True, exist_ok=True)

ASSETS = [
    {
        "filename": "hero-still.png",
        "size": "1024x1536",  # portrait, fits the hero right column
        "prompt": (
            "Editorial wellness still-life photograph, soft natural morning "
            "light from a window, shot on medium format film. A single small "
            "sage-green hand-thrown ceramic vessel sits on rumpled cream linen "
            "fabric on a warm off-white surface. A few fresh eucalyptus stems "
            "rest beside it. Negative space, minimalist composition, painterly "
            "shadows, calm and luxurious. Color palette: cream #f7f5f0, "
            "muted sage green, warm shadow. No text, no logos, no people, no "
            "medical objects or branding. Magazine-quality editorial photography."
        ),
    },
    {
        "filename": "ritual-texture.png",
        "size": "1536x1024",  # landscape, fits a wide section accent
        "prompt": (
            "Minimalist editorial photograph of folded cream-colored linen "
            "drapery with soft natural light falling across it, shot from "
            "above at a slight angle. A small fresh olive branch lies casually "
            "across the fabric. Color palette: cream, off-white, sage green. "
            "Soft painterly shadows, calm and luxurious wellness aesthetic. "
            "Negative space, no text, no logos, no people. Magazine-quality "
            "editorial still life."
        ),
    },
]


def generate(asset):
    filename = asset["filename"]
    body = json.dumps(
        {
            "model": "gpt-image-2",
            "prompt": asset["prompt"],
            "size": asset["size"],
            "n": 1,
        }
    ).encode("utf-8")
    req = urllib.request.Request(
        "https://api.openai.com/v1/images/generations",
        data=body,
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    print(f"[{filename}] requesting…", flush=True)
    try:
        with urllib.request.urlopen(req, timeout=240) as resp:
            payload = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        msg = e.read().decode("utf-8", errors="replace")
        return filename, f"HTTP {e.code}: {msg[:500]}"
    except Exception as e:
        return filename, f"error: {e}"

    try:
        b64 = payload["data"][0]["b64_json"]
    except (KeyError, IndexError):
        return filename, f"unexpected response shape: {json.dumps(payload)[:500]}"

    out_path = OUT / filename
    out_path.write_bytes(base64.b64decode(b64))
    return filename, f"ok ({out_path.stat().st_size // 1024} KB → {out_path})"


def main():
    with cf.ThreadPoolExecutor(max_workers=len(ASSETS)) as pool:
        for filename, status in pool.map(generate, ASSETS):
            print(f"[{filename}] {status}", flush=True)


if __name__ == "__main__":
    main()
