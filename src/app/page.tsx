import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Users,
  Zap,
  Heart,
  Gift,
  ChevronDown,
  CheckCircle2,
  Award,
  ThumbsUp,
  ShieldCheck,
  GraduationCap,
  Microscope,
  CalendarDays,
  Sparkles,
  ArrowRight,
  Phone,
  Brain,
  Quote,
} from 'lucide-react';
import Reviews from '@/components/Reviews';
import WillenskraftSection from '@/components/WillenskraftSection';
import * as Accordion from '@radix-ui/react-accordion';

export const metadata: Metadata = {
  title: 'Welpenschule Schwechat – gewaltfrei & mobil | Willenskraft',
  description:
    'Welpenschule Schwechat ✓ gewaltfrei & ganzheitlich ✓ max. 4 Teams ✓ 6 Einheiten ab 195€ ✓ Welpen bis 5 Monate. Tel: +43 664 3903673',
  alternates: {
    canonical: 'https://welpenschule-schwechat.at',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ab wann ist die Welpenschule sinnvoll?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der ideale Zeitpunkt ist so früh wie möglich, typischerweise ab der 8. Lebenswoche, kurz nachdem der Welpe eingezogen ist. Die sensible Phase der Sozialisierung endet etwa mit der 16. Woche. In dieser Zeit ist es entscheidend, positive Erfahrungen mit Artgenossen und Umweltreizen zu sammeln. Voraussetzung ist die erste Grundimmunisierung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet die Welpenschule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unser Welpen-Gruppenkurs umfasst 6 Trainingseinheiten zu je einer Stunde und kostet 195€. Dieser Preis beinhaltet praktisches Training, theoretische Grundlagen und individuelle Betreuung in Kleingruppen. Wir bieten auch Einzelstunden für Welpeneltern zu einem Sonderpreis von 55€ an.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert ein Welpenkurs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein Kurs erstreckt sich über 6 Wochen mit einer wöchentlichen Einheit von 60 Minuten. Das ist ideal, um Bindung und Grundsignale aufzubauen, ohne den Hund zu überfordern. Danach kannst du selbstbewusst weiter trainieren oder einen Junghundekurs besuchen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was lernt mein Welpe in der Hundeschule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dein Hund lernt weit mehr als Grundkommandos: Sozialisierung mit Artgenossen, Rückruf, Gehen an der lockeren Leine via positiver Verstärkung und Medical Training. Du als Halter lernst, die Körpersprache deines Welpen zu deuten und souverän aufzutreten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viele Hunde sind in einer Gruppe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir trainieren in Kleingruppen von maximal 4 Mensch-Hund-Teams. So erhält jedes Team individuelle Aufmerksamkeit und die Welpen werden sorgfältig nach Größe und Temperament zusammengestellt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist die Welpenschule auch für ängstliche Hunde geeignet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, absolut. Unsere gewaltfreien Methoden basieren auf positiver Verstärkung, die besonders für sensible und ängstliche Welpen ideal ist. Wir gehen in kleinen Schritten vor und bauen das Vertrauen des Hundes schrittweise auf. Bei Bedarf empfehlen wir auch Einzelstunden für einen optimalen Start.',
      },
    },
  ],
};

// HowTo schema for the 6-week roadmap — perfect for AI extraction
const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Welpentraining in 6 Wochen – Was dein Welpe in der Welpenschule Schwechat lernt',
  description:
    'Strukturierter 6-Wochen-Plan unseres Welpenkurses: Sozialisierung, Grundsignale, Leinenführigkeit, Medical Training und mehr.',
  totalTime: 'P6W',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'EUR', value: '195' },
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Woche 1 – Ankommen & Bindung', text: 'Kennenlernen der Trainingsumgebung, erste Begegnungen, Aufbau von Aufmerksamkeit, Markersignal etablieren, Namensreaktion.' },
    { '@type': 'HowToStep', position: 2, name: 'Woche 2 – Grundsignale & Sozialisierung', text: 'Sitz und Platz mit positiver Verstärkung, kontrollierte Welpenkontakte, Wahrnehmung der Körpersprache.' },
    { '@type': 'HowToStep', position: 3, name: 'Woche 3 – Leinenführigkeit & Rückruf', text: 'Lockere Leine im Fokus, Rückrufaufbau mit Doppelpfiff oder Wortsignal, kurze Distanzen mit hoher Erfolgsquote.' },
    { '@type': 'HowToStep', position: 4, name: 'Woche 4 – Umweltreize & Impulskontrolle', text: 'Training mit Ablenkung, Frust-Toleranz aufbauen, Bleib-Signal, Begegnungen mit Joggern und Radfahrern.' },
    { '@type': 'HowToStep', position: 5, name: 'Woche 5 – Medical Training & Alltag', text: 'Pfoten anschauen, Maul öffnen, Bürsten, Geräusche-Habituation, erste Tierarzt-Vorbereitung.' },
    { '@type': 'HowToStep', position: 6, name: 'Woche 6 – Festigen & Transfer', text: 'Alle Signale unter realen Alltagsbedingungen, individuelle Themen abrunden, Plan für die nächsten 6 Monate.' },
  ],
};

const willenskraftPillars = [
  { icon: Heart,        title: 'Grundbedürfnisse', description: 'Futter, Schlaf & Sicherheit als Basis. Wir zeigen dir, wie du Wohlbefinden für deinen Welpen sicherstellst.' },
  { icon: Zap,          title: 'Kommunikation',    description: 'Körpersprache, Mimik und Stimme verstehen. Lerne die Sprache deines Welpen und baue Vertrauen auf.' },
  { icon: Users,        title: 'Sozialisierung',   description: 'Sicher im Umgang mit Artgenossen und Menschen – wichtige Erlebnisse in der Prägungsphase.' },
  { icon: CheckCircle2, title: 'Signalaufbau',     description: 'Sitz, Platz, Bleib & Rückruf mit positiver Verstärkung – nachhaltig und ohne Zwang.' },
  { icon: Star,         title: 'Spiel & Bindung',  description: 'Kleine Gruppen, große Wirkung. Spieleinheiten und Freilauf festigen Sozialkompetenz und Bindung.' },
];

const sciencePoints = [
  {
    title: 'Sensible Phase',
    fact: '8.–16. Lebenswoche',
    text: 'In diesem Zeitfenster werden neue Reize besonders schnell und nachhaltig verknüpft. Verpasste Sozialisierung lässt sich später nur mit Mehraufwand kompensieren.',
    source: 'Verhaltensbiologie nach Scott & Fuller, ergänzt durch aktuelle ÖKV-Empfehlungen',
  },
  {
    title: 'Positive Verstärkung',
    fact: 'bis zu 35 % schnellerer Lernerfolg',
    text: 'Studien zeigen, dass auf Belohnung basiertes Training den Lernerfolg verbessert und das Stressniveau im Vergleich zu aversiven Methoden deutlich senkt.',
    source: 'Hiby et al. (2004) · China et al. (2020)',
  },
  {
    title: 'Kleingruppen',
    fact: 'max. 4 Mensch-Hund-Teams',
    text: 'Bei mehr als vier Welpen sinkt die individuelle Trainingszeit pro Team auf unter 10 Minuten – wir halten die Gruppen bewusst klein für echten Lernfortschritt.',
    source: 'Trainings­standards ÖKV & IBH (Internationaler Berufsverband der Hundetrainer)',
  },
  {
    title: 'Tierschutzkonform',
    fact: '100 % gewaltfrei',
    text: 'Unsere Methoden entsprechen § 5 Tierschutzgesetz Österreich (BGBl. I Nr. 118/2004) und schließen Stachelhalsbänder, Würger und Schreckmittel aus.',
    source: 'Tierschutzgesetz Österreich · IBH Ethikrichtlinien',
  },
];

const roadmap = [
  { week: 1, title: 'Ankommen & Bindung',           bullets: ['Markersignal etablieren', 'Namensreaktion aufbauen', 'Sicherheit im Trainingsraum'] },
  { week: 2, title: 'Grundsignale & Sozialisierung', bullets: ['Sitz + Platz positiv aufbauen', 'Körpersprache anderer Welpen lesen', 'Erste Hundekontakte dosiert'] },
  { week: 3, title: 'Leinenführigkeit & Rückruf',    bullets: ['Lockere Leine im Schritt', 'Rückruf-Wortsignal', 'Distanz schrittweise steigern'] },
  { week: 4, title: 'Umwelt & Impulskontrolle',      bullets: ['Reize: Jogger, Radfahrer, Kinder', 'Bleib mit kurzer Dauer', 'Frust-Toleranz aufbauen'] },
  { week: 5, title: 'Medical Training & Alltag',     bullets: ['Pfoten, Maul, Ohren', 'Bürsten & Berührung', 'Geräusche-Habituation'] },
  { week: 6, title: 'Festigen & Transfer',           bullets: ['Alle Signale im Alltag', 'Individueller Folgeplan', 'Junghund-Ausblick'] },
];

export default function Home() {
  return (
    <div className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 wk-mesh" />
        <Image
          src="/Welpenschule-Schwechat, Welpenkurs Hero.webp"
          alt="Glücklicher Welpe auf einer Wiese in Schwechat – Welpenschule Willenskraft"
          fill
          className="object-cover absolute inset-0 z-0 opacity-[0.55] mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/40 to-background z-0" />
        <div className="absolute inset-0 wk-grain opacity-60 z-0" />

        <div className="relative z-10 container mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-5xl">
            <span className="wk-eyebrow mb-8">Schwechat · Wien · Niederösterreich</span>

            <h1 className="wk-display text-[clamp(2.25rem,6vw,5.25rem)] text-ink-950">
              Welpenschule Schwechat —
              <br />
              <span className="wk-text-gradient">Dein Welpe lernt die Sprache der Welt</span>
              <span className="text-brand-600">.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-ink-700 max-w-2xl leading-relaxed">
              Ganzheitliches & gewaltfreies Welpentraining in Schwechat und Umgebung.
              In 6 Wochen baust du mit deinem Welpen eine ruhige, klare Verbindung auf —
              wissenschaftlich fundiert, ohne Zwang, in Kleingruppen mit max. 4 Teams.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="wk-btn-primary inline-flex items-center justify-center gap-2 px-7 h-14 rounded-full text-base font-semibold"
              >
                Welpe anmelden
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+436643903673"
                className="wk-btn-ghost inline-flex items-center justify-center gap-2 px-7 h-14 rounded-full text-base font-semibold"
              >
                <Phone className="w-4 h-4" />
                +43 664 3903673
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-ink-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Welpen 8 Wochen – 5 Monate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>6 Einheiten · 195 €</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Max. 4 Teams pro Gruppe</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>100 % gewaltfrei</span>
              </div>
            </div>
          </div>
        </div>

        <button
          aria-label="Nach unten scrollen"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-500 text-[10px] font-bold uppercase tracking-[0.2em] z-10"
        >
          Entdecken
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </section>

      {/* ================= TRUST STATS — sleek bar ================= */}
      <section className="relative -mt-12 z-20">
        <div className="container mx-auto px-6">
          <div className="wk-glass rounded-3xl px-8 py-8 md:px-12 md:py-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Award, value: '10+', label: 'Jahre Erfahrung' },
                { icon: Users, value: 'Max. 4', label: 'Teams pro Gruppe' },
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

      {/* ================= INTRO ================= */}
      <section id="konzept" className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="wk-eyebrow mb-6">Willkommen</span>
          <h2 className="wk-display text-4xl md:text-5xl lg:text-6xl text-ink-950">
            Ein Welpe ist eingezogen —
            <br />
            <span className="wk-text-gradient">und plötzlich zählt jeder Tag.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-ink-600 leading-relaxed max-w-3xl mx-auto">
            Die ersten Wochen prägen deinen Hund auf Lebenszeit. In unserer Welpenschule lernst du,
            die Körpersprache deines Vierbeiners zu lesen, ihm Sicherheit zu geben und seine
            Sozialisierung gezielt zu lenken. Kein Druck. Keine Dominanztheorie. Nur Verbindung.
          </p>
        </div>
      </section>

      {/* ================= DETAILS - Image + Text ================= */}
      <section className="bg-card wk-section relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-6 bg-brand-100 rounded-[2.5rem] rotate-2 opacity-60 blur-2xl" />
              <div className="absolute -inset-2 border border-brand-300/40 rounded-[2rem] rotate-3" />
              <Image
                src="/Schwechat-Welpenschule Content.webp"
                alt="Welpen lernen Kommunikation in der Welpenschule Schwechat"
                width={700}
                height={875}
                className="relative rounded-[2rem] shadow-[0_40px_80px_-32px_rgba(0,0,0,0.25)] object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-4 wk-card !p-5 !rounded-2xl max-w-[200px] hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-500 text-brand-500" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-ink-700 leading-relaxed">„Pukka und ich waren die letzten 6 Wochen bei Jessy im Welpenkurs. Wir haben super viel geübt und gelernt."</p>
                <p className="text-[10px] text-ink-400 mt-2">— Victoria S. · Google-Rezension</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <span className="wk-eyebrow">Methode</span>
                <h3 className="wk-display text-3xl md:text-5xl text-ink-950">
                  Die Sprache deines Hundes verstehen.
                </h3>
                <p className="text-lg text-ink-600 leading-relaxed">
                  Hunde kommunizieren primär über Körper, Blick und Spannung — nicht über Worte. In unserer
                  Welpenschule lernst du, diese Signale präzise zu lesen. Das ist die Basis für tiefes Vertrauen
                  und eine unzertrennliche Bindung.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="wk-display text-3xl md:text-5xl text-ink-950">
                  Sozialisierung. Mit Plan.
                </h3>
                <p className="text-lg text-ink-600 leading-relaxed">
                  Dein Welpe trifft auf andere Hunde und Menschen in einer kontrollierten, sicheren
                  Umgebung. Wir dosieren bewusst — denn Überforderung in der Prägungsphase wirkt
                  oft jahrelang nach.
                </p>
              </div>

              <Link
                href="#kurse"
                className="inline-flex items-center gap-2 group text-base font-semibold text-ink-950"
              >
                <span className="wk-link">Entdecke unsere Kurse</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5 PILLARS ================= */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="wk-eyebrow mb-5">Unser Ansatz</span>
            <h2 className="wk-display text-4xl md:text-5xl lg:text-6xl text-ink-950">
              Die 5 Bausteine
              <br />
              <span className="wk-text-gradient">der Welpenschule.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              Ganzheitlich, gewaltfrei und individuell — die Säulen für einen erfolgreichen Start mit deinem Welpen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {willenskraftPillars.map((pillar, i) => (
              <div key={pillar.title} className="wk-card p-8 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-cream transition-colors">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-ink-950 mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-ink-600 leading-relaxed text-sm">{pillar.description}</p>
              </div>
            ))}

            {/* Sonderangebot */}
            <div className="sm:col-span-2 lg:col-span-1 relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 text-ink-950 shadow-[0_30px_60px_-20px_rgba(186,135,30,0.5)]">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-cream/30 blur-3xl" />
              <div className="absolute inset-0 wk-grain opacity-40" />
              <div className="relative z-10 flex flex-col h-full">
                <Gift className="w-8 h-8 text-cream mb-6" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-950/70 mb-2">Exklusiv</p>
                <h3 className="wk-display text-3xl mb-1">Private Einzelstunde</h3>
                <p className="text-7xl font-black text-cream mt-4 mb-1 tracking-tighter">55€</p>
                <p className="text-sm text-ink-950/80 mb-8 leading-snug">
                  Klärt spezifische Fragen und garantiert deinem Welpen den besten Start.
                </p>
                <Link
                  href="/kontakt?angebot=einzelstunde"
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-ink-950 text-cream rounded-full px-6 h-12 font-semibold text-sm hover:bg-ink-900 transition-colors"
                >
                  Jetzt sichern
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW SECTION 1: Wissenschaft & Methode ================= */}
      <section className="relative wk-section bg-ink-950 text-ink-100 overflow-hidden">
        <div className="absolute inset-0 wk-mesh-dark" />
        <div className="absolute inset-0 wk-grain opacity-30" />
        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 text-[10px] font-bold uppercase tracking-[0.18em]">
                <Microscope className="w-3 h-3" />
                Wissenschaft &amp; Methode
              </div>
              <h2 className="wk-display text-4xl md:text-5xl lg:text-6xl mt-6 text-cream">
                Was Verhaltens­biologen
                <br />
                <span className="wk-text-gradient">längst belegt haben.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pl-8 lg:border-l border-ink-800">
              <p className="text-lg text-ink-300 leading-relaxed">
                Wir trainieren nach dem Stand moderner Verhaltensforschung. Keine Mythen, keine Dominanztheorie,
                keine veralteten Methoden aus den 1970ern — sondern gewaltfreie, bedürfnisorientierte Arbeit,
                dosierte Sozialisierung und Tierschutzkonformität nach österreichischem Recht.
                Dabei orientieren wir uns am LIFE-Modell (Least Inhibitive, Functionally Effective) — am
                wenigsten einschränkend, funktional wirksam und mit echter Wahlfreiheit für deinen Hund.
              </p>
              <div className="mt-6 flex items-start gap-3 text-sm text-ink-400 italic border-l-2 border-brand-500/60 pl-4">
                <Quote className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <p>
                  „Hunde, die mit positiver Verstärkung trainiert werden, zeigen weniger Stresssymptome und
                  lernen Aufgaben schneller als Hunde, die mit aversiven Methoden konditioniert werden."
                  <span className="block not-italic text-ink-500 mt-2">— Hiby, Rooney &amp; Bradshaw, Animal Welfare 2004</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {sciencePoints.map((p) => (
              <article
                key={p.title}
                className="group relative rounded-3xl p-8 bg-ink-900/80 border border-ink-800 hover:border-brand-500/40 transition-colors backdrop-blur"
              >
                <div className="flex items-start justify-between mb-5">
                  <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-400">{p.title}</h3>
                  <Brain className="w-4 h-4 text-ink-600 group-hover:text-brand-400 transition-colors" />
                </div>
                <p className="wk-display text-3xl md:text-4xl text-cream mb-4">{p.fact}</p>
                <p className="text-ink-300 leading-relaxed mb-6">{p.text}</p>
                <p className="text-[11px] text-ink-500 border-t border-ink-800 pt-4">
                  <span className="font-bold uppercase tracking-wider text-ink-400">Quelle:</span> {p.source}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-ink-900/60 border border-ink-800">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 mb-1">Standards</p>
              <p className="text-cream font-medium">Tierschutzkonform · ÖKV-Empfehlungen · IBH Ethikrichtlinien · § 5 TSchG (AT)</p>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 wk-btn-primary px-6 h-12 rounded-full font-semibold text-sm"
            >
              Probestunde anfragen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= NEW SECTION 2: 6-Wochen-Roadmap ================= */}
      <section className="wk-section relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/60 to-transparent" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="wk-eyebrow mb-5">
              <CalendarDays className="w-3 h-3" /> 6-Wochen-Roadmap
            </span>
            <h2 className="wk-display text-4xl md:text-5xl lg:text-6xl text-ink-950">
              Was dein Welpe
              <br />
              <span className="wk-text-gradient">in 6 Wochen wirklich lernt.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              Jede Einheit baut auf der vorherigen auf. So wird aus einzelnen Übungen ein klarer
              roter Faden — vom ersten Markersignal bis zum souveränen Auftritt im Alltag.
            </p>
          </div>

          <ol className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {roadmap.map((w, i) => (
              <li key={w.week} className="wk-card p-7 relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">Woche</span>
                    <span className="wk-display text-5xl text-brand-600 leading-none">{w.week}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300">
                    {i === roadmap.length - 1 ? 'Finale' : `${i + 1} / ${roadmap.length}`}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-ink-950 mb-4 tracking-tight">{w.title}</h3>
                <ul className="space-y-2.5">
                  {w.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <p className="text-sm text-ink-500 mb-5">
              Kursdauer: <strong className="text-ink-700">6 Wochen</strong> · Einheit: <strong className="text-ink-700">60 Minuten</strong> · Investition: <strong className="text-ink-700">195 €</strong>
            </p>
            <Link href="#kurse" className="wk-btn-primary inline-flex items-center gap-2 px-7 h-12 rounded-full font-semibold">
              Termine ansehen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TRAINING METHODS ================= */}
      <section className="bg-card wk-section">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="wk-eyebrow mb-5">
              <Sparkles className="w-3 h-3" /> Lernen mit Freude
            </span>
            <h2 className="wk-display text-4xl md:text-5xl lg:text-6xl text-ink-950">
              Training mit Verstand &amp; Leichtigkeit.
            </h2>
            <p className="mt-6 text-lg text-ink-600">
              Wir setzen auf moderne, wissenschaftlich fundierte Methoden — Lernen mit Spaß, ganz ohne Zwang.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-brand-100 rounded-[2.5rem] -rotate-2 opacity-50 blur-xl" />
              <Image
                src="https://www.willenskraft.co.at/wp-content/uploads/2024/05/Hundeschule-Bad-Deutsch-Altenburg-Welpentraining-845x684.webp"
                alt="Gewaltfreies Welpentraining in der Welpenschule Schwechat"
                width={700}
                height={700}
                className="relative rounded-[2rem] shadow-2xl object-cover aspect-square"
              />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-7 space-y-5">
              {[
                { icon: CheckCircle2, color: 'brand', title: 'Positive Verstärkung', text: 'Wir konditionieren Sitz, Platz und Bleib mit Belohnung statt mit Druck. Lockere Leine und zuverlässiger Rückruf entstehen aus Vertrauen — nicht aus Angst.' },
                { icon: Users, color: 'ink', title: 'Kleine Gruppen', text: 'Maximal 4 Mensch-Hund-Teams. Welpen werden nach Größe und Temperament zusammengestellt — für faires, sicheres Lernen.' },
                { icon: ShieldCheck, color: 'brand', title: 'Tierschutzkonform', text: 'Stand der Verhaltens­forschung, IBH-Ethik, § 5 TSchG. Keine Stachelhalsbänder, keine Würger, keine Schreckmittel.' },
              ].map((m) => (
                <div key={m.title} className="rounded-3xl p-7 bg-cream-soft border border-ink-200/60">
                  <h3 className="flex items-center gap-3 text-xl font-semibold text-ink-950 mb-3 tracking-tight">
                    <m.icon className={`w-5 h-5 ${m.color === 'brand' ? 'text-brand-600' : 'text-ink-700'}`} />
                    {m.title}
                  </h3>
                  <p className="text-ink-600 leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= YouTube Video ================= */}
      <section className="wk-section bg-ink-950 text-cream relative overflow-hidden">
        <div className="absolute inset-0 wk-mesh-dark" />
        <div className="container mx-auto px-6 max-w-6xl relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="wk-eyebrow !bg-brand-500/15 !text-brand-300 !border-brand-500/30 mb-5">
              Expertinnen-Talk
            </span>
            <h2 className="wk-display text-4xl md:text-5xl text-cream">Ganzheitliche Erziehung im Gespräch.</h2>
            <p className="mt-6 text-lg text-ink-300">
              Bianca Willen und Martha Höhr über die gewaltfreie Philosophie hinter Willenskraft.
            </p>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] border border-ink-800 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/yyp4gCZdwK4?si=GsCgdrcyf1KDSXaH"
              title="Willenskraft – Ganzheitliche Welpenerziehung"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ================= MEDICAL TRAINING ================= */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="wk-eyebrow mb-5">Wichtig</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Medical Training für Welpen.</h2>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              Ein entspannter Tierarztbesuch ist kein Zufall. Wir bereiten deinen Welpen spielerisch auf
              Untersuchungen vor, bauen Vertrauen auf und reduzieren langfristig Stress für alle Beteiligten.
            </p>
          </div>
          <div className="wk-card p-8 sm:p-12">
            <h3 className="text-xl font-semibold text-ink-950 mb-7 tracking-tight pb-5 border-b border-ink-200">
              Schritt für Schritt Übungen
            </h3>
            <dl className="space-y-2">
              {[
                { t: 'Körper-Check',   d: 'Der Welpe lernt, sich überall entspannt anfassen zu lassen.', s: 'Kurze Einheiten, viel Lob und kleine Belohnungen.' },
                { t: 'Ohren & Augen',  d: 'Vorbereitung auf Untersuchungen und die Gabe von Medikamenten.', s: 'Sanfte Berührungen, niemals den Hund zwingen oder fixieren.' },
                { t: 'Pfotenpflege',   d: 'Krallen schneiden und Pfoten kontrollieren ohne Stress.', s: 'Paw-Target aufbauen und sehr kleinschrittig positiv verknüpfen.' },
                { t: 'Auf die Waage',  d: 'Der Hund lernt, ruhig auf der Waage zu stehen.', s: 'Mit „Plattform"-Signal und viel Ruhe trainieren.' },
              ].map((row) => (
                <div key={row.t} className="grid sm:grid-cols-3 gap-4 p-5 rounded-2xl hover:bg-cream-soft transition-colors">
                  <dt className="font-semibold text-ink-950 text-base">{row.t}</dt>
                  <dd className="sm:col-span-2 space-y-1.5">
                    <p className="text-ink-700 font-medium">{row.d}</p>
                    <p className="text-sm text-ink-500">{row.s}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ================= SHORTS ================= */}
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
                  className="max-w-[320px] h-[560px] rounded-[2rem] shadow-xl border border-ink-200"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Trainings-Short der Welpenschule Schwechat – Willenskraft"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="wk-eyebrow mb-5">FAQ</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Häufig gestellte Fragen.</h2>
            <p className="mt-6 text-lg text-ink-600">
              Die wichtigsten Antworten rund um den Start in der Welpenschule Schwechat.
            </p>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqJsonLd.mainEntity.map((faq, idx) => (
              <Accordion.Item
                key={idx}
                value={`faq-${idx}`}
                className="wk-card !p-0 overflow-hidden"
              >
                <Accordion.Trigger className="flex w-full items-center justify-between p-6 sm:p-7 font-semibold text-base sm:text-lg text-ink-950 hover:text-brand-700 transition-colors group text-left">
                  <span className="pr-4">{faq.name}</span>
                  <div className="bg-cream-soft rounded-full p-2 group-hover:bg-brand-100 transition-colors shrink-0">
                    <ChevronDown className="h-5 w-5 text-ink-400 group-hover:text-brand-700 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="px-6 sm:px-7 pb-7 text-ink-600 leading-relaxed text-base data-[state=open]:animate-in data-[state=open]:fade-in">
                  {faq.acceptedAnswer.text}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* ================= KURSE / KALENDER ================= */}
      <section id="kurse" className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <span className="wk-eyebrow mb-5">
              <CalendarDays className="w-3 h-3" /> Termine
            </span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Kurstermine &amp; Details.</h2>
            <p className="mt-6 text-lg text-ink-600">Finde den passenden Termin für dich und deinen Welpen.</p>
          </div>

          <div className="relative rounded-[2rem] p-10 mb-12 bg-gradient-to-br from-ink-950 to-ink-800 text-cream overflow-hidden">
            <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-brand-500 blur-3xl opacity-30" />
            <div className="absolute inset-0 wk-grain opacity-30" />
            <div className="relative z-10 text-center">
              <GraduationCap className="w-7 h-7 text-brand-400 mx-auto mb-4" />
              <h3 className="wk-display text-3xl md:text-4xl mb-6">Dein Welpen-Gruppenkurs.</h3>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="px-4 py-2 rounded-full bg-ink-900/60 border border-ink-700 text-sm">6 Einheiten · 60 Min.</span>
                <span className="px-4 py-2 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 font-bold text-sm">195 €</span>
                <span className="px-4 py-2 rounded-full bg-ink-900/60 border border-ink-700 text-sm">Max. 4 Teams</span>
              </div>
              <p className="mt-6 text-ink-400 text-sm">Jeden Monat startet ein neuer Kurs in Schwechat.</p>
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/kurse"
                  className="wk-btn-primary inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full font-semibold text-sm"
                >
                  Alle 5 Gruppenkurse entdecken
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-xs text-ink-400">
                  Welpenkurs · Junghundekurs · Begegnungstraining · Dummytraining · Medical Training
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] p-3 bg-cream-soft border border-ink-200">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=3ead296f16c217a222ffaf95ecb469b3f7e1cf83308d7051aec6590fd327167d%40group.calendar.google.com&ctz=Europe%2FVienna"
              style={{ border: 0, width: '100%', height: '600px' }}
              className="rounded-[1.75rem]"
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section id="bewertungen" className="wk-section scroll-mt-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="wk-eyebrow mb-5">Stimmen</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Was unsere Kund:innen sagen.</h2>
            <p className="mt-6 text-lg text-ink-600">Echte Erfahrungen von glücklichen Mensch-Hund-Teams.</p>
          </div>
          <div className="wk-card p-6 sm:p-10">
            <Reviews />
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] p-8 sm:p-16 bg-gradient-to-br from-ink-950 to-ink-800 text-cream shadow-2xl">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-500 blur-[120px] opacity-25" />
            <div className="absolute inset-0 wk-grain opacity-25" />

            <div className="relative grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-4 relative">
                <div className="absolute inset-0 bg-brand-500 rounded-full blur-3xl opacity-30 -translate-y-2" />
                <Image
                  src="https://www.willenskraft.co.at/wp-content/uploads/2025/06/Jessica-Pusch-Hundeschule-Wien-Niederoesterreich.webp"
                  alt="Ing. Jessica Pusch – deine Hundetrainerin der Welpenschule Schwechat"
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 60vw, 320px"
                  className="rounded-full mx-auto object-cover aspect-square relative z-10 border-4 border-ink-800 shadow-2xl"
                />
              </div>
              <div className="md:col-span-8 text-center md:text-left">
                <h2 className="wk-display text-3xl sm:text-5xl text-cream mb-5">
                  Bereit für den Start?
                </h2>
                <p className="text-lg text-ink-300 mb-8 leading-relaxed">
                  Melde dich und deinen Welpen jetzt zum ersten Kennenlernen in der{' '}
                  <span className="text-brand-300 font-semibold">Welpenschule Schwechat</span> an — oder buche{' '}
                  <Link href="/mobiles-hundetraining" className="text-brand-300 font-semibold underline-offset-2 hover:underline">
                    mobiles Training bei dir zuhause
                  </Link>
                  : vom Schwechater Umland bis in den gesamten Bezirk Mödling.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Link
                    href="/kontakt"
                    className="wk-btn-primary inline-flex items-center justify-center gap-2 px-7 h-13 rounded-full font-semibold text-base"
                  >
                    Zur Anmeldung
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+436643903673"
                    className="inline-flex items-center justify-center gap-2 px-6 h-13 rounded-full bg-ink-900/60 border border-ink-700 hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-300 text-cream font-semibold text-base transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    +43 664 3903673
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WillenskraftSection />
    </div>
  );
}
