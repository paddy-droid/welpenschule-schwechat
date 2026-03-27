import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Star, Users, Zap, Heart, Gift, ChevronDown, CheckCircle } from 'lucide-react';
import Reviews from '@/components/Reviews';
import WillenskraftSection from '@/components/WillenskraftSection';
import * as Accordion from '@radix-ui/react-accordion';

const willenskraftPillars = [
  { icon: <Heart className="text-yellow-500 w-8 h-8" />, title: "Grundbedürfnisse", description: "Futter, Schlaf & Sicherheit: Wir zeigen dir, wie du die Basis für Gesundheit und Wohlbefinden deines Welpen sicherstellst." },
  { icon: <Zap className="text-yellow-500 w-8 h-8" />, title: "Kommunikation", description: "Körpersprache, Mimik und Stimme verstehen: Lerne die Sprache deines Welpen und baue Vertrauen auf." },
  { icon: <Users className="text-yellow-500 w-8 h-8" />, title: "Sozialisierung", description: "Sicher im Umgang mit Artgenossen und Menschen: Wichtige Erlebnisse in der Prägungsphase für einen souveränen Hund." },
  { icon: <CheckCircle className="text-yellow-500 w-8 h-8" />, title: "Signalaufbau", description: "Ohne Zwang & Gewalt: Sitz, Platz & Bleib mit Methoden der positiven Verstärkung nachhaltig erlernen." },
  { icon: <Star className="text-yellow-500 w-8 h-8" />, title: "Spiel & Bindung", description: "Kleine Gruppen, großer Spaß: Gemeinsame Spieleinheiten und Freilauf fördern Bindung und Sozialkompetenz." },
]

export default function Home() {
  return (
    <div className="bg-slate-50/50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        <Image
          src="/Welpenschule-Schwechat, Welpenkurs Hero.webp"
          alt="Glücklicher Welpe auf einer Wiese in Schwechat"
          fill
          className="object-cover absolute z-0 brightness-[0.65]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-slate-50/90 z-10" />
        <div className="relative z-20 text-center px-6 md:px-12 py-16 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 max-w-5xl mx-auto transform translate-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-xl mb-6">
            Welpenschule <span className="text-yellow-400">Schwechat</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Dein ganzheitlicher und gewaltfreier Weg zum Dream-Team. Für Welpen bis 5 Monate in & um Schwechat.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Link href="/kontakt">Melde dich und deinen Welpen an</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/40 backdrop-blur-sm font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all border">
              <Link href="#konzept">Unser Konzept</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="konzept" className="container mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block p-2 px-4 rounded-full bg-yellow-100 text-yellow-800 font-bold text-sm uppercase tracking-widest mb-4">Willkommen</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Ist gerade ein Welpe bei dir eingezogen?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Du hast sicher viele Fragen zur Erziehung, Sozialisierung und Körpersprache. Du möchtest deinen Welpen optimal auf seinen zukünftigen Alltag vorbereiten und die richtigen Spielgefährten finden? Dann bist du in unserer Welpenschue genau richtig! Gemeinsam bauen wir eine harmonische, stressfreie Beziehung auf.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-100 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-xl"></div>
              <Image
                src="/Schwechat-Welpenschule Content.webp"
                alt="Welpen lernen Kommunikation in der Hundeschule Schwechat"
                width={700}
                height={700}
                className="relative rounded-3xl shadow-2xl object-cover aspect-[4/5] object-center"
              />
            </div>
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Die Sprache deines Hundes verstehen</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Hunde kommunizieren anders als wir Menschen. In unserer Welpenschule lernst du, die Körpersprache, Mimik und Lautäußerungen deines Vierbeiners richtig zu deuten. Das ist die Basis für tiefes Vertrauen und eine unzertrennliche Bindung.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Sozialisierung von Anfang an</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Dein Welpe trifft auf andere Hunde und Menschen in einer sicheren Umgebung. Diese Begegnungen sind entscheidend, damit dein Hund lernt, sich in diversen Umgebungen souverän und entspannt zu verhalten. Ohne Überforderung und mit viel Empathie.
                </p>
              </div>
              <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 rounded-full shadow-lg w-full sm:w-auto">
                <Link href="#kurse">Entdecke unsere Kurse</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 sm:py-32 bg-slate-50/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-block p-2 px-4 rounded-full bg-blue-100 text-blue-800 font-bold text-sm uppercase tracking-widest mb-4">Unser Ansatz</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Die 5 Bausteine der Welpenschule</h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">Ganzheitlich, gewaltfrei und individuell – entdecke die Säulen für einen erfolgreichen Start mit deinem Welpen!</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {willenskraftPillars.map((pillar) => (
              <div key={pillar.title} className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100/50 hover:-translate-y-1">
                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}

            {/* Sonderangebot Card */}
            <div className="sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 shadow-xl text-center transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-colors"></div>
              <div className="relative z-10 flex flex-col h-full items-center justify-center">
                <Gift className="w-16 h-16 text-white mb-4 drop-shadow-sm" />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Dein Sonderangebot</h3>
                <p className="text-yellow-900 font-bold uppercase tracking-wider text-sm mb-6">Exklusiv für Welpeneltern</p>
                <p className="font-extrabold text-2xl text-gray-900 mb-2">Private Einzelstunde</p>
                <p className="text-6xl font-black mb-6 text-white drop-shadow-md">55€</p>
                <p className="text-gray-900 font-medium mb-8 leading-snug">Perfekt um spezifische Fragen zu klären und den besten Start zu garantieren!</p>
                <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white hover:text-yellow-400 font-bold shadow-xl rounded-full px-8 py-6 w-full text-lg transition-colors">
                  <Link href="/kontakt?angebot=einzelstunde">Jetzt sichern</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Methods Section */}
      <section className="bg-white py-24 sm:py-32 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Training mit Freude & Verstand</h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">Wir setzen auf moderne und wissenschaftlich fundierte Methoden, die auf positiver Verstärkung basieren. Lernen mit Spaß, ganz ohne Zwang.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-3xl transform -rotate-2 scale-105 opacity-50 blur-xl"></div>
              <Image
                src="https://www.willenskraft.co.at/wp-content/uploads/2024/05/Hundeschule-Bad-Deutsch-Altenburg-Welpentraining-845x684.webp"
                alt="Training mit positiver Verstärkung in Schwechat"
                width={700}
                height={700}
                className="relative rounded-3xl shadow-2xl object-cover aspect-square object-center"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-12">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><CheckCircle className="text-green-500" /> Positive Verstärkung</h3>
                <p className="text-gray-600 leading-relaxed font-medium">Wir konditionieren wichtige Signale wie &bdquo;Sitz&ldquo;, &bdquo;Platz&ldquo; und &bdquo;Bleib&ldquo;. Zudem sind der lockere Umgang mit der Leine und ein zuverlässiger Rückruf zentrale Bestandteile. Wir zeigen dir, wie dein Hund gerne zu dir kommt.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><Users className="text-blue-500" /> Kleine Gruppen</h3>
                <p className="text-gray-600 leading-relaxed font-medium">Um höchste Qualität zu garantieren, trainieren wir in Kleingruppen von maximal <b>vier Mensch-Hund-Teams</b>. Die Welpen werden sorgfältig nach Größe und Temperament zusammengestellt, für echtes und faires Lernen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-24 sm:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-yellow-500 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Expertinnen-Talk: Ganzheitliche Erziehung</h2>
            <p className="text-lg text-slate-300 leading-relaxed">Erfahre mehr über unsere gewaltfreie Philosophie im Gespräch mit Bianca Willen und Martha Höhr. Entdecke, wie wir Welpen auf ihr Leben vorbereiten.</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/yyp4gCZdwK4?si=GsCgdrcyf1KDSXaH"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Medical Training Section */}
      <section className="py-24 sm:py-32 bg-slate-50/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block p-2 px-4 rounded-full bg-green-100 text-green-800 font-bold text-sm uppercase tracking-widest mb-4">Wichtig</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Medical Training für Welpen</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ein entspannter Tierarztbesuch ist kein Zufall. Wir bereiten deinen Welpen spielerisch auf Untersuchungen vor, bauen Vertrauen auf und reduzieren langfristig Stress für alle Beteiligten.
            </p>
          </div>
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 border-b border-slate-100 pb-4">Schritt für Schritt Übungen</h3>
            <div className="overflow-hidden">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="sm:w-1/3 font-bold text-gray-900 text-lg">Körper-Check</div>
                  <div className="sm:w-2/3 space-y-2">
                    <p className="text-gray-700 font-medium">Der Welpe lernt, sich überall entspannt anfassen zu lassen.</p>
                    <p className="text-sm text-gray-500">Kurze Einheiten, viel Lob und kleine Belohnungen.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="sm:w-1/3 font-bold text-gray-900 text-lg">Ohren & Augen</div>
                  <div className="sm:w-2/3 space-y-2">
                    <p className="text-gray-700 font-medium">Vorbereitung auf Untersuchungen und die Gabe von Medikamenten.</p>
                    <p className="text-sm text-gray-500">Sanfte Berührungen, niemals den Hund zwingen oder fixieren.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="sm:w-1/3 font-bold text-gray-900 text-lg">Pfotenpflege</div>
                  <div className="sm:w-2/3 space-y-2">
                    <p className="text-gray-700 font-medium">Krallen schneiden und Pfoten kontrollieren ohne Stress.</p>
                    <p className="text-sm text-gray-500">Paw-Target aufbauen und sehr kleinschrittig positiv verknüpfen.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="sm:w-1/3 font-bold text-gray-900 text-lg">Auf die Waage</div>
                  <div className="sm:w-2/3 space-y-2">
                    <p className="text-gray-700 font-medium">Der Hund lernt, ruhig auf der Waage zu stehen.</p>
                    <p className="text-sm text-gray-500">Mit einem &quot;Plattform&quot;-Signal und viel Ruhe trainieren.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Shorts Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Kurze Trainings-Einblicke</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Entdecke in diesen kurzen Videos, wie viel Freude und Lernfortschritt unsere Welpen im Training erleben.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12 justify-center max-w-3xl mx-auto">
            <div className="flex justify-center flex-1">
              <iframe
                width="100%"
                className="max-w-[315px] h-[560px] rounded-3xl shadow-xl border border-slate-100"
                src="https://www.youtube.com/embed/e-V0mN-gP-I?si=vfI702gsB-6WWNRV"
                title="YouTube short"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-center flex-1">
              <iframe
                width="100%"
                className="max-w-[315px] h-[560px] rounded-3xl shadow-xl border border-slate-100"
                src="https://www.youtube.com/embed/-ORnMT0oMHk?si=xfppXZQC6Dr-ukZ7"
                title="YouTube short"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50/50 py-24 sm:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Häufig gestellte Fragen (FAQ)</h2>
            <p className="text-lg text-gray-600">Die wichtigsten Antworten rund um den Start in der Welpenschule Schwechat.</p>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-6">
            {[
              {
                q: "Ab wann ist die Welpenschule sinnvoll?",
                a: "Der ideale Zeitpunkt ist so früh wie möglich, typischerweise ab der 8. Lebenswoche, kurz nachdem der Welpe eingezogen ist. Die sensible Phase der Sozialisierung endet etwa mit der 16. Woche. In dieser Zeit ist es entscheidend, positive Erfahrungen mit Artgenossen und Umweltreizen zu sammeln. Voraussetzung ist die erste Grundimmunisierung."
              },
              {
                q: "Was kostet die Welpenschule?",
                a: "Unser Welpen-Gruppenkurs umfasst 6 Trainingseinheiten zu je einer Stunde und kostet 195€. Dieser Preis beinhaltet praktisches Training, theoretische Grundlagen und individuelle Betreuung in Kleingruppen. Wir bieten auch Einzelstunden für Welpeneltern zu einem Sonderpreis von 55€ an."
              },
              {
                q: "Wie lange dauert ein Welpenkurs?",
                a: "Ein Kurs erstreckt sich über 6 Wochen mit einer wöchentlichen Einheit von 60 Minuten. Das ist ideal, um Bindung und Grundsignale aufzubauen, ohne den Hund zu überfordern. Danach kannst du selbstbewusst weiter trainieren oder einen Junghundekurs besuchen."
              },
              {
                q: "Was lernt mein Welpe in der Hundeschule?",
                a: "Dein Hund lernt weit mehr als Grundkommandos: Sozialisierung mit Artgenossen, Rückruf, Gehen an der lockeren Leine via positiver Verstärkung und Medical Training. Du als Halter lernst, die Körpersprache deines Welpen zu deuten und souverän aufzutreten."
              }
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

      {/* Calendar and Pricing Section */}
      <section id="kurse" className="bg-white py-24 sm:py-32 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-block p-2 px-4 rounded-full bg-purple-100 text-purple-800 font-bold text-sm uppercase tracking-widest mb-4">Termine</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Kurstermine & Details</h2>
            <p className="text-lg text-gray-600">Finde den passenden Termin für dich und deinen Welpen.</p>
          </div>
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-10 rounded-3xl text-center mb-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full blur-[80px] opacity-40"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Dein Welpen-Gruppenkurs</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-300 font-medium text-lg">
                <span className="bg-slate-700/50 px-4 py-2 rounded-lg">6 Einheiten á 1 Std.</span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-lg font-bold border border-yellow-500/30">195€</span>
              </div>
              <p className="text-slate-400 mt-6 font-medium">In jedem Monat startet mindestens ein neuer Kurs in Schwechat und Umgebung.</p>
            </div>
          </div>
          <div className="w-full bg-slate-50 p-4 rounded-3xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] border border-slate-100">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=3ead296f16c217a222ffaf95ecb469b3f7e1cf83308d7051aec6590fd327167d%40group.calendar.google.com&ctz=Europe%2FVienna"
              style={{ border: 0, width: '100%', height: '600px' }}
              className="rounded-2xl"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-slate-50/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Was unsere Kunden sagen</h2>
            <p className="text-lg text-gray-600">Echte Erfahrungen von glücklichen Mensch-Hund-Teams.</p>
          </div>
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
            <Reviews />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600"></div>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-16 rounded-[40px] shadow-2xl flex flex-col md:flex-row items-center gap-12 sm:gap-16 border border-slate-700">
            <div className="w-full md:w-5/12 relative">
              <div className="absolute inset-0 bg-yellow-500 rounded-full blur-3xl opacity-20 transform -translate-y-4"></div>
              <Image
                src="https://www.willenskraft.co.at/wp-content/uploads/2020/02/Hundeschule-Willenskraft-ButtonFINAL.png"
                alt="Jessica Pusch - Hundeschule Willenskraft"
                width={400}
                height={400}
                className="rounded-full mx-auto object-cover aspect-square relative z-10 border-4 border-slate-700 shadow-2xl"
              />
            </div>
            <div className="w-full md:w-7/12 text-center md:text-left relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Bereit für den Start?</h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">Melde dich und deinen Welpen jetzt für ein erstes Kennenlernen in der <span className="text-yellow-400 font-bold drop-shadow-sm">Welpenschule Schwechat</span> an.</p>

              <div className="flex flex-col sm:flex-row gap-6 items-center md:justify-start justify-center">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold shadow-xl hover:shadow-2xl rounded-full px-8 py-6 text-lg w-full sm:w-auto transition-all hover:scale-105">
                  <Link href="/kontakt">Zur Anmeldung</Link>
                </Button>
                <div className="text-slate-400 font-medium">oder</div>
                <a href="tel:+436643903673" className="inline-flex items-center gap-2 text-white font-bold bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-full border border-slate-600 transition-colors">
                  +43 664 3903673
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WillenskraftSection />
    </div>
  );
}
