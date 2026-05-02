export default function Impressum() {
  return (
    <div className="bg-background">
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="wk-eyebrow mb-5">Rechtliches</span>
          <h1 className="wk-display text-4xl md:text-6xl text-ink-950 mb-10">Impressum.</h1>

          <div className="wk-card p-8 sm:p-12 space-y-6 text-ink-700 leading-relaxed">
            <p className="text-sm text-ink-500">
              Informationspflicht laut § 5 E-Commerce-Gesetz, § 14 Unternehmensgesetzbuch, § 63 Gewerbeordnung
              und Offenlegungspflicht laut § 25 Mediengesetz.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-ink-950 mb-2 tracking-tight">NUR. Marketing GmbH</h2>
              <p>
                Bogengasse 1
                <br />
                9800 Spittal an der Drau
              </p>
            </div>

            <div className="space-y-1">
              <p>
                <strong className="text-ink-950">Tel.:</strong>{' '}
                <a href="tel:+436645322221" className="text-brand-700 hover:underline">
                  +43 664 5322221
                </a>
              </p>
              <p>
                <strong className="text-ink-950">E-Mail:</strong>{' '}
                <a href="mailto:kommunikation@nur.marketing" className="text-brand-700 hover:underline">
                  kommunikation@nur.marketing
                </a>
              </p>
              <p>
                <strong className="text-ink-950">UID-Nummer:</strong> ATU76522327
              </p>
              <p>
                <strong className="text-ink-950">Firmenbuchnummer:</strong> FN 549728 z
              </p>
              <p>
                <strong className="text-ink-950">Berufsrecht:</strong> Gewerbeordnung,{' '}
                <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">
                  www.ris.bka.gv.at
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-950 mb-3 tracking-tight">EU-Streitschlichtung</h2>
              <p>
                Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung)
                möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
                Verbraucher haben die Möglichkeit, Beschwerden an die Plattform der Europäischen Kommission
                unter{' '}
                <a
                  href="http://ec.europa.eu/odr?tid=121872890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-700 hover:underline"
                >
                  ec.europa.eu/odr
                </a>{' '}
                zu richten.
              </p>
              <p className="mt-3">
                Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
