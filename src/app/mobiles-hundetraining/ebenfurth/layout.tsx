import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Ebenfurth | Hundeschule Willenskraft',
  description: 'Mobiles Hundetraining in Ebenfurth ✓ Hundetrainerin kommt zu dir nach Hause ✓ Gewaltfrei & individuell ✓ Alle Hunderassen & Altersstufen ✓ Jetzt anfragen: +43 664 3903673',
  keywords: ['Mobiles Hundetraining Ebenfurth', 'Hundetrainer Ebenfurth', 'Hundeschule Ebenfurth', 'Hundeerziehung Ebenfurth', 'Willenskraft Ebenfurth'],
  alternates: {
    canonical: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/ebenfurth',
  },
  openGraph: {
    title: 'Mobiles Hundetraining Ebenfurth | Hundeschule Willenskraft',
    description: 'Individuelles Hundetraining in Ebenfurth. Wir kommen zu dir! Gewaltfrei, flexibel, effektiv. Jetzt anfragen.',
    url: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/ebenfurth',
    type: 'website',
  },
};

export default function EbenfurthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
