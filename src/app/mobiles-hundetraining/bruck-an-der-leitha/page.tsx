import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Star, Users, Zap, Heart, ArrowLeft } from 'lucide-react';
import Reviews from '@/components/Reviews';
import SeoRegionSection from '@/components/SeoRegionSection';
import WillenskraftSection from '@/components/WillenskraftSection';
import { getLocationConfig } from '@/components/WillenskraftSection/config/locations';

const mobileTrainingPillars = [
  { icon: <Heart className="text-yellow-500" />, title: "Individuelles Training", description: "Wir gehen gezielt auf deine Wünsche und die Bedürfnisse deines Hundes ein – für maximale Erfolge." },
  { icon: <Zap className="text-yellow-500" />, title: "Training in gewohnter Umgebung", description: "Dein Hund lernt dort, wo das Gelernte am Ende sitzen muss: in seinem Alltag, bei dir zuhause." },
  { icon: <Users className="text-yellow-500" />, title: "Flexible Terminvereinbarung", description: "Kein Stress, keine Anfahrt. Wir richten uns nach deinem Zeitplan und kommen zu dir." },
  { icon: <CheckCircle2 className="text-yellow-500" />, title: "Alltagsnahe Probleme lösen", description: "Ob Leinenführigkeit, Rückruf oder Begegnungen – wir arbeiten an konkreten Herausforderungen." },
  { icon: <Star className="text-yellow-500" />, title: "Stärkung der Bindung", description: "Durch das gemeinsame Training in vertrauter Atmosphäre wird die Beziehung zwischen dir und deinem Hund gefestigt." },
]

export default function MobileHundetrainingBruckPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="https://www.willenskraft.co.at/wp-content/uploads/2020/06/DSC09452-845x684.jpg"
          alt="Mobiles Hundetraining in Bruck an der Leitha"
          fill
          className="object-cover absolute z-0 brightness-75"
          priority
        />
        <div className="relative z-20 text-center p-6 md:p-8 bg-black/20 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Mobiles Hundetraining in <span className="text-yellow-400">Bruck an der Leitha</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Ganzheitliches & gewaltfreies Hundetraining – flexibel bei dir zuhause oder an deinem Wunschort.
          </p>
          <Button asChild size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/kontakt?service=mobiles-training-bruck">Jetzt mobiles Training anfragen</Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Du wünschst dir individuelles Hundetraining, das sich nach dir richtet?</h2>
          <p className="text-lg text-gray-700">
            Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Bruck an der Leitha und Umgebung die perfekte Lösung. Wir kommen zu dir nach Hause und gestalten das Training ganz nach deinen Bedürfnissen.
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
                <p className="text-lg mt-2">Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause oder auf euren gewohnten Spazierrunden. So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen. Wir arbeiten gemeinsam an Leinenführigkeit, entspannten Hundebegegnungen, einem sicheren Rückruf und vielem mehr.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Für wen ist mobiles Training geeignet?</h3>
                <p className="text-lg mt-2">Mobiles Hundetraining eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach, um die Grundlagen in einer stressfreien 1:1-Betreuung zu festigen.</p>
              </div>
            </div>
            <div>
              <Image
                src="https://www.willenskraft.co.at/wp-content/uploads/2020/06/DSC09452-845x684.jpg"
                alt="Hund und Besitzerin trainieren zuhause in Bruck an der Leitha"
                width={600}
                height={600}
                className="rounded-lg shadow-xl object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20">
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
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
              <Link href="/mobiles-hundetraining">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Zurück zur Übersicht
              </Link>
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
                <div className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">Welpentraining</h4>
                      <p className="text-gray-600">Junge Hunde benötigen klare Grenzen und Konsequenz. Die Sozialisationsphase ist entscheidend für ein ausgeglichenes Sozialverhalten.</p>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">Tierschutzhunde</h4>
                      <p className="text-gray-600">Hunde mit schwieriger Vergangenheit brauchen geduldigen Aufbau von Vertrauen und Sicherheit in ihrer neuen Umgebung.</p>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">Leinenführigkeit</h4>
                      <p className="text-gray-600">Ziehen an der Leine macht Spaziergänge zum Stress. Entspanntes Gehen nebeneinander erfordert Konsequenz und die richtigen Techniken.</p>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">Rückruf</h4>
                      <p className="text-gray-600">Ein zuverlässiger Rückruf ist lebenswichtig. Viele Hunde lassen sich durch Reize ablenken und kommen nicht auf Kommando.</p>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">Alltagstauglichkeit</h4>
                      <p className="text-gray-600">Hunde sollen sich in verschiedenen Situationen sicher und ruhig verhalten – vom Tierarztbesuch bis zur Begegnung mit Artgenossen.</p>
                    </div>
                  </div>
                </div>
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
                <div className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">Welpenschule</h4>
                      <p className="text-gray-600">Spielerisches Lernen in kleinen Gruppen. Wir vermitteln Grundkommandos und fördern die richtige Sozialisierung für einen souveränen Hund.</p>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">Einzeltraining</h4>
                      <p className="text-gray-600">Individuelle Betreuung für spezifische Probleme. Wir entwickeln maßgeschneiderte Lösungsstrategien für deine besondere Situation.</p>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">Leinenführigkeitstraining</h4>
                      <p className="text-gray-600">Positive Verstärkungstechniken für lockeres Gehen. Dein Hund lernt, auf dich zu achten und freiwillig bei dir zu bleiben.</p>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">Rückruftraining</h4>
                      <p className="text-gray-600">Schrittweiser Aufbau zuverlässiger Kommandos. Wir trainieren mit unterschiedlichen Ablenkungen für einen sicheren Rückruf in jeder Situation.</p>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-1">Alltagstraining</h4>
                      <p className="text-gray-600">Praktische Übungen für reale Lebenssituationen. Wir bereiten dich und deinen Hund auf alltägliche Herausforderungen vor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-400 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bereit für die Veränderung?</h3>
              <p className="text-gray-700 mb-6">Gemeinsam finden wir den richtigen Weg für dich und deinen Hund</p>
              <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-900 text-white font-bold shadow-lg">
                <Link href="/kontakt?service=mobiles-training-bruck">Jetzt Training anfragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Willenskraft Section */}
      <WillenskraftSection content={getLocationConfig('bruck-an-der-leitha')} />

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
              ></iframe>
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
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Region Section */}
      <SeoRegionSection region="Bruck an der Leitha" />

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
              <Link href="/kontakt?service=mobiles-training-bruck">Jetzt anfragen</Link>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Was unsere Kunden sagen</h2>
            <p className="text-lg text-gray-700">Echte Erfahrungen von glücklichen Mensch-Hund-Teams.</p>
          </div>
          <Reviews />
        </div>
      </section>

    </div>
  );
}
