import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Götzendorf an der Leitha | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Götzendorf an der Leitha. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function GoetzendorfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
