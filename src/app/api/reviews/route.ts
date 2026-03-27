import { NextResponse } from 'next/server';

const PLACE_NAME = "Hundeschule Willenskraft Bruck an der Leitha";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Google API Key nicht konfiguriert.' }, { status: 500 });
  }

  try {
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(PLACE_NAME)}&key=${apiKey}&language=de`;
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();

    if (searchData.status !== 'OK' || !searchData.results || searchData.results.length === 0) {
      return NextResponse.json({ error: 'Ort konnte nicht gefunden werden.', details: searchData.status }, { status: 404 });
    }

    const placeId = searchData.results[0].place_id;

    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,url&key=${apiKey}&language=de`;
    const detailsResponse = await fetch(detailsUrl);
    const detailsData = await detailsResponse.json();

    if (detailsData.status !== 'OK') {
      return NextResponse.json({ error: detailsData.error_message || 'Fehler beim Abrufen der Bewertungen.', details: detailsData.status }, { status: 500 });
    }

    return NextResponse.json(detailsData.result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Interner Serverfehler.' }, { status: 500 });
  }
}