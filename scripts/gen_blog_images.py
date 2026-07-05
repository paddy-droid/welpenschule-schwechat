#!/usr/bin/env python3
"""
Generiert 16:9-Titelbilder fuer Blogartikel via Gemini.
Aufruf (in WSL Ubuntu):  python3 gen_blog_images.py <prompts.json> <outdir>
prompts.json: [{"slug": "...", "prompt": "..."}, ...]
Speichert <outdir>/<slug>.jpg
Key: /home/paddy/.hermes/secrets/bellerei-api-keys.env  (GEMINI_API_KEY, Auth via ?key=)
"""
import sys, os, re, json, base64, time, urllib.request, urllib.error

KEYFILE = "/home/paddy/.hermes/secrets/bellerei-api-keys.env"
MODELS = ["gemini-3-pro-image-preview", "gemini-3.1-flash-image-preview"]

def get_key():
    s = open(KEYFILE, encoding="utf-8", errors="replace").read()
    m = re.search(r"^GEMINI_API_KEY\s*=\s*(\S+)", s, re.M)
    if not m:
        sys.exit("GEMINI_API_KEY not found")
    return m.group(1).strip().strip('"')

def gen_one(key, prompt, model):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}"
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "responseModalities": ["TEXT", "IMAGE"],
            "imageConfig": {"aspectRatio": "16:9"},
        },
    }
    req = urllib.request.Request(url, data=json.dumps(payload).encode(), method="POST")
    req.add_header("Content-Type", "application/json")
    resp = json.loads(urllib.request.urlopen(req, timeout=180).read())
    for cand in resp.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            inline = part.get("inlineData") or part.get("inline_data")
            if inline and inline.get("data"):
                return base64.b64decode(inline["data"])
    raise RuntimeError("no image in response: " + json.dumps(resp)[:300])

def main():
    prompts = json.load(open(sys.argv[1], encoding="utf-8"))
    outdir = sys.argv[2]
    os.makedirs(outdir, exist_ok=True)
    key = get_key()
    ok, fail = 0, 0
    for item in prompts:
        slug = item["slug"]
        prompt = item["prompt"]
        dest = os.path.join(outdir, f"{slug}.jpg")
        if os.path.exists(dest) and os.path.getsize(dest) > 5000:
            print(f"SKIP {slug} (exists)"); ok += 1; continue
        done = False
        for model in MODELS:
            for attempt in range(2):
                try:
                    data = gen_one(key, prompt, model)
                    with open(dest, "wb") as f:
                        f.write(data)
                    print(f"OK   {slug}  <- {model}  ({len(data)} bytes)")
                    ok += 1; done = True; break
                except urllib.error.HTTPError as e:
                    body = e.read().decode(errors="replace")[:200]
                    print(f"HTTP {e.code} {slug} {model} try{attempt}: {body}")
                    if e.code == 429:
                        time.sleep(20)
                    else:
                        time.sleep(4)
                except Exception as ex:
                    print(f"ERR  {slug} {model} try{attempt}: {str(ex)[:160]}")
                    time.sleep(4)
            if done:
                break
        if not done:
            fail += 1
        time.sleep(3)
    print(f"DONE ok={ok} fail={fail}")

if __name__ == "__main__":
    main()
