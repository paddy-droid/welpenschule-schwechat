import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/wiener-neudorf';

export const metadata: Metadata = {
  title: 'Hundeschule Wiener Neudorf | Mobiles 1:1-Training',
  description:
    'Hundeschule Wiener Neudorf ✓ Alltagstraining mitten im Leben ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Wiener Neudorf', 'Hundetrainer Wiener Neudorf', 'Mobiles Hundetraining Wiener Neudorf', 'Welpenkurs Wiener Neudorf'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Wiener Neudorf | Mobiles 1:1-Training',
    description: 'Hundeschule Wiener Neudorf ✓ Alltagstraining mitten im Leben ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function WienerNeudorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
