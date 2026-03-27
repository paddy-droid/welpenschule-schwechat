import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Gramatneusiedl | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Gramatneusiedl. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function GramatneusiedlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
