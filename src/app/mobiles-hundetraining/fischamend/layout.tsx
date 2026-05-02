import type { Metadata } from 'next';

const url = 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/fischamend';

export const metadata: Metadata = {
  title: 'Hundeschule Fischamend | Mobiles 1:1-Training',
  description:
    'Hundeschule Fischamend ✓ Donau-Auen Trainingsgebiet ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Fischamend', 'Hundetrainer Fischamend', 'Mobiles Hundetraining Fischamend', 'Welpenkurs Fischamend'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Fischamend | Mobiles 1:1-Training',
    description: 'Hundeschule Fischamend ✓ Donau-Auen ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function FischamendLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
