import { NextResponse } from 'next/server';

// Trägt Newsletter-Anmeldungen serverseitig in die Willenskraft-Liste
// bei GetResponse ein (Single-Opt-in) — der API-Key bleibt auf dem Server.
const GR_CAMPAIGN_ID = 'POhxH'; // Willenskraft-Liste

const GENERIC_ERROR = 'Anmeldung momentan nicht möglich. Bitte versuch es später erneut.';

export async function POST(request: Request) {
  let body: { email?: string; name?: string; hp?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, msg: 'Ungültige Anfrage.' }, { status: 400 });
  }

  // Honeypot: Bots füllen das versteckte Feld -> still "ok", nichts eintragen
  if (body.hp) {
    return NextResponse.json({ ok: true, state: 'new' });
  }

  const email = (body.email || '').trim();
  const name = (body.name || '').trim().slice(0, 100);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, msg: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
      { status: 400 }
    );
  }

  const apiKey = process.env.GETRESPONSE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, msg: GENERIC_ERROR }, { status: 500 });
  }

  const payload: Record<string, unknown> = {
    email,
    campaign: { campaignId: GR_CAMPAIGN_ID },
  };
  if (name) payload.name = name;

  try {
    const res = await fetch('https://api.getresponse.com/v3/contacts', {
      method: 'POST',
      headers: {
        'X-Auth-Token': `api-key ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    if (res.status === 202 || res.status === 201 || res.status === 200) {
      return NextResponse.json({ ok: true, state: 'new' });
    }

    // bereits in der Liste -> trotzdem freundlich bestätigen
    const data: { code?: number } | null = await res.json().catch(() => null);
    if (res.status === 409 || (data && [1008, 1031].includes(Number(data.code)))) {
      return NextResponse.json({ ok: true, state: 'exists' });
    }

    return NextResponse.json({ ok: false, msg: GENERIC_ERROR }, { status: 502 });
  } catch {
    return NextResponse.json(
      { ok: false, msg: 'Technisches Problem. Bitte versuch es später erneut.' },
      { status: 500 }
    );
  }
}
