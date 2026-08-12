#!/usr/bin/env python3
"""
Auditoría Lighthouse vía PageSpeed Insights sobre el sitio publicado.

    python3 scripts/pagespeed.py                      # inicio, móvil y escritorio
    python3 scripts/pagespeed.py /blog                # una ruta concreta
    python3 scripts/pagespeed.py / /programas /blog   # varias

La clave de API se lee, en este orden, de:
  1. la variable de entorno PAGESPEED_API_KEY
  2. el archivo .pagespeed-key en la raíz del proyecto (ignorado por git)

Sin clave la API pública se satura enseguida y responde 429.
Conseguir una: https://developers.google.com/speed/docs/insights/v5/get-started
"""
import json, os, shutil, subprocess, sys, time, urllib.parse

SITE = os.environ.get("PAGESPEED_SITE", "https://sinapsyc.com")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATS = ["performance", "accessibility", "best-practices", "seo"]
METRICS = [
    "first-contentful-paint",
    "largest-contentful-paint",
    "total-blocking-time",
    "cumulative-layout-shift",
    "speed-index",
]


def api_key():
    key = os.environ.get("PAGESPEED_API_KEY", "").strip()
    if key:
        return key
    path = os.path.join(ROOT, ".pagespeed-key")
    if os.path.exists(path):
        return open(path, encoding="utf-8").read().strip()
    return ""


def run(url, strategy, key, tries=4):
    """Se usa curl: urllib corta la conexión con respuestas grandes (>500 KB)."""
    params = {"url": url, "strategy": strategy, "category": CATS}
    if key:
        params["key"] = key
    api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?" + urllib.parse.urlencode(
        params, doseq=True
    )
    delay = 15
    for attempt in range(tries):
        proc = subprocess.run(
            ["curl", "-s", "--max-time", "240", "--retry", "2", "--retry-delay", "5", api],
            capture_output=True, text=True,
        )
        try:
            data = json.loads(proc.stdout)
        except Exception:
            data = None
        if data and "error" not in data:
            return data
        msg = (data or {}).get("error", {}).get("message", "sin respuesta")[:80] if data else "sin respuesta"
        if attempt < tries - 1:
            print(f"    ({msg}; reintento en {delay}s)", flush=True)
            time.sleep(delay)
            delay *= 2
        else:
            print(f"    error: {msg}")
    return None


def report(path, strategy, key):
    url = SITE.rstrip("/") + path
    data = run(url, strategy, key)
    if not data:
        return
    lh = data["lighthouseResult"]
    cats, audits = lh["categories"], lh["audits"]

    print(f"\n  {strategy.upper():9} {path}")
    scores = []
    for k in CATS:
        c = cats.get(k)
        if c and c.get("score") is not None:
            scores.append(f"{c['title']}: {round(c['score'] * 100)}")
    print("    " + " · ".join(scores))
    for m in METRICS:
        a = audits.get(m)
        if a and a.get("displayValue"):
            print(f"      {a['title']:34} {a['displayValue']}")

    opps = []
    for a in audits.values():
        saving = (a.get("details") or {}).get("overallSavingsMs") or 0
        if saving > 100:
            opps.append((saving, a["title"]))
    if opps:
        print("      oportunidades:")
        for saving, title in sorted(opps, reverse=True)[:5]:
            print(f"        · {title[:56]:58} ~{int(saving)} ms")


if __name__ == "__main__":
    key = api_key()
    if not key:
        print("⚠  Sin PAGESPEED_API_KEY: la API pública suele responder 429.\n")
    paths = sys.argv[1:] or ["/"]
    for p in paths:
        for strategy in ("mobile", "desktop"):
            report(p if p.startswith("/") else "/" + p, strategy, key)
    print()
