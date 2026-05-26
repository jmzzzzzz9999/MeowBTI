from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / "assets" / "cards" / "template-with-logo-qr.png"
OUT_DIR = ROOT / "assets" / "cards" / "templates-fixed"

FONT = Path("C:/Windows/Fonts/msyh.ttc")
FONT_BOLD = Path("C:/Windows/Fonts/msyhbd.ttc")

TYPES = [
    ("Diplomeow", "贴贴外交官", "亲和系", ("和平使者", "软乎社交"), "PNG/V2/01_Diplomeow.png", "家里的柔软外交部。擅长用蹭腿、慢眨眼、陪睡和主动靠近来修复人类情绪。"),
    ("CtrlHuman", "人类训练师", "亲和系", ("反向驯养", "眼神指令"), "PNG/V2/02_CtrlHuman.png", "表面上是你在养猫，实际上是它在调教人类。叫一声、盯一眼，人类就会行动。"),
    ("ATMiao", "罐罐提款机", "亲和系", ("撒娇融资", "饭前影帝"), "PNG/V2/03_ATMiao.png", "爱你是真的，爱罐罐也是真的。饭点前的深情，通常含有明确需求。"),
    ("LurkMode", "暗中观察员", "潜行系", ("静默审计", "慢速上线"), "PNG/V2/04_LurkMode.png", "新东西先看，新人先审，新声音先备案。它在场，但不一定公开在场。"),
    ("AeroDrama", "飞机耳艺术家", "潜行系", ("表情过载", "感官细腻"), "PNG/V2/05_AeroDrama.png", "耳朵、尾巴、眼神全都会说话。它的身体语言像高分辨率弹幕。"),
    ("Unboxer", "开箱工程师", "探索系", ("纸箱科研", "结构好奇"), "PNG/V2/06_Unboxer.png", "盒子、袋子、抽屉、柜门，都是科研现场。快递属于你，快递盒属于它。"),
    ("3AMRave", "午夜蹦迪王", "探索系", ("夜间开机", "地板漂移"), "PNG/V2/07_3AMRave.png", "白天省电，凌晨自动升级系统。全屋跑酷是它的夜间例行维护。"),
    ("HuntOS", "猎物模拟器", "探索系", ("目标锁定", "动态追踪"), "PNG/V2/08_HuntOS.png", "捕猎系统常驻后台。小动静、纸团、脚踝都可能触发任务模式。"),
    ("BossMeow", "家庭董事长", "主权系", ("家宅统筹", "全局掌控"), "PNG/V2/09_BossMeow.png", "家里所有路线、座位、窗台和沙发产权，都归它最终解释。"),
    ("GuardPaw", "社交保安", "主权系", ("动线管制", "门口值班"), "PNG/V2/10_GuardPaw.png", "负责巡逻门口、监督动线、检查其他猫和人类是否越界。"),
    ("HugWall", "亲密防火墙", "主权系", ("授权触碰", "温柔拦截"), "PNG/V2/11_HugWall.png", "靠近可以，授权另算。信任需要边界，摸摸也需要权限。"),
    ("Pet404", "三秒过载体", "潜行系", ("触感缓存", "耐受读条"), "PNG/V2/12_Pet404.png", "摸摸服务三秒后可能无法响应。不是翻脸，是触摸缓存爆满。"),
    ("SeenU", "暗恋室友", "潜行系", ("克制依恋", "低频示好"), "PNG/V2/13_SeenU.png", "已读你，在乎你，但表面还要装作只是普通合租。"),
    ("MeowNews", "委屈播报员", "亲和系", ("高频喵务", "即时反馈"), "PNG/V2/14_MeowNews.png", "饭晚了要说，门关了要说，被忽略了也要说。家庭新闻发布会常驻嘉宾。"),
    ("DoorLord", "门禁管理员", "主权系", ("门权主义", "通道执念"), "PNG/V2/15_DoorLord.png", "门关着要开，门开了要看，看完不一定出去，但你不能关。"),
    ("ZenNap", "睡神哲学家", "安定系", ("困意修行", "安眠大师"), "PNG/V2/16_ZenNap.png", "睡眠不是偷懒，是猫生哲学。纷争会影响睡眠质量。"),
    ("WindowSage", "窗边冥想者", "安定系", ("日光旁听", "远程看世"), "PNG/V2/17_WindowSage.png", "身体很安静，精神世界很辽阔。窗边就是它的世界频道。"),
    ("SoloSoul", "独居主义者", "安定系", ("社交限量", "安静自洽"), "PNG/V2/18_SoloSoul.png", "可以爱人类，但未必喜欢其他猫。私人空间需要被认真尊重。"),
    ("MineMine", "小霸王", "主权系", ("占位宣言", "气场外放"), "PNG/V2/19_MineMine.png", "这个窝是我的，这条路是我的，这个人类也先算我的。"),
    ("IdleEye", "省电观察家", "安定系", ("低功耗模式", "静态在线"), "PNG/V2/20_IdleEye.png", "身体待机，眼睛在线。多数事情不值得起身，但值得看一眼。"),
    ("FollowUp", "跟班小秘书", "亲和系", ("移动随行", "房间打卡"), "PNG/V2/21_FollowUp.png", "你走到哪里它就跟到哪里。你的行程需要猫方备案。"),
    ("MoodScan", "气氛雷达猫", "潜行系", ("空气读心", "预警体质"), "PNG/V2/22_MoodScan.png", "谁心情变了、声音不对、气氛变紧，它都能第一时间捕捉。"),
    ("Spawn?", "随机刷新猫", "探索系", ("坐标跳跃", "猫影闪现"), "PNG/V2/23_Spawn.png", "上一秒还在窗边，下一秒刷新到柜顶。刷新点对人类不可见。"),
    ("CabHack", "柜门黑客", "探索系", ("缝隙入侵", "权限试探"), "PNG/V2/24_CabHack.png", "柜门、抽屉、门缝，都是等待破解的隐藏地图。"),
    ("BlanketVIP", "被窝合法居民", "安定系", ("暖源追踪", "舒适钉子户"), "PNG/V2/25_BlanketVIP.png", "它不是钻进被窝，它是回到自己的合法领地。"),
]

TAG_COLORS = {
    "亲和系": ("#2F8D77", "#E8F4EF"),
    "潜行系": ("#63558F", "#F0ECF8"),
    "探索系": ("#3B8799", "#E7F5F7"),
    "主权系": ("#39464F", "#EEF1F2"),
    "安定系": ("#7389A0", "#EEF3F7"),
}


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
    if len(lines) > max_lines:
        lines = lines[:max_lines]
        lines[-1] = lines[-1].rstrip("，。、") + "..."
    return lines


def paste_soft_cat(card, art_path):
    art = Image.open(ROOT / art_path).convert("RGBA")

    # Current approved manual parameters. Keep these in sync with compose_full_card_on_template.py.
    max_w, max_h = 800, 790
    scale = min(max_w / art.width, max_h / art.height)
    art = art.resize((int(art.width * scale), int(art.height * scale)), Image.LANCZOS)

    base_alpha = Image.new("L", art.size, 0)
    md = ImageDraw.Draw(base_alpha)
    margin_x, margin_y = 40, 40
    md.rounded_rectangle((margin_x, margin_y, art.width - margin_x, art.height - margin_y), radius=106, fill=210)
    base_alpha = base_alpha.filter(ImageFilter.GaussianBlur(45))

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


def draw_centered_baseline(draw, text, x1, x2, baseline, ft, fill):
    width = draw.textlength(text, font=ft)
    draw.text((x1 + (x2 - x1 - width) / 2, baseline), text, font=ft, fill=fill, anchor="ls")


def draw_card(data):
    type_id, zh_name, family, custom_tags, art_path, desc = data
    card = Image.open(BASE).convert("RGBA")
    paste_soft_cat(card, art_path)

    d = ImageDraw.Draw(card)

    type_text = f"{type_id}  {zh_name}"
    type_ft = fit_text(d, type_text, 800, 54, 40)
    draw_centered_baseline(d, type_text, 110, 914, 1140, type_ft, "#253038")

    panel = (118, 1160, 906, 1350)
    rounded_rect(d, panel, 28, (255, 250, 242, 236), outline="#F1D5BE", width=2)

    family_color, family_fill = TAG_COLORS[family]
    tags = [(family, family_color, family_fill), (custom_tags[0], "#E88967", "#FFF0E7"), (custom_tags[1], "#D5A642", "#FFF6DF")]
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

    desc_font = font(28)
    lines = wrap(d, desc, desc_font, 700, 2)
    start_y = 1255
    for i, line in enumerate(lines):
        line_w = d.textlength(line, font=desc_font)
        d.text(((card.width - line_w) / 2, start_y + i * 42), line, font=desc_font, fill="#68757D")

    safe_id = type_id.replace("?", "")
    out = OUT_DIR / f"{safe_id}.png"
    card.convert("RGB").save(out, quality=95)
    return out


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    outputs = [draw_card(item) for item in TYPES]
    print(f"Generated {len(outputs)} templates:")
    for out in outputs:
        print(out)


if __name__ == "__main__":
    main()
