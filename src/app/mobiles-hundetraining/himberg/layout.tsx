import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Himberg | Hundeschule Willenskraft',
  description: 'Mobiles Hundetraining in Himberg ✓ Hundetrainerin kommt zu dir nach Hause ✓ Gewaltfrei & individuell ✓ Alle Hunderassen & Altersstufen ✓ Jetzt anfragen: +43 664 3903673',
  keywords: ['Mobiles Hundetraining Himberg', 'Hundetrainer Himberg', 'Hundeschule Himberg', 'Hundeerziehung Himberg Niederösterreich', 'Willenskraft Himberg'],
  alternates: {
    canonical: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/himberg',
  },
  openGraph: {
    title: 'Mobiles Hundetraining Himberg | Hundeschule Willenskraft',
    description: 'Individuelles Hundetraining in Himberg. Wir kommen zu dir! Gewaltfrei, flexibel, effektiv. Jetzt anfragen.',
    url: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/himberg',
    type: 'website',
  },
};

export default function HimbergLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
