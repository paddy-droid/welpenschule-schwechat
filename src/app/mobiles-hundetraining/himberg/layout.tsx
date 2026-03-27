import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Himberg | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Himberg. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function HimbergLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
