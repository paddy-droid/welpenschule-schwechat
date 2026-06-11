import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/muenchendorf';

export const metadata: Metadata = {
  title: 'Hundeschule Münchendorf | Mobiles 1:1-Training',
  description:
    'Hundeschule Münchendorf ✓ weite Felder für sicheren Rückruf ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Münchendorf', 'Hundetrainer Münchendorf', 'Mobiles Hundetraining Münchendorf', 'Welpenkurs Münchendorf'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Münchendorf | Mobiles 1:1-Training',
    description: 'Hundeschule Münchendorf ✓ weite Felder für sicheren Rückruf ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function MuenchendorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
