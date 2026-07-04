import Image from 'next/image';
import Link from 'next/link';
import { getBusinessRating } from '@/lib/businessRating';
import {
  CheckCircle2,
  Star,
  Users,
  Zap,
  Heart,
  ArrowLeft,
  ArrowRight,
  Award,
  ThumbsUp,
  ShieldCheck,
  Phone,
  MapPin,
  Clock,
  Gift,
  ChevronDown,
  TreePine,
  Waves,
  Building2,
  Mountain,
  Landmark,
  Trees,
  Compass,
  BookOpen,
  Calendar,
  Activity,
  Sun,
  Snowflake,
  Sparkles,
  Home as HomeIcon,
  Car,
  Microscope,
  ArrowUpRight,
} from 'lucide-react';
import Reviews from '@/components/Reviews';
import WillenskraftSection from '@/components/WillenskraftSection';
import GoogleBadge from '@/components/GoogleBadge';
import JessySection from '@/components/JessySection';
import CtaBanner from '@/components/CtaBanner';
import { WhatsAppIcon, waHref } from '@/components/WhatsAppFloat';
import { getLocationConfig } from '@/components/WillenskraftSection/config/locations';
import { getRegionData, type RegionData } from '@/lib/regionData';
import { getFachwissen, studies } from '@/lib/studies';
import * as Accordion from '@radix-ui/react-accordion';

const heroImage = 'https://www.willenskraft.co.at/wp-content/uploads/2024/05/Hundetrainer-Schwechat-Welpenschule.webp';
const detailsImage = 'https://www.willenskraft.co.at/wp-content/uploads/2024/05/Hundeschule-Niederoesterreich-Welpen.webp';
const profileImage = 'https://www.willenskraft.co.at/wp-content/uploads/2025/06/Jessica-Pusch-Hundeschule-Wien-Niederoesterreich.webp';

const pillarIcons = [Heart, Zap, Users, CheckCircle2, Star];

function buildFaqJsonLd(data: RegionData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

function buildLocalBusinessJsonLd(data: RegionData) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'PetTrainer'],
    name: `Hundeschule ${data.name} – Willenskraft`,
    description: `Ganzheitliches und gewaltfreies mobiles Hundetraining in ${data.name} und Umgebung. Einzeltraining, Welpentraining und Verhaltensberatung direkt bei dir zuhause.`,
    url: `https://welpenschule-schwechat.at/mobiles-hundetraining/${data.slug}`,
    telephone: '+436643903673',
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.name,
      addressRegion: data.slug === 'wien-simmering' ? 'Wien' : data.slug === 'parndorf' ? 'Burgenland' : 'Niederösterreich',
      addressCountry: 'AT',
      ...(data.postalCode ? { postalCode: data.postalCode } : {}),
    },
    ...(data.lat && data.lng
      ? { geo: { '@type': 'GeoCoordinates', latitude: data.lat, longitude: data.lng } }
      : {}),
    areaServed: { '@type': 'City', name: data.name },
    priceRange: '€€',
    employee: {
      '@type': 'Person',
      name: 'Jessica Pusch',
      alternateName: 'Jessy',
      jobTitle: 'Mobile Hundetrainerin',
    },
  };
}

// Universal training knowledge base — designed to be AI-scrapeable per region
const trainingKnowledgeBase = (regionName: string) => [
  {
    question: 'Wie oft pro Woche sollte ich mit meinem Hund trainieren?',
    answer: `Optimal sind 3–5 kurze Einheiten pro Woche à 5–10 Minuten plus Alltagsübungen. Mehr ist nicht besser – Hunde lernen in kurzen, fokussierten Sessions deutlich nachhaltiger als in langen Trainings­blöcken. Im mobilen Training in ${regionName} bauen wir gemeinsam einen realistischen Trainingsplan, der zu deinem Alltag passt.`,
    icon: Clock,
  },
  {
    question: 'Wie lange dauert es, bis ein neues Signal sitzt?',
    answer: 'Ein einzelnes Signal kann nach 50–100 sauberen Wiederholungen unter ablenkungsarmen Bedingungen abgerufen werden. Für Generalisierung (Signal funktioniert überall) braucht es deutlich mehr Wiederholungen unter wechselnden Bedingungen — typischerweise 4–8 Wochen.',
    icon: Activity,
  },
  {
    question: 'Welche Belohnung wirkt am besten?',
    answer: 'Hochwertige Futter­belohnungen (z.B. Käse, Fleisch, Leberwurst) wirken bei den meisten Hunden am stärksten — vor allem in der Lernphase. Spielzeug, Sozialkontakt oder Umweltbelohnungen werden zusätzlich genutzt. Wichtig: Die Belohnung muss schnell (innerhalb 1 Sekunde) auf das gewünschte Verhalten folgen.',
    icon: Heart,
  },
  {
    question: 'Welche Trainingstemperaturen sind optimal?',
    answer: `In ${regionName} trainieren wir ganzjährig. Bei Hitze über 25 °C verlegen wir Einheiten in den Morgen oder Abend. Bei Kälte unter -5 °C verkürzen wir Drauß­ensessions und arbeiten mehr im Haus. Asphalt im Sommer und Streusalz im Winter sind die häufigsten Problemquellen für Welpenpfoten.`,
    icon: Sun,
  },
  {
    question: 'Ab welchem Alter darf mein Welpe Treppen steigen?',
    answer: 'Bis zur 16. Lebenswoche sollten Welpen Treppen nicht regelmäßig selbstständig steigen, um Wachstumsfugen und Gelenke zu schonen. Tragen oder Tragehilfen sind ideal. Ab 5–6 Monaten gewöhnen wir den Welpen schrittweise und kontrolliert an Treppen — niedrige Treppen zuerst.',
    icon: BookOpen,
  },
  {
    question: 'Wie viel Schlaf braucht ein Welpe?',
    answer: 'Welpen brauchen 18–22 Stunden Schlaf täglich. Schlafmangel ist eine häufige Ursache für Beiß­hemmungsprobleme, Übermüdung und scheinbar „aggressives" Verhalten. Ein eigener, ruhiger Rückzugsort ist Pflicht.',
    icon: Snowflake,
  },
];

export default async function RegionPageTemplate({ regionKey }: { regionKey: string }) {
  const data = getRegionData(regionKey);
  if (!data) return null;

  // Echtes Google-Rating server-seitig holen und – nur wenn belegt – als
  // AggregateRating ins LocalBusiness-JSON-LD der Ortsseite schreiben.
  const rating = await getBusinessRating();
  const businessLd = buildLocalBusinessJsonLd(data) as Record<string, unknown>;
  if (rating) {
    businessLd.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: String(rating.ratingValue),
      reviewCount: String(rating.reviewCount),
      bestRating: '5',
      worstRating: '1',
    };
  }

  const willenskraftConfig = getLocationConfig(regionKey);
  const fachwissen = getFachwissen(regionKey);
  const pageUrl = `https://welpenschule-schwechat.at/mobiles-hundetraining/${data.slug}`;

  // AEO: WebPage mit Speakable-Direktantwort + zitierten Studien (maschinenlesbar für KI-Crawler)
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: `Hundeschule ${data.name} — mobile Hundeschule Willenskraft`,
    inLanguage: 'de-AT',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#direktantwort'],
    },
    citation: (fachwissen?.items ?? [])
      .map((item) => studies[item.studyId])
      .filter(Boolean)
      .map((study) => ({
        '@type': 'ScholarlyArticle',
        headline: study.title,
        author: study.short,
        datePublished: String(study.year),
        isPartOf: { '@type': 'Periodical', name: study.journal },
        sameAs: study.url,
      })),
  };

  // HowTo schema for region — improves AI/LLM extraction
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Mobiles Hundetraining in ${data.name} buchen — in 3 Schritten`,
    description: `Schritt-für-Schritt-Anleitung, wie du ein mobiles Hundetraining in ${data.name} bei der Hundeschule Willenskraft buchst.`,
    totalTime: 'PT2D',
    step: data.processSteps.map((s) => ({
      '@type': 'HowToStep',
      position: s.step,
      name: s.title,
      text: s.description,
    })),
  };

  // BreadcrumbList for SEO
  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://welpenschule-schwechat.at' },
      { '@type': 'ListItem', position: 2, name: 'Mobiles Hundetraining', item: 'https://welpenschule-schwechat.at/mobiles-hundetraining' },
      { '@type': 'ListItem', position: 3, name: data.name, item: `https://welpenschule-schwechat.at/mobiles-hundetraining/${data.slug}` },
    ],
  };

  return (
    <div className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(data)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      {/* ============== HERO ============== */}
      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt={`Welpe beim mobilen Hundetraining — Hundeschule ${data.name}`}
          fill
          sizes="100vw"
          className="object-cover absolute inset-0 z-0 brightness-[0.55]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-ink-950/40 to-background z-0" />
        <div className="absolute inset-0 wk-grain opacity-50 z-0" />
        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-4xl">
            {/* Sichtbare Breadcrumbs (textgleich zur BreadcrumbList im Schema) */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-cream/70">
                <li>
                  <Link href="/" className="hover:text-cream transition-colors">Startseite</Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                  <Link href="/mobiles-hundetraining" className="hover:text-cream transition-colors">
                    Mobiles Hundetraining
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="font-semibold text-cream">{data.name}</li>
              </ol>
            </nav>

            <span className="wk-eyebrow !bg-cream/15 !border-cream/25 !text-cream backdrop-blur mb-7">
              <MapPin className="w-3 h-3" /> Mobiles Hundetraining
            </span>
            <h1 className="wk-display text-[clamp(2.5rem,7vw,5.5rem)] text-cream">
              Hundeschule
              <br />
              <span className="wk-text-gradient">{data.name}</span>
              <span className="text-brand-400">.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-cream/85 max-w-2xl leading-relaxed">
              {data.heroSubtitle}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/kontakt?service=mobiles-training-${data.slug}`}
                className="wk-btn-primary inline-flex items-center justify-center gap-2 px-7 h-13 rounded-full font-semibold"
              >
                Jetzt mobiles Training anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+436643903673"
                className="inline-flex items-center justify-center gap-2 px-6 h-13 rounded-full bg-cream/10 backdrop-blur border border-cream/30 text-cream hover:bg-cream/20 transition-all font-semibold"
              >
                <Phone className="w-4 h-4" /> +43 664 3903673
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <GoogleBadge variant="dark" />
              <span className="inline-flex items-center gap-2 text-xs text-cream/80">
                <HomeIcon className="w-4 h-4 text-brand-300" /> Training bei dir zuhause in {data.name}
              </span>
              <span className="inline-flex items-center gap-2 text-xs text-cream/80">
                <Car className="w-4 h-4 text-brand-300" /> Kostenlose Anfahrt
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TRUST STATS ============== */}
      <section className="relative -mt-12 z-20">
        <div className="container mx-auto px-6">
          <div className="wk-glass rounded-3xl px-8 py-8 md:px-12 md:py-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Award, value: '10+', label: 'Jahre Erfahrung' },
                { icon: Users, value: '1:1', label: 'Einzeltraining' },
                { icon: ThumbsUp, value: '5,0', label: 'Google Bewertung' },
                { icon: ShieldCheck, value: '100 %', label: 'Gewaltfrei' },
              ].map((s) => (
                <div key={s.label} className="text-center md:text-left flex md:items-center gap-3 md:gap-4 flex-col md:flex-row">
                  <div className="self-center md:self-auto inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-100 text-brand-700">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-ink-950 tracking-tight">{s.value}</div>
                    <div className="text-xs text-ink-500 mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== AEO-DIREKTANTWORT (Speakable, Featured-Snippet-optimiert) ============== */}
      <section className="container mx-auto px-6 pt-16">
        <div
          id="direktantwort"
          className="wk-card max-w-4xl mx-auto p-8 md:p-10 border-l-[5px] !border-l-brand-500 scroll-mt-24"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700 mb-4">
            Auf einen Blick — Hundeschule {data.name}
          </p>
          <p className="text-ink-800 text-base md:text-lg leading-relaxed">
            Die <strong>Hundeschule {data.name}</strong> der Hundeschule Willenskraft ist eine{' '}
            <strong>mobile Hundeschule</strong>: Hundetrainerin Jessica Pusch („Jessy") kommt zum Training
            direkt zu dir nach Hause nach {data.name} — die Anfahrt ist kostenlos. Mobile Erstberatung
            (90 Minuten): 95 €, Einzelstunde: 55 €, Welpen-Gruppenkurs (6 Einheiten, max. 4 Teams): 195 €
            am überdachten Trainingsplatz in Schwechat. Trainiert wird zu 100 % gewaltfrei mit positiver
            Verstärkung — für Hunde jeden Alters, vom Welpen bis zum Senior. Kontakt:{' '}
            <a href="tel:+436643903673" className="wk-link font-semibold">+43 664 3903673</a>.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <HomeIcon className="w-3.5 h-3.5 text-brand-600" /> Training bei dir zuhause
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-brand-600" /> Kostenlose Anfahrt
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-600" /> 100 % gewaltfrei
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ThumbsUp className="w-3.5 h-3.5 text-brand-600" /> 5,0 ★ auf Google
            </span>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
            <Link
              href={`/kontakt?service=mobiles-training-${data.slug}`}
              className="wk-btn-primary inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full font-semibold text-sm"
            >
              Jetzt Termin in {data.name} anfragen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 h-12 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:brightness-105 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp
            </a>
            <a
              href="tel:+436643903673"
              className="wk-btn-ghost inline-flex items-center justify-center gap-2 px-5 h-12 rounded-full font-semibold text-sm"
            >
              <Phone className="w-4 h-4" /> Anrufen
            </a>
          </div>
        </div>
      </section>

      {/* ============== INTRO ============== */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="wk-display text-3xl md:text-5xl text-ink-950 leading-[1.05]">{data.introTitle}</h2>
          <p className="mt-7 text-lg text-ink-600 leading-relaxed">{data.introText}</p>
        </div>
      </section>

      {/* ============== JESSY — DEINE TRAINERIN ============== */}
      <JessySection regionName={data.name} />

      {/* ============== DETAILS ============== */}
      <section className="bg-card wk-section">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <span className="wk-eyebrow">Vorteil</span>
                <h3 className="wk-display text-3xl md:text-5xl text-ink-950">{data.detailsTitle}</h3>
                <p className="text-lg text-ink-600 leading-relaxed">{data.detailsText}</p>
              </div>
              <div className="wk-rule" />
              <div className="space-y-4">
                <span className="wk-eyebrow">Zielgruppe</span>
                <h3 className="wk-display text-3xl md:text-5xl text-ink-950">{data.targetTitle}</h3>
                <p className="text-lg text-ink-600 leading-relaxed">{data.targetText}</p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-5 bg-brand-100 rounded-[2.5rem] rotate-3 opacity-50 blur-2xl" />
              <Image
                src={detailsImage}
                alt={`Welpe und Besitzerin beim mobilen Hundetraining zuhause in ${data.name}`}
                width={700}
                height={700}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="relative rounded-[2rem] shadow-[0_40px_80px_-32px_rgba(0,0,0,0.25)] object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROCESS STEPS ============== */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="wk-eyebrow mb-5">Ablauf</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">
              So startet dein mobiles Training in {data.name}.
            </h2>
            <p className="mt-6 text-lg text-ink-600">In drei einfachen Schritten zu einem entspannten Alltag mit deinem Hund.</p>
          </div>

          <ol className="grid md:grid-cols-3 gap-5 relative">
            {data.processSteps.map((step) => (
              <li key={step.step} className="wk-card p-8">
                <div className="flex items-baseline justify-between mb-5">
                  <span className="wk-display text-6xl text-brand-600 leading-none">0{step.step}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300">
                    Schritt {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-ink-950 mb-3 tracking-tight">{step.title}</h3>
                <p className="text-ink-600 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>

          <div className="text-center mt-12">
            <Link
              href={`/kontakt?service=mobiles-training-${data.slug}`}
              className="wk-btn-primary inline-flex items-center gap-2 px-7 h-12 rounded-full font-semibold"
            >
              Jetzt Erstberatung vereinbaren
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============== PILLARS ============== */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="wk-eyebrow mb-5">Vorteile</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">
              5 Gründe für mobiles Training
              <br />
              <span className="wk-text-gradient">in {data.name}.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.pillars.map((pillar, idx) => {
              const IconComp = pillarIcons[idx];
              return (
                <div key={pillar.title} className="wk-card p-7 group">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-cream transition-colors">
                      {IconComp && <IconComp className="w-5 h-5" />}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300">0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink-950 mb-3 tracking-tight">{pillar.title}</h3>
                  <p className="text-ink-600 leading-relaxed text-sm">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== PRICING ============== */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-14 text-center bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 text-ink-950 shadow-[0_40px_80px_-30px_rgba(186,135,30,0.6)]">
            <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-cream/30 blur-3xl" />
            <div className="absolute inset-0 wk-grain opacity-25" />
            <div className="relative z-10">
              <Gift className="w-10 h-10 text-cream mx-auto mb-4" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-950/80 mb-3">Erstberatung</p>
              <h3 className="wk-display text-3xl md:text-4xl mb-3">Mobile Erstberatung in {data.name}</h3>
              <p className="text-ink-950/80 mb-7">90 Minuten · individuell · bei dir zuhause</p>
              <p className="wk-display text-7xl md:text-8xl text-cream mb-6 tracking-tighter">95 €</p>
              <p className="text-ink-950/85 mb-8 max-w-xl mx-auto leading-relaxed">
                Wir analysieren die Situation bei dir zuhause in {data.name}, besprechen deine Ziele und erstellen
                einen individuellen Trainingsplan für dich und deinen Hund.
              </p>
              <Link
                href={`/kontakt?service=erstberatung-mobil-${data.slug}`}
                className="inline-flex items-center justify-center gap-2 bg-ink-950 text-cream rounded-full px-8 h-13 font-semibold hover:bg-ink-900 transition-colors"
              >
                Erstberatung buchen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TRAINING METHODS ============== */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="wk-eyebrow mb-5">Methode</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">
              Training mit Freude &amp; Verstand in {data.name}.
            </h2>
            <p className="mt-6 text-lg text-ink-600">
              Moderne, wissenschaftlich fundierte Methoden — gewaltfrei nach dem LIFE-Modell, mit positiver Verstärkung statt Druck und Zwang.
            </p>
          </div>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-brand-100 rounded-[2.5rem] -rotate-2 opacity-50 blur-xl" />
              <Image
                src="https://www.willenskraft.co.at/wp-content/uploads/2024/05/Hundeschule-Bad-Deutsch-Altenburg-Welpentraining-845x684.webp"
                alt={`Training mit positiver Verstärkung in ${data.name}`}
                width={700}
                height={700}
                className="relative rounded-[2rem] shadow-2xl object-cover aspect-square"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              {[
                { icon: CheckCircle2, title: 'Positive Verstärkung', text: 'Wir belohnen gewünschtes Verhalten statt Fehler zu bestrafen. Dadurch lernt dein Hund gerne und nachhaltig — mit Freude statt mit Angst. Wissenschaftlich belegt und tierschutzkonform.' },
                { icon: Users, title: 'Individuelle Betreuung', text: `Im mobilen 1:1-Training in ${data.name} geht es nur um dich und deinen Hund. Wir passen Tempo, Methoden und Übungen genau auf eure Situation an — ohne Gruppenzwang.` },
                { icon: ShieldCheck, title: 'Tierschutzkonform', text: 'Methoden entsprechen dem aktuellen Stand der Verhaltensforschung und den Tierschutzrichtlinien. Kein Zwang, keine Dominanztheorie, kein Stachelhals.' },
              ].map((m) => (
                <div key={m.title} className="rounded-3xl p-7 bg-cream-soft border border-ink-200/60">
                  <h3 className="flex items-center gap-3 text-xl font-semibold text-ink-950 mb-3 tracking-tight">
                    <m.icon className="w-5 h-5 text-brand-600" /> {m.title}
                  </h3>
                  <p className="text-ink-600 leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== CHALLENGES & SOLUTIONS ============== */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="wk-eyebrow mb-5">Herausforderungen → Lösungen</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">
              Dein Weg zum perfekten Mensch-Hund-Team in {data.name}.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="wk-card p-8 border-l-[3px] !border-l-rose-400">
              <h3 className="text-2xl font-semibold text-ink-950 mb-6">Herausforderungen</h3>
              <div className="space-y-5">
                {[
                  { title: 'Welpentraining', text: 'Junge Hunde brauchen klare Struktur. Die Sozialisationsphase ist entscheidend.' },
                  { title: 'Tierschutzhunde', text: 'Hunde mit schwieriger Vergangenheit brauchen geduldigen Vertrauensaufbau.' },
                  { title: 'Leinenführigkeit', text: 'Ziehen an der Leine macht Spaziergänge zum Stress.' },
                  { title: 'Rückruf', text: 'Ein zuverlässiger Rückruf ist lebenswichtig — viele Hunde versagen unter Reizen.' },
                  { title: 'Alltagstauglichkeit', text: 'Souveränes Verhalten von der Tierarztpraxis bis zum Café.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-rose-400 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ink-950 mb-1">{item.title}</h4>
                      <p className="text-ink-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="wk-card p-8 border-l-[3px] !border-l-emerald-500">
              <h3 className="text-2xl font-semibold text-ink-950 mb-6">Unsere Lösungen</h3>
              <div className="space-y-5">
                {[
                  { title: 'Welpenschule', text: 'Spielerisches Lernen in Kleingruppen mit max. 4 Teams.' },
                  { title: 'Einzeltraining', text: 'Individuell zugeschnittene Sessions für deine Situation.' },
                  { title: 'Leinenführigkeitstraining', text: 'Positive Verstärkung statt Korrektur — entspannte Spaziergänge.' },
                  { title: 'Rückruftraining', text: 'Schrittweiser Aufbau mit steigender Ablenkung.' },
                  { title: 'Alltagstraining', text: 'Praxisübungen in realen Lebenssituationen.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-ink-950 mb-1">{item.title}</h4>
                      <p className="text-ink-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-block wk-card px-8 py-7 max-w-xl">
              <h3 className="text-xl font-semibold text-ink-950 mb-3">Bereit für die Veränderung in {data.name}?</h3>
              <Link
                href={`/kontakt?service=mobiles-training-${data.slug}`}
                className="wk-btn-primary inline-flex items-center gap-2 px-6 h-12 rounded-full font-semibold mt-2"
              >
                Jetzt Training anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== NEW SECTION 1: TRAINING KNOWLEDGE BASE (GEO/AI optimized) ============== */}
      <section className="wk-section bg-ink-950 text-cream relative overflow-hidden">
        <div className="absolute inset-0 wk-mesh-dark" />
        <div className="absolute inset-0 wk-grain opacity-30" />
        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 text-[10px] font-bold uppercase tracking-[0.18em]">
                <BookOpen className="w-3 h-3" /> Trainings-Wissen für {data.name}
              </div>
              <h2 className="wk-display text-4xl md:text-5xl mt-6 text-cream">
                Hundetraining-Fakten,
                <br />
                <span className="wk-text-gradient">die jeder Hundehalter kennen sollte.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pl-8 lg:border-l border-ink-800">
              <p className="text-lg text-ink-300 leading-relaxed">
                Diese Wissens­basis enthält die wichtigsten verhaltens­biologischen Fakten, die wir im
                mobilen Training in {data.name} immer wieder erklären. Faktenbasiert, wissenschaftlich
                fundiert und sofort anwendbar.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {trainingKnowledgeBase(data.name).map((item) => (
              <article
                key={item.question}
                className="group rounded-3xl p-7 bg-ink-900/80 border border-ink-800 hover:border-brand-500/40 transition-colors backdrop-blur"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/15 text-brand-400 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-cream leading-tight">{item.question}</h3>
                </div>
                <p className="text-ink-300 leading-relaxed text-sm">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FACHWISSEN: Studien mit lokalem Bezug + Quellenlinks ============== */}
      {fachwissen && (
        <section id="fachwissen" className="wk-section bg-card scroll-mt-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="wk-eyebrow mb-5">
                <Microscope className="w-3 h-3" /> Fachwissen für {data.name}
              </span>
              <h2 className="wk-display text-4xl md:text-5xl text-ink-950">
                Was die Forschung
                <br />
                <span className="wk-text-gradient">für euer Training in {data.name} bedeutet.</span>
              </h2>
              <p className="mt-6 text-lg text-ink-600 leading-relaxed">{fachwissen.intro}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
              {fachwissen.items.map((item) => {
                const study = studies[item.studyId];
                if (!study) return null;
                return (
                  <article key={study.id} className="wk-card p-7 flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 text-brand-800 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em]">
                        <Microscope className="w-3 h-3" /> Studie {study.year}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-300">
                        Peer-Review
                      </span>
                    </div>
                    <p className="text-ink-700 leading-relaxed text-sm mb-5">{study.finding}</p>
                    <div className="rounded-2xl bg-cream-soft border border-ink-200/60 p-4 mb-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-700 mb-1.5">
                        Für euer Training in {data.name}
                      </p>
                      <p className="text-ink-700 leading-relaxed text-sm">{item.localTake}</p>
                    </div>
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto group inline-flex items-start gap-2 text-xs text-ink-500 hover:text-brand-700 transition-colors"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-brand-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>
                        <span className="font-semibold text-ink-700 group-hover:text-brand-800 transition-colors">{study.short}</span>
                        {' — '}
                        <em>{study.journal}</em>. Zur Originalstudie →
                      </span>
                    </a>
                  </article>
                );
              })}
            </div>

            <p className="mt-8 text-center text-xs text-ink-400 max-w-2xl mx-auto">
              Alle zitierten Arbeiten sind peer-reviewte Studien aus wissenschaftlichen Fachjournalen.
              Unsere Trainingsmethoden bei Willenskraft folgen diesem Stand der Verhaltensforschung.
            </p>
          </div>
        </section>
      )}

      {/* ============== CTA: WISSENSCHAFTLICH FUNDIERT ============== */}
      <CtaBanner
        regionName={data.name}
        title={`Wissenschaftlich fundiert trainieren — auch in ${data.name}.`}
        text="Erstberatung 95 € · Einzelstunde 55 € · Welpenkurs 195 €. Schreib Jessy einfach, was euch beschäftigt — sie meldet sich innerhalb von 24 Stunden an Werktagen."
      />

      {/* ============== FAQ ============== */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <span className="wk-eyebrow mb-5">FAQ {data.name}</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">
              Häufige Fragen aus {data.name}.
            </h2>
            <p className="mt-6 text-lg text-ink-600">Die wichtigsten Antworten zum mobilen Training in {data.name} und Umgebung.</p>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {data.faqs.map((faq, idx) => (
              <Accordion.Item key={idx} value={`faq-${idx}`} className="wk-card !p-0 overflow-hidden">
                <Accordion.Trigger className="flex w-full items-center justify-between p-6 sm:p-7 font-semibold text-base sm:text-lg text-ink-950 hover:text-brand-700 transition-colors group text-left">
                  <span className="pr-4">{faq.question}</span>
                  <div className="bg-cream-soft rounded-full p-2 group-hover:bg-brand-100 transition-colors shrink-0">
                    <ChevronDown className="h-5 w-5 text-ink-400 group-hover:text-brand-700 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="px-6 sm:px-7 pb-7 text-ink-600 leading-relaxed text-base data-[state=open]:animate-in data-[state=open]:fade-in">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* ============== WILLENSKRAFT BRAND ============== */}
      <WillenskraftSection content={willenskraftConfig} />

      {/* ============== YouTube Shorts ============== */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="wk-eyebrow mb-5">Trainings-Shorts</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Echte Momente aus dem Training.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-10 justify-center max-w-3xl mx-auto">
            {['e-V0mN-gP-I', '-ORnMT0oMHk', 'ptXxKbu4XPc', 'HmUmOI8bmAM'].map((id) => (
              <div key={id} className="flex justify-center">
                <iframe
                  width="100%"
                  className="max-w-[320px] aspect-[9/16] rounded-[2rem] shadow-xl border border-ink-200"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Hundetraining Short — Hundeschule Willenskraft"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== REGION DEEP DIVE ============== */}
      <section className="wk-section relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-100/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="wk-eyebrow mb-5">
              <MapPin className="w-3 h-3" /> Deine Region
            </span>
            <h2 className="wk-display text-4xl md:text-5xl lg:text-6xl text-ink-950 leading-[1.05]">
              {data.regionSectionTitle}
            </h2>
            <p className="mt-7 text-lg text-ink-600 leading-relaxed max-w-3xl mx-auto">
              {data.regionSectionIntro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {data.regionHighlights.map((highlight) => {
              const iconMap: Record<string, React.ReactNode> = {
                river:    <Waves className="w-5 h-5" />,
                forest:   <TreePine className="w-5 h-5" />,
                field:    <Trees className="w-5 h-5" />,
                mountain: <Mountain className="w-5 h-5" />,
                city:     <Building2 className="w-5 h-5" />,
                park:     <TreePine className="w-5 h-5" />,
                historic: <Landmark className="w-5 h-5" />,
              };
              return (
                <div key={highlight.title} className="wk-card p-7 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-cream transition-colors">
                    {iconMap[highlight.icon] || <MapPin className="w-5 h-5" />}
                  </div>
                  <h3 className="text-lg font-semibold text-ink-950 mb-3 tracking-tight">{highlight.title}</h3>
                  <p className="text-ink-600 leading-relaxed text-sm">{highlight.description}</p>
                </div>
              );
            })}
          </div>

          {/* Trainingsorte-Tabelle */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <h3 className="wk-display text-3xl md:text-4xl text-ink-950 mb-3">Trainingsorte in und um {data.name}</h3>
              <p className="text-ink-600">Alle Trainings­möglichkeiten auf einen Blick — mit Entfernung und passendem Training.</p>
            </div>

            <div className="hidden lg:block wk-card !p-0 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-ink-950 text-brand-300">
                    <th className="px-7 py-5 text-left text-[10px] font-bold uppercase tracking-[0.18em]">Trainingsort</th>
                    <th className="px-7 py-5 text-left text-[10px] font-bold uppercase tracking-[0.18em]">Entfernung</th>
                    <th className="px-7 py-5 text-left text-[10px] font-bold uppercase tracking-[0.18em]">Besonderheit</th>
                    <th className="px-7 py-5 text-left text-[10px] font-bold uppercase tracking-[0.18em]">Trainingsart</th>
                  </tr>
                </thead>
                <tbody>
                  {data.regionTableRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-ink-200 hover:bg-brand-50/40 transition-colors ${idx % 2 === 0 ? 'bg-card' : 'bg-cream-soft/60'}`}
                    >
                      <td className="px-7 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                            <MapPin className="w-4 h-4 text-brand-700" />
                          </div>
                          <span className="font-semibold text-ink-950">{row.trainingsort}</span>
                        </div>
                      </td>
                      <td className="px-7 py-5">
                        <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-xs">
                          <Clock className="w-3 h-3" /> {row.entfernung}
                        </span>
                      </td>
                      <td className="px-7 py-5 text-ink-700 text-sm">{row.besonderheit}</td>
                      <td className="px-7 py-5 text-ink-600 text-sm">{row.trainingsart}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:hidden space-y-4">
              {data.regionTableRows.map((row, idx) => (
                <div key={idx} className="wk-card p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink-950 text-base">{row.trainingsort}</h4>
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full text-xs mt-1">
                        <Clock className="w-3 h-3" />
                        {row.entfernung}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-[10px] font-bold text-ink-400 uppercase tracking-wider">Besonderheit</span>
                      <p className="text-ink-700 text-sm">{row.besonderheit}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-ink-400 uppercase tracking-wider">Trainingsart</span>
                      <p className="text-ink-600 text-sm">{row.trainingsart}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] p-10 lg:p-14 text-center bg-gradient-to-br from-ink-950 to-ink-800 text-cream shadow-2xl">
            <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-brand-500 blur-[100px] opacity-30" />
            <div className="absolute inset-0 wk-grain opacity-25" />
            <h3 className="relative wk-display text-2xl lg:text-4xl mb-4">{data.regionCtaText}</h3>
            <p className="relative text-ink-300 mb-8 max-w-2xl mx-auto">
              Ganz gleich ob Welpe oder erwachsener Hund — unser Training in {data.name} passt sich euch an.
            </p>
            <Link
              href={`/kontakt?service=mobiles-training-${data.slug}`}
              className="relative wk-btn-primary inline-flex items-center gap-2 px-7 h-13 rounded-full font-semibold"
            >
              Jetzt Termin in {data.name} vereinbaren
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============== NEW SECTION 2: GEO LOCAL FACTS / CHEAT-SHEET ============== */}
      <section className="wk-section bg-card relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="wk-eyebrow mb-5">
              <Compass className="w-3 h-3" /> Region-Steckbrief {data.name}
            </span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">
              {data.name} auf einen Blick.
            </h2>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              Geo­daten, Einwohnerinformationen und Trainings­fakten — kompakt und für Suchmaschinen,
              KI-Crawler und Hundehalter optimiert.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Linke Spalte: Lokale Beschreibung */}
            <div className="md:col-span-7 wk-card p-8 lg:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700 mb-4">Über {data.name}</p>
              <p className="text-ink-700 leading-relaxed text-base mb-7">
                {data.localDescription}
              </p>
              <h4 className="text-sm font-bold text-ink-950 uppercase tracking-wider mb-4">
                Was {data.name} für Hundehalter besonders macht
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {data.localFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-600 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rechte Spalte: Datentafel — bewusst flach für AI Scraper */}
            <div className="md:col-span-5 space-y-4">
              <div className="wk-card p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700 mb-4">Quick Facts</p>
                <dl className="space-y-3 text-sm">
                  <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-ink-200/70">
                    <dt className="text-ink-500">Region</dt>
                    <dd className="font-semibold text-ink-950 text-right">{data.name}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-ink-200/70">
                    <dt className="text-ink-500">Anfahrt ab Schwechat</dt>
                    <dd className="font-semibold text-ink-950 text-right">
                      {data.regionTableRows.find((r) => r.trainingsort.toLowerCase().includes('schwechat'))?.entfernung || '15–20 Min.'}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-ink-200/70">
                    <dt className="text-ink-500">Trainingsangebot</dt>
                    <dd className="font-semibold text-ink-950 text-right">Mobil &amp; 1:1</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-ink-200/70">
                    <dt className="text-ink-500">Erstberatung</dt>
                    <dd className="font-semibold text-ink-950 text-right">95 € · 90 Min.</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-ink-200/70">
                    <dt className="text-ink-500">Anfahrt-Kosten</dt>
                    <dd className="font-semibold text-emerald-700 text-right">Kostenlos</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-ink-200/70">
                    <dt className="text-ink-500">Trainerin</dt>
                    <dd className="font-semibold text-ink-950 text-right">Jessica Pusch</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-ink-500">Methode</dt>
                    <dd className="font-semibold text-ink-950 text-right">Gewaltfrei &amp; positiv</dd>
                  </div>
                </dl>
              </div>

              <div className="wk-card p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700 mb-4">Saisonale Trainingstipps</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2.5">
                    <Sun className="w-4 h-4 mt-0.5 text-brand-600 shrink-0" />
                    <span className="text-ink-700">
                      <strong className="text-ink-950">Sommer in {data.name}:</strong> Training früh morgens oder abends, Asphalt­temperatur prüfen (Handrücken-Test).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Snowflake className="w-4 h-4 mt-0.5 text-brand-600 shrink-0" />
                    <span className="text-ink-700">
                      <strong className="text-ink-950">Winter:</strong> Pfoten nach Spaziergängen kontrollieren, Streusalz abwaschen, Indoor-Tricktraining nutzen.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 mt-0.5 text-brand-600 shrink-0" />
                    <span className="text-ink-700">
                      <strong className="text-ink-950">Frühling:</strong> Sozialisierungs­fenster nutzen, neue Reize dosiert einführen.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 mt-0.5 text-brand-600 shrink-0" />
                    <span className="text-ink-700">
                      <strong className="text-ink-950">Herbst:</strong> Ideale Trainingszeit – kühle Temperaturen, weniger Insekten, optimaler Fokus.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== NEARBY LOCATIONS ============== */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="wk-eyebrow mb-5">In deiner Nähe</span>
            <h2 className="wk-display text-3xl md:text-4xl text-ink-950">Auch in der Region: Mobiles Hundetraining.</h2>
            <p className="mt-5 text-lg text-ink-600">Wir bieten mobiles Hundetraining in der gesamten Region an. Finde den nächsten Standort.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            <Link href="/mobiles-hundetraining" className="block">
              <div className="wk-card p-4 flex items-center justify-center gap-2 group">
                <MapPin className="w-4 h-4 text-brand-600" />
                <span className="font-semibold text-ink-900 text-sm">Schwechat</span>
              </div>
            </Link>
            {data.nearbyLocations.map((loc) => (
              <Link key={loc.slug} href={`/mobiles-hundetraining/${loc.slug}`} className="block">
                <div className="wk-card p-4 flex items-center justify-center gap-2 group">
                  <MapPin className="w-4 h-4 text-ink-400 group-hover:text-brand-600 transition-colors" />
                  <span className="font-semibold text-ink-900 text-sm">{loc.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CONTACT ============== */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14 bg-gradient-to-br from-ink-950 to-ink-800 text-cream shadow-2xl">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-500 blur-[120px] opacity-25" />
            <div className="absolute inset-0 wk-grain opacity-25" />
            <div className="relative grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-4 relative">
                <div className="absolute inset-0 bg-brand-500 rounded-full blur-3xl opacity-30 -translate-y-2" />
                <Image
                  src={profileImage}
                  alt={`Ing. Jessica Pusch, mobile Hundetrainerin der Hundeschule Willenskraft in ${data.name}`}
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 60vw, 200px"
                  className="rounded-full mx-auto object-cover aspect-square relative z-10 border-4 border-ink-800 shadow-2xl"
                />
              </div>
              <div className="md:col-span-8 text-center md:text-left">
                <h2 className="wk-display text-3xl sm:text-5xl text-cream mb-4">{data.contactTitle}</h2>
                <p className="text-lg text-ink-300 mb-7 leading-relaxed">{data.contactText}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Link
                    href={`/kontakt?service=mobiles-training-${data.slug}`}
                    className="wk-btn-primary inline-flex items-center justify-center gap-2 px-7 h-13 rounded-full font-semibold"
                  >
                    Jetzt anfragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+436643903673"
                    className="inline-flex items-center justify-center gap-2 px-6 h-13 rounded-full bg-ink-900/60 border border-ink-700 hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-300 text-cream font-semibold transition-all"
                  >
                    <Phone className="w-4 h-4" /> +43 664 3903673
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <section id="bewertungen" className="wk-section scroll-mt-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="wk-eyebrow mb-5">Stimmen</span>
            <h2 className="wk-display text-3xl md:text-5xl text-ink-950">Was unsere Kund:innen sagen.</h2>
          </div>
          <div className="wk-card p-6 sm:p-10">
            <Reviews />
          </div>
        </div>
      </section>

      {/* ============== BACK ============== */}
      <section className="container mx-auto px-6 pb-20">
        <Link
          href="/mobiles-hundetraining"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-brand-700 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Zurück zur Übersicht Mobiles Hundetraining
        </Link>
      </section>
    </div>
  );
}
