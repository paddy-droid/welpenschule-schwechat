import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/gaaden';

export const metadata: Metadata = {
  title: 'Hundeschule Gaaden | Mobiles 1:1-Training',
  description:
    'Hundeschule Gaaden ✓ Wiesental zwischen Anninger & Heiligenkreuz ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Gaaden', 'Hundetrainer Gaaden', 'Mobiles Hundetraining Gaaden', 'Welpenkurs Gaaden'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Gaaden | Mobiles 1:1-Training',
    description: 'Hundeschule Gaaden ✓ Wiesental zwischen Anninger & Heiligenkreuz ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function GaadenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
