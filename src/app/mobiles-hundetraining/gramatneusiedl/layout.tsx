import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Gramatneusiedl | Hundeschule Willenskraft',
  description: 'Mobiles Hundetraining in Gramatneusiedl ✓ Hundetrainerin kommt zu dir nach Hause ✓ Gewaltfrei & individuell ✓ Alle Hunderassen & Altersstufen ✓ Jetzt anfragen: +43 664 3903673',
  keywords: ['Mobiles Hundetraining Gramatneusiedl', 'Hundetrainer Gramatneusiedl', 'Hundeschule Gramatneusiedl', 'Hundeerziehung Gramatneusiedl', 'Willenskraft Gramatneusiedl'],
  alternates: {
    canonical: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/gramatneusiedl',
  },
  openGraph: {
    title: 'Mobiles Hundetraining Gramatneusiedl | Hundeschule Willenskraft',
    description: 'Individuelles Hundetraining in Gramatneusiedl. Wir kommen zu dir! Gewaltfrei, flexibel, effektiv. Jetzt anfragen.',
    url: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/gramatneusiedl',
    type: 'website',
  },
};

export default function GramatneusiedlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
