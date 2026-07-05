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

## Automatische Veröffentlichung — komplett ohne Build

Alles läuft über **ISR** (Incremental Static Regeneration): nur günstige Serverless-Revalidierungen,
**keine Build-Minuten / Vercel-Credits**. Ein Build passiert nur noch, wenn du echten neuen Artikel-Content
pushst — nicht mehr wöchentlich „auf Verdacht".

- `/ratgeber` (Index), `/ratgeber/[slug]` und `sitemap.ts` haben `export const revalidate = 43200` (12 h).
- Bei jeder Revalidierung ruft die Seite `getPublishedPosts()` mit dem aktuellen Wien-Datum auf und blendet
  einen Artikel frei, sobald sein `publishAt` erreicht ist. Zukünftige Slugs erzeugt Next per `dynamicParams`
  on-demand; der Guard `isPublished` schützt vor Vorab-Zugriff. Die `sitemap.xml` nimmt den neuen Artikel
  bei ihrer nächsten Revalidierung auf.

Ein zukünftig datierter Artikel liegt fertig in `postsData.ts` und wird **von selbst** live — kein Rebuild,
kein Cron, kein Empty-Commit, kein manueller Schritt. (Der frühere `publish-tick`-GitHub-Action-Rebuild
wurde entfernt, weil er unnötige Vercel-Builds kostete.)

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
