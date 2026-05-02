import type { Metadata } from 'next';

const url = 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/gramatneusiedl';

export const metadata: Metadata = {
  title: 'Hundeschule Gramatneusiedl | Mobil & gewaltfrei',
  description:
    'Hundeschule Gramatneusiedl ✓ ruhiges Marchfeld-Training ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Gramatneusiedl', 'Hundetrainer Gramatneusiedl', 'Mobiles Hundetraining Gramatneusiedl', 'Welpenkurs Gramatneusiedl'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Gramatneusiedl | Mobil & gewaltfrei',
    description: 'Hundeschule Gramatneusiedl ✓ Marchfeld-Ruhe ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function GramatneusiedlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
