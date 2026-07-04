import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Euro, MapPin, Users } from 'lucide-react';
import GoogleBadge from '@/components/GoogleBadge';
import JessySection from '@/components/JessySection';
import CtaBanner from '@/components/CtaBanner';
import ShortsSection from '@/components/ShortsSection';
import { kurse } from '@/lib/kurseData';

const title = 'Hundekurse Schwechat – Gruppenkurse | Willenskraft';
const description =
  'Alle Gruppenkurse mit Jessy in Schwechat & Umgebung: Welpenkurs, Junghundekurs, Begegnungstraining, Dummytraining & Medical Training.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: 'https://welpenschule-schwechat.at/kurse' },
  openGraph: { title, description, url: 'https://welpenschule-schwechat.at/kurse', type: 'website' },
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Gruppenkurse der Hundeschule Willenskraft — Welpenschule Schwechat',
  itemListElement: kurse.map((k, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: k.name,
    url: `https://welpenschule-schwechat.at/kurse/${k.slug}`,
  })),
};

export default function KursePage() {
  return (
    <div className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      {/* HERO */}
      <section className="wk-section relative overflow-hidden">
        <div className="absolute inset-0 wk-mesh opacity-60 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
          <span className="wk-eyebrow mb-6">
            <Users className="w-3 h-3" /> Gruppenkurse mit Jessy
          </span>
          <h1 className="wk-display text-4xl md:text-6xl text-ink-950 leading-[1.05]">
            Hundekurse in Schwechat
            <br />
            <span className="wk-text-gradient">& Umgebung.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-ink-600 max-w-2xl mx-auto leading-relaxed">
            Vom <strong>Welpenkurs</strong> bis zum <strong>Medical Training</strong>: Alle Gruppenkurse
            finden in Kleingruppen statt — am <strong>überdachten Trainingsplatz in Schwechat</strong> oder
            an sorgfältig ausgewählten Treffpunkten in der Region. Gewaltfrei nach dem LIFE-Modell, mit
            positiver Verstärkung und deiner Trainerin Jessy.
          </p>
          <div className="mt-7 flex justify-center">
            <GoogleBadge href="/#bewertungen" />
          </div>
        </div>
      </section>

      {/* KURS-GRID */}
      <section className="container mx-auto px-6 pb-8 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kurse.map((k) => (
            <Link key={k.slug} href={`/kurse/${k.slug}`} className="block group">
              <article className="wk-card !p-0 overflow-hidden h-full flex flex-col">
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={k.heroImage}
                    alt={k.heroAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-cream/90 backdrop-blur px-3 py-1 text-xs font-bold text-ink-900">
                    {k.price}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold text-ink-950 group-hover:text-brand-700 transition-colors tracking-tight">
                    {k.name}
                  </h2>
                  <p className="text-sm text-ink-500 mt-1 mb-3">{k.teaser}</p>
                  <p className="text-sm text-ink-600 leading-relaxed flex-1">{k.claim}</p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ink-500">
                    <span className="inline-flex items-center gap-1"><Euro className="w-3.5 h-3.5 text-brand-600" /> {k.units}</span>
                    <span className="inline-flex items-center gap-1"><Users className="w-3.5 h-3.5 text-brand-600" /> {k.groupSize}</span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                    Zum Kurs <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          ))}

          {/* Mobiles Einzeltraining als 6. Karte */}
          <Link href="/mobiles-hundetraining" className="block group">
            <article className="h-full rounded-3xl p-6 bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 text-ink-950 shadow-[0_30px_60px_-20px_rgba(186,135,30,0.5)] flex flex-col">
              <MapPin className="w-7 h-7 text-cream mb-4" />
              <h2 className="wk-display text-2xl mb-2">Lieber 1:1? Mobiles Einzeltraining.</h2>
              <p className="text-sm text-ink-950/80 leading-relaxed flex-1">
                Jessy kommt zu dir nach Hause — von Schwechat über das südliche Wiener Umland bis in den
                gesamten Bezirk Mödling. Erstberatung 95 €, Einzelstunde 55 €, Anfahrt kostenlos.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cream">
                Zum mobilen Training <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          </Link>
        </div>

        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-sm text-ink-500 leading-relaxed">
            <CheckCircle2 className="inline w-4 h-4 text-brand-600 mr-1 -mt-0.5" />
            Alle Kurse sind Angebote des Willenskraft-Standorts Bruck/Leitha–Wien von Jessica Pusch.
            Welpen- & Junghundekurse finden am überdachten Trainingsplatz in Schwechat statt — die
            Treffpunkte der weiteren Kurse erfährst du bei der Anmeldung.
          </p>
        </div>
      </section>

      <CtaBanner
        regionName="Schwechat"
        title="Unsicher, welcher Kurs der richtige ist?"
        text="Schreib Jessy kurz, wie alt dein Hund ist und was euch beschäftigt — sie empfiehlt dir den passenden Einstieg."
      />

      <JessySection />

      <ShortsSection />
    </div>
  );
}
