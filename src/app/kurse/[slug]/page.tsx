import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import KursPageTemplate from '@/components/KursPageTemplate';
import { getKurs, kurse } from '@/lib/kurseData';

interface KursPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return kurse.map((k) => ({ slug: k.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: KursPageProps): Promise<Metadata> {
  const { slug } = await params;
  const kurs = getKurs(slug);
  if (!kurs) return {};
  const url = `https://welpenschule-schwechat.at/kurse/${kurs.slug}`;
  return {
    title: { absolute: kurs.metaTitle },
    description: kurs.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: kurs.metaTitle,
      description: kurs.metaDescription,
      url,
      type: 'website',
      images: [{ url: `https://welpenschule-schwechat.at${kurs.heroImage}`, width: 1920, height: 1080, alt: kurs.heroAlt }],
    },
  };
}

export default async function KursPage({ params }: KursPageProps) {
  const { slug } = await params;
  const kurs = getKurs(slug);
  if (!kurs) notFound();
  return <KursPageTemplate kurs={kurs} />;
}
