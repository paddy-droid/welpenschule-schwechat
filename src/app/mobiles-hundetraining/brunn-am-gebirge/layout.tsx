import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/brunn-am-gebirge';

export const metadata: Metadata = {
  title: 'Hundeschule Brunn am Gebirge | Mobiles 1:1-Training',
  description:
    'Hundeschule Brunn am Gebirge ✓ Weingärten & Föhrenberge ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Brunn am Gebirge', 'Hundetrainer Brunn am Gebirge', 'Mobiles Hundetraining Brunn am Gebirge', 'Welpenkurs Brunn am Gebirge'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Brunn am Gebirge | Mobiles 1:1-Training',
    description: 'Hundeschule Brunn am Gebirge ✓ Weingärten & Föhrenberge ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function BrunnAmGebirgeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
