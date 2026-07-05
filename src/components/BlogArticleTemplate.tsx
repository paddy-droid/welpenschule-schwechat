import Image from 'next/image';
import Link from 'next/link';
import * as Accordion from '@radix-ui/react-accordion';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  FlaskConical,
  Info,
  Lightbulb,
  Phone,
  Quote,
  Sparkles,
  TriangleAlert,
} from 'lucide-react';
import GoogleBadge from '@/components/GoogleBadge';
import CtaBanner from '@/components/CtaBanner';
import { WhatsAppIcon, waHref } from '@/components/WhatsAppFloat';
import { studies } from '@/lib/studies';
import type { BlogPost, ContentBlock } from '@/lib/posts';
import { getRelatedPosts } from '@/lib/posts';

const BASE = 'https://welpenschule-schwechat.at';

const AUTHORS = {
  jessy: {
    name: 'Ing. Jessica Pusch',
    role: 'Hundetrainerin · Willenskraft Schwechat & Bezirk Mödling',
    bio: 'Jessy ist deine Hundetrainerin für Schwechat und den Bezirk Mödling. Als ausgebildete Biochemikerin (Ing.) und Willenskraft-zertifizierte Trainerin verbindet sie wissenschaftlich fundiertes, gewaltfreies Training nach dem LIFE-Modell mit viel Praxis. Welpen- & Junghundekurse finden am überdachten Trainingsplatz in Schwechat statt — Einzeltraining auch mobil bei dir zuhause.',
    image: 'https://www.willenskraft.co.at/wp-content/uploads/2025/06/Jessica-Pusch-Hundeschule-Wien-Niederoesterreich.webp',
    schemaId: `${BASE}/#trainer`,
  },
  bianca: {
    name: 'Bianca Oriana Willen',
    role: 'Gründerin Hundeschule Willenskraft & Akademie',
    bio: 'Bianca Oriana Willen ist Gründerin der Hundeschule Willenskraft und der Willenskraft Akademie. Sie hat das gewaltfreie, bedürfnisorientierte LIFE-Modell geprägt, nach dem alle Willenskraft-Trainer:innen arbeiten.',
    image: 'https://www.willenskraft.co.at/wp-content/uploads/2025/06/Jessica-Pusch-Hundeschule-Wien-Niederoesterreich.webp',
    schemaId: undefined as string | undefined,
  },
};

/** Inline-Renderer: **fett** und [Label](href) — kein rohes HTML. */
function renderInline(text: string, keyBase: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      nodes.push(<strong key={`${keyBase}-b${i}`}>{m[1]}</strong>);
    } else if (m[2] !== undefined && m[3] !== undefined) {
      const href = m[3];
      const label = m[2];
      if (href.startsWith('http')) {
        nodes.push(
          <a key={`${keyBase}-a${i}`} href={href} target="_blank" rel="noopener noreferrer" className="wk-link font-medium">
            {label}
          </a>,
        );
      } else {
        nodes.push(
          <Link key={`${keyBase}-l${i}`} href={href} className="wk-link font-medium">
            {label}
          </Link>,
        );
      }
    }
    last = regex.lastIndex;
    i += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function Callout({
  variant,
  title,
  text,
  keyBase,
}: {
  variant: 'info' | 'warn' | 'tipp';
  title?: string;
  text: string;
  keyBase: string;
}) {
  const cfg = {
    info: { Icon: Info, ring: 'border-l-brand-500', bg: 'bg-brand-50/70', label: title ?? 'Gut zu wissen', tone: 'text-brand-800' },
    warn: { Icon: TriangleAlert, ring: 'border-l-brand-500', bg: 'bg-brand-50/70', label: title ?? 'Achtung', tone: 'text-brand-800' },
    tipp: { Icon: Lightbulb, ring: 'border-l-brand-600', bg: 'bg-cream-soft', label: title ?? 'Jessys Tipp', tone: 'text-ink-900' },
  }[variant];
  const { Icon } = cfg;
  return (
    <div className={`my-7 rounded-2xl border border-ink-200/70 border-l-[5px] ${cfg.ring} ${cfg.bg} p-5 sm:p-6`}>
      <p className={`mb-1.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] ${cfg.tone}`}>
        <Icon className="h-4 w-4" /> {cfg.label}
      </p>
      <p className="text-ink-700 leading-relaxed">{renderInline(text, keyBase)}</p>
    </div>
  );
}

function Block({ block, i }: { block: ContentBlock; i: number }) {
  const kb = `blk-${i}`;
  switch (block.type) {
    case 'p':
      return <p className="text-lg text-ink-700 leading-relaxed">{renderInline(block.text, kb)}</p>;
    case 'h2':
      return (
        <h2 className="wk-display scroll-mt-28 text-2xl md:text-4xl text-ink-950 pt-6">{block.text}</h2>
      );
    case 'h3':
      return <h3 className="text-xl md:text-2xl font-semibold text-ink-950 pt-2">{block.text}</h3>;
    case 'list':
      return block.ordered ? (
        <ol className="space-y-2.5 pl-1">
          {block.items.map((it, k) => (
            <li key={k} className="flex gap-3 text-ink-700 leading-relaxed">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">
                {k + 1}
              </span>
              <span>{renderInline(it, `${kb}-${k}`)}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-2.5">
          {block.items.map((it, k) => (
            <li key={k} className="flex gap-3 text-ink-700 leading-relaxed">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
              <span>{renderInline(it, `${kb}-${k}`)}</span>
            </li>
          ))}
        </ul>
      );
    case 'info':
      return <Callout variant="info" title={block.title} text={block.text} keyBase={kb} />;
    case 'warn':
      return <Callout variant="warn" title={block.title} text={block.text} keyBase={kb} />;
    case 'tipp':
      return <Callout variant="tipp" title={block.title} text={block.text} keyBase={kb} />;
    case 'quote':
      return (
        <figure className="my-8 rounded-3xl bg-gradient-to-br from-brand-50 to-brand-50 border border-brand-200/60 p-7 sm:p-8">
          <Quote className="h-7 w-7 text-brand-500" />
          <blockquote className="mt-3 text-lg md:text-xl text-ink-800 leading-relaxed italic">
            {renderInline(block.text, kb)}
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-ink-600">— {block.author}</figcaption>
        </figure>
      );
    case 'table':
      return (
        <figure className="my-7">
          <div className="overflow-x-auto rounded-2xl border border-ink-200">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-ink-950 text-cream">
                  {block.head.map((h, k) => (
                    <th key={k} className="px-4 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className={r % 2 ? 'bg-cream-soft' : 'bg-card'}>
                    {row.map((cell, c) => (
                      <td key={c} className="border-t border-ink-200 px-4 py-3 text-ink-700">
                        {renderInline(cell, `${kb}-${r}-${c}`)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && <figcaption className="mt-2 text-xs text-ink-400">{block.caption}</figcaption>}
        </figure>
      );
    case 'study': {
      const s = studies[block.studyId];
      if (!s) return null;
      return (
        <div className="my-7 rounded-2xl border border-ink-200 bg-card p-5 sm:p-6">
          <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700">
            <FlaskConical className="h-4 w-4" /> Das sagt die Wissenschaft
          </p>
          <p className="text-ink-700 leading-relaxed">{renderInline(block.take, kb)}</p>
          <p className="mt-3 text-sm text-ink-500">
            Beleg:{' '}
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="wk-link font-medium">
              {s.short}
            </a>{' '}
            · <em>{s.title}</em>, {s.journal} ({s.year}).
          </p>
        </div>
      );
    }
    case 'cta':
      return (
        <div className="my-8 overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-cream-soft p-7 sm:p-8">
          <p className="wk-display text-xl md:text-2xl text-ink-950">{block.title}</p>
          <p className="mt-2 text-ink-700 leading-relaxed">{renderInline(block.text, kb)}</p>
          <div className="mt-5">
            {block.href.startsWith('http') ? (
              <a href={block.href} target="_blank" rel="noopener noreferrer" className="wk-btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                {block.label} <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Link href={block.href} className="wk-btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                {block.label} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      );
    default:
      return null;
  }
}

function buildJsonLd(post: BlogPost) {
  const url = `${BASE}/ratgeber/${post.slug}`;
  const author = AUTHORS[post.author ?? 'jessy'];
  const authorNode = author.schemaId
    ? { '@id': author.schemaId }
    : { '@type': 'Person', name: author.name };
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: post.title.slice(0, 110),
      name: post.title,
      description: post.metaDescription,
      image: `${BASE}${post.heroImage}`,
      datePublished: post.publishAt,
      dateModified: post.updatedAt ?? post.publishAt,
      inLanguage: 'de-AT',
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: authorNode,
      publisher: { '@id': `${BASE}/#business` },
      articleSection: post.category,
      keywords: post.primaryKeyword,
      isPartOf: { '@id': `${BASE}/#website` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: `${BASE}/ratgeber` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: post.metaTitle,
      inLanguage: 'de-AT',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#direktantwort'] },
    },
  ];
}

const dateFmt = new Intl.DateTimeFormat('de-AT', { day: '2-digit', month: 'long', year: 'numeric' });

export default function BlogArticleTemplate({ post }: { post: BlogPost }) {
  const author = AUTHORS[post.author ?? 'jessy'];
  const related = getRelatedPosts(post, 3);
  const published = dateFmt.format(new Date(`${post.publishAt}T09:00:00`));

  return (
    <article className="bg-background">
      {buildJsonLd(post).map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 wk-mesh opacity-50 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl pt-10 pb-6 relative">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-500">
              <li><Link href="/" className="hover:text-brand-700 transition-colors">Startseite</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/ratgeber" className="hover:text-brand-700 transition-colors">Ratgeber</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="font-semibold text-ink-800">{post.category}</li>
            </ol>
          </nav>
          <span className="wk-eyebrow mb-5"><BookOpen className="h-3 w-3" /> {post.category}</span>
          <h1 className="wk-display text-3xl md:text-5xl text-ink-950 leading-[1.08]">{post.title}</h1>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <Image src={author.image} alt={author.name} width={28} height={28} className="rounded-full object-cover" />
              {author.name}
            </span>
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5 text-brand-600" /> {published}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand-600" /> {post.readingMinutes} Min. Lesezeit</span>
          </div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-32px_rgba(0,0,0,0.28)]">
            <Image src={post.heroImage} alt={post.heroAlt} fill sizes="(max-width: 896px) 100vw, 896px" className="object-cover" priority />
          </div>
        </div>
      </header>

      {/* ===== DIREKTANTWORT (AEO) ===== */}
      <section className="container mx-auto px-6 max-w-4xl pt-10">
        <div id="direktantwort" className="wk-card border-l-[5px] !border-l-brand-500 p-7 md:p-8 scroll-mt-24">
          <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700">
            <Sparkles className="h-3.5 w-3.5" /> Kurz & knapp
          </p>
          <p className="text-ink-800 text-base md:text-lg leading-relaxed">{renderInline(post.direktantwort, 'da')}</p>
        </div>
      </section>

      {/* ===== KEY TAKEAWAYS ===== */}
      {post.keyTakeaways.length > 0 && (
        <section className="container mx-auto px-6 max-w-4xl pt-8">
          <div className="rounded-3xl bg-cream-soft border border-ink-200/70 p-6 sm:p-8">
            <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-700">
              <CheckCircle2 className="h-4 w-4" /> Das Wichtigste auf einen Blick
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {post.keyTakeaways.map((t, k) => (
                <li key={k} className="flex gap-2.5 text-ink-700 leading-relaxed">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>{renderInline(t, `kt-${k}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===== BODY ===== */}
      <section className="container mx-auto px-6 max-w-3xl py-10">
        <div className="flex flex-col gap-5">
          {post.body.map((block, i) => (
            <Block key={i} block={block} i={i} />
          ))}
        </div>
      </section>

      {/* ===== FAZIT ===== */}
      <section className="container mx-auto px-6 max-w-3xl pb-4">
        <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-cream-soft border-2 border-brand-200 p-7 sm:p-9">
          <h2 className="wk-display text-2xl md:text-3xl text-ink-950">Fazit</h2>
          <p className="mt-3 text-lg text-ink-700 leading-relaxed">{renderInline(post.fazit, 'fazit')}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/kontakt" className="wk-btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
              Training anfragen <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:brightness-105 transition-all">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </a>
            <a href="tel:+436643903673" className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 hover:border-brand-400 hover:text-brand-700 transition-all">
              <Phone className="h-4 w-4" /> +43 664 3903673
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ (textgleich mit Schema) ===== */}
      {post.faqs.length > 0 && (
        <section className="container mx-auto px-6 max-w-3xl py-10">
          <div className="mb-8 text-center">
            <span className="wk-eyebrow mb-4">FAQ</span>
            <h2 className="wk-display text-3xl md:text-4xl text-ink-950">Häufige Fragen.</h2>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {post.faqs.map((faq, idx) => (
              <Accordion.Item key={idx} value={`faq-${idx}`} className="wk-card !p-0 overflow-hidden">
                <Accordion.Trigger className="group flex w-full items-center justify-between p-5 sm:p-6 text-left text-base font-semibold text-ink-950 hover:text-brand-700 transition-colors">
                  <span className="pr-4">{faq.question}</span>
                  <div className="shrink-0 rounded-full bg-cream-soft p-2 transition-colors group-hover:bg-brand-100">
                    <ChevronDown className="h-5 w-5 text-ink-400 transition-transform duration-300 group-data-[state=open]:rotate-180 group-hover:text-brand-700" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="px-5 sm:px-6 pb-6 text-ink-600 leading-relaxed data-[state=open]:animate-in data-[state=open]:fade-in">
                  {renderInline(faq.answer, `faqa-${idx}`)}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </section>
      )}

      {/* ===== AUTOR ===== */}
      <section className="container mx-auto px-6 max-w-3xl pb-6">
        <div className="flex flex-col sm:flex-row items-start gap-5 rounded-3xl bg-card border border-ink-200 p-6 sm:p-7">
          <Image src={author.image} alt={author.name} width={88} height={88} className="rounded-2xl object-cover" />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-700">Über die Autorin</p>
            <p className="mt-1 text-lg font-semibold text-ink-950">{author.name}</p>
            <p className="text-sm text-ink-500">{author.role}</p>
            <p className="mt-3 text-ink-600 leading-relaxed">{author.bio}</p>
            <div className="mt-4"><GoogleBadge href="/#bewertungen" /></div>
          </div>
        </div>
      </section>

      {/* ===== INTERNE LINKS ===== */}
      {post.internalLinks && post.internalLinks.length > 0 && (
        <section className="container mx-auto px-6 max-w-3xl pb-6">
          <div className="rounded-3xl border border-ink-200 bg-cream-soft p-6 sm:p-7">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-700">Passend dazu</p>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {post.internalLinks.map((l) => (
                <Link key={l.href} href={l.href} className="group flex items-center justify-between rounded-xl bg-card px-4 py-3 border border-ink-200 hover:border-brand-400 transition-colors">
                  <span>
                    <span className="block text-sm font-semibold text-ink-800 group-hover:text-brand-700">{l.label}</span>
                    {l.hint && <span className="block text-xs text-ink-400">{l.hint}</span>}
                  </span>
                  <ArrowRight className="h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-600" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA-BANNER ===== */}
      <CtaBanner
        regionName="Schwechat"
        title="Lieber gemeinsam statt allein üben?"
        text="Welpen- & Junghundekurse am überdachten Trainingsplatz in Schwechat — wetterunabhängig, 195 €. Oder mobiles Einzeltraining bei dir zuhause in Schwechat & im ganzen Bezirk Mödling. Erstberatung 95 €."
      />

      {/* ===== VERWANDTE ARTIKEL ===== */}
      {related.length > 0 && (
        <section className="container mx-auto px-6 max-w-6xl py-12">
          <div className="mb-8 text-center">
            <span className="wk-eyebrow mb-4">Weiterlesen</span>
            <h2 className="wk-display text-2xl md:text-4xl text-ink-950">Mehr aus dem Ratgeber.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/ratgeber/${r.slug}`} className="group block">
                <article className="wk-card !p-0 h-full overflow-hidden flex flex-col">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image src={r.heroImage} alt={r.heroAlt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700">{r.category}</span>
                    <h3 className="mt-1 font-semibold text-ink-950 group-hover:text-brand-700 transition-colors leading-snug">{r.title}</h3>
                    <p className="mt-2 text-sm text-ink-500 leading-relaxed line-clamp-2">{r.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
