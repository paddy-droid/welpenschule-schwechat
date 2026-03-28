import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Wien-Simmering | Hundeschule Willenskraft',
  description: 'Mobiles Hundetraining in Wien-Simmering ✓ Hundetrainerin kommt zu dir nach Hause ✓ Gewaltfrei & individuell ✓ Alle Hunderassen & Altersstufen ✓ Jetzt anfragen: +43 664 3903673',
  keywords: ['Mobiles Hundetraining Wien-Simmering', 'Hundetrainer Wien-Simmering', 'Hundeschule Wien-Simmering', 'Hundeerziehung Wien-Simmering', 'Welpenschule Wien-Simmering', 'Willenskraft Wien-Simmering'],
  alternates: {
    canonical: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/wien-simmering',
  },
  openGraph: {
    title: 'Mobiles Hundetraining Wien-Simmering | Hundeschule Willenskraft',
    description: 'Individuelles Hundetraining in Wien-Simmering. Wir kommen zu dir! Gewaltfrei, flexibel, effektiv. Jetzt anfragen.',
    url: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/wien-simmering',
    type: 'website',
  },
};

export default function WienSimmeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
