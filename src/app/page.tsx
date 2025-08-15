import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Star, Users, Zap, Heart, GitCommit } from 'lucide-react';
import Reviews from '@/components/Reviews';

const willenskraftPillars = [
    { icon: <Heart className="text-yellow-500" />, title: "Grundbedürfnisse", description: "Futter, Schlaf & Sicherheit: Wir zeigen dir, wie du die Basis für Gesundheit und Wohlbefinden deines Welpen sicherstellst." },
    { icon: <Zap className="text-yellow-500" />, title: "Kommunikation", description: "Körpersprache, Mimik und Stimme verstehen: Lerne die Sprache deines Welpen und baue Vertrauen auf." },
    { icon: <Users className="text-yellow-500" />, title: "Sozialisierung", description: "Sicher im Umgang mit Artgenossen und Menschen: Wichtige Erlebnisse in der Prägungsphase für einen souveränen Hund." },
    { icon: <CheckCircle2 className="text-yellow-500" />, title: "Positiver Signalaufbau", description: "Ohne Zwang & Gewalt: Sitz, Platz & Bleib mit Methoden der positiven Verstärkung nachhaltig erlernen." },
    { icon: <Star className="text-yellow-500" />, title: "Spiel & Bindung", description: "Kleine Gruppen, großer Spaß: Gemeinsame Spieleinheiten und Freilauf fördern Bindung und Sozialkompetenz." },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <Image
          src="/Welpenschule Neusiedl.webp"
          alt="Glücklicher Welpe auf einer Wiese in Neusiedl am See"
          fill
          className="object-cover absolute z-0 brightness-75"
          priority
        />
        <div className="relative z-20 text-center p-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Welpenschule Neusiedl am See mit <span className="text-yellow-400">Willenskraft</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Dein ganzheitlicher und gewaltfreier Weg zum Dream-Team. Für Welpen bis 5 Monate im Bezirk Bruck an der Leitha, Wien & Nordburgenland.
          </p>
          <Button asChild size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/kontakt">Melde dich und deinen Welpen an</Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ist gerade ein Welpe bei dir eingezogen?</h2>
          <p className="text-lg text-gray-700">
            Du hast sicher viele Fragen zur Erziehung, Sozialisierung und Körpersprache. Du möchtest deinen Welpen optimal auf seinen zukünftigen Alltag vorbereiten und die richtigen Spielgefährten finden? Dann bist du in der Welpenschule mit Willenskraft genau richtig! Wir unterstützen dich dabei, eine harmonische Beziehung zu deinem neuen Familienmitglied aufzubauen.
          </p>
        </div>
      </section>
      
        {/* Details Section */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold">Die Sprache deines Hundes verstehen</h3>
                        <p className="text-lg mt-2">Hunde kommunizieren anders als wir Menschen. In unserer Welpenschule lernst du, die Körpersprache, Mimik und Lautäußerungen deines Vierbeiners richtig zu deuten. Gleichzeitig zeigen wir dir, wie du mit deinem Hund so kommunizierst, dass er dich versteht. Das ist die Basis für tiefes Vertrauen und eine unzertrennliche Bindung.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Sozialisierung von Anfang an</h3>
                        <p className="text-lg mt-2">Im Rahmen unserer Kurse trifft dein Welpe auf andere Hunde und Menschen in einer sicheren und kontrollierten Umgebung. Diese Begegnungen sind entscheidend, damit dein Hund lernt, sich in diversen Umgebungen und mit unterschiedlichen Reizen souverän und entspannt zu verhalten.</p>
                    </div>
                </div>
                <div>
                    <Image
                        src="https://www.willenskraft.co.at/wp-content/uploads/2024/05/Hundetrainer-Schwechat-Welpenschule.webp"
                        alt="Welpen lernen Kommunikation in der Hundeschule"
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
             <h2 className="text-3xl font-bold mb-4">Die 5 Bausteine der Willenskraft Welpenschule</h2>
             <p className="text-lg text-gray-700">Ganzheitlich, gewaltfrei und individuell – entdecke die Säulen für einen erfolgreichen Start mit deinem Welpen!</p>
           </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {willenskraftPillars.map((pillar) => (
              <Card key={pillar.title} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">{pillar.icon}{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
             <Card className="bg-yellow-400 md:col-span-2 lg:col-span-1 text-center p-6">
                <CardHeader>
                  <CardTitle>Dein Sonderangebot</CardTitle>
                    <CardDescription className="text-black">Exklusiv für Welpeneltern</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center">
                  <p className="font-bold text-lg">Eine Einzelstunde zum Sonderpreis</p>
                  <p className="text-4xl font-extrabold my-2">nur 55€</p>
                  <p>Perfekt, um spezifische Fragen zu klären und deinem Welpen den besten Start zu ermöglichen.</p>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Training Methods Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
             <div className="text-center max-w-3xl mx-auto mb-12">
               <h2 className="text-3xl font-bold mb-4">Training mit Freude und Verstand</h2>
                <p className="text-lg text-gray-700">Wir setzen auf moderne und wissenschaftlich fundierte Methoden, die auf positiver Verstärkung basieren. Dein Welpe lernt mit Spaß und ohne Zwang.</p>
             </div>
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div>
                    <Image
                        src="https://www.willenskraft.co.at/wp-content/uploads/2024/05/Hundeschule-Bad-Deutsch-Altenburg-Welpentraining-845x684.webp"
                        alt="Training mit positiver Verstärkung"
                        width={600}
                        height={600}
                        className="rounded-lg shadow-xl object-cover aspect-square"
                    />
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold">Positive Verstärkung & der richtige Umgang</h3>
                        <p className="text-lg mt-2">Wir konditionieren deinen Welpen auf die ersten wichtigen Signale wie „Sitz“, „Platz“ und „Bleib“. Zudem sind der richtige Umgang mit Leine und Schleppleine sowie der Aufbau eines zuverlässigen Rückrufs zentrale Bestandteile unseres Trainings. Wir zeigen dir, wie du deinen Hund auf eine Weise rufst, dass er gerne zu dir zurückkommt.</p>
                    </div>
                     <div>
                        <h3 className="text-2xl font-bold">Kleine Gruppen, große Wirkung</h3>
                        <p className="text-lg mt-2">Um eine qualitativ hochwertige Betreuung zu gewährleisten, ist die Anzahl auf maximal <b>vier Mensch-Hund-Teams</b> beschränkt. So erhält jedes Team die nötige Aufmerksamkeit, während wir an sorgfältig ausgewählten Standorten trainieren.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Rassen Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold mb-4">Jeder Welpe ist einzigartig</h2>
             <p className="text-lg text-gray-700">Ob kleiner Terrier oder großer Schäferhund – unterschiedliche Rassen haben unterschiedliche Bedürfnisse und Veranlagungen. Wir gehen individuell auf deinen Welpen ein und passen das Training an seine spezifischen Eigenschaften an, um das Beste aus ihm herauszuholen.</p>
           </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader><CardTitle>Familienhunde</CardTitle></CardHeader>
                <CardContent><p>Wir fördern gezielt die Eigenschaften, die einen entspannten Alltagsbegleiter ausmachen, wie Gelassenheit, soziale Kompetenz und eine starke Bindung zur Familie.</p></CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader><CardTitle>Arbeits- & Hütehunde</CardTitle></CardHeader>
                <CardContent><p>Diese intelligenten Hunde brauchen eine Aufgabe. Wir zeigen dir, wie du ihren Arbeitswillen in die richtigen Bahnen lenkst und für eine artgerechte Auslastung sorgst.</p></CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader><CardTitle>Jagdhunde</CardTitle></CardHeader>
                <CardContent><p>Der Jagdinstinkt ist tief verankert. Unser Training legt den Fokus auf Impulskontrolle und einen zuverlässigen Rückruf, damit Spaziergänge entspannt bleiben.</p></CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Medical Training Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
             <div className="text-center max-w-3xl mx-auto mb-12">
               <h2 className="text-3xl font-bold mb-4">Medical Training: Stressfreie Tierarztbesuche</h2>
                <p className="text-lg text-gray-700">Vorbereitung ist alles. Mit gezieltem Medical Training lernt dein Welpe von Anfang an, dass Untersuchungen und Behandlungen nichts Schlimmes sind. Das reduziert Stress für alle Beteiligten.</p>
             </div>
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div>
                    <Image
                        src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Medical Training mit einem Welpen"
                        width={600}
                        height={600}
                        className="rounded-lg shadow-xl object-cover aspect-square"
                    />
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold">Kooperation statt Zwang</h3>
                        <p className="text-lg mt-2">Wir üben auf spielerische Weise wichtige Handgriffe: das Anfassen der Ohren und Pfoten, das Zeigen der Zähne und das freiwillige Stehen auf der Waage. Dein Hund lernt, bei diesen Prozeduren aktiv mitzuarbeiten.</p>
                    </div>
                     <div>
                        <h3 className="text-2xl font-bold">Eine Investition in die Zukunft</h3>
                        <p className="text-lg mt-2">Ein gut vorbereiteter Hund ist beim Tierarzt entspannter, was Untersuchungen erleichtert und die Bindung zu dir stärkt. Du schaffst Vertrauen, das ein Leben lang hält.</p>
                    </div>
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
      
      {/* Calendar and Pricing Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Kurstermine & Details</h2>
                <p className="text-lg text-gray-700">Finde den passenden Termin für deinen Welpen.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center mb-12 shadow-lg">
                <h3 className="text-2xl font-bold mb-3">Dein Welpen-Gruppenkurs</h3>
                <p className="text-xl font-semibold text-gray-800">6 Einheiten á 1 Std. – 195€</p>
                <p className="text-md text-gray-600 mt-2">In jedem Monat startet mindestens ein neuer Kurs.</p>
            </div>
            <div className="w-full max-w-4xl mx-auto">
                <iframe 
                    src="https://calendar.google.com/calendar/embed?src=ae98e030dbc6780ab9fc5e7b8a27a55122d8b594d1e42eba54d5a154aa9e7f5e%40group.calendar.google.com&ctz=Europe%2FVienna" 
                    style={{border: 0, width: '100%', height: '600px'}} 
                    className="rounded-lg shadow-xl"
                    frameBorder="0" 
                    scrolling="no"
                ></iframe>
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
                <h2 className="text-3xl font-bold mb-4">Bereit für den Start?</h2>
                <p className="text-xl mb-6">Melde dich und deinen Welpen jetzt für ein erstes Kennenlernen in der <span className="font-bold">Welpenschule Neusiedl am See</span> an.</p>
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                    <Link href="/kontakt">Jetzt zur Welpenschule anmelden</Link>
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
    </div>
  );
}
