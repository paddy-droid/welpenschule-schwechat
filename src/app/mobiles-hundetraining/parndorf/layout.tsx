import type { Metadata } from 'next';

const url = 'https://welpenschule-schwechat.at/mobiles-hundetraining/parndorf';

export const metadata: Metadata = {
  title: 'Hundeschule Parndorf | Mobil & gewaltfrei',
  description:
    'Hundeschule Parndorf ✓ pannonische Weite & Outlet-Begegnungen ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Parndorf', 'Hundetrainer Parndorf', 'Mobiles Hundetraining Parndorf', 'Welpenkurs Parndorf Burgenland'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Parndorf | Mobil & gewaltfrei',
    description: 'Hundeschule Parndorf ✓ pannonische Weite ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
    url,
    type: 'website',
  },
};

export default function ParndorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
