import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/breitenfurt-bei-wien';

export const metadata: Metadata = {
  title: 'Hundeschule Breitenfurt bei Wien | Mobiles 1:1-Training',
  description:
    'Hundeschule Breitenfurt bei Wien ✓ Antijagd-Training im Wienerwald ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Breitenfurt bei Wien', 'Hundetrainer Breitenfurt bei Wien', 'Mobiles Hundetraining Breitenfurt bei Wien', 'Welpenkurs Breitenfurt bei Wien'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Breitenfurt bei Wien | Mobiles 1:1-Training',
    description: 'Hundeschule Breitenfurt bei Wien ✓ Antijagd-Training im Wienerwald ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function BreitenfurtBeiWienLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
