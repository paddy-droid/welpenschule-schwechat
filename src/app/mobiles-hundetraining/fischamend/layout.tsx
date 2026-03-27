import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Fischamend | Hundeschule Willenskraft',
  description: 'Mobiles Hundetraining in Fischamend ✓ Hundetrainerin kommt zu dir nach Hause ✓ Gewaltfrei & individuell ✓ Alle Hunderassen & Altersstufen ✓ Jetzt anfragen: +43 664 3903673',
  keywords: ['Mobiles Hundetraining Fischamend', 'Hundetrainer Fischamend', 'Hundeschule Fischamend', 'Hundeerziehung Fischamend', 'Willenskraft Fischamend'],
  alternates: {
    canonical: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/fischamend',
  },
  openGraph: {
    title: 'Mobiles Hundetraining Fischamend | Hundeschule Willenskraft',
    description: 'Individuelles Hundetraining in Fischamend. Wir kommen zu dir! Gewaltfrei, flexibel, effektiv. Jetzt anfragen.',
    url: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/fischamend',
    type: 'website',
  },
};

export default function FischamendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
