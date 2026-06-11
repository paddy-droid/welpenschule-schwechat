import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/biedermannsdorf';

export const metadata: Metadata = {
  title: 'Hundeschule Biedermannsdorf | Mobiles 1:1-Training',
  description:
    'Hundeschule Biedermannsdorf ✓ ruhiges Lernumfeld am Mödlingbach ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Biedermannsdorf', 'Hundetrainer Biedermannsdorf', 'Mobiles Hundetraining Biedermannsdorf', 'Welpenkurs Biedermannsdorf'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Biedermannsdorf | Mobiles 1:1-Training',
    description: 'Hundeschule Biedermannsdorf ✓ ruhiges Lernumfeld am Mödlingbach ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function BiedermannsdorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
