/**
 * Blog / Ratgeber der Welpenschule Schwechat & Bezirk Mödling.
 *
 * Redaktionsplan-getriebener Regional-Blog: ein Artikel pro Monat, terminiert
 * über `publishAt` (Europe/Vienna). Zukünftige Artikel sind fertig hinterlegt
 * und werden automatisch sichtbar, sobald ihr Datum erreicht ist
 * (getPublishedPosts filtert; wöchentlicher Rebuild-Tick + ISR revalidate).
 *
 * Qualitätsvorgabe (bellerei-Blog-Standard, adaptiert aufs wk-Design-System):
 * Direktantwort (AEO) · Key-Takeaways · Info-/Warn-/Tipp-Boxen · Studien-Belege
 * (lib/studies) · Jessy/Bianca-Zitat · >=8 FAQ (sichtbar == FAQPage-Schema,
 * textgleich) · Fazit · interne Links auf Orts-/Kursseiten · Crosslink
 * willenskraft.co.at · Meta-Title <=60 / Description <=140 · 1 Titelbild 16:9.
 */

export interface BlogFAQ {
  question: string;
  answer: string;
}

/**
 * Strukturierte Inhaltsblöcke. Inline-Markup in Texten: **fett** und
 * [Label](/interner-oder-externer-link) — gerendert vom Template (kein rohes HTML).
 */
export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'info'; title?: string; text: string }
  | { type: 'warn'; title?: string; text: string }
  | { type: 'tipp'; title?: string; text: string }
  | { type: 'quote'; text: string; author: string }
  | { type: 'table'; caption?: string; head: string[]; rows: string[][] }
  | { type: 'study'; studyId: string; take: string }
  | { type: 'cta'; title: string; text: string; href: string; label: string };

export interface BlogPost {
  slug: string;
  /** H1 der Seite */
  title: string;
  /** Meta-Title <= 60 Zeichen (mit Front-Keyword) */
  metaTitle: string;
  /** Meta-Description <= 140 Zeichen */
  metaDescription: string;
  /** Teaser für Karten & OG */
  excerpt: string;
  /** YYYY-MM-DD — als Europe/Vienna-Datum interpretiert (Veröffentlichungstag) */
  publishAt: string;
  /** YYYY-MM-DD — optionales letztes inhaltliches Update */
  updatedAt?: string;
  category: string;
  primaryKeyword: string;
  /** Pfad relativ zu /public, z. B. /blog/welpe-stubenrein-neusiedl.webp */
  heroImage: string;
  heroAlt: string;
  readingMinutes: number;
  /** AEO-Direktantwort: 1 Absatz, beantwortet die Kernfrage sofort */
  direktantwort: string;
  keyTakeaways: string[];
  body: ContentBlock[];
  /** >= 8 Fragen — sichtbar UND textgleich als FAQPage-Schema */
  faqs: BlogFAQ[];
  fazit: string;
  internalLinks?: { href: string; label: string; hint?: string }[];
  relatedSlugs?: string[];
  /** Signierende Person: 'jessy' (Trainerin) oder 'bianca' (Gründerin) */
  author?: 'jessy' | 'bianca';
}

import { posts } from './postsData';
export { posts };

/** Heutiges Datum als YYYY-MM-DD in Europe/Vienna (DST-sicher). */
export function viennaToday(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Vienna',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

/** Alle bereits veröffentlichten Artikel, neueste zuerst. */
export function getPublishedPosts(): BlogPost[] {
  const today = viennaToday();
  return posts
    .filter((p) => p.publishAt <= today)
    .sort((a, b) => b.publishAt.localeCompare(a.publishAt));
}

/** Slugs aller veröffentlichten Artikel (für generateStaticParams / sitemap). */
export function getPublishedSlugs(): string[] {
  return getPublishedPosts().map((p) => p.slug);
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Ist der Artikel (nach Europe/Vienna) bereits veröffentlicht? */
export function isPublished(post: BlogPost): boolean {
  return post.publishAt <= viennaToday();
}

/** Verwandte, bereits veröffentlichte Artikel (per relatedSlugs, sonst neueste). */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const published = getPublishedPosts().filter((p) => p.slug !== post.slug);
  const preferred = (post.relatedSlugs ?? [])
    .map((s) => published.find((p) => p.slug === s))
    .filter((p): p is BlogPost => Boolean(p));
  const rest = published.filter((p) => !preferred.includes(p));
  return [...preferred, ...rest].slice(0, limit);
}
