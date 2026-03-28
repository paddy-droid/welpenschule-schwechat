import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Star, Users, Zap, Heart, ArrowLeft, Award, ThumbsUp, ShieldCheck, Phone, MapPin, Clock, Gift, ChevronDown } from 'lucide-react';
import Reviews from '@/components/Reviews';
import WillenskraftSection from '@/components/WillenskraftSection';
import { getLocationConfig } from '@/components/WillenskraftSection/config/locations';
import { getRegionData, type RegionData } from '@/lib/regionData';
import * as Accordion from '@radix-ui/react-accordion';

const heroImage = 'https://www.willenskraft.co.at/wp-content/uploads/2020/06/DSC09452-845x684.jpg';
const profileImage = 'https://www.willenskraft.co.at/wp-content/uploads/2020/02/Hundeschule-Willenskraft-ButtonFINAL.png';

const pillarIcons = [Heart, Zap, Users, CheckCircle2, Star];

function buildFaqJsonLd(data: RegionData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function buildLocalBusinessJsonLd(data: RegionData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Mobiles Hundetraining ${data.name} - Hundeschule Willenskraft`,
    description: `Ganzheitliches und gewaltfreies mobiles Hundetraining in ${data.name} und Umgebung. Einzeltraining, Welpentraining und Verhaltensberatung direkt bei dir zuhause.`,
    url: `https://www.welpenschule-schwechat.at/mobiles-hundetraining/${data.slug}`,
    telephone: '+436643903673',
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.name,
      addressRegion: 'Niederösterreich',
      addressCountry: 'AT',
    },
    areaServed: {
      '@type': 'City',
      name: data.name,
    },
    priceRange: '€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50',
    },
  };
}

export default function RegionPageTemplate({ regionKey }: { regionKey: string }) {
  const data = getRegionData(regionKey);
  if (!data) return null;

  const willenskraftConfig = getLocationConfig(regionKey);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(data)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessJsonLd(data)) }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src={heroImage}
          alt={`Mobiles Hundetraining in ${data.name}`}
          fill
          className="object-cover absolute z-0 brightness-75"
          priority
        />
        <div className="relative z-20 text-center p-6 md:p-8 bg-black/20 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Mobiles Hundetraining in <span className="text-yellow-400">{data.name}</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {data.heroSubtitle}
          </p>
          <Button asChild size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href={`/kontakt?service=mobiles-training-${data.slug}`}>Jetzt mobiles Training anfragen</Link>
          </Button>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-white border-y border-slate-100 py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Award className="w-8 h-8 text-yellow-500" />, value: '10+', label: 'Jahre Erfahrung', sub: 'Hundeschule Willenskraft' },
              { icon: <Users className="w-8 h-8 text-yellow-500" />, value: '1:1', label: 'Einzeltraining', sub: '100% Fokus auf euch' },
              { icon: <ThumbsUp className="w-8 h-8 text-yellow-500" />, value: '5\u2605', label: 'Google Bewertung', sub: 'Verifizierte Reviews' },
              { icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />, value: '100%', label: 'Gewaltfrei', sub: 'Positive Verstärkung' },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-50 rounded-2xl mb-3 group-hover:bg-yellow-100 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="font-bold text-gray-800 text-sm">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{data.introTitle}</h2>
          <p className="text-lg text-gray-700">{data.introText}</p>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">{data.detailsTitle}</h3>
                <p className="text-lg mt-2">{data.detailsText}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{data.targetTitle}</h3>
                <p className="text-lg mt-2">{data.targetText}</p>
              </div>
            </div>
            <div>
              <Image
                src={heroImage}
                alt={`Hund und Besitzerin trainieren zuhause in ${data.name}`}
                width={600}
                height={600}
                className="rounded-lg shadow-xl object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block p-2 px-4 rounded-full bg-blue-100 text-blue-800 font-bold text-sm uppercase tracking-widest mb-4">Ablauf</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">So funktioniert dein mobiles Training in {data.name}</h2>
            <p className="text-lg text-gray-600">In drei einfachen Schritten zu einem entspannten Alltag mit deinem Hund.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {data.processSteps.map((step) => (
              <div key={step.step} className="relative text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-6 shadow-lg">
                  <span className="text-3xl font-black text-gray-900">{step.step}</span>
                </div>
                {step.step < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-yellow-200" />
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              <Link href={`/kontakt?service=mobiles-training-${data.slug}`}>Jetzt Erstberatung vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Die 5 Vorteile des mobilen Hundetrainings in {data.name}</h2>
            <p className="text-lg text-gray-700">Flexibel, individuell und effektiv – entdecke, warum sich das Training bei dir zuhause in {data.name} lohnt!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.pillars.map((pillar, idx) => {
              const IconComp = pillarIcons[idx];
              return (
                <Card key={pillar.title} className="hover:shadow-lg transition-shadow bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      {IconComp && <IconComp className="text-yellow-500" />}
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{pillar.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
            <Gift className="w-16 h-16 text-white mx-auto mb-4 drop-shadow-sm" />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Mobile Erstberatung in {data.name}</h3>
            <p className="text-yellow-900 font-bold uppercase tracking-wider text-sm mb-6">90 Minuten intensiv & individuell</p>
            <p className="text-6xl font-black text-white mb-4 drop-shadow-md">95€</p>
            <p className="text-gray-900 font-medium mb-8 max-w-xl mx-auto">Wir analysieren die Situation bei dir zuhause in {data.name}, besprechen deine Ziele und erstellen einen individuellen Trainingsplan für dich und deinen Hund.</p>
            <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-yellow-400 font-bold shadow-xl rounded-full px-8 py-6 text-lg">
              <Link href={`/kontakt?service=erstberatung-mobil-${data.slug}`}>Jetzt Erstberatung buchen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Training Methods Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Training mit Freude & Verstand in {data.name}</h2>
            <p className="text-lg text-gray-600">Wir setzen auf moderne, wissenschaftlich fundierte Methoden. Positive Verstärkung statt Druck und Zwang.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-3xl transform -rotate-2 scale-105 opacity-50 blur-xl" />
              <Image
                src="https://www.willenskraft.co.at/wp-content/uploads/2024/05/Hundeschule-Bad-Deutsch-Altenburg-Welpentraining-845x684.webp"
                alt={`Training mit positiver Verstärkung in ${data.name}`}
                width={700}
                height={700}
                className="relative rounded-3xl shadow-2xl object-cover aspect-square object-center"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" /> Positive Verstärkung
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">Wir belohnen gewünschtes Verhalten statt Fehler zu bestrafen. Dadurch lernt dein Hund gerne und nachhaltig – mit Freude statt mit Angst. Diese Methode ist wissenschaftlich belegt und tierschutzkonform.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Users className="text-blue-500" /> Individuelle Betreuung
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">Im mobilen 1:1-Training in {data.name} geht es nur um dich und deinen Hund. Wir passen Tempo, Methoden und Übungen genau auf eure Situation an – ohne Gruppenzwang.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <ShieldCheck className="text-yellow-500" /> Tierschutzkonform
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">Alle unsere Methoden entsprechen dem aktuellen Stand der Verhaltensforschung und den Tierschutzrichtlinien. Kein Zwang, keine Dominanztheorie, kein Stachelhals – nur faire und respektvolle Kommunikation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Herausforderungen und Lösungen Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Dein Weg zum perfekten Mensch-Hund-Team in {data.name}</h2>
            <p className="text-xl text-gray-600">Willenskraft Hundetraining – Wir begleiten dich und deinen Vierbeiner in {data.name}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Herausforderungen</h3>
              </div>
              <div className="space-y-6">
                {[
                  { title: 'Welpentraining', text: 'Junge Hunde benötigen klare Grenzen und Konsequenz. Die Sozialisationsphase ist entscheidend für ein ausgeglichenes Sozialverhalten.' },
                  { title: 'Tierschutzhunde', text: 'Hunde mit schwieriger Vergangenheit brauchen geduldigen Aufbau von Vertrauen und Sicherheit in ihrer neuen Umgebung.' },
                  { title: 'Leinenführigkeit', text: 'Ziehen an der Leine macht Spaziergänge zum Stress. Entspanntes Gehen nebeneinander erfordert Konsequenz und die richtigen Techniken.' },
                  { title: 'Rückruf', text: 'Ein zuverlässiger Rückruf ist lebenswichtig. Viele Hunde lassen sich durch Reize ablenken und kommen nicht auf Kommando.' },
                  { title: 'Alltagstauglichkeit', text: 'Hunde sollen sich in verschiedenen Situationen sicher und ruhig verhalten – vom Tierarztbesuch bis zur Begegnung mit Artgenossen.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Lösungen</h3>
              </div>
              <div className="space-y-6">
                {[
                  { title: 'Welpenschule', text: 'Spielerisches Lernen in kleinen Gruppen. Wir vermitteln Grundkommandos und fördern die richtige Sozialisierung für einen souveränen Hund.' },
                  { title: 'Einzeltraining', text: 'Individuelle Betreuung für spezifische Probleme. Wir entwickeln maßgeschneiderte Lösungsstrategien für deine besondere Situation.' },
                  { title: 'Leinenführigkeitstraining', text: 'Positive Verstärkungstechniken für lockeres Gehen. Dein Hund lernt, auf dich zu achten und freiwillig bei dir zu bleiben.' },
                  { title: 'Rückruftraining', text: 'Schrittweiser Aufbau zuverlässiger Kommandos. Wir trainieren mit unterschiedlichen Ablenkungen für einen sicheren Rückruf in jeder Situation.' },
                  { title: 'Alltagstraining', text: 'Praktische Übungen für reale Lebenssituationen. Wir bereiten dich und deinen Hund auf alltägliche Herausforderungen vor.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-400 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bereit für die Veränderung in {data.name}?</h3>
              <p className="text-gray-700 mb-6">Gemeinsam finden wir den richtigen Weg für dich und deinen Hund in {data.name}</p>
              <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-900 text-white font-bold shadow-lg">
                <Link href={`/kontakt?service=mobiles-training-${data.slug}`}>Jetzt Training in {data.name} anfragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block p-2 px-4 rounded-full bg-green-100 text-green-800 font-bold text-sm uppercase tracking-widest mb-4">FAQ</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Häufig gestellte Fragen zum Hundetraining in {data.name}</h2>
            <p className="text-lg text-gray-600">Die wichtigsten Antworten rund um unser mobiles Training in {data.name} und Umgebung.</p>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <Accordion.Item key={idx} value={`faq-${idx}`} className="bg-white border text-left border-slate-200 rounded-2xl overflow-hidden shadow-sm data-[state=open]:shadow-md transition-all">
                <Accordion.Trigger className="flex w-full items-center justify-between p-6 sm:p-8 font-bold text-lg sm:text-xl text-gray-900 hover:text-yellow-600 transition-colors group">
                  {faq.question}
                  <div className="bg-slate-50 rounded-full p-2 group-hover:bg-yellow-50 transition-colors shrink-0 ml-4">
                    <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-yellow-600 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="px-6 sm:px-8 pb-8 text-gray-600 text-lg leading-relaxed pt-2">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Willenskraft Section */}
      <WillenskraftSection content={willenskraftConfig} />

      {/* YouTube Shorts Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Kurze Einblicke in unser Training</h2>
            <p className="text-lg text-gray-700">Entdecke in diesen Shorts, wie viel Freude und Lernfortschritt unsere Welpen im Training erleben.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex justify-center">
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/e-V0mN-gP-I?si=vfI702gsB-6WWNRV"
                title="YouTube short video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="flex justify-center">
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/-ORnMT0oMHk?si=xfppXZQC6Dr-ukZ7"
                title="YouTube short video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced SEO Region Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Mobiles Hundetraining in <span className="text-yellow-500">{data.name}</span> – Dein regionaler Experte
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {data.localDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <MapPin className="text-yellow-500" /> {data.name} als Trainingsstandort
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Die Region rund um {data.name} bietet ideale Voraussetzungen für erfolgreiches Hundetraining. Von ruhigen Wohngebieten bis hin zu naturnahen Spazierwegen – wir nutzen die Vielfalt der Umgebung, um deinen Hund optimal auf alle Alltagssituationen vorzubereiten.
              </p>
              <ul className="space-y-3">
                {data.localFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-yellow-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Warum sich professionelles Training in {data.name} lohnt</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Viele Verhaltensweisen wie Leinenaggression, Trennungsangst oder ständiges Bellen treten spezifisch in der gewohnten Umgebung auf. Durch unser Konzept des mobilen Trainings direkt in {data.name} können wir die Ursachen analysieren und genau dort ansetzen, wo die Herausforderungen im Alltag entstehen.
              </p>
              <ul className="space-y-3">
                {[
                  `Stressfreie Begegnungen mit anderen Hunden in ${data.name}`,
                  'Ein entspannter Alltag zuhause ohne ständiges Kontrollverhalten',
                  'Zuverlässiger Rückruf auch bei starker Ablenkung',
                  'Methoden auf Basis positiver Verstärkung ohne Druck',
                  'Individuelle Anpassung des Trainingsplans an deine Bedürfnisse',
                  'Umfassende Beratung zu artgerechter Auslastung',
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-yellow-100 rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle2 className="text-yellow-600 w-4 h-4" />
                    </div>
                    <span className="text-gray-700 text-lg leading-relaxed font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-10 lg:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-20" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 relative z-10">Mache den ersten Schritt zu einem harmonischen Alltag in {data.name}</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
              Ganz gleich, ob du einen Welpen hast oder einen erwachsenen Hund mit kleinen Baustellen – unser Hundetraining in {data.name} passt sich euch an.
            </p>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full px-8 relative z-10">
              <Link href={`/kontakt?service=mobiles-training-${data.slug}`}>Jetzt Termin in {data.name} vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nearby Locations Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Auch in deiner Nähe: Mobiles Hundetraining</h2>
            <p className="text-lg text-gray-700">Wir bieten mobiles Hundetraining nicht nur in {data.name}, sondern in der gesamten Region an. Finde den nächsten Standort:</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {data.nearbyLocations.map((loc) => (
              <Link key={loc.slug} href={`/mobiles-hundetraining/${loc.slug}`} className="block">
                <div className="bg-white p-4 rounded-lg shadow-md hover:bg-yellow-100 transition-colors flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">{loc.name}</span>
                </div>
              </Link>
            ))}
            <Link href="/mobiles-hundetraining" className="block">
              <div className="bg-white p-4 rounded-lg shadow-md hover:bg-yellow-100 transition-colors flex items-center justify-center gap-2 font-semibold">
                <MapPin className="w-5 h-5 text-yellow-500" />
                Schwechat
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="w-full md:w-1/3">
            <Image
              src={profileImage}
              alt={`Jessica Pusch - Hundeschule Willenskraft ${data.name}`}
              width={300}
              height={300}
              className="rounded-full mx-auto object-cover aspect-square"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">{data.contactTitle}</h2>
            <p className="text-xl mb-6">{data.contactText}</p>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              <Link href={`/kontakt?service=mobiles-training-${data.slug}`}>Jetzt anfragen</Link>
            </Button>
            <div className="mt-6">
              <p className="font-semibold">Oder kontaktiere mich direkt:</p>
              <p className="text-lg text-gray-700 mt-2">
                Jessica Pusch: <a href="tel:+436643903673" className="hover:text-yellow-500">+43 664 3903673</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Was unsere Kunden sagen</h2>
            <p className="text-lg text-gray-700">Echte Erfahrungen von glücklichen Mensch-Hund-Teams.</p>
          </div>
          <Reviews />
        </div>
      </section>

      {/* Back to Overview */}
      <section className="container mx-auto px-4 pb-12">
        <Button asChild variant="outline" size="lg" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
          <Link href="/mobiles-hundetraining">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Zurück zur Übersicht Mobiles Hundetraining
          </Link>
        </Button>
      </section>
    </div>
  );
}
