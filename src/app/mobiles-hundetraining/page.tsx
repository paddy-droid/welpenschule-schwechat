import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  Star,
  Users,
  Zap,
  Heart,
  Gift,
  MapPin,
  Award,
  ThumbsUp,
  ShieldCheck,
  ChevronDown,
  Phone,
  ArrowRight,
  BookOpen,
  Clock,
  Activity,
  Sun,
  Snowflake,
  Sparkles,
  Compass,
} from 'lucide-react';
import Reviews from '@/components/Reviews';
import * as Accordion from '@radix-ui/react-accordion';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist mobiles Hundetraining?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beim mobilen Hundetraining kommt die Hundetrainerin zu dir nach Hause. Das Training findet in der gewohnten Umgebung deines Hundes statt – genau dort, wo die Herausforderungen im Alltag auftreten. Das macht das Training besonders effektiv und praxisnah.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet das mobile Hundetraining in Schwechat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse der Situation, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstunden buchst du flexibel nach Bedarf.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welchen Orten bietet ihr mobiles Hundetraining an?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir bieten mobiles Hundetraining in Schwechat und der gesamten Umgebung an: Wien-Simmering, Fischamend, Schwadorf, Ebenfurth, Gramatneusiedl, Götzendorf, Himberg, Bruck an der Leitha, Parndorf und vielen weiteren Orten in der Region.',
      },
    },
    {
      '@type': 'Question',
      name: 'Für welche Hunde ist das mobile Training geeignet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das mobile Training eignet sich für Hunde jeden Alters und jeder Rasse – vom Welpen bis zum Senior, vom Chihuahua bis zur Dogge. Besonders effektiv ist es bei Themen wie Leinenführigkeit, Rückruf, Trennungsangst, Angstverhalten und Sozialisierung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell sieht man Erfolge beim mobilen Training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Viele Halter berichten bereits nach der Erstberatung von deutlichen Verbesserungen. Grundlegende Verhaltensänderungen benötigen in der Regel 3-6 Sitzungen. Wir geben dir nach jeder Einheit konkrete Hausaufgaben mit, damit du zwischen den Terminen weiter üben kannst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Arbeitet ihr gewaltfrei?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, zu 100%. Alle unsere Methoden basieren auf positiver Verstärkung und entsprechen dem aktuellen Stand der Verhaltensforschung. Kein Zwang, keine Dominanztheorie, kein Stachelhals – nur faire und respektvolle Kommunikation mit deinem Hund.',
      },
    },
  ],
};

const trainingKnowledgeBase = [
  {
    question: 'Wie oft pro Woche sollte ich mit meinem Hund trainieren?',
    answer:
      'Optimal sind 3–5 kurze Einheiten pro Woche à 5–10 Minuten plus Alltagsübungen. Mehr ist nicht besser – Hunde lernen in kurzen, fokussierten Sessions deutlich nachhaltiger als in langen Trainingsblöcken.',
    icon: Clock,
  },
  {
    question: 'Wie lange dauert es, bis ein neues Signal sitzt?',
    answer:
      'Ein einzelnes Signal kann nach 50–100 sauberen Wiederholungen unter ablenkungsarmen Bedingungen abgerufen werden. Für Generalisierung braucht es deutlich mehr Wiederholungen unter wechselnden Bedingungen — typischerweise 4–8 Wochen.',
    icon: Activity,
  },
  {
    question: 'Welche Belohnung wirkt am besten?',
    answer:
      'Hochwertige Futterbelohnungen wirken bei den meisten Hunden am stärksten. Wichtig: Die Belohnung muss schnell (innerhalb 1 Sekunde) auf das gewünschte Verhalten folgen.',
    icon: Heart,
  },
  {
    question: 'Welche Trainingstemperaturen sind optimal?',
    answer:
      'Bei Hitze über 25 °C verlegen wir Einheiten in den Morgen oder Abend. Bei Kälte unter -5 °C verkürzen wir Draußensessions und arbeiten mehr im Haus. Asphalt im Sommer und Streusalz im Winter sind die häufigsten Problemquellen für Welpenpfoten.',
    icon: Sun,
  },
  {
    question: 'Ab welchem Alter darf mein Welpe Treppen steigen?',
    answer:
      'Bis zur 16. Lebenswoche sollten Welpen Treppen nicht regelmäßig selbstständig steigen, um Wachstumsfugen und Gelenke zu schonen. Tragen oder Tragehilfen sind ideal.',
    icon: BookOpen,
  },
  {
    question: 'Wie viel Schlaf braucht ein Welpe?',
    answer:
      'Welpen brauchen 18–22 Stunden Schlaf täglich. Schlafmangel ist eine häufige Ursache für Beißhemmungsprobleme, Übermüdung und scheinbar „aggressives" Verhalten.',
    icon: Snowflake,
  },
];

const mobileTrainingPillars = [
  { icon: Heart, title: 'Individuelles Training', description: 'Wir gehen gezielt auf deine Wünsche und die Bedürfnisse deines Hundes ein – für maximale Erfolge.' },
  { icon: Zap, title: 'Training in gewohnter Umgebung', description: 'Dein Hund lernt dort, wo das Gelernte am Ende sitzen muss: in seinem Alltag, bei dir zuhause.' },
  { icon: Users, title: 'Flexible Termine', description: 'Kein Stress, keine Anfahrt. Wir richten uns nach deinem Zeitplan und kommen zu dir.' },
  { icon: CheckCircle2, title: 'Alltagsnahe Probleme lösen', description: 'Ob Leinenführigkeit, Rückruf oder Begegnungen – wir arbeiten an konkreten Herausforderungen.' },
  { icon: Star, title: 'Stärkung der Bindung', description: 'Durch das gemeinsame Training in vertrauter Atmosphäre wird die Beziehung gefestigt.' },
];

const locations = [
  { name: 'Wien-Simmering', slug: 'wien-simmering' },
  { name: 'Fischamend', slug: 'fischamend' },
  { name: 'Schwadorf', slug: 'schwadorf' },
  { name: 'Himberg', slug: 'himberg' },
  { name: 'Gramatneusiedl', slug: 'gramatneusiedl' },
  { name: 'Ebenfurth', slug: 'ebenfurth' },
  { name: 'Götzendorf', slug: 'goetzendorf' },
  { name: 'Bruck/Leitha', slug: 'bruck-an-der-leitha' },
  { name: 'Parndorf', slug: 'parndorf' },
];

export default function MobileHundetrainingPage() {
  return (
    <div className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.willenskraft.co.at/wp-content/uploads/2020/06/DSC09452-845x684.jpg"
          alt="Mobiles Hundetraining in Schwechat"
          fill
          className="object-cover absolute inset-0 z-0 brightness-[0.55]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-ink-950/40 to-background z-0" />
        <div className="absolute inset-0 wk-grain opacity-50 z-0" />
        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <span className="wk-eyebrow !bg-cream/15 !border-cream/25 !text-cream backdrop-blur mb-7">
              <MapPin className="w-3 h-3" /> Mobiles Hundetraining
            </span>
            <h1 className="wk-display text-[clamp(2.5rem,7vw,5.5rem)] text-cream">
              Hundetraining in
              <br />
              <span className="wk-text-gradient">Schwechat</span>
              <span className="text-brand-400">.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-cream/85 max-w-2xl leading-relaxed">
              Ganzheitliches &amp; gewaltfreies Hundetraining – flexibel bei dir zuhause oder an deinem Wunschort.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt?service=mobiles-training"
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
          </div>
        </div>
      </section>

      {/* TRUST */}
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

      {/* INTRO */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="wk-display text-3xl md:text-5xl text-ink-950 leading-[1.05]">
            Du wünschst dir individuelles Hundetraining,
            <br />
            <span className="wk-text-gradient">das sich nach dir richtet?</span>
          </h2>
          <p className="mt-7 text-lg text-ink-600 leading-relaxed">
            Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich
            in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Schwechat und Umgebung die perfekte
            Lösung. Wir kommen zu dir nach Hause und gestalten das Training ganz nach deinen Bedürfnissen.
          </p>
        </div>
      </section>

      {/* DETAILS */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <span className="wk-eyebrow">Vorteil</span>
                <h3 className="wk-display text-3xl md:text-5xl text-ink-950">Dein Vorteil: Training im Alltag.</h3>
                <p className="text-lg text-ink-600 leading-relaxed">
                  Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause oder auf euren gewohnten Spazierrunden.
                  So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen. Wir arbeiten gemeinsam an Leinenführigkeit,
                  entspannten Hundebegegnungen, einem sicheren Rückruf und vielem mehr.
                </p>
              </div>
              <div className="wk-rule" />
              <div className="space-y-4">
                <span className="wk-eyebrow">Zielgruppe</span>
                <h3 className="wk-display text-3xl md:text-5xl text-ink-950">Für wen ist mobiles Training geeignet?</h3>
                <p className="text-lg text-ink-600 leading-relaxed">
                  Mobiles Hundetraining eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die
                  ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach,
                  um die Grundlagen in einer stressfreien 1:1-Betreuung zu festigen.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-5 bg-brand-100 rounded-[2.5rem] rotate-3 opacity-50 blur-2xl" />
              <Image
                src="https://www.willenskraft.co.at/wp-content/uploads/2020/06/DSC09452-845x684.jpg"
                alt="Hund und Besitzerin trainieren zuhause"
                width={700}
                height={700}
                className="relative rounded-[2rem] shadow-[0_40px_80px_-32px_rgba(0,0,0,0.25)] object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="wk-eyebrow mb-5">Ablauf</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">So funktioniert dein mobiles Training.</h2>
            <p className="mt-6 text-lg text-ink-600">In drei einfachen Schritten zu einem entspannten Alltag mit deinem Hund.</p>
          </div>
          <ol className="grid md:grid-cols-3 gap-5">
            {[
              { step: 1, title: 'Kontaktaufnahme & Erstgespräch', description: 'Ruf uns an oder schreib uns. Wir besprechen deine Situation, deine Ziele und welche Themen dir am wichtigsten sind.' },
              { step: 2, title: 'Individueller Trainingsplan', description: 'Basierend auf dem Gespräch erstellen wir einen maßgeschneiderten Trainingsplan für dich und deinen Hund.' },
              { step: 3, title: 'Training vor Ort & Begleitung', description: 'Wir kommen zu dir nach Hause und arbeiten gemeinsam Schritt für Schritt an euren individuellen Zielen.' },
            ].map((step) => (
              <li key={step.step} className="wk-card p-8">
                <div className="flex items-baseline justify-between mb-5">
                  <span className="wk-display text-6xl text-brand-600 leading-none">0{step.step}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300">Schritt {step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-ink-950 mb-3 tracking-tight">{step.title}</h3>
                <p className="text-ink-600 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="text-center mt-12">
            <Link
              href="/kontakt?service=mobiles-training"
              className="wk-btn-primary inline-flex items-center gap-2 px-7 h-12 rounded-full font-semibold"
            >
              Jetzt Erstberatung vereinbaren
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="wk-eyebrow mb-5">Vorteile</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">
              5 Gründe für mobiles Training
              <br />
              <span className="wk-text-gradient">in Schwechat.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mobileTrainingPillars.map((pillar, idx) => (
              <div key={pillar.title} className="wk-card p-7 group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-cream transition-colors">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-ink-950 mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-ink-600 leading-relaxed text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-14 text-center bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 text-ink-950 shadow-[0_40px_80px_-30px_rgba(186,135,30,0.6)]">
            <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-cream/30 blur-3xl" />
            <div className="absolute inset-0 wk-grain opacity-25" />
            <div className="relative z-10">
              <Gift className="w-10 h-10 text-cream mx-auto mb-4" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-950/80 mb-3">Erstberatung</p>
              <h3 className="wk-display text-3xl md:text-4xl mb-3">Mobile Erstberatung</h3>
              <p className="text-ink-950/80 mb-7">90 Minuten · individuell · bei dir zuhause</p>
              <p className="wk-display text-7xl md:text-8xl text-cream mb-6 tracking-tighter">95 €</p>
              <p className="text-ink-950/85 mb-8 max-w-xl mx-auto leading-relaxed">
                Wir analysieren die Situation, besprechen deine Ziele und erstellen einen individuellen Trainingsplan.
              </p>
              <Link
                href="/kontakt?service=erstberatung-mobil"
                className="inline-flex items-center justify-center gap-2 bg-ink-950 text-cream rounded-full px-8 h-13 font-semibold hover:bg-ink-900 transition-colors"
              >
                Erstberatung buchen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1 — TRAINING KNOWLEDGE BASE */}
      <section className="wk-section bg-ink-950 text-cream relative overflow-hidden">
        <div className="absolute inset-0 wk-mesh-dark" />
        <div className="absolute inset-0 wk-grain opacity-30" />
        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 text-[10px] font-bold uppercase tracking-[0.18em]">
                <BookOpen className="w-3 h-3" /> Trainings-Wissen
              </div>
              <h2 className="wk-display text-4xl md:text-5xl mt-6 text-cream">
                Hundetraining-Fakten,
                <br />
                <span className="wk-text-gradient">die jeder Halter kennen sollte.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pl-8 lg:border-l border-ink-800">
              <p className="text-lg text-ink-300 leading-relaxed">
                Diese Wissens­basis enthält die wichtigsten verhaltens­biologischen Fakten, die wir im
                mobilen Training in Schwechat und Umgebung immer wieder erklären. Faktenbasiert,
                wissenschaftlich fundiert und sofort anwendbar.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {trainingKnowledgeBase.map((item) => (
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

      {/* NEW SECTION 2 — REGION CHEAT SHEET */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="wk-eyebrow mb-5">
              <Compass className="w-3 h-3" /> Region-Steckbrief
            </span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">
              Schwechat &amp; Umgebung auf einen Blick.
            </h2>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              Geo­daten, Trainings­fakten und saisonale Tipps — kompakt für Suchmaschinen, KI-Crawler und Hundehalter.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7 wk-card p-8 lg:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700 mb-4">Über das Einzugsgebiet</p>
              <p className="text-ink-700 leading-relaxed text-base mb-7">
                Wir bieten mobiles Hundetraining in der Stadtregion Schwechat sowie in 9 weiteren Standorten in
                Niederösterreich, Wien und im Burgenland an. Das Einzugsgebiet umspannt rund 35 km Radius rund
                um den Standort Schwechat — alle Anfahrten sind für unsere Kund:innen kostenlos.
              </p>
              <h4 className="text-sm font-bold text-ink-950 uppercase tracking-wider mb-4">
                Standorte mit mobilem Training
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {['Schwechat', 'Wien-Simmering', 'Fischamend', 'Schwadorf', 'Himberg', 'Gramatneusiedl', 'Ebenfurth', 'Götzendorf', 'Bruck/Leitha', 'Parndorf'].map((n) => (
                  <div key={n} className="flex items-center gap-2 text-sm text-ink-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                    <span>{n}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 space-y-4">
              <div className="wk-card p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700 mb-4">Quick Facts</p>
                <dl className="space-y-3 text-sm">
                  <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-ink-200/70">
                    <dt className="text-ink-500">Standorte</dt>
                    <dd className="font-semibold text-ink-950 text-right">10 Orte</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-ink-200/70">
                    <dt className="text-ink-500">Einzugsradius</dt>
                    <dd className="font-semibold text-ink-950 text-right">~ 35 km</dd>
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
                    <dt className="text-ink-500">Einzelstunde</dt>
                    <dd className="font-semibold text-ink-950 text-right">55 €</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-ink-500">Methode</dt>
                    <dd className="font-semibold text-ink-950 text-right">Positive Verstärkung</dd>
                  </div>
                </dl>
              </div>

              <div className="wk-card p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700 mb-4">Saisonale Trainingstipps</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2.5">
                    <Sun className="w-4 h-4 mt-0.5 text-brand-600 shrink-0" />
                    <span className="text-ink-700">
                      <strong className="text-ink-950">Sommer:</strong> Training früh morgens oder abends, Asphalt­temperatur prüfen.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Snowflake className="w-4 h-4 mt-0.5 text-brand-600 shrink-0" />
                    <span className="text-ink-700">
                      <strong className="text-ink-950">Winter:</strong> Pfoten kontrollieren, Streusalz abwaschen, Indoor-Tricks.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 mt-0.5 text-brand-600 shrink-0" />
                    <span className="text-ink-700">
                      <strong className="text-ink-950">Frühling:</strong> Sozialisierungs­fenster nutzen, neue Reize dosiert.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <span className="wk-eyebrow mb-5">FAQ</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Häufig gestellte Fragen.</h2>
            <p className="mt-6 text-lg text-ink-600">Die wichtigsten Antworten rund um unser mobiles Training in Schwechat und Umgebung.</p>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqJsonLd.mainEntity.map((faq, idx) => (
              <Accordion.Item key={idx} value={`faq-${idx}`} className="wk-card !p-0 overflow-hidden">
                <Accordion.Trigger className="flex w-full items-center justify-between p-6 sm:p-7 font-semibold text-base sm:text-lg text-ink-950 hover:text-brand-700 transition-colors group text-left">
                  <span className="pr-4">{faq.name}</span>
                  <div className="bg-cream-soft rounded-full p-2 group-hover:bg-brand-100 transition-colors shrink-0">
                    <ChevronDown className="h-5 w-5 text-ink-400 group-hover:text-brand-700 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="px-6 sm:px-7 pb-7 text-ink-600 leading-relaxed text-base">
                  {faq.acceptedAnswer.text}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* SHORTS */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="wk-eyebrow mb-5">Trainings-Shorts</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Echte Momente aus dem Training.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-10 justify-center max-w-3xl mx-auto">
            {['e-V0mN-gP-I', '-ORnMT0oMHk'].map((id) => (
              <div key={id} className="flex justify-center">
                <iframe
                  width="100%"
                  className="max-w-[320px] h-[560px] rounded-[2rem] shadow-xl border border-ink-200"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="YouTube short"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="wk-eyebrow mb-5">Auch in deiner Nähe</span>
            <h2 className="wk-display text-3xl md:text-4xl text-ink-950">Unser Einzugsgebiet.</h2>
            <p className="mt-5 text-lg text-ink-600">Wir bieten unser mobiles Hundetraining in 10 Orten der Region an.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {locations.map((ort) => (
              <Link key={ort.slug} href={`/mobiles-hundetraining/${ort.slug}`} className="block">
                <div className="wk-card p-4 flex items-center justify-center gap-2 group">
                  <MapPin className="w-4 h-4 text-ink-400 group-hover:text-brand-600 transition-colors" />
                  <span className="font-semibold text-ink-900 text-sm">{ort.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14 bg-gradient-to-br from-ink-950 to-ink-800 text-cream shadow-2xl">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-500 blur-[120px] opacity-25" />
            <div className="absolute inset-0 wk-grain opacity-25" />
            <div className="relative grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-4">
                <Image
                  src="https://www.willenskraft.co.at/wp-content/uploads/2020/02/Hundeschule-Willenskraft-ButtonFINAL.png"
                  alt="Jessica Pusch — Hundeschule Willenskraft"
                  width={400}
                  height={400}
                  className="rounded-full mx-auto object-cover aspect-square border-4 border-ink-800 shadow-2xl"
                />
              </div>
              <div className="md:col-span-8 text-center md:text-left">
                <h2 className="wk-display text-3xl sm:text-5xl text-cream mb-4">Interesse am mobilen Training?</h2>
                <p className="text-lg text-ink-300 mb-7 leading-relaxed">
                  Kontaktiere uns für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Link
                    href="/kontakt?service=mobiles-training"
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

      {/* TESTIMONIALS */}
      <section className="wk-section">
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
    </div>
  );
}
