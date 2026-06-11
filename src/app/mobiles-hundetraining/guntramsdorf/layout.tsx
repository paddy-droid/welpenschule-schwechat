import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/guntramsdorf';

export const metadata: Metadata = {
  title: 'Hundeschule Guntramsdorf | Mobiles 1:1-Training',
  description:
    'Hundeschule Guntramsdorf ✓ Weingärten der Thermenregion ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Guntramsdorf', 'Hundetrainer Guntramsdorf', 'Mobiles Hundetraining Guntramsdorf', 'Welpenkurs Guntramsdorf'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Guntramsdorf | Mobiles 1:1-Training',
    description: 'Hundeschule Guntramsdorf ✓ Weingärten der Thermenregion ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function GuntramsdorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
