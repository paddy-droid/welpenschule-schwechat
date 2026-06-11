import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/voesendorf';

export const metadata: Metadata = {
  title: 'Hundeschule Vösendorf | Mobiles 1:1-Training',
  description:
    'Hundeschule Vösendorf ✓ vom Schlosspark bis zur SCS ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Vösendorf', 'Hundetrainer Vösendorf', 'Mobiles Hundetraining Vösendorf', 'Welpenkurs Vösendorf'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Vösendorf | Mobiles 1:1-Training',
    description: 'Hundeschule Vösendorf ✓ vom Schlosspark bis zur SCS ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function VoesendorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
