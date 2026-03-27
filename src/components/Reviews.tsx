import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { getReviews } from '@/lib/getReviews';

export default async function Reviews() {
  const data = await getReviews();

  if (data.error) {
    return <div className="text-red-500 text-center py-8">Bewertungen konnten nicht geladen werden.</div>;
  }

  if (!data.reviews || data.reviews.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.reviews.map((review, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4">
              {review.profile_photo_url && (
                <Image
                  src={review.profile_photo_url.startsWith('https') ? review.profile_photo_url : `https:${review.profile_photo_url}`}
                  alt={`Profilbild von ${review.author_name}`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div>
                <CardTitle>{review.author_name}</CardTitle>
                <CardDescription>{'⭐'.repeat(review.rating)}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-4">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {data.url && (
        <div className="text-center mt-12">
          <Button asChild>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              Alle Bewertungen auf Google ansehen
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
