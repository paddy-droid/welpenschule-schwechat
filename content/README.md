# Ratgeber-Blog — Redaktions- & Automatik-System

Regionaler Ratgeber-Blog der **Welpenschule Schwechat & Bezirk Mödling**. Ein Artikel pro Monat,
terminiert bis Ende 2027, veröffentlicht sich automatisch. Ziel: regionale Rankings
vervielfachen (regionale Keywords abfangen + echter Mehrwert nach Willenskraft-/bellerei-Standard).

## Wie es funktioniert

| Baustein | Datei | Zweck |
|---|---|---|
| Datentyp + Gate | `src/lib/posts.ts` | `BlogPost`-Typ, `getPublishedPosts()` mit **Europe/Vienna-`publishAt`-Gate** |
| Artikel-Daten | `src/lib/postsData.ts` | Die Artikel als strukturierte `BlogPost[]` (fertig terminiert) |
| Rendering | `src/components/BlogArticleTemplate.tsx` | bellerei-Qualitätsstandard im wk-Design + Article/FAQPage/Breadcrumb-JSON-LD |
| Routen | `src/app/ratgeber/page.tsx`, `.../[slug]/page.tsx` | Index + Artikel (ISR `revalidate=3600`, Guard gegen Vorab-Zugriff) |
| Queue | `content/redaktionsplan.json` | 18-Monats-Themenplan (2026-07 … 2027-12), Quelle für neue Artikel |

## Automatische Veröffentlichung (zwei Mechanismen)

1. **ISR** – `/ratgeber` und die Artikel-Seiten rendern stündlich neu (`revalidate=3600`).
   `getPublishedPosts()` blendet einen Artikel frei, sobald sein `publishAt`-Datum (Wien) erreicht ist.
2. **publish-tick** – `.github/workflows/publish-tick.yml` erzeugt wöchentlich einen leeren Commit →
   Vercel-Rebuild → frische `sitemap.xml` + statische Seiten. Belt-and-suspenders.

Ein zukünftig datierter Artikel liegt also fertig in `postsData.ts` und wird **von selbst** live —
kein manueller Schritt nötig.

## Qualitätsvorgabe (nicht verhandelbar)

- **LIFE-Modell**, NIE „100 % positive Verstärkung" / „mit viel Herz" (Konkurrenz-Einheitsbrei).
  Differenzierung über **Wissenschaft** (Jessy = Biochemikerin) + gewaltfrei + ehrlich.
- Struktur: Direktantwort (AEO) · Key-Takeaways · Info-/Warn-/Tipp-Boxen · ≥ 2 Studien-Belege
  (`src/lib/studies.ts`, echte DOI) · Jessy/Bianca-Zitat · **≥ 8 FAQ** (sichtbar == FAQPage-Schema textgleich) ·
  Fazit · interne Links (Orts-/Kursseiten) · Crosslink willenskraft.co.at · Titelbild 16:9.
- Meta-Title ≤ 60, Meta-Description ≤ 140. Echte Preise. **KEINE bellerei-CBD-Links** (in AT nicht kaufbar).
- Bilder: immer Hund mit **Y-Geschirr + lockerer Leine**, kein Text im Bild.

## Neuen Monatsartikel erzeugen

1. Nächsten offenen Eintrag aus `content/redaktionsplan.json` nehmen (Monat ohne Artikel in `postsData.ts`).
2. Artikel als `BlogPost` nach obiger Vorgabe schreiben (Claude) und in `postsData.ts` ergänzen —
   `publishAt` = gewünschter Monat, `heroImage` = `/blog/<slug>.jpg`.
3. Titelbild generieren: `scripts/gen_blog_images.py` (Gemini `gemini-3-pro-image-preview`, 16:9) →
   nach `public/blog/<slug>.jpg`, danach komprimieren (~150 KB).
4. `npm run build` (Gate) → committen → pushen. Vercel deployt; der Artikel geht an seinem `publishAt` live.

> Interne Verlinkung nur auf **existierende** Seiten (Orts-/Kursseiten). Der Redaktionsplan nennt
> teils geplante Pillar-Seiten (`/welpenschule-schwechat`, `/bezirk-moedling`) — erst
> anlegen, dann verlinken.
