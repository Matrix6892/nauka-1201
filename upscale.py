#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# dependencies = ["numpy>=2,<3", "pillow>=11,<12", "spandrel>=0.4,<0.5"]
# ///

import argparse
import hashlib
import io
import urllib.request
from pathlib import Path

import numpy as np
import torch
from PIL import Image
from spandrel import ModelLoader


MODEL_URL = "https://huggingface.co/lokCX/4x-Ultrasharp/resolve/main/4x-UltraSharp.pth"
MODEL_SHA256 = "a5812231fc936b42af08a5edba784195495d303d5b3248c24489ef0c4021fe01"


def model_path() -> Path:
    path = Path(__file__).parent / "models" / "4x-UltraSharp.pth"
    if not path.exists():
        path.parent.mkdir(exist_ok=True)
        print(f"Downloading 4x-UltraSharp to {path}")
        urllib.request.urlretrieve(MODEL_URL, path)
    if hashlib.sha256(path.read_bytes()).hexdigest() != MODEL_SHA256:
        raise SystemExit(f"Model checksum mismatch: {path}")
    return path


def upscale(image: Image.Image, tile: int) -> Image.Image:
    device = "mps" if torch.backends.mps.is_available() else "cuda" if torch.cuda.is_available() else "cpu"
    model = ModelLoader().load_from_file(model_path()).eval().to(device)
    scale, overlap = model.scale, 16
    source = torch.from_numpy(np.asarray(image).copy()).permute(2, 0, 1).float().div(255).unsqueeze(0)
    output = torch.empty((1, 3, image.height * scale, image.width * scale))

    with torch.inference_mode():
        for y in range(0, image.height, tile):
            for x in range(0, image.width, tile):
                x0, y0 = max(0, x - overlap), max(0, y - overlap)
                x1, y1 = min(image.width, x + tile + overlap), min(image.height, y + tile + overlap)
                patch = model(source[:, :, y0:y1, x0:x1].to(device)).clamp(0, 1).cpu()
                left, top = (x - x0) * scale, (y - y0) * scale
                width, height = min(tile, image.width - x) * scale, min(tile, image.height - y) * scale
                output[:, :, y * scale:y * scale + height, x * scale:x * scale + width] = patch[:, :, top:top + height, left:left + width]
                print(f"tile {x // tile + 1},{y // tile + 1}", flush=True)

    pixels = output.squeeze(0).permute(1, 2, 0).mul(255).byte().numpy()
    return Image.fromarray(pixels)


def save_webp(image: Image.Image, destination: Path, quality: int, max_kb: int) -> int:
    for current_quality in range(quality, 66, -3):
        buffer = io.BytesIO()
        image.save(buffer, "WEBP", quality=current_quality, method=6)
        if len(buffer.getbuffer()) <= max_kb * 1024 or current_quality == 68:
            destination.write_bytes(buffer.getvalue())
            return current_quality
    raise AssertionError("unreachable")


def main() -> None:
    parser = argparse.ArgumentParser(description="4x-UltraSharp via Spandrel, with web-sized WebP output")
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    parser.add_argument("--input-width", type=int, help="resize before 4x inference to keep work bounded")
    parser.add_argument("--width", type=int, help="final web width; defaults to the 4x result")
    parser.add_argument("--quality", type=int, default=86)
    parser.add_argument("--max-kb", type=int, default=600)
    parser.add_argument("--tile", type=int, default=256)
    args = parser.parse_args()

    image = Image.open(args.source).convert("RGB")
    if args.input_width and image.width != args.input_width:
        image.thumbnail((args.input_width, 1_000_000), Image.Resampling.LANCZOS)
    result = upscale(image, args.tile)
    if args.width and result.width != args.width:
        result.thumbnail((args.width, 1_000_000), Image.Resampling.LANCZOS)
    args.destination.parent.mkdir(parents=True, exist_ok=True)
    quality = save_webp(result, args.destination, args.quality, args.max_kb)
    print(f"Saved {result.width}x{result.height} WebP q{quality}: {args.destination} ({args.destination.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
