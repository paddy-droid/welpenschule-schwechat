import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/achau';

export const metadata: Metadata = {
  title: 'Hundeschule Achau | Mobiles 1:1-Training',
  description:
    'Hundeschule Achau ✓ nur 15 Min. von Schwechat ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Achau', 'Hundetrainer Achau', 'Mobiles Hundetraining Achau', 'Welpenkurs Achau'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Achau | Mobiles 1:1-Training',
    description: 'Hundeschule Achau ✓ nur 15 Min. von Schwechat ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function AchauLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
