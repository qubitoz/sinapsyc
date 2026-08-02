#!/usr/bin/env python3
"""
Genera las imágenes de Open Graph (1200x630) de Sinapsyc.

Se ejecuta a mano cuando cambia la marca (logo, lema) o los programas:

    python3 scripts/make-og.py

Requiere Pillow y las fuentes de la marca en /tmp/ogfonts (el script las
descarga si faltan). Las imágenes resultantes viven en public/og/.
"""
import os
import urllib.request
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public")
OUT = os.path.join(ROOT, "og")
FONTS = "/tmp/ogfonts"
W, H = 1200, 630

CREAM = (255, 249, 240)
INK = (56, 65, 80)
INK_SOFT = (91, 100, 114)
TEAL = (35, 179, 170)

FONT_URLS = {
    "fredoka.ttf": "https://github.com/google/fonts/raw/main/ofl/fredoka/Fredoka%5Bwdth%2Cwght%5D.ttf",
    "nunito.ttf": "https://github.com/google/fonts/raw/main/ofl/nunito/Nunito%5Bwght%5D.ttf",
}


def ensure_fonts():
    os.makedirs(FONTS, exist_ok=True)
    for name, url in FONT_URLS.items():
        path = os.path.join(FONTS, name)
        if not os.path.exists(path):
            print(f"descargando {name}…")
            urllib.request.urlretrieve(url, path)


def fredoka(size, wght=600):
    f = ImageFont.truetype(os.path.join(FONTS, "fredoka.ttf"), size)
    f.set_variation_by_axes([100, wght])
    return f


def nunito(size, wght=700):
    f = ImageFont.truetype(os.path.join(FONTS, "nunito.ttf"), size)
    f.set_variation_by_axes([wght])
    return f


def logo(width):
    """Logo horizontal escalado a un ancho dado, conservando transparencia."""
    im = Image.open(os.path.join(ROOT, "img/logo-sinapsyc.png")).convert("RGBA")
    return im.resize((width, round(width * im.size[1] / im.size[0])), Image.LANCZOS)


def soft_blob(canvas, xy, r, color, alpha=110):
    blob = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(blob).ellipse(
        [xy[0] - r, xy[1] - r, xy[0] + r, xy[1] + r], fill=color + (alpha,)
    )
    canvas.alpha_composite(blob.filter(ImageFilter.GaussianBlur(60)))


def rounded(im, radius):
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [0, 0, im.size[0], im.size[1]], radius=radius, fill=255
    )
    out = im.convert("RGBA")
    out.putalpha(mask)
    return out


def shadow_card(canvas, box, radius=36):
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle(
        [box[0] + 6, box[1] + 12, box[2] + 6, box[3] + 12],
        radius=radius,
        fill=(20, 60, 60, 60),
    )
    canvas.alpha_composite(sh.filter(ImageFilter.GaussianBlur(18)))


def base_canvas():
    c = Image.new("RGBA", (W, H), CREAM + (255,))
    soft_blob(c, (150, 90), 160, (163, 235, 227))
    soft_blob(c, (1050, 120), 170, (255, 225, 239))
    soft_blob(c, (1100, 560), 160, (220, 239, 255))
    soft_blob(c, (120, 560), 150, (255, 242, 214))
    d = ImageDraw.Draw(c)
    for x in range(30, W, 56):
        for y in range(30, H, 56):
            d.ellipse([x, y, x + 4, y + 4], fill=(53, 196, 188, 28))
    return c


def wrap(draw, text, font, maxw):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if draw.textlength(t, font=font) <= maxw:
            cur = t
        else:
            lines.append(cur)
            cur = w
    lines.append(cur)
    return lines


def make_default():
    c = base_canvas()
    lg = logo(430)
    c.alpha_composite(lg, (78, 120))

    d = ImageDraw.Draw(c)
    f1 = fredoka(46)
    d.text((80, 430), "Abrazamos infancias,", font=f1, fill=INK)
    d.text((80, 486), "iluminamos caminos", font=f1, fill=TEAL)
    d.text(
        (82, 562),
        "Centro de Neurodesarrollo Infantil · 0 a 8 años · Guadalajara",
        font=nunito(24),
        fill=INK_SOFT,
    )

    hero = Image.open(os.path.join(ROOT, "img/hero-scene.jpg")).convert("RGB")
    hw, hh = 480, 470
    ratio = max(hw / hero.size[0], hh / hero.size[1])
    hero = hero.resize(
        (round(hero.size[0] * ratio), round(hero.size[1] * ratio)), Image.LANCZOS
    )
    hero = hero.crop(
        (
            (hero.size[0] - hw) // 2,
            (hero.size[1] - hh) // 2,
            (hero.size[0] - hw) // 2 + hw,
            (hero.size[1] - hh) // 2 + hh,
        )
    )
    box = (672, 80, 672 + hw, 80 + hh)
    shadow_card(c, box, 42)
    c.alpha_composite(rounded(hero, 42), (box[0], box[1]))

    c.convert("RGB").save(os.path.join(OUT, "og-default.jpg"), quality=88, optimize=True)
    print("og-default.jpg")


PROGRAMS = [
    ("terapia-ocupacional", "Terapia Ocupacional", "prog-ocupacional", (207, 245, 240), (20, 143, 136)),
    ("integracion-sensorial", "Terapia de Integración Sensorial", "prog-sensorial", (220, 239, 255), (47, 131, 198)),
    ("terapia-fisica", "Terapia Física", "prog-fisica", (255, 242, 214), (200, 130, 20)),
    ("terapia-alimentacion", "Terapia de Alimentación", "prog-alimentacion", (255, 225, 239), (217, 75, 140)),
    ("terapia-conductual", "Terapia Conductual", "prog-conductual", (207, 245, 240), (20, 143, 136)),
    ("terapia-lenguaje", "Terapia de Lenguaje", "prog-lenguaje", (255, 225, 239), (217, 75, 140)),
    ("terapia-aprendizaje", "Terapia de Aprendizaje", "prog-aprendizaje", (220, 239, 255), (47, 131, 198)),
    ("intervencion-temprana", "Intervención Temprana", "prog-temprana", (255, 242, 214), (200, 130, 20)),
    ("evaluacion-neuropsicologica", "Evaluación Neuropsicológica", "prog-evaluacion", (220, 239, 255), (47, 131, 198)),
    ("terapia-grupal", "Terapia Grupal", "prog-grupal", (207, 245, 240), (20, 143, 136)),
    ("clases-psicomotricidad", "Clases de Psicomotricidad", "prog-psicomotricidad", (255, 242, 214), (200, 130, 20)),
]


def make_program(slug, title, imgname, bg, accent):
    c = Image.new("RGBA", (W, H), bg + (255,))
    d = ImageDraw.Draw(c)
    for x in range(30, W, 56):
        for y in range(30, H, 56):
            d.ellipse([x, y, x + 4, y + 4], fill=(255, 255, 255, 90))

    ext = "png" if os.path.exists(os.path.join(ROOT, f"img/{imgname}.png")) else "jpg"
    art = Image.open(os.path.join(ROOT, f"img/{imgname}.{ext}")).convert("RGBA")
    art.thumbnail((430, 430), Image.LANCZOS)
    cardw = 470
    box = (660, 80, 660 + cardw, 80 + cardw)
    shadow_card(c, box, 46)
    card = Image.new("RGBA", (cardw, cardw), (255, 255, 255, 255))
    card.alpha_composite(art, ((cardw - art.size[0]) // 2, (cardw - art.size[1]) // 2))
    c.alpha_composite(rounded(card, 46), (box[0], box[1]))

    c.alpha_composite(logo(300), (72, 70))

    f1 = fredoka(60)
    y = 250
    for ln in wrap(d, title, f1, 540):
        d.text((76, y), ln, font=f1, fill=INK)
        y += 70
    d.rounded_rectangle([78, y + 16, 78 + 150, y + 26], radius=5, fill=accent)
    d.text((78, y + 48), "Terapia infantil · 0 a 8 años", font=nunito(28), fill=INK_SOFT)
    d.text((78, y + 94), "sinapsyc.com.mx", font=nunito(24, 800), fill=accent)

    c.convert("RGB").save(os.path.join(OUT, f"og-{slug}.jpg"), quality=86, optimize=True)
    print(f"og-{slug}.jpg")


if __name__ == "__main__":
    ensure_fonts()
    os.makedirs(OUT, exist_ok=True)
    make_default()
    for p in PROGRAMS:
        make_program(*p)
    print(f"listo: {len(os.listdir(OUT))} imágenes en public/og/")
