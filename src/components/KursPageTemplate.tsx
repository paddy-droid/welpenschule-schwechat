import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  Car,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Euro,
  Home as HomeIcon,
  MapPin,
  Phone,
  ShieldCheck,
  ThumbsUp,
  Users,
  Youtube,
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import GoogleBadge from '@/components/GoogleBadge';
import JessySection from '@/components/JessySection';
import CtaBanner from '@/components/CtaBanner';
import ShortsSection from '@/components/ShortsSection';
import { WhatsAppIcon, waHref } from '@/components/WhatsAppFloat';
import { kurse, type KursData } from '@/lib/kurseData';

function buildJsonLd(kurs: KursData) {
  const url = `https://welpenschule-schwechat.at/kurse/${kurs.slug}`;
  const priceValue = kurs.price.match(/\d+/)?.[0] ?? '195';
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: `${kurs.name} — Schwechat & südliches Wiener Umland`,
      description: kurs.claim,
      url,
      provider: {
        '@type': 'Organization',
        name: 'Hundeschule Willenskraft — Welpenschule Schwechat',
        url: 'https://welpenschule-schwechat.at',
      },
      offers: {
        '@type': 'Offer',
        price: priceValue,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url,
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'Onsite',
        location: {
          '@type': 'Place',
          name: 'Überdachter Trainingsplatz Schwechat & Treffpunkte in der Region',
          address: { '@type': 'PostalAddress', addressLocality: 'Schwechat', addressRegion: 'Niederösterreich', addressCountry: 'AT' },
        },
        instructor: { '@type': 'Person', name: 'Jessica Pusch', alternateName: 'Jessy' },
      },
      ...(kurs.voraussetzungen ? { coursePrerequisites: kurs.voraussetzungen.join('; ') } : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: kurs.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://welpenschule-schwechat.at' },
        { '@type': 'ListItem', position: 2, name: 'Kurse', item: 'https://welpenschule-schwechat.at/kurse' },
        { '@type': 'ListItem', position: 3, name: kurs.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: kurs.metaTitle,
      inLanguage: 'de-AT',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#direktantwort'] },
    },
  ];
}

export default function KursPageTemplate({ kurs }: { kurs: KursData }) {
  const andere = kurse.filter((k) => k.slug !== kurs.slug);

  return (
    <div className="bg-background">
      {buildJsonLd(kurs).map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* ============== HERO ============== */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden">
        <Image
          src={kurs.heroImage}
          alt={kurs.heroAlt}
          fill
          sizes="100vw"
          className="object-cover absolute inset-0 z-0 brightness-[0.55]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-ink-950/40 to-background z-0" />
        <div className="absolute inset-0 wk-grain opacity-50 z-0" />
        <div className="relative z-10 container mx-auto px-6 py-28">
          <div className="max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-cream/70">
                <li><Link href="/" className="hover:text-cream transition-colors">Startseite</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/kurse" className="hover:text-cream transition-colors">Kurse</Link></li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="font-semibold text-cream">{kurs.name}</li>
              </ol>
            </nav>

            <span className="wk-eyebrow !bg-cream/15 !border-cream/25 !text-cream backdrop-blur mb-7">
              <Users className="w-3 h-3" /> Gruppenkurs mit Jessy
            </span>
            <h1 className="wk-display text-[clamp(2.4rem,6.5vw,5rem)] text-cream">
              {kurs.name}
              <br />
              <span className="wk-text-gradient">Schwechat & Umgebung</span>
              <span className="text-brand-400">.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-cream/85 max-w-2xl leading-relaxed">{kurs.claim}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/kontakt?service=kurs-${kurs.slug}`}
                className="wk-btn-primary inline-flex items-center justify-center gap-2 px-7 h-13 rounded-full font-semibold"
              >
                Jetzt Kursplatz anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 h-13 rounded-full bg-[#25D366] text-white font-semibold hover:brightness-105 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp
              </a>
              <a
                href="tel:+436643903673"
                className="inline-flex items-center justify-center gap-2 px-6 h-13 rounded-full bg-cream/10 backdrop-blur border border-cream/30 text-cream hover:bg-cream/20 transition-all font-semibold"
              >
                <Phone className="w-4 h-4" /> Anrufen
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <GoogleBadge variant="dark" href="/#bewertungen" />
              <span className="inline-flex items-center gap-2 text-xs text-cream/80">
                <Euro className="w-4 h-4 text-brand-300" /> {kurs.price} · {kurs.units}
              </span>
              <span className="inline-flex items-center gap-2 text-xs text-cream/80">
                <Users className="w-4 h-4 text-brand-300" /> {kurs.groupSize}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== AEO-DIREKTANTWORT ============== */}
      <section className="container mx-auto px-6 pt-14">
        <div id="direktantwort" className="wk-card max-w-4xl mx-auto p-8 md:p-10 border-l-[5px] !border-l-brand-500 scroll-mt-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700 mb-4">
            Auf einen Blick — {kurs.name} Schwechat
          </p>
          <p className="text-ink-800 text-base md:text-lg leading-relaxed">
            Der <strong>{kurs.name}</strong> der Hundeschule Willenskraft kostet <strong>{kurs.price}</strong>{' '}
            ({kurs.units}, {kurs.groupSize}) und findet am <strong>überdachten Trainingsplatz in Schwechat</strong>{' '}
            bzw. an sorgfältig ausgewählten Treffpunkten in der Region statt. Trainerin ist Jessica Pusch
            („Jessy"), trainiert wird zu 100 % gewaltfrei mit positiver Verstärkung. {kurs.start} Anmeldung:{' '}
            <a href="tel:+436643903673" className="wk-link font-semibold">+43 664 3903673</a>.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-ink-500">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-600" /> 100 % gewaltfrei</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-600" /> Trainingsplatz Schwechat & Region</span>
            <span className="inline-flex items-center gap-1.5"><ThumbsUp className="w-3.5 h-3.5 text-brand-600" /> 5,0 ★ auf Google</span>
            <span className="inline-flex items-center gap-1.5"><Car className="w-3.5 h-3.5 text-brand-600" /> Mobile Einzelstunden ergänzbar</span>
          </div>
        </div>
      </section>

      {/* ============== INTRO + WK-FOTO ============== */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="wk-eyebrow">Darum geht&apos;s</span>
              <h2 className="wk-display text-3xl md:text-5xl text-ink-950">
                Was dich im {kurs.name} erwartet.
              </h2>
              {kurs.intro.map((p) => (
                <p key={p.slice(0, 32)} className="text-lg text-ink-600 leading-relaxed">{p}</p>
              ))}
              <div className="rounded-3xl bg-cream-soft border border-ink-200/60 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700 mb-2">Für wen?</p>
                <p className="text-ink-700 leading-relaxed">{kurs.audience}</p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-5 bg-gradient-to-br from-brand-100 to-brand-200 rounded-[2.5rem] rotate-3 opacity-60 blur-2xl" />
              <Image
                src={kurs.wkImage.src}
                alt={kurs.wkImage.alt}
                width={845}
                height={684}
                className="relative rounded-[2rem] shadow-[0_40px_80px_-32px_rgba(0,0,0,0.25)] object-cover w-full h-auto"
              />
              <p className="relative mt-3 text-center text-xs text-ink-400">Echtes Trainingsfoto der Hundeschule Willenskraft</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== KURSINHALTE ============== */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="wk-eyebrow mb-5"><ClipboardList className="w-3 h-3" /> Kursinhalte</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Das lernt ihr im Kurs.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {kurs.inhalte.map((inhalt) => (
              <div key={inhalt} className="wk-card p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <span className="text-ink-800 text-sm font-medium leading-relaxed">{inhalt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== VORAUSSETZUNGEN / EQUIPMENT + WK-FOTO 2 ============== */}
      {(kurs.voraussetzungen || kurs.equipment) && (
        <section className="wk-section">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                {kurs.voraussetzungen && (
                  <div className="wk-card p-7">
                    <h3 className="text-lg font-semibold text-ink-950 mb-4 tracking-tight">Voraussetzungen</h3>
                    <ul className="space-y-2.5">
                      {kurs.voraussetzungen.map((v) => (
                        <li key={v} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-600 shrink-0" />
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {kurs.equipment && (
                  <div className="wk-card p-7">
                    <h3 className="text-lg font-semibold text-ink-950 mb-4 tracking-tight">Das brauchst du</h3>
                    <ul className="space-y-2.5">
                      {kurs.equipment.map((e) => (
                        <li key={e} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="lg:col-span-5 relative">
                {kurs.wkImage2 && (
                  <>
                    <div className="absolute -inset-4 bg-gradient-to-br from-brand-100 to-brand-200 rounded-[2.5rem] -rotate-2 opacity-60 blur-xl" />
                    <Image
                      src={kurs.wkImage2.src}
                      alt={kurs.wkImage2.alt}
                      width={845}
                      height={684}
                      className="relative rounded-[2rem] shadow-2xl object-cover w-full h-auto"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============== CTA ============== */}
      <CtaBanner
        regionName="Schwechat"
        title={`Platz im nächsten ${kurs.name} sichern?`}
        text={`${kurs.price} · ${kurs.units} · ${kurs.groupSize}. ${kurs.start} Jessy meldet sich innerhalb von 24 Stunden an Werktagen.`}
      />

      {/* ============== TERMINE (Kalender) ============== */}
      {kurs.calendarId && (
        <section className="wk-section bg-card">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <span className="wk-eyebrow mb-5"><CalendarDays className="w-3 h-3" /> Termine</span>
              <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Aktuelle Kurstermine.</h2>
              <p className="mt-5 text-lg text-ink-600">{kurs.start} Den genauen Treffpunkt erfährst du bei der Anmeldung.</p>
            </div>
            <div className="rounded-[2rem] p-3 bg-cream-soft border border-ink-200">
              <iframe
                src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(kurs.calendarId)}&ctz=Europe%2FVienna`}
                style={{ border: 0, width: '100%', height: '560px' }}
                className="rounded-[1.75rem]"
                title={`Kurstermine ${kurs.name}`}
              />
            </div>
          </div>
        </section>
      )}

      {/* ============== VIDEO ============== */}
      {kurs.video && (
        <section className="wk-section bg-ink-950 text-cream relative overflow-hidden">
          <div className="absolute inset-0 wk-mesh-dark" />
          <div className="container mx-auto px-6 max-w-5xl relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="wk-eyebrow !bg-brand-500/15 !text-brand-300 !border-brand-500/30 mb-5">
                <Youtube className="w-3 h-3" /> Aus dem Willenskraft-Kanal
              </span>
              <h2 className="wk-display text-3xl md:text-5xl text-cream">{kurs.video.title}</h2>
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] border border-ink-800 aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${kurs.video.id}`}
                title={kurs.video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* ============== SHORTS ============== */}
      <ShortsSection ids={kurs.shorts} title={`${kurs.name} in Aktion.`} />

      {/* ============== FAQ ============== */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <span className="wk-eyebrow mb-5">FAQ</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Häufige Fragen zum {kurs.name}.</h2>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {kurs.faqs.map((faq, idx) => (
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

      {/* ============== JESSY ============== */}
      <JessySection />

      {/* ============== ANDERE KURSE ============== */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="wk-eyebrow mb-5">Weitere Kurse</span>
            <h2 className="wk-display text-3xl md:text-4xl text-ink-950">Das passt vielleicht auch zu euch.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {andere.map((k) => (
              <Link key={k.slug} href={`/kurse/${k.slug}`} className="block group">
                <div className="wk-card p-6 h-full">
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={k.heroImage}
                      alt={k.heroAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-ink-950 group-hover:text-brand-700 transition-colors">{k.name}</h3>
                  <p className="text-xs text-ink-500 mt-1">{k.teaser}</p>
                  <p className="text-sm font-bold text-brand-700 mt-2">{k.price}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/kurse" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-brand-700 transition-colors">
              Alle Kurse im Überblick <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============== ABSCHLUSS-CTA ============== */}
      <CtaBanner
        regionName="Schwechat"
        title="Noch unsicher, welcher Kurs passt?"
        text="Schreib Jessy kurz, wie alt dein Hund ist und was euch beschäftigt — sie empfiehlt dir den passenden Einstieg. Auch mobile Einzelstunden bei dir zuhause sind möglich."
      />

      <section className="container mx-auto px-6 pb-16 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-ink-500">
          <HomeIcon className="w-3.5 h-3.5 text-brand-600" />
          Welpen- & Junghundekurse finden am überdachten Trainingsplatz in Schwechat statt, weitere Kurse an
          Treffpunkten in der Region — Einzeltraining bei dir zuhause.
        </span>
      </section>
    </div>
  );
}
