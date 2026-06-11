import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/laxenburg';

export const metadata: Metadata = {
  title: 'Hundeschule Laxenburg | Mobiles 1:1-Training',
  description:
    'Hundeschule Laxenburg ✓ Schlosspark Trainingsgebiet ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Laxenburg', 'Hundetrainer Laxenburg', 'Mobiles Hundetraining Laxenburg', 'Welpenkurs Laxenburg'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Laxenburg | Mobiles 1:1-Training',
    description: 'Hundeschule Laxenburg ✓ Schlosspark Trainingsgebiet ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function LaxenburgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
