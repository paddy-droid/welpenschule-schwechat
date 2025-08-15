import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Welpenschule Neusiedl am See | Hundeschule Willenskraft',
  description: 'Profi-Training für deinen Welpen in der Welpenschule Neusiedl am See. Ganzheitlich & gewaltfrei. Jetzt zur Anmeldung!',
  verification: {
    google: 'mTVtKjxMEuAx_IFqUIbR2NQSxQgdoYfdhcNjQ6pHX4U',
  },
  openGraph: {
    title: 'Welpenschule Neusiedl am See | Hundeschule Willenskraft',
    description: 'Profi-Training für deinen Welpen in der Welpenschule Neusiedl am See. Ganzheitlich & gewaltfrei. Jetzt zur Anmeldung!',
    url: 'https://www.welpenschule-neusiedl.at', // Ersetze dies mit deiner tatsächlichen Domain
    siteName: 'Welpenschule Neusiedl am See',
    images: [
      {
        url: '/Welpenschule Neusiedl.webp', // Pfad zum Bild in deinem /public Ordner
        width: 1200,
        height: 630,
        alt: 'Glücklicher Welpe auf einer Wiese in Neusiedl am See',
      },
    ],
    locale: 'de_AT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welpenschule Neusiedl am See | Hundeschule Willenskraft',
    description: 'Profi-Training für deinen Welpen in der Welpenschule Neusiedl am See. Ganzheitlich & gewaltfrei. Jetzt zur Anmeldung!',
    images: ['/Welpenschule Neusiedl.webp'], // Pfad zum Bild
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
