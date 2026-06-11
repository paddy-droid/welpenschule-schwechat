import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/giesshuebl';

export const metadata: Metadata = {
  title: 'Hundeschule Gießhübl | Mobiles 1:1-Training',
  description:
    'Hundeschule Gießhübl ✓ geschützt am Wienerwaldrand ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Gießhübl', 'Hundetrainer Gießhübl', 'Mobiles Hundetraining Gießhübl', 'Welpenkurs Gießhübl'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Gießhübl | Mobiles 1:1-Training',
    description: 'Hundeschule Gießhübl ✓ geschützt am Wienerwaldrand ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function GiesshueblLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
