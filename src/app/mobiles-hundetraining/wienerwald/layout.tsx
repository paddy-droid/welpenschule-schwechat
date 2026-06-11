import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/wienerwald';

export const metadata: Metadata = {
  title: 'Hundeschule Wienerwald | Mobiles 1:1-Training',
  description:
    'Hundeschule Wienerwald ✓ Wiesenwienerwald von Sittendorf bis Sulz ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Wienerwald', 'Hundetrainer Wienerwald', 'Mobiles Hundetraining Wienerwald', 'Welpenkurs Wienerwald'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Wienerwald | Mobiles 1:1-Training',
    description: 'Hundeschule Wienerwald ✓ Wiesenwienerwald von Sittendorf bis Sulz ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function WienerwaldLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
