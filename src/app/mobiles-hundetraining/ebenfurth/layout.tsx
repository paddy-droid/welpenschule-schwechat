import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Ebenfurth | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Ebenfurth. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function EbenfurthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
