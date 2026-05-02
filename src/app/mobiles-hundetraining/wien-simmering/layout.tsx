import type { Metadata } from 'next';

const url = 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/wien-simmering';

export const metadata: Metadata = {
  title: 'Hundeschule Wien-Simmering | Mobil & gewaltfrei',
  description:
    'Hundeschule Wien-Simmering ✓ mobiles 1:1-Training ✓ Kurpark Oberlaa, Lobau ✓ Willenskraft. Erstberatung 95€. ☎ +43 664 3903673',
  keywords: [
    'Hundeschule Wien-Simmering',
    'Hundetrainer Wien 11',
    'Mobiles Hundetraining Wien-Simmering',
    'Welpenschule Wien-Simmering',
    'Willenskraft Wien-Simmering',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Wien-Simmering | Mobil & gewaltfrei',
    description: 'Hundeschule Wien-Simmering ✓ mobiles 1:1-Training ✓ Kurpark Oberlaa, Lobau ✓ Willenskraft.',
    url,
    type: 'website',
  },
};

export default function WienSimmeringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
