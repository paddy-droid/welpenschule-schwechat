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
  title: 'Welpenschule Schwechat - Professionelles Hundetraining',
  description: 'Professionelle Welpenschule in Schwechat. Buchen Sie jetzt einen Kurs für die optimale Entwicklung und Sozialisierung Ihres Welpen.',
  verification: {
    google: ['mTVtKjxMEuAx_IFqUIbR2NQSxQgdoYfdhcNjQ6pHX4U', 'aUUa12fG3OI-DF8To1t5h1wxcZgKyU16Z-IMxJu9kKg'],
  },
  openGraph: {
    title: 'Welpenschule Schwechat | Hundeschule Willenskraft',
    description: 'Professionelles Training für deinen Welpen in der Welpenschule Schwechat. Ganzheitlich & gewaltfrei. Jetzt zur Anmeldung!',
    url: 'https://www.welpenschule-schwechat.at',
    siteName: 'Welpenschule Schwechat',
    images: [
      {
        url: '/Welpenschule-Schwechat, Welpenkurs Hero.webp',
        width: 1200,
        height: 630,
        alt: 'Glücklicher Welpe auf einer Wiese in Schwechat',
      },
    ],
    locale: 'de_AT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welpenschule Schwechat | Hundeschule Willenskraft',
    description: 'Professionelles Training für deinen Welpen in der Welpenschule Schwechat. Ganzheitlich & gewaltfrei. Jetzt zur Anmeldung!',
    images: ['/Welpenschule-Schwechat, Welpenkurs Hero.webp'],
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
