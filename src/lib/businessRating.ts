import { cache } from 'react';

/**
 * Holt das echte Google-Rating + die echte Bewertungsanzahl (userRatingCount)
 * der Hundeschule Willenskraft Bruck an der Leitha aus der Places API (New).
 * Wird server-seitig beim Build/Render genutzt, um ein WAHRES AggregateRating
 * ins LocalBusiness-JSON-LD zu schreiben (Sterne-Rich-Results).
 *
 * Gibt null zurück, wenn kein API-Key vorhanden ist oder der Call keine
 * belegbaren Daten liefert — dann wird KEIN aggregateRating gerendert
 * (keine erfundenen Zahlen).
 */
const PLACE_QUERY = 'Hundeschule Willenskraft Bruck an der Leitha';

export const getBusinessRating = cache(
  async (): Promise<{ ratingValue: number; reviewCount: number } | null> => {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    if (!apiKey || apiKey === 'DEIN_API_KEY_HIER') return null;

    try {
      const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'places.rating,places.userRatingCount',
        },
        body: JSON.stringify({ textQuery: PLACE_QUERY, languageCode: 'de' }),
        next: { revalidate: 86400 },
      });
      if (!res.ok) return null;

      const data = await res.json();
      const place = data?.places?.[0];
      const rating = place?.rating;
      const count = place?.userRatingCount;
      if (typeof rating !== 'number' || typeof count !== 'number' || count < 1) return null;

      return { ratingValue: rating, reviewCount: count };
    } catch {
      return null;
    }
  }
);
