import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Parndorf | Hundeschule Willenskraft',
  description: 'Mobiles Hundetraining in Parndorf ✓ Hundetrainerin kommt zu dir nach Hause ✓ Gewaltfrei & individuell ✓ Alle Hunderassen & Altersstufen ✓ Jetzt anfragen: +43 664 3903673',
  keywords: ['Mobiles Hundetraining Parndorf', 'Hundetrainer Parndorf', 'Hundeschule Parndorf', 'Hundeerziehung Parndorf', 'Welpenschule Parndorf', 'Willenskraft Parndorf'],
  alternates: {
    canonical: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/parndorf',
  },
  openGraph: {
    title: 'Mobiles Hundetraining Parndorf | Hundeschule Willenskraft',
    description: 'Individuelles Hundetraining in Parndorf. Wir kommen zu dir! Gewaltfrei, flexibel, effektiv. Jetzt anfragen.',
    url: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/parndorf',
    type: 'website',
  },
};

export default function ParndorfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
