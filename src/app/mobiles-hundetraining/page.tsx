import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Star, Users, Zap, Heart, Gift, MapPin, Award, ThumbsUp, ShieldCheck, ChevronDown, ArrowLeft } from 'lucide-react';
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
        text: 'Wir bieten mobiles Hundetraining in Schwechat und der gesamten Umgebung an: Fischamend, Schwadorf, Ebenfurth, Gramatneusiedl, Götzendorf, Himberg, Bruck an der Leitha und vielen weiteren Orten in der Region.',
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

const mobileTrainingPillars = [
  { icon: <Heart className="text-yellow-500" />, title: "Individuelles Training", description: "Wir gehen gezielt auf deine Wünsche und die Bedürfnisse deines Hundes ein – für maximale Erfolge." },
  { icon: <Zap className="text-yellow-500" />, title: "Training in gewohnter Umgebung", description: "Dein Hund lernt dort, wo das Gelernte am Ende sitzen muss: in seinem Alltag, bei dir zuhause." },
  { icon: <Users className="text-yellow-500" />, title: "Flexible Terminvereinbarung", description: "Kein Stress, keine Anfahrt. Wir richten uns nach deinem Zeitplan und kommen zu dir." },
  { icon: <CheckCircle2 className="text-yellow-500" />, title: "Alltagsnahe Probleme lösen", description: "Ob Leinenführigkeit, Rückruf oder Begegnungen – wir arbeiten an konkreten Herausforderungen." },
  { icon: <Star className="text-yellow-500" />, title: "Stärkung der Bindung", description: "Durch das gemeinsame Training in vertrauter Atmosphäre wird die Beziehung zwischen dir und deinem Hund gefestigt." },
];

const locations = [
  { name: 'Fischamend', slug: 'fischamend' },
  { name: 'Schwadorf', slug: 'schwadorf' },
  { name: 'Ebenfurth', slug: 'ebenfurth' },
  { name: 'Gramatneusiedl', slug: 'gramatneusiedl' },
  { name: 'Götzendorf', slug: 'goetzendorf' },
  { name: 'Himberg', slug: 'himberg' },
  { name: 'Bruck/Leitha', slug: 'bruck-an-der-leitha' },
];

export default function MobileHundetrainingPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="https://www.willenskraft.co.at/wp-content/uploads/2020/06/DSC09452-845x684.jpg"
          alt="Mobiles Hundetraining in Schwechat"
          fill
          className="object-cover absolute z-0 brightness-75"
          priority
        />
        <div className="relative z-20 text-center p-6 md:p-8 bg-black/20 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Mobiles Hundetraining in <span className="text-yellow-400">Schwechat</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Ganzheitliches & gewaltfreies Hundetraining – flexibel bei dir zuhause oder an deinem Wunschort.
          </p>
          <Button asChild size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/kontakt?service=mobiles-training">Jetzt mobiles Training anfragen</Link>
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
          <h2 className="text-3xl font-bold mb-4">Du wünschst dir individuelles Hundetraining, das sich nach dir richtet?</h2>
          <p className="text-lg text-gray-700">
            Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Schwechat und Umgebung die perfekte Lösung. Wir kommen zu dir nach Hause und gestalten das Training ganz nach deinen Bedürfnissen.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">Dein Vorteil: Training im Alltag</h3>
                <p className="text-lg mt-2">Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause oder auf euren gewohnten Spazierunden. So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen. Wir arbeiten gemeinsam an Leinenführigkeit, entspannten Hundebegegnungen, einem sicheren Rückruf und vielem mehr.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Für wen ist mobiles Training geeignet?</h3>
                <p className="text-lg mt-2">Mobiles Hundetraining eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach, um die Grundlagen in einer stressfreien 1:1-Betreuung zu festigen.</p>
              </div>
            </div>
            <div>
              <Image
                src="https://www.willenskraft.co.at/wp-content/uploads/2020/06/DSC09452-845x684.jpg"
                alt="Hund und Besitzerin trainieren zuhause"
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">So funktioniert dein mobiles Training</h2>
            <p className="text-lg text-gray-600">In drei einfachen Schritten zu einem entspannten Alltag mit deinem Hund.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { step: 1, title: 'Kontaktaufnahme & Erstgespräch', description: 'Ruf uns an oder schreib uns. Wir besprechen deine Situation, deine Ziele und welche Themen dir am wichtigsten sind.' },
              { step: 2, title: 'Individueller Trainingsplan', description: 'Basierend auf dem Gespräch erstellen wir einen maßgeschneiderten Trainingsplan für dich und deinen Hund.' },
              { step: 3, title: 'Training vor Ort & Begleitung', description: 'Wir kommen zu dir nach Hause und arbeiten gemeinsam Schritt für Schritt an euren individuellen Zielen.' },
            ].map((step) => (
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
              <Link href="/kontakt?service=mobiles-training">Jetzt Erstberatung vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Die 5 Vorteile des mobilen Hundetrainings</h2>
            <p className="text-lg text-gray-700">Flexibel, individuell und effektiv – entdecke, warum sich das Training bei dir zuhause lohnt!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileTrainingPillars.map((pillar) => (
              <Card key={pillar.title} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">{pillar.icon}{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
            <Gift className="w-16 h-16 text-white mx-auto mb-4 drop-shadow-sm" />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Dein Startpaket: Mobile Erstberatung</h3>
            <p className="text-yellow-900 font-bold uppercase tracking-wider text-sm mb-6">90 Minuten intensiv & individuell</p>
            <p className="text-6xl font-black text-white mb-4 drop-shadow-md">95€</p>
            <p className="text-gray-900 font-medium mb-8 max-w-xl mx-auto">Wir analysieren die Situation, besprechen deine Ziele und erstellen einen individuellen Trainingsplan.</p>
            <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-yellow-400 font-bold shadow-xl rounded-full px-8 py-6 text-lg">
              <Link href="/kontakt?service=erstberatung-mobil">Jetzt Erstberatung buchen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Herausforderungen und Lösungen Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Dein Weg zum perfekten Mensch-Hund-Team</h2>
            <p className="text-xl text-gray-600">Willenskraft Hundetraining - Wir begleiten dich und deinen Vierbeiner</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bereit für die Veränderung?</h3>
              <p className="text-gray-700 mb-6">Gemeinsam finden wir den richtigen Weg für dich und deinen Hund</p>
              <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-900 text-white font-bold shadow-lg">
                <Link href="/kontakt?service=mobiles-training">Jetzt Training anfragen</Link>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Häufig gestellte Fragen zum mobilen Hundetraining</h2>
            <p className="text-lg text-gray-600">Die wichtigsten Antworten rund um unser mobiles Training in Schwechat und Umgebung.</p>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Was ist mobiles Hundetraining?',
                a: 'Beim mobilen Hundetraining kommt die Hundetrainerin zu dir nach Hause. Das Training findet in der gewohnten Umgebung deines Hundes statt – genau dort, wo die Herausforderungen im Alltag auftreten. Das macht das Training besonders effektiv und praxisnah.'
              },
              {
                q: 'Was kostet das mobile Hundetraining in Schwechat?',
                a: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse der Situation, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstunden buchst du flexibel nach Bedarf.'
              },
              {
                q: 'In welchen Orten bietet ihr mobiles Hundetraining an?',
                a: 'Wir bieten mobiles Hundetraining in Schwechat und der gesamten Umgebung an: Fischamend, Schwadorf, Ebenfurth, Gramatneusiedl, Götzendorf, Himberg, Bruck an der Leitha und vielen weiteren Orten in der Region.'
              },
              {
                q: 'Für welche Hunde ist das mobile Training geeignet?',
                a: 'Das mobile Training eignet sich für Hunde jeden Alters und jeder Rasse – vom Welpen bis zum Senior, vom Chihuahua bis zur Dogge. Besonders effektiv ist es bei Themen wie Leinenführigkeit, Rückruf, Trennungsangst, Angstverhalten und Sozialisierung.'
              },
              {
                q: 'Wie schnell sieht man Erfolge beim mobilen Training?',
                a: 'Viele Halter berichten bereits nach der Erstberatung von deutlichen Verbesserungen. Grundlegende Verhaltensänderungen benötigen in der Regel 3-6 Sitzungen. Wir geben dir nach jeder Einheit konkrete Hausaufgaben mit, damit du zwischen den Terminen weiter üben kannst.'
              },
              {
                q: 'Arbeitet ihr gewaltfrei?',
                a: 'Ja, zu 100%. Alle unsere Methoden basieren auf positiver Verstärkung und entsprechen dem aktuellen Stand der Verhaltensforschung. Kein Zwang, keine Dominanztheorie, kein Stachelhals – nur faire und respektvolle Kommunikation mit deinem Hund.'
              },
            ].map((faq, idx) => (
              <Accordion.Item key={idx} value={`faq-${idx}`} className="bg-white border text-left border-slate-200 rounded-2xl overflow-hidden shadow-sm data-[state=open]:shadow-md transition-all">
                <Accordion.Trigger className="flex w-full items-center justify-between p-6 sm:p-8 font-bold text-lg sm:text-xl text-gray-900 hover:text-yellow-600 transition-colors group">
                  {faq.q}
                  <div className="bg-slate-50 rounded-full p-2 group-hover:bg-yellow-50 transition-colors shrink-0 ml-4">
                    <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-yellow-600 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="px-6 sm:px-8 pb-8 text-gray-600 text-lg leading-relaxed pt-2">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

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
                title="YouTube short"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-xl"
              ></iframe>
            </div>
            <div className="flex justify-center">
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/-ORnMT0oMHk?si=xfppXZQC6Dr-ukZ7"
                title="YouTube short"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Auch in deiner Nähe</h2>
            <p className="text-lg text-gray-700">Wir bieten unser mobiles Hundetraining nicht nur in Schwechat, sondern auch in vielen umliegenden Orten an.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
            {locations.map(ort => (
              <Link
                key={ort.slug}
                href={`/mobiles-hundetraining/${ort.slug}`}
                className="block"
              >
                <div className="bg-white p-4 rounded-lg shadow-md hover:bg-yellow-100 transition-colors flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">{ort.name}</span>
                </div>
              </Link>
            ))}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center gap-2 font-semibold">
              ... und viele mehr!
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="w-full md:w-1/3">
            <Image
              src="https://www.willenskraft.co.at/wp-content/uploads/2020/02/Hundeschule-Willenskraft-ButtonFINAL.png"
              alt="Jessica Pusch - Hundeschule Willenskraft"
              width={300}
              height={300}
              className="rounded-full mx-auto object-cover aspect-square"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Interesse am mobilen Training?</h2>
            <p className="text-xl mb-6">Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund.</p>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              <Link href="/kontakt?service=mobiles-training">Jetzt anfragen</Link>
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
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
            <Reviews />
          </div>
        </div>
      </section>

    </div>
  );
}
