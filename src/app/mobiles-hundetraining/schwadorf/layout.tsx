import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Schwadorf | Hundeschule Willenskraft',
  description: 'Mobiles Hundetraining in Schwadorf ✓ Hundetrainerin kommt zu dir nach Hause ✓ Gewaltfrei & individuell ✓ Alle Hunderassen & Altersstufen ✓ Jetzt anfragen: +43 664 3903673',
  keywords: ['Mobiles Hundetraining Schwadorf', 'Hundetrainer Schwadorf', 'Hundeschule Schwadorf', 'Hundeerziehung Schwadorf', 'Willenskraft Schwadorf'],
  alternates: {
    canonical: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/schwadorf',
  },
  openGraph: {
    title: 'Mobiles Hundetraining Schwadorf | Hundeschule Willenskraft',
    description: 'Individuelles Hundetraining in Schwadorf. Wir kommen zu dir! Gewaltfrei, flexibel, effektiv. Jetzt anfragen.',
    url: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/schwadorf',
    type: 'website',
  },
};

export default function SchwadorfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
