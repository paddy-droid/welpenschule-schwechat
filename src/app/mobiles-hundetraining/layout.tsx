import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining';

export const metadata: Metadata = {
  title: 'Hundeschule Schwechat | Mobiles Training & Welpenkurs',
  description:
    'Hundeschule Schwechat ✓ gewaltfreies, mobiles 1:1-Hundetraining + Welpenkurs ✓ Willenskraft. Erstberatung 95€. ☎ +43 664 3903673',
  keywords: [
    'Hundeschule Schwechat',
    'Mobiles Hundetraining Schwechat',
    'Hundetrainer Schwechat',
    'Welpenkurs Schwechat',
    'Hundeerziehung Schwechat',
    'Willenskraft Schwechat',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Schwechat | Mobiles Training & Welpenkurs',
    description:
      'Hundeschule Schwechat ✓ gewaltfrei ✓ mobiles 1:1-Training + Welpenkurs ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function MobileTrainingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
