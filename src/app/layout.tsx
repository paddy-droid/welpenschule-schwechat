import type { Metadata } from 'next';
import { Geist, Geist_Mono, Fraunces } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  axes: ['SOFT', 'opsz'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Welpenschule Schwechat – Nr. 1 Hundeschule | Gewaltfrei & Ganzheitlich',
    template: '%s | Welpenschule Schwechat',
  },
  description:
    'Die führende Welpenschule in Schwechat & Umgebung. Gewaltfreies Welpentraining mit Hundeschule Willenskraft. Jetzt Kurs buchen: 6 Einheiten ab 195 €. Welpen bis 5 Monate.',
  applicationName: 'Welpenschule Schwechat',
  keywords: [
    'Welpenschule Schwechat',
    'Hundeschule Schwechat',
    'Welpentraining Schwechat',
    'Welpenkurs Schwechat',
    'Hundeerziehung Schwechat',
    'Hundetraining Niederösterreich',
    'Welpenschule Wien Umgebung',
    'Hundeschule Willenskraft',
    'gewaltfreies Hundetraining',
    'positive Verstärkung Hund',
    'mobiles Hundetraining',
    'Wien-Simmering Hundeschule',
  ],
  authors: [{ name: 'Hundeschule Willenskraft', url: 'https://www.willenskraft.co.at' }],
  creator: 'Hundeschule Willenskraft',
  publisher: 'Welpenschule Schwechat',
  category: 'Tierausbildung',
  verification: {
    google: ['mTVtKjxMEuAx_IFqUIbR2NQSxQgdoYfdhcNjQ6pHX4U', 'aUUa12fG3OI-DF8To1t5h1wxcZgKyU16Z-IMxJu9kKg'],
  },
  alternates: {
    
    languages: {
      'de-AT': 'https://welpenschule-schwechat.at',
    },
  },
  openGraph: {
    title: 'Welpenschule Schwechat | Hundeschule Willenskraft – Gewaltfrei & Ganzheitlich',
    description:
      'Professionelles Welpentraining in Schwechat. 6 Einheiten, max. 4 Teams, positive Verstärkung. Jetzt Platz sichern! ☎ +43 664 3903673',
    url: 'https://welpenschule-schwechat.at',
    siteName: 'Welpenschule Schwechat',
    images: [
      {
        url: '/Welpenschule-Schwechat, Welpenkurs Hero.webp',
        width: 1200,
        height: 630,
        alt: 'Glücklicher Welpe auf einer Wiese in Schwechat – Welpenschule Willenskraft',
      },
    ],
    locale: 'de_AT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welpenschule Schwechat | Hundeschule Willenskraft',
    description: 'Gewaltfreies Welpentraining in Schwechat & Umgebung. 6 Einheiten ab 195€. Jetzt anmelden!',
    images: ['/Welpenschule-Schwechat, Welpenkurs Hero.webp'],
  },
  metadataBase: new URL('https://welpenschule-schwechat.at'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'AT-3',
    'geo.placename': 'Schwechat',
    'geo.position': '48.1388;16.4727',
    ICBM: '48.1388, 16.4727',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'PetTrainer'],
      '@id': 'https://welpenschule-schwechat.at/#business',
      name: 'Welpenschule Schwechat – Hundeschule Willenskraft',
      alternateName: ['Hundeschule Willenskraft Schwechat', 'Welpentraining Schwechat'],
      url: 'https://welpenschule-schwechat.at',
      telephone: '+43-664-3903673',
      email: 'bruck_leitha@willenskraft.co.at',
      image: 'https://welpenschule-schwechat.at/Welpenschule-Schwechat, Welpenkurs Hero.webp',
      logo: 'https://www.willenskraft.co.at/wp-content/uploads/2018/06/Final.-Logo-Hundeschule-Willenskraft.-Gute-Hundeschule-Graz-Gleisdorf.png',
      description:
        'Professionelle Welpenschule in Schwechat. Gewaltfreies & ganzheitliches Hundetraining mit positiver Verstärkung. Kleingruppen mit max. 4 Teams. Welpen bis 5 Monate.',
      slogan: 'Gemeinsam wachsen – mit Achtsamkeit, Klarheit und echter Verbindung.',
      foundingDate: '2014',
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Überweisung, Bar',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Schwechat',
        addressRegion: 'Niederösterreich',
        addressCountry: 'AT',
        postalCode: '2320',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.1388,
        longitude: 16.4727,
      },
      areaServed: [
        { '@type': 'City', name: 'Schwechat' },
        { '@type': 'City', name: 'Fischamend' },
        { '@type': 'City', name: 'Schwadorf' },
        { '@type': 'City', name: 'Ebenfurth' },
        { '@type': 'City', name: 'Gramatneusiedl' },
        { '@type': 'City', name: 'Götzendorf an der Leitha' },
        { '@type': 'City', name: 'Himberg' },
        { '@type': 'City', name: 'Bruck an der Leitha' },
        { '@type': 'City', name: 'Wien-Simmering' },
        { '@type': 'City', name: 'Parndorf' },
      ],
      hasMap: 'https://www.google.com/maps/search/Hundeschule+Willenskraft+Bruck+an+der+Leitha',
      sameAs: [
        'https://www.willenskraft.co.at',
        'https://www.instagram.com/hundeschule_willenskraft/',
        'https://www.facebook.com/hundeschule.willenskraft',
      ],
      knowsAbout: [
        'Welpentraining',
        'Hundeerziehung',
        'Positive Verstärkung',
        'Medical Training Hund',
        'Sozialisierung Welpen',
        'Leinenführigkeit',
        'Rückruftraining',
        'Mobiles Hundetraining',
        'Verhaltenstherapie Hund',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Hundetraining Angebote',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Welpen-Gruppenkurs',
            description:
              '6 Trainingseinheiten zu je einer Stunde in Kleingruppen (max. 4 Teams). Positive Verstärkung, Sozialisierung & Grundkommandos.',
            price: '195',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://welpenschule-schwechat.at/#kurse',
          },
          {
            '@type': 'Offer',
            name: 'Private Einzelstunde',
            description: 'Individuelle Trainingseinheit für spezifische Fragen und Bedürfnisse deines Welpen.',
            price: '55',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://welpenschule-schwechat.at/kontakt?angebot=einzelstunde',
          },
          {
            '@type': 'Offer',
            name: 'Mobile Erstberatung',
            description: '90-minütige Erstberatung bei dir zuhause. Analyse, Zielbesprechung und individueller Trainingsplan.',
            price: '95',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://welpenschule-schwechat.at/kontakt?service=erstberatung-mobil',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '50',
        bestRating: '5',
        worstRating: '1',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://welpenschule-schwechat.at/#trainer',
      name: 'Jessica Pusch',
      jobTitle: 'Hundetrainerin',
      worksFor: { '@id': 'https://welpenschule-schwechat.at/#business' },
      telephone: '+43-664-3903673',
      email: 'bruck_leitha@willenskraft.co.at',
      image: 'https://www.willenskraft.co.at/wp-content/uploads/2020/02/Hundeschule-Willenskraft-ButtonFINAL.png',
      knowsAbout: ['Welpentraining', 'Positive Verstärkung', 'Medical Training', 'Verhaltensberatung'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://welpenschule-schwechat.at/#website',
      url: 'https://welpenschule-schwechat.at',
      name: 'Welpenschule Schwechat',
      description: 'Gewaltfreies Welpentraining in Schwechat und Umgebung',
      publisher: { '@id': 'https://welpenschule-schwechat.at/#business' },
      inLanguage: 'de-AT',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://welpenschule-schwechat.at/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-AT" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f5e6b8" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1c1916" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://www.willenskraft.co.at" />
        <link rel="dns-prefetch" href="https://www.willenskraft.co.at" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-ink-950 focus:text-white"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main" className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
