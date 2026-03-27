import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Fischamend | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Fischamend. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function FischamendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
