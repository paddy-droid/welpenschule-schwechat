import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/maria-enzersdorf';

export const metadata: Metadata = {
  title: 'Hundeschule Maria Enzersdorf | Mobiles 1:1-Training',
  description:
    'Hundeschule Maria Enzersdorf ✓ Burg Liechtenstein & Föhrenberge ✓ mobiles, gewaltfreies Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Maria Enzersdorf', 'Hundetrainer Maria Enzersdorf', 'Mobiles Hundetraining Maria Enzersdorf', 'Welpenkurs Maria Enzersdorf'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Maria Enzersdorf | Mobiles 1:1-Training',
    description: 'Hundeschule Maria Enzersdorf ✓ Burg Liechtenstein & Föhrenberge ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function MariaEnzersdorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
