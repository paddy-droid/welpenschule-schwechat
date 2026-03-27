import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Bruck an der Leitha | Hundeschule Willenskraft',
  description: 'Mobiles Hundetraining in Bruck an der Leitha ✓ Hundeschule Willenskraft ✓ Gewaltfrei & individuell ✓ Alle Hunderassen & Altersstufen ✓ Jetzt anfragen: +43 664 3903673',
  keywords: ['Mobiles Hundetraining Bruck an der Leitha', 'Hundetrainer Bruck Leitha', 'Hundeschule Bruck an der Leitha', 'Hundeerziehung Bruck Leitha', 'Willenskraft Bruck Leitha'],
  alternates: {
    canonical: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/bruck-an-der-leitha',
  },
  openGraph: {
    title: 'Mobiles Hundetraining Bruck an der Leitha | Hundeschule Willenskraft',
    description: 'Individuelles Hundetraining in Bruck an der Leitha. Wir kommen zu dir! Gewaltfrei, flexibel, effektiv. Jetzt anfragen.',
    url: 'https://www.welpenschule-schwechat.at/mobiles-hundetraining/bruck-an-der-leitha',
    type: 'website',
  },
};

export default function BruckAnDerLeithaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
