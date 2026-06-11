import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/gumpoldskirchen';

export const metadata: Metadata = {
  title: 'Hundeschule Gumpoldskirchen | Mobiles 1:1-Training',
  description:
    'Hundeschule Gumpoldskirchen ✓ Weinwanderweg & Anninger ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Gumpoldskirchen', 'Hundetrainer Gumpoldskirchen', 'Mobiles Hundetraining Gumpoldskirchen', 'Welpenkurs Gumpoldskirchen'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Gumpoldskirchen | Mobiles 1:1-Training',
    description: 'Hundeschule Gumpoldskirchen ✓ Weinwanderweg & Anninger ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function GumpoldskirchenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
