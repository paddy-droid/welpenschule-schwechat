import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Schwechat | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining bei dir zuhause. Mobiles Hundetraining in Schwechat und Umgebung. Jetzt anfragen!',
};

export default function MobileTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
