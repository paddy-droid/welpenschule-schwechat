'use server';

const PLACE_NAME = "Hundeschule Willenskraft Bruck an der Leitha";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
  relative_time_description?: string;
}

interface ReviewsResult {
  reviews?: Review[];
  url?: string;
  rating?: number;
  name?: string;
  error?: string;
}

export async function getReviews(): Promise<ReviewsResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return { error: 'Google API Key nicht konfiguriert.' };
  }

  try {
    const searchResponse = await fetch(
      'https://places.googleapis.com/v1/places:searchText',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'places.id,places.displayName',
        },
        body: JSON.stringify({
          textQuery: PLACE_NAME,
          languageCode: 'de',
        }),
        next: { revalidate: 3600 },
      }
    );

    const searchData = await searchResponse.json();

    if (!searchData.places || searchData.places.length === 0) {
      return { error: 'Ort konnte nicht gefunden werden.' };
    }

    const placeId = searchData.places[0].id;

    const detailsResponse = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=de&fieldsMask=name,rating,reviews,googleMapsUri`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'displayName,rating,reviews,googleMapsUri',
        },
        next: { revalidate: 3600 },
      }
    );

    const detailsData = await detailsResponse.json();

    if (!detailsData.reviews) {
      return { error: 'Keine Bewertungen vorhanden.' };
    }

    const reviews: Review[] = detailsData.reviews.map((r: { authorAttribution?: { displayName?: string; photoUri?: string }; rating?: number; text?: { text?: string }; relativePublishTimeDescription?: string }) => ({
      author_name: r.authorAttribution?.displayName || 'Anonym',
      rating: r.rating || 5,
      text: r.text?.text || '',
      profile_photo_url: r.authorAttribution?.photoUri || '',
      relative_time_description: r.relativePublishTimeDescription || '',
    }));

    return {
      reviews,
      url: detailsData.googleMapsUri || `https://www.google.com/maps/place/?q=place_id:${placeId}`,
      rating: detailsData.rating,
      name: detailsData.displayName?.text,
    };
  } catch {
    return { error: 'Interner Serverfehler.' };
  }
}
