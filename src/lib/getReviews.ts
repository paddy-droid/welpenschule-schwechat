'use server';

const PLACE_NAME = "Hundeschule Willenskraft Bruck an der Leitha";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
  relative_time_description?: string;
  time?: number;
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
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(PLACE_NAME)}&key=${apiKey}&language=de`;
    const searchResponse = await fetch(searchUrl, { next: { revalidate: 3600 } });
    const searchData = await searchResponse.json();

    if (searchData.status !== 'OK' || !searchData.results || searchData.results.length === 0) {
      return { error: 'Ort konnte nicht gefunden werden.' };
    }

    const placeId = searchData.results[0].place_id;

    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,url&key=${apiKey}&language=de`;
    const detailsResponse = await fetch(detailsUrl, { next: { revalidate: 3600 } });
    const detailsData = await detailsResponse.json();

    if (detailsData.status !== 'OK') {
      return { error: 'Fehler beim Abrufen der Bewertungen.' };
    }

    return detailsData.result;
  } catch {
    return { error: 'Interner Serverfehler.' };
  }
}
