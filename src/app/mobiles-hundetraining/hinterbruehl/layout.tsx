import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/hinterbruehl';

export const metadata: Metadata = {
  title: 'Hundeschule Hinterbrühl | Mobiles 1:1-Training',
  description:
    'Hundeschule Hinterbrühl ✓ Wienerwald-Täler & Seegrotte ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Hinterbrühl', 'Hundetrainer Hinterbrühl', 'Mobiles Hundetraining Hinterbrühl', 'Welpenkurs Hinterbrühl'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Hinterbrühl | Mobiles 1:1-Training',
    description: 'Hundeschule Hinterbrühl ✓ Wienerwald-Täler & Seegrotte ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function HinterbruehlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
