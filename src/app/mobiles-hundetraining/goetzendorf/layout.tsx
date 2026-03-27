import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Götzendorf an der Leitha | Hundeschule Willenskraft',
  description: 'Mobiles Hundetraining in Götzendorf an der Leitha ✓ Hundetrainerin kommt zu dir nach Hause ✓ Gewaltfrei & individuell ✓ Alle Hunderassen & Altersstufen ✓ Jetzt anfragen!',
  keywords: ['Mobiles Hundetraining Götzendorf', 'Hundetrainer Götzendorf an der Leitha', 'Hundeschule Götzendorf', 'Hundeerziehung Götzendorf Leitha'],
  alternates: {
    canonical: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/goetzendorf',
  },
  openGraph: {
    title: 'Mobiles Hundetraining Götzendorf an der Leitha | Hundeschule Willenskraft',
    description: 'Individuelles Hundetraining in Götzendorf. Wir kommen zu dir! Gewaltfrei, flexibel, effektiv. Jetzt anfragen.',
    url: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/goetzendorf',
    type: 'website',
  },
};

export default function GoetzendorfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
