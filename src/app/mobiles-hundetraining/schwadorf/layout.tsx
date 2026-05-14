import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/schwadorf';

export const metadata: Metadata = {
  title: 'Hundeschule Schwadorf | Mobiles Hundetraining',
  description:
    'Hundeschule Schwadorf ✓ ländliche Trainingskulisse ✓ mobiles, gewaltfreies 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Schwadorf', 'Hundetrainer Schwadorf', 'Mobiles Hundetraining Schwadorf', 'Welpenkurs Schwadorf'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Schwadorf | Mobiles Hundetraining',
    description: 'Hundeschule Schwadorf ✓ ländlich ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function SchwadorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
