import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/laab-im-walde';

export const metadata: Metadata = {
  title: 'Hundeschule Laab im Walde | Mobiles 1:1-Training',
  description:
    'Hundeschule Laab im Walde ✓ stillster Lernort im Wienerwald ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Laab im Walde', 'Hundetrainer Laab im Walde', 'Mobiles Hundetraining Laab im Walde', 'Welpenkurs Laab im Walde'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Laab im Walde | Mobiles 1:1-Training',
    description: 'Hundeschule Laab im Walde ✓ stillster Lernort im Wienerwald ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function LaabImWaldeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
