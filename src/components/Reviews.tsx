'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
}

interface ReviewsData {
  reviews: Review[];
  url: string;
}

export default function Reviews() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Fehler beim Laden der Bewertungen');
        }
        const result = await response.json();
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Ein unbekannter Fehler ist aufgetreten.');
        }
      }
    }
    fetchReviews();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center">Fehler: {error}</div>;
  }

  if (!data) {
    return <div className="text-center">Lade Bewertungen...</div>;
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.reviews && data.reviews.map((review, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Image
                src={review.profile_photo_url.startsWith('https') ? review.profile_photo_url : `https:${review.profile_photo_url}`}
                alt={`Profilbild von ${review.author_name}`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
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