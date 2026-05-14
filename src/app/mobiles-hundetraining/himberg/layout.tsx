import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/himberg';

export const metadata: Metadata = {
  title: 'Hundeschule Himberg | Mobiles 1:1-Training',
  description:
    'Hundeschule Himberg ✓ Stadtgrenze Wien & Donau-Auen ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Himberg', 'Hundetrainer Himberg', 'Mobiles Hundetraining Himberg', 'Welpenkurs Himberg'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Himberg | Mobiles 1:1-Training',
    description: 'Hundeschule Himberg ✓ Wien-Grenze & Donau-Auen ✓ mobil & gewaltfrei ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function HimbergLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
