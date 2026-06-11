import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/kaltenleutgeben';

export const metadata: Metadata = {
  title: 'Hundeschule Kaltenleutgeben | Mobiles 1:1-Training',
  description:
    'Hundeschule Kaltenleutgeben ✓ Liesingtal & Waldhänge ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Kaltenleutgeben', 'Hundetrainer Kaltenleutgeben', 'Mobiles Hundetraining Kaltenleutgeben', 'Welpenkurs Kaltenleutgeben'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Kaltenleutgeben | Mobiles 1:1-Training',
    description: 'Hundeschule Kaltenleutgeben ✓ Liesingtal & Waldhänge ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function KaltenleutgebenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
