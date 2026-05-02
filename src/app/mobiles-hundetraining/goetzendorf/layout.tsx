import type { Metadata } from 'next';

const url = 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/goetzendorf';

export const metadata: Metadata = {
  title: 'Hundeschule Götzendorf | Mobil & gewaltfrei',
  description:
    'Hundeschule Götzendorf an der Leitha ✓ Leitha-Auen Training ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Götzendorf', 'Hundetrainer Götzendorf', 'Mobiles Hundetraining Götzendorf an der Leitha', 'Welpenkurs Götzendorf'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Götzendorf | Mobil & gewaltfrei',
    description: 'Hundeschule Götzendorf ✓ Leitha-Auen ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function GoetzendorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
