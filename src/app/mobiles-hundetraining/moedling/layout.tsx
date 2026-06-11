import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/moedling';

export const metadata: Metadata = {
  title: 'Hundeschule Mödling | Mobiles 1:1-Training',
  description:
    'Hundeschule Mödling ✓ Anninger & Altstadt Trainingsgebiet ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Mödling', 'Hundetrainer Mödling', 'Mobiles Hundetraining Mödling', 'Welpenkurs Mödling'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Mödling | Mobiles 1:1-Training',
    description: 'Hundeschule Mödling ✓ Anninger & Altstadt Trainingsgebiet ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function MoedlingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
