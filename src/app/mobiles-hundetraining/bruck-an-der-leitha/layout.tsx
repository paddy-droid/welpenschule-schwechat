import type { Metadata } from 'next';

const url = 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/bruck-an-der-leitha';

export const metadata: Metadata = {
  title: 'Hundeschule Bruck/Leitha | Mobil & gewaltfrei',
  description:
    'Hundeschule Bruck an der Leitha ✓ Leitha-Auen + Altstadt ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Bruck an der Leitha', 'Hundetrainer Bruck/Leitha', 'Mobiles Hundetraining Bruck', 'Welpenkurs Bruck'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Bruck an der Leitha | Mobil & gewaltfrei',
    description: 'Hundeschule Bruck/Leitha ✓ Leitha-Auen + Altstadt ✓ mobil & gewaltfrei ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function BruckLeithaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
