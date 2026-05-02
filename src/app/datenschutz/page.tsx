export default function Datenschutz() {
  return (
    <div className="bg-background">
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="wk-eyebrow mb-5">Rechtliches</span>
          <h1 className="wk-display text-4xl md:text-6xl text-ink-950 mb-10">Datenschutz.</h1>

          <div className="wk-card p-8 sm:p-12 space-y-6 text-ink-700 leading-relaxed">
            <p>
              Wir legen größten Wert auf den Schutz Ihrer Daten. Um Sie in vollem Umfang über die
              Verwendung personenbezogener Daten zu informieren, bitten wir Sie die folgenden
              Datenschutzhinweise zur Kenntnis zu nehmen.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-ink-950 mb-3 tracking-tight">Persönliche Daten</h2>
              <p>
                Persönliche Daten, die Sie auf dieser Website elektronisch übermitteln, wie z. B. Name,
                E-Mail-Adresse, Adresse oder andere persönlichen Angaben, werden von uns gemeinsam mit
                dem Zeitpunkt und der IP-Adresse nur zum angegebenen Zweck verwendet, sicher verwahrt
                und nicht an Dritte weitergegeben.
              </p>
              <p className="mt-3">
                Wir nutzen Ihre persönlichen Daten ausschließlich für die Kommunikation mit Besuchern,
                die Kontakt ausdrücklich wünschen, sowie für die Abwicklung der angebotenen Dienstleistungen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-950 mb-3 tracking-tight">Cookies</h2>
              <p>
                Unsere Website verwendet HTTP-Cookies, um nutzer­spezifische Daten zu speichern. Ein
                Cookie ist ein kurzes Datenpaket, welches zwischen Webbrowser und Webserver ausgetauscht
                wird.
              </p>
              <p className="mt-3">
                Wenn Sie nicht wünschen, dass Cookies gesetzt werden, können Sie Ihren Browser
                entsprechend konfigurieren oder Cookies jederzeit löschen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-950 mb-3 tracking-tight">Google Fonts</h2>
              <p>
                Wir verwenden Google Fonts der Firma Google Inc. Die Verwendung von Google Fonts erfolgt
                ohne Authentisierung und es werden keine Cookies an die Google Fonts API gesendet. Sollten
                Sie ein Konto bei Google haben, werden keine Ihrer Konto­daten an Google während der
                Nutzung von Google Fonts übermittelt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
