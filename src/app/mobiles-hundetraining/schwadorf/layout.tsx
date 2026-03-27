import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Schwadorf | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Schwadorf. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function SchwadorfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
