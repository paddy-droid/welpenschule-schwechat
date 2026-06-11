import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/perchtoldsdorf';

export const metadata: Metadata = {
  title: 'Hundeschule Perchtoldsdorf | Mobiles 1:1-Training',
  description:
    'Hundeschule Perchtoldsdorf ✓ Heide & Weingärten Trainingsgebiet ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Perchtoldsdorf', 'Hundetrainer Perchtoldsdorf', 'Mobiles Hundetraining Perchtoldsdorf', 'Welpenkurs Perchtoldsdorf'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Perchtoldsdorf | Mobiles 1:1-Training',
    description: 'Hundeschule Perchtoldsdorf ✓ Heide & Weingärten Trainingsgebiet ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function PerchtoldsdorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
