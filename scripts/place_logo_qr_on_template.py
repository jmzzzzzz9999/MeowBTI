from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
TEMPLATE = Path(r"C:\Users\79926\.codex\generated_images\019e63ab-2b7f-7962-a0dc-2a533948a6ea\ig_0dd68eec80da547e016a15c13e02a8819b8d6fbbc30faecaff.png")
LOGO = Path(r"C:\Users\79926\Documents\xwechat_files\wxid_vqjmq8i40hag22_1032\temp\RWTemp\2026-05\49f785dc8ca477c96ab2e768dd025b53.png")
QR = ROOT / "assets" / "meowbti-qr.png"
OUT = ROOT / "assets" / "cards" / "template-with-logo-qr.png"
LOGO_ASSET = ROOT / "assets" / "meowbti-logo-lockup-source.png"


def fit(img, max_w, max_h):
    scale = min(max_w / img.width, max_h / img.height)
    return img.resize((int(img.width * scale), int(img.height * scale)), Image.LANCZOS)


def rounded_rect(draw, xy, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def main():
    card = Image.open(TEMPLATE).convert("RGBA")
    logo = Image.open(LOGO).convert("RGBA")
    qr = Image.open(QR).convert("RGB")

    LOGO_ASSET.parent.mkdir(parents=True, exist_ok=True)
    logo.convert("RGB").save(LOGO_ASSET, quality=95)

    # Fixed slots on the 1024x1536 template.
    logo = fit(logo, 360, 100)
    card.alpha_composite(logo, (92, 70))

    d = ImageDraw.Draw(card)
    qr_size = 92
    qr = qr.resize((qr_size, qr_size), Image.NEAREST)
    qr_box = (830, 1358, 942, 1470)
    rounded_rect(d, qr_box, 14, "#FFFFFF", outline="#F0D3BC", width=2)
    card.paste(qr, (qr_box[0] + 10, qr_box[1] + 10))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    card.convert("RGB").save(OUT, quality=95)
    print(OUT)
    print(LOGO_ASSET)


if __name__ == "__main__":
    main()
