export default function Impressum() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Impressum</h1>
            <div className="space-y-4 text-lg">
                <p>Informationspflicht laut § 5 E-Commerce-Gesetz, § 14 Unternehmensgesetzbuch, § 63 Gewerbeordnung und Offenlegungspflicht laut § 25 Mediengesetz.</p>
                
                <h2 className="text-2xl font-semibold mt-6">NUR. Marketing GmbH</h2>
                <p>Bogengasse 1<br/>9800 Spittal an der Drau</p>
                
                <p>
                    <strong>Tel.:</strong> <a href="tel:+436645322221" className="text-yellow-500 hover:underline">+43 664 5322221</a><br/>
                    <strong>E-Mail:</strong> <a href="mailto:kommunikation@nur.marketing" className="text-yellow-500 hover:underline">kommunikation@nur.marketing</a>
                </p>

                <p>
                    <strong>UID-Nummer:</strong> ATU76522327<br />
                    <strong>Firmenbuchnummer:</strong> FN 549728 z
                </p>

                <p>
                    <strong>Berufsrecht:</strong> Gewerbeordnung: <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">www.ris.bka.gv.at</a>
                </p>

                <h2 className="text-2xl font-semibold mt-6">EU-Streitschlichtung</h2>
                <p>
                    Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
                    Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter <a href="http://ec.europa.eu/odr?tid=121872890" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">http://ec.europa.eu/odr?tid=121872890</a> zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
                </p>
                <p>
                    Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </div>
        </div>
    );
}