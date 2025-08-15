import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeName = "Hundeschule Willenskraft Bruck an der Leitha";

  if (!apiKey || apiKey === 'DEIN_API_KEY_HIER') {
    return NextResponse.json({ error: 'Google API Key nicht konfiguriert.' }, { status: 500 });
  }

  try {
    // Schritt 1: Finde die Place ID basierend auf dem Namen
    const findPlaceUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(placeName)}&inputtype=textquery&fields=place_id&key=${apiKey}`;
    const findPlaceResponse = await fetch(findPlaceUrl);
    const findPlaceData = await findPlaceResponse.json();

    if (findPlaceData.status !== 'OK' || !findPlaceData.candidates || findPlaceData.candidates.length === 0) {
      return NextResponse.json({ error: 'Ort konnte nicht gefunden werden.', details: findPlaceData.status }, { status: 404 });
    }

    const placeId = findPlaceData.candidates[0].place_id;

    // Schritt 2: Rufe die Details (inkl. Bewertungen) mit der gefundenen Place ID ab
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,url&key=${apiKey}&language=de`;
    const detailsResponse = await fetch(detailsUrl);
    const detailsData = await detailsResponse.json();

    if (detailsData.status !== 'OK') {
      return NextResponse.json({ error: detailsData.error_message || 'Fehler beim Abrufen der Google-Bewertungen.', details: detailsData.status }, { status: 500 });
    }

    return NextResponse.json(detailsData.result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Interner Serverfehler beim Abrufen der Bewertungen.' }, { status: 500 });
  }
}