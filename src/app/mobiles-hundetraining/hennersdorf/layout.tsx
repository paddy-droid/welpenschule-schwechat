import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/hennersdorf';

export const metadata: Metadata = {
  title: 'Hundeschule Hennersdorf | Mobiles 1:1-Training',
  description:
    'Hundeschule Hennersdorf ✓ Dorfruhe an der Stadtgrenze ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Hennersdorf', 'Hundetrainer Hennersdorf', 'Mobiles Hundetraining Hennersdorf', 'Welpenkurs Hennersdorf'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Hennersdorf | Mobiles 1:1-Training',
    description: 'Hundeschule Hennersdorf ✓ Dorfruhe an der Stadtgrenze ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function HennersdorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
