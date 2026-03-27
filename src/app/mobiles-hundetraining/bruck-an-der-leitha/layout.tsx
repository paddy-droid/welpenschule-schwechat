import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Bruck an der Leitha | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Bruck an der Leitha. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function BruckAnDerLeithaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
