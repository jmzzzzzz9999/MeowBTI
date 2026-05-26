from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / "assets" / "cards" / "template-with-logo-qr.png"
ART = ROOT / "PNG" / "V2" / "01_Diplomeow.png"
OUT = ROOT / "assets" / "cards" / "full-card-Diplomeow-69-manual-4.png"

FONT = Path("C:/Windows/Fonts/msyh.ttc")
FONT_BOLD = Path("C:/Windows/Fonts/msyhbd.ttc")


def font(size, bold=False):
    return ImageFont.truetype(str(FONT_BOLD if bold else FONT), size)


def rounded_rect(draw, xy, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def fit_text(draw, text, max_width, start_size, min_size):
    for size in range(start_size, min_size - 1, -2):
        ft = font(size, True)
        if draw.textlength(text, font=ft) <= max_width:
            return ft
    return font(min_size, True)


def wrap(draw, text, ft, max_width, max_lines):
    lines, line = [], ""
    for ch in text:
        candidate = line + ch
        if draw.textlength(candidate, font=ft) > max_width and line:
            lines.append(line)
            line = ch
        else:
            line = candidate
    if line:
        lines.append(line)
    return lines[:max_lines]


def paste_soft_cat(card):
    art = Image.open(ART).convert("RGBA")

    # The original image background is useful as a faint geometric texture, but should not read as a hard square.
    max_w, max_h = 800, 790
    scale = min(max_w / art.width, max_h / art.height)
    art = art.resize((int(art.width * scale), int(art.height * scale)), Image.LANCZOS)

    base_alpha = Image.new("L", art.size, 0)
    md = ImageDraw.Draw(base_alpha)
    margin_x, margin_y = 40, 40
    md.rounded_rectangle((margin_x, margin_y, art.width - margin_x, art.height - margin_y), radius=106, fill=210)
    base_alpha = base_alpha.filter(ImageFilter.GaussianBlur(45))

    # Fade the pale background more than the colorful cat subject.
    px = art.load()
    alpha = Image.new("L", art.size, 0)
    ap = alpha.load()
    for y in range(art.height):
        for x in range(art.width):
            r, g, b, _ = px[x, y]
            saturation = max(r, g, b) - min(r, g, b)
            darkness = 255 - max(r, g, b)
            strength = 35 + saturation * 4.6 + darkness * 2.4
            ap[x, y] = max(35, min(255, int(strength)))
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.6))
    alpha = Image.composite(alpha, base_alpha, base_alpha)
    art.putalpha(alpha)

    x = (card.width - art.width) // 2
    y = 312
    card.alpha_composite(art, (x, y))


def draw_centered_text(draw, text, box, ft, fill):
    x1, y1, x2, y2 = box
    w = draw.textlength(text, font=ft)
    draw.text((x1 + (x2 - x1 - w) / 2, y2), text, font=ft, fill=fill, anchor="ls")


def main():
    card = Image.open(BASE).convert("RGBA")
    d = ImageDraw.Draw(card)

    title = "69的猫格档案"
    title_ft = fit_text(d, title, 780, 66, 46)
    title_w = d.textlength(title, font=title_ft)
    title_x = (card.width - title_w) / 2
    name_w = d.textlength("69", font=title_ft)
    d.text((title_x, 285), "69", font=title_ft, fill="#E88967", anchor="ls")
    d.text((title_x + name_w, 285), "的猫格档案", font=title_ft, fill="#253038", anchor="ls")

    paste_soft_cat(card)
    d = ImageDraw.Draw(card)

    type_text = "Diplomeow  贴贴外交官"
    type_ft = fit_text(d, type_text, 800, 54, 40)
    draw_centered_text(d, type_text, (110, 1040, 914, 1140), type_ft, "#253038")

    panel = (118, 1160, 906, 1350)
    rounded_rect(d, panel, 28, (255, 250, 242, 236), outline="#F1D5BE", width=2)

    tags = [("亲和系", "#2F8D77", "#E8F4EF"), ("慢眨眼专家", "#E88967", "#FFF0E7"), ("情绪修复师", "#D5A642", "#FFF6DF")]
    tag_font = font(25, True)
    tag_y = 1180
    gap = 24
    tag_w = 202
    total_w = tag_w * 3 + gap * 2
    tag_x = (card.width - total_w) / 2
    for label, color, fill in tags:
        rounded_rect(d, (tag_x, tag_y, tag_x + tag_w, tag_y + 52), 26, fill, outline=color, width=2)
        d.text((tag_x + tag_w / 2, tag_y + 36), label, font=tag_font, fill=color, anchor="ms")
        tag_x += tag_w + gap

    d.line((164, 1245, 860, 1245), fill="#EED3BC", width=2)

    desc = "家里的柔软外交部。擅长用蹭腿、慢眨眼、陪睡和主动靠近来修复人类情绪。"
    desc_font = font(28)
    lines = wrap(d, desc, desc_font, 700, 2)
    start_y = 1255
    for i, line in enumerate(lines):
        line_w = d.textlength(line, font=desc_font)
        d.text(((card.width - line_w) / 2, start_y + i * 42), line, font=desc_font, fill="#68757D")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    card.convert("RGB").save(OUT, quality=95)
    print(OUT)


if __name__ == "__main__":
    main()




