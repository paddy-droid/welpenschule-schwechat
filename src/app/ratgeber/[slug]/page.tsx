import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticleTemplate from '@/components/BlogArticleTemplate';
import { getPost, getPublishedSlugs, isPublished } from '@/lib/posts';

export const revalidate = 3600;
export const dynamicParams = true;

interface RatgeberPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RatgeberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !isPublished(post)) return {};
  const url = `https://welpenschule-schwechat.at/ratgeber/${post.slug}`;
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: 'article',
      publishedTime: post.publishAt,
      modifiedTime: post.updatedAt ?? post.publishAt,
      images: [{ url: `https://welpenschule-schwechat.at${post.heroImage}`, width: 1600, height: 900, alt: post.heroAlt }],
    },
  };
}

export default async function RatgeberArtikelPage({ params }: RatgeberPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !isPublished(post)) notFound();
  return <BlogArticleTemplate post={post} />;
}
