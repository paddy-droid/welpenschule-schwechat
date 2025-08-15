# Welpenschule Neusiedl am See - Projekt Dokumentation

Dieses Projekt ist eine Webseite für die "Welpenschule Neusiedl am See", erstellt mit Next.js und Tailwind CSS.

## Inhaltsverzeichnis
1. [Projektübersicht](#projektübersicht)
2. [Technologie-Stack](#technologie-stack)
3. [Projektstruktur](#projektstruktur)
4. [Setup & Installation](#setup--installation)
5. [API-Integrationen](#api-integrationen)
    - [Google Reviews API](#google-reviews-api)
6. [Git Repository](#git-repository)

---

### 1. Projektübersicht
Die Webseite dient als Online-Präsenz für die Hundeschule und informiert über das Kursangebot, die Philosophie und die Kontaktmöglichkeiten. Der Fokus liegt auf der Gewinnung neuer Kunden für den Welpenkurs.

### 2. Technologie-Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI-Komponenten:** [shadcn/ui](https://ui.shadcn.com/)
- **Deployment:** Vercel (empfohlen)
- **Version-Control:** Git
- **Package Manager:** npm

### 3. Projektstruktur
Die wichtigsten Dateien und Ordner im `src` Verzeichnis:
- **`/app`**: Enthält alle Routen der Anwendung.
    - **`/page.tsx`**: Die Startseite.
    - **`/kontakt/page.tsx`**: Die Kontaktseite.
    - **`/impressum/page.tsx`**: Das Impressum.
    - **`/datenschutz/page.tsx`**: Die Datenschutzerklärung.
    - **`/layout.tsx`**: Das Hauptlayout, das alle Seiten umschließt.
    - **`/globals.css`**: Globale CSS-Stile.
    - **`/api/reviews/route.ts`**: API-Route zum Abrufen der Google Reviews.
- **`/components`**: Enthält wiederverwendbare React-Komponenten.
    - **`/layout`**: Komponenten für das grundlegende Seitenlayout (Header, Footer).
    - **`/ui`**: UI-Komponenten von shadcn/ui (Button, Card etc.).
    - **`Reviews.tsx`**: Komponente zur Anzeige der Kundenbewertungen.
- **`/lib`**: Hilfsfunktionen und Utilities.
    - **`utils.ts`**: Allgemeine Hilfsfunktionen (z.B. für `clsx` von shadcn).
- **`/public`**: Enthält statische Dateien wie Bilder und Vektorgrafiken.

### 4. Setup & Installation
Um das Projekt lokal zu starten, führe folgende Befehle aus:

1.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```
2.  **Entwicklungsserver starten:**
    ```bash
    npm run dev
    ```
    Die Seite ist dann unter `http://localhost:3000` erreichbar.

### 5. API-Integrationen

#### Google Reviews API
- **Zweck:** Zeigt aktuelle Kundenbewertungen von Google an.
- **Implementierung:**
    - Die API-Route befindet sich unter `src/app/api/reviews/route.ts`.
    - Diese Route sendet eine Anfrage an die Google Places API.
    - Ein **API-Schlüssel** von der Google Cloud Platform ist erforderlich.
- **Einrichtung:**
    1.  Erstelle eine `.env.local`-Datei im Hauptverzeichnis des Projekts.
    2.  Füge deinen Google Places API Key in die Datei ein:
        ```
        GOOGLE_PLACES_API_KEY=DEIN_API_SCHLUESSEL_HIER
        ```
    3. Die `PLACE_ID` für das Unternehmen ist bereits in der `route.ts` hinterlegt, kann aber bei Bedarf geändert werden.

### 6. Git Repository
Das Projekt wird auf GitHub verwaltet und kann unter folgender URL gefunden werden:
- **Repository:** [https://github.com/paddy-droid/welpenschule-Neusiedl](https://github.com/paddy-droid/welpenschule-Neusiedl)
- **Haupt-Branch:** `main`

**Workflow:**
1.  Änderungen in einem neuen Branch entwickeln.
2.  Pull Request erstellen, um Änderungen in den `main`-Branch zu mergen.
3.  Vercel (oder ein anderer Hoster) deployt automatisch die Änderungen aus dem `main`-Branch.
