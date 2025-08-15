import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Star, Users, Zap, Heart } from 'lucide-react';
import Reviews from '@/components/Reviews';

const willenskraftPillars = [
    { icon: <Heart className="text-yellow-500" />, title: "Basis-Wissen", description: "Eine solide Grundlage schaffen: Wir behandeln die essenziellen Themen wie Ernährung, Ruhephasen und Sicherheit für das Wohlbefinden Ihres Welpen." },
    { icon: <Zap className="text-yellow-500" />, title: "Verständigung", description: "Lernen Sie, die Signale Ihres Welpen zu deuten und klar zu kommunizieren, um eine vertrauensvolle Beziehung aufzubauen." },
    { icon: <Users className="text-yellow-500" />, title: "Alltagstauglichkeit", description: "Sichere Begegnungen mit Menschen und anderen Hunden schaffen die Voraussetzung für einen entspannten und souveränen Begleiter." },
    { icon: <CheckCircle2 className="text-yellow-500" />, title: "Gewaltfreies Training", description: "Mit positiver Verstärkung vermitteln wir die ersten wichtigen Signale wie Sitz und Platz – für nachhaltigen Lernerfolg ohne Druck." },
    { icon: <Star className="text-yellow-500" />, title: "Starke Bindung", description: "Gezielte Spiele und gemeinsame Aktivitäten in kleinen Gruppen stärken die Sozialkompetenz und die Bindung zwischen Ihnen und Ihrem Hund." },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <Image
          src="/Welpenschule-Schwechat, Welpenkurs Hero.webp"
          alt="Welpenschule Schwechat Hero: Glücklicher Welpe auf einer Wiese"
          fill
          className="object-cover absolute z-0 brightness-75"
          priority
        />
        <div className="relative z-20 text-center p-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Welpenschule Schwechat: <span className="text-yellow-400">Ein liebevoller Start</span> für deinen Vierbeiner
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Mit professionellem Training und artgerechter Sozialisierung legen wir in Schwechat und Umgebung den Grundstein für ein harmonisches Hundeleben.
          </p>
          <Button asChild size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/kontakt">Jetzt Kursplatz sichern</Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ein neues Familienmitglied – Was nun?</h2>
          <p className="text-lg text-gray-700">
            Der Einzug eines Welpen ist aufregend und wirft viele Fragen auf. In unserer Welpenschule in Schwechat unterstützen wir Sie dabei, von Beginn an die richtigen Weichen für ein harmonisches Zusammenleben zu stellen. Lassen Sie uns gemeinsam eine stabile und liebevolle Beziehung zu Ihrem neuen Begleiter aufbauen.
          </p>
        </div>
      </section>
      
        {/* Details Section */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold">Hundesprache richtig deuten</h3>
                        <p className="text-lg mt-2">Die Kommunikation zwischen Mensch und Hund ist der Schlüssel zu einer starken Bindung. Wir lehren Sie, die feinen Signale der Körpersprache und die Lautäußerungen Ihres Welpen korrekt zu interpretieren und wie Sie klar mit Ihrem Hund kommunizieren. Dies schafft eine Grundlage für gegenseitiges Verständnis und Vertrauen.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Behutsame Sozialisierung</h3>
                        <p className="text-lg mt-2">In unseren Kursen ermöglichen wir Ihrem Welpen positive erste Kontakte mit Artgenossen und neuen Menschen in einem geschützten Rahmen. Solche frühen Erfahrungen sind essenziell, damit Ihr Hund ein ausgeglichenes und selbstsicheres Verhalten in verschiedensten Alltagssituationen entwickelt.</p>
                    </div>
                </div>
                <div>
                    <Image
                        src="/Schwechat-Welpenschule Content.webp"
                        alt="Welpenschule Schwechat: Welpen lernen Kommunikation"
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
             <h2 className="text-3xl font-bold mb-4">Unser 5-Säulen-Erfolgskonzept</h2>
             <p className="text-lg text-gray-700">Unser Training basiert auf einem ganzheitlichen Ansatz, der individuell auf die Bedürfnisse Ihres Welpen zugeschnitten ist – für einen gelungenen Start ins Leben.</p>
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
                <CardContent className="flex flex-col items-center justify-center text-center">
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
               <h2 className="text-3xl font-bold mb-4">Lernen mit Spaß und positiver Bestärkung</h2>
                <p className="text-lg text-gray-700">Wir arbeiten ausschließlich mit modernen, wissenschaftlich erprobten Trainingsmethoden. Im Mittelpunkt steht die positive Verstärkung, damit Ihr Welpe mit Freude und Motivation lernt.</p>
             </div>
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div>
                    <Image
                        src="https://www.willenskraft.co.at/wp-content/uploads/2024/05/Hundeschule-Bad-Deutsch-Altenburg-Welpentraining-845x684.webp"
                        alt="Welpenschule Schwechat: Training mit positiver Verstärkung"
                        width={600}
                        height={600}
                        className="rounded-lg shadow-xl object-cover aspect-square"
                    />
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold">Signalaufbau und Leinenführigkeit</h3>
                        <p className="text-lg mt-2">Wir legen den Grundstein für wichtige Kommandos wie „Sitz“ oder „Hier“. Ein weiterer Fokus liegt auf der korrekten Handhabung der Leine, um von Anfang an entspannte Spaziergänge zu fördern. Ein zuverlässiger Rückruf, der auf positiver Bestätigung beruht, ist ebenfalls zentraler Teil jeder Stunde.</p>
                    </div>
                     <div>
                        <h3 className="text-2xl font-bold">Individuelle Förderung in Kleingruppen</h3>
                        <p className="text-lg mt-2">Qualität vor Quantität: Unsere Kurse sind auf maximal <b>vier Teams</b> begrenzt. Diese kleine Gruppengröße ermöglicht es uns, auf jedes Mensch-Hund-Paar individuell einzugehen und an sorgfältig ausgewählten Orten zu üben, die den Lernfortschritt optimal unterstützen.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Rassen Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold mb-4">Für jede Rasse das richtige Konzept</h2>
             <p className="text-lg text-gray-700">Vom Zwergpudel bis zur Dogge – jede Hunderasse bringt ihre eigenen charakteristischen Merkmale mit. Unser Training berücksichtigt diese individuellen Veranlagungen und wird maßgeschneidert, um die Stärken Ihres Welpen optimal zu fördern.</p>
           </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader><CardTitle>Begleit- & Familienhunde</CardTitle></CardHeader>
                <CardContent><p>Hier stärken wir die soziale Verträglichkeit, innere Ruhe und die enge Bindung zum Menschen – alles, was einen tollen Familienhund auszeichnet.</p></CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader><CardTitle>Hüte- & Arbeitshunde</CardTitle></CardHeader>
                <CardContent><p>Intelligente und aktive Hunde benötigen mentale und körperliche Auslastung. Wir leiten ihre Energie in produktive Bahnen und sorgen für eine artgerechte Beschäftigung.</p></CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader><CardTitle>Passionierte Jagdhunde</CardTitle></CardHeader>
                <CardContent><p>Der angeborene Jagdinstinkt erfordert gezieltes Training. Wir konzentrieren uns auf hohe Impulskontrolle und verlässliche Abrufbarkeit für stressfreie Ausflüge in die Natur.</p></CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Medical Training Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
             <div className="text-center max-w-3xl mx-auto mb-12">
               <h2 className="text-3xl font-bold mb-4">Medical Training: Gelassen beim Tierarzt</h2>
                <p className="text-lg text-gray-700">Gute Vorbereitung ist der Schlüssel. Durch gezieltes Medical Training erfährt Ihr Welpe, dass Untersuchungen und Behandlungen stressfrei ablaufen können. Das sorgt für mehr Entspannung auf beiden Seiten der Leine.</p>
             </div>
             <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow">
                    <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <tr>
                            <th className="py-3 px-6 text-left">Trainingsziel</th>
                            <th className="py-3 px-6 text-left">Methode</th>
                            <th className="py-3 px-6 text-center">Vorteil</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">Berührungen an Ohren & Pfoten</td>
                            <td className="py-3 px-6 text-left">Wir schaffen positive Assoziationen, indem wir jede Berührung belohnen.</td>
                            <td className="py-3 px-6 text-center">Vereinfacht Pflegemaßnahmen und Untersuchungen.</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left">Gebisskontrolle</td>
                            <td className="py-3 px-6 text-left">Das Anheben der Lefzen wird spielerisch trainiert und gelobt.</td>
                            <td className="py-3 px-6 text-center">Ermöglicht eine unkomplizierte Zahninspektion.</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left">Gang zur Waage</td>
                            <td className="py-3 px-6 text-left">Das selbstständige Betreten der Waage wird freudig bestärkt.</td>
                            <td className="py-3 px-6 text-center">Sorgt für entspanntes Wiegen und exakte Kontrolle.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen zur Welpenschule Schwechat</h2>
            <p className="text-lg text-gray-700">Die wichtigsten Antworten für einen perfekten Start mit Ihrem neuen Familienmitglied.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6 border-b pb-6">
              <h3 itemProp="name" className="text-xl font-semibold">Ab wann ist die Welpenschule in Schwechat sinnvoll?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="mt-2 text-gray-700">
                <p itemProp="text">Der ideale Zeitpunkt für den Start in unserer Welpenschule in Schwechat ist so früh wie möglich, typischerweise ab der 8. Lebenswoche, kurz nachdem der Welpe bei Ihnen eingezogen ist. Wichtig ist, dass der Welpe seine erste Grundimmunisierung erhalten hat, um ihn und die anderen Kursteilnehmer zu schützen. Die frühe Sozialisierungsphase bis zur 16. Woche ist entscheidend für die Entwicklung eines ausgeglichenen und sozial kompetenten Hundes. In dieser prägenden Zeit lernt Ihr Welpe den richtigen Umgang mit Artgenossen, Menschen und verschiedenen Umweltreizen in einem sicheren und kontrollierten Rahmen. Ein früher Beginn legt den Grundstein für ein entspanntes Zusammenleben und beugt späteren Verhaltensproblemen effektiv vor.</p>
              </div>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6 border-b pb-6">
              <h3 itemProp="name" className="text-xl font-semibold">Was kostet die Welpenschule?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="mt-2 text-gray-700">
                <p itemProp="text">Die Kosten für unsere Welpenschule sind transparent gestaltet. Unser umfassendes Kurspaket, das 6 Trainingseinheiten à 60 Minuten umfasst, kostet 195€. Diese Investition deckt nicht nur das professionell angeleitete Training in Kleingruppen ab, sondern bietet Ihnen auch die Sicherheit, dass Ihr Welpe unter optimalen Bedingungen lernt. Wir legen Wert auf individuelle Betreuung, weshalb unsere Gruppen bewusst klein gehalten werden. Zusätzlich bieten wir für spezifische Anliegen eine vergünstigte Einzelstunde für nur 55€ an, um gezielt auf Ihre Fragen einzugehen. Qualität und eine solide Ausbildung für einen gelungenen Start ins Hundeleben stehen bei uns an erster Stelle.</p>
              </div>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
              <h3 itemProp="name" className="text-xl font-semibold">Was lernt mein Welpe in der Hundeschule?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="mt-2 text-gray-700">
                <p itemProp="text">In unserer Welpenschule in Schwechat lernt Ihr Hund weit mehr als nur &quot;Sitz&quot; und &quot;Platz&quot;. Unser 5-Säulen-Konzept ist ganzheitlich aufgebaut: Wir fördern die richtige Kommunikation zwischen Ihnen und Ihrem Welpen und legen den Grundstein für eine alltagstaugliche Sozialisierung. Ihr Welpe lernt, souverän auf andere Hunde und Menschen zu reagieren. Das Training basiert ausschließlich auf positiver Verstärkung, um eine starke, vertrauensvolle Bindung aufzubauen. Wichtige Inhalte sind der Signalaufbau (Rückruf, Leinenführigkeit), Medical Training zur Vorbereitung auf Tierarztbesuche und das Setzen von klaren Grenzen. Ziel ist es, Ihnen das Wissen zu vermitteln, das Sie für ein harmonisches und glückliches Zusammenleben mit Ihrem neuen Begleiter benötigen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Erfahrungen unserer Teilnehmer</h2>
            <p className="text-lg text-gray-700">Lesen Sie die Rückmeldungen von zufriedenen Absolventen unserer Welpenkurse.</p>
          </div>
          <Reviews />
        </div>
      </section>
      
      {/* Calendar and Pricing Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Kursübersicht & Konditionen</h2>
                <p className="text-lg text-gray-700">Hier finden Sie alle Informationen zu unseren kommenden Welpenkursen.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center mb-12 shadow-lg">
                <h3 className="text-2xl font-bold mb-3">Welpen-Gruppenkurs Paket</h3>
                <p className="text-xl font-semibold text-gray-800">6 Einheiten je 60 Minuten – 195€</p>
                <p className="text-md text-gray-600 mt-2">Jeden Monat beginnen neue Kurse, um Ihnen Flexibilität zu bieten.</p>
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
                    alt="Jessica Pusch - Trainerin der Welpenschule Schwechat"
                    width={300}
                    height={300}
                    className="rounded-full mx-auto object-cover aspect-square"
                />
            </div>
           <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Starten Sie jetzt ins Abenteuer</h2>
                <p className="text-xl mb-6">Vereinbaren Sie ein erstes Kennenlernen für sich und Ihren Welpen in der <span className="font-bold">Welpenschule Schwechat</span>.</p>
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                    <Link href="/kontakt">Kursplatz anfragen</Link>
                </Button>
                <div className="mt-6">
                    <p className="font-semibold">Für eine persönliche Beratung:</p>
                    <p className="text-lg text-gray-700 mt-2">
                        Jessica Pusch | <a href="tel:+436643903673" className="hover:text-yellow-500">+43 664 3903673</a>
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
