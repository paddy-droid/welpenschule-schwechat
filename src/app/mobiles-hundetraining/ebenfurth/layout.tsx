import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/ebenfurth';

export const metadata: Metadata = {
  title: 'Hundeschule Ebenfurth | Training am Steinfeld',
  description:
    'Hundeschule Ebenfurth ✓ Training am Steinfeld ✓ mobiles 1:1-Hundetraining ✓ gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Ebenfurth', 'Hundetrainer Ebenfurth', 'Mobiles Hundetraining Ebenfurth', 'Welpenkurs Ebenfurth'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Ebenfurth | Training am Steinfeld',
    description: 'Hundeschule Ebenfurth ✓ Steinfeld ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function EbenfurthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
