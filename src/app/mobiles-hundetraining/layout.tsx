import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Schwechat & Umgebung | Hundeschule Willenskraft',
  description: 'Mobiles Hundetraining in Schwechat ✓ Wir kommen zu dir ✓ Gewaltfrei & individuell ✓ Erstberatung 90 Min. ab 95€ ✓ Alle Hunderassen & Altersstufen ✓ Jetzt anfragen!',
  keywords: ['Mobiles Hundetraining Schwechat', 'Hundetrainer kommt nach Hause', 'Einzeltraining Hund Schwechat', 'Hundeerziehung vor Ort Niederösterreich'],
  alternates: {
    canonical: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining',
  },
  openGraph: {
    title: 'Mobiles Hundetraining Schwechat | Hundeschule Willenskraft',
    description: 'Individuelles Hundetraining bei dir zuhause in Schwechat und Umgebung. Gewaltfrei, flexibel und effektiv. Jetzt anfragen!',
    url: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining',
    type: 'website',
  },
};

export default function MobileTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
