'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Willenskraft Newsletter-Popup (GetResponse)
 * Port des Popups von willenskraft.co.at: öffnet ab 50 % Scroll
 * (Fallback nach 35 s), max. 3 Einblendungen pro Besucher mit
 * 2 Tagen Abstand, nach Anmeldung dauerhaft Ruhe. Die Eintragung
 * läuft serverseitig über /api/newsletter — der API-Key bleibt geheim.
 */

const STORAGE_KEY = 'wk_np_v1';
const MAX_SHOWS = 3;
const COOLDOWN_MS = 2 * 864e5; // 2 Tage Mindestabstand zwischen Einblendungen
const PRIVACY_URL = '/datenschutz';

type StoredState = { count?: number; last?: number; done?: number };

function readState(): StoredState {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}') || {};
  } catch {
    return {};
  }
}

function writeState(patch: StoredState) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...readState(), ...patch }));
  } catch {
    // localStorage gesperrt -> Popup verhält sich wie beim Erstbesuch
  }
}

function PawIcon({ size = 30 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <circle cx="6" cy="11" r="2.1" />
      <circle cx="10.4" cy="7" r="2.2" />
      <circle cx="14.6" cy="7" r="2.2" />
      <circle cx="19" cy="11" r="2.1" />
      <path d="M12.5 12.2c-2.9 0-5.3 2.4-5.3 4.8 0 1.9 1.5 3 3.3 3 1 0 1.4-.35 2-.35s1 .35 2 .35c1.8 0 3.3-1.1 3.3-3 0-2.4-2.4-4.8-5.3-4.8z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true" style={{ flex: '0 0 20px', marginTop: 1 }}>
      <circle cx="12" cy="12" r="11" fill="#f0931a" />
      <path d="M7 12.4l3.2 3.2L17 8.8" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CSS = `
#wk-np{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:18px;}
#wk-np .wk-np-backdrop{position:absolute;inset:0;background:rgba(28,18,5,.58);backdrop-filter:blur(2px);opacity:0;transition:opacity .28s ease;}
#wk-np.wk-np-show .wk-np-backdrop{opacity:1;}
#wk-np .wk-np-card{position:relative;width:100%;max-width:452px;background:#fff;border-radius:22px;box-shadow:0 30px 70px rgba(0,0,0,.32);transform:translateY(18px) scale(.97);opacity:0;transition:transform .32s cubic-bezier(.2,.8,.2,1),opacity .32s ease;max-height:94vh;overflow-y:auto;}
#wk-np.wk-np-show .wk-np-card{transform:none;opacity:1;}
#wk-np .wk-np-x{position:absolute;top:12px;right:14px;z-index:3;width:36px;height:36px;border:none;border-radius:50%;background:rgba(255,255,255,.85);color:#7a4a12;font-size:26px;line-height:1;cursor:pointer;transition:background .2s ease,transform .2s ease;}
#wk-np .wk-np-x:hover{background:#fff;transform:rotate(90deg);}
#wk-np .wk-np-head{background:linear-gradient(135deg,#f0931a,#d07108);color:#fff;padding:26px 28px 22px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;border-radius:22px 22px 0 0;}
#wk-np .wk-np-paw{display:inline-flex;width:54px;height:54px;align-items:center;justify-content:center;background:rgba(255,255,255,.18);border-radius:50%;}
#wk-np .wk-np-kicker{font-size:.74rem;letter-spacing:2px;text-transform:uppercase;font-weight:700;opacity:.95;}
#wk-np .wk-np-body{padding:24px 28px 26px;}
#wk-np .wk-np-title{margin:0 0 8px;color:#111;font-size:1.5rem;line-height:1.2;text-align:center;font-weight:800;}
#wk-np .wk-np-sub{margin:0 0 16px;color:#555;font-size:.98rem;line-height:1.6;text-align:center;}
#wk-np .wk-np-list{list-style:none;margin:0 0 18px;padding:0;}
#wk-np .wk-np-list li{display:flex;gap:10px;align-items:flex-start;margin-bottom:10px;color:#3c3c3c;font-size:.94rem;line-height:1.5;text-align:left;}
#wk-np .wk-np-form{display:flex;flex-direction:column;gap:10px;}
#wk-np .wk-np-form input[type=text],#wk-np .wk-np-form input[type=email]{width:100%;box-sizing:border-box;padding:13px 16px;border:1.5px solid #e3d6c4;border-radius:12px;font-size:1rem;color:#222;background:#fffdfb;transition:border-color .2s ease,box-shadow .2s ease;}
#wk-np .wk-np-form input:focus{outline:none;border-color:#f0931a;box-shadow:0 0 0 3px rgba(240,147,26,.16);}
#wk-np .wk-np-hp{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:0!important;}
#wk-np .wk-np-btn{margin-top:2px;padding:14px 20px;border:none;border-radius:50px;background:linear-gradient(135deg,#f0931a,#d07108);color:#fff;font-size:1.02rem;font-weight:800;cursor:pointer;transition:transform .16s ease,box-shadow .16s ease;box-shadow:0 8px 20px rgba(240,147,26,.28);}
#wk-np .wk-np-btn:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(240,147,26,.4);}
#wk-np .wk-np-btn:disabled{opacity:.7;cursor:default;transform:none;}
#wk-np .wk-np-btn-ghost{background:#f4f4f4;color:#444;box-shadow:none;}
#wk-np .wk-np-err{margin:6px 0 0;color:#c0392b;font-size:.85rem;text-align:center;min-height:0;}
#wk-np .wk-np-consent{margin:14px 0 0;color:#9a9a9a;font-size:.76rem;line-height:1.5;text-align:center;}
#wk-np .wk-np-consent a{color:#d07108;text-decoration:underline;}
#wk-np .wk-np-done-view{text-align:center;padding:8px 0 4px;}
#wk-np .wk-np-done-icon{width:64px;height:64px;margin:0 auto 14px;color:#f0931a;display:flex;align-items:center;justify-content:center;background:#fff3e6;border-radius:50%;}
#wk-np .wk-np-done-view .wk-np-btn{margin-top:18px;display:inline-block;width:auto;padding:11px 30px;}
@media (max-width:480px){#wk-np .wk-np-title{font-size:1.32rem;}#wk-np .wk-np-body{padding:22px 20px 22px;}#wk-np .wk-np-head{padding:22px 20px 18px;}}
`;

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [view, setView] = useState<'form' | 'done'>('form');
  const [doneMsg, setDoneMsg] = useState('Schön, dass du dabei bist – du hörst bald von uns.');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const openedRef = useRef(false);

  const close = useCallback(() => {
    setShow(false);
    window.setTimeout(() => setOpen(false), 320);
  }, []);

  // Trigger: 50 % Scroll oder 35 s (kurze Seiten) — mit Frequenz-Gating
  useEffect(() => {
    const st = readState();
    const now = Date.now();
    if (st.done) return; // bereits angemeldet -> nie wieder
    if ((st.count || 0) >= MAX_SHOWS) return; // max. 3x pro Nutzer
    if (st.last && now - st.last < COOLDOWN_MS) return; // Mindestabstand

    const cleanup = () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(timer);
    };
    const openPopup = () => {
      if (openedRef.current) return;
      openedRef.current = true;
      writeState({ count: (readState().count || 0) + 1, last: Date.now() });
      cleanup();
      setOpen(true);
    };
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
      if (pct >= 0.5) openPopup();
    };
    const timer = window.setTimeout(openPopup, 35000);
    window.addEventListener('scroll', onScroll, { passive: true });
    return cleanup;
  }, []);

  // Ein-Animation, Fokus & Escape, sobald offen
  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => setShow(true));
    const focusTimer = window.setTimeout(() => {
      try {
        emailRef.current?.focus({ preventScroll: true });
      } catch {
        /* noop */
      }
    }, 350);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const hp = (form.elements.namedItem('wk_np_hp') as HTMLInputElement).value;
    setError('');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Bitte gib eine gültige E-Mail-Adresse ein.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, hp }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.ok) {
        writeState({ done: Date.now() });
        if (data.state === 'exists') {
          setDoneMsg('Du bist bereits eingetragen – schön, dass du dabei bist!');
        }
        setView('done');
      } else {
        setError(data?.msg || 'Anmeldung momentan nicht möglich. Bitte versuch es später erneut.');
      }
    } catch {
      setError('Verbindungsproblem. Bitte versuch es später erneut.');
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div id="wk-np" className={show ? 'wk-np-show' : undefined} role="dialog" aria-modal="true" aria-labelledby="wk-np-title">
      <style>{CSS}</style>
      <div className="wk-np-backdrop" onClick={close} />
      <div className="wk-np-card" role="document">
        <button type="button" className="wk-np-x" aria-label="Schließen" onClick={close}>
          &times;
        </button>
        <div className="wk-np-head">
          <span className="wk-np-paw">
            <PawIcon />
          </span>
          <span className="wk-np-kicker">Willenskraft Newsletter</span>
        </div>
        <div className="wk-np-body">
          {view === 'form' ? (
            <div className="wk-np-form-view">
              <h2 id="wk-np-title" className="wk-np-title">
                Bleib auf der Pfote
              </h2>
              <p className="wk-np-sub">
                Hol dir Wissen, Inspiration und exklusive Aktionen von Willenskraft – direkt in dein Postfach.
              </p>
              <ul className="wk-np-list">
                <li>
                  <CheckIcon />
                  <span>Frische Blog-Beiträge, Tipps &amp; Wissen rund um den Hund</span>
                </li>
                <li>
                  <CheckIcon />
                  <span>Neuigkeiten &amp; Aktionen unserer regionalen Hundeschulen</span>
                </li>
                <li>
                  <CheckIcon />
                  <span>Infos &amp; Angebote zur Hundetrainer-Ausbildung</span>
                </li>
              </ul>
              <form className="wk-np-form" noValidate onSubmit={handleSubmit}>
                <input type="text" name="name" autoComplete="given-name" placeholder="Dein Vorname (optional)" />
                <input ref={emailRef} type="email" name="email" autoComplete="email" required placeholder="Deine E-Mail-Adresse" />
                <input type="text" className="wk-np-hp" name="wk_np_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <button type="submit" className="wk-np-btn" disabled={submitting}>
                  {submitting ? 'Einen Moment ...' : 'Ja, ich bin dabei!'}
                </button>
                <p className="wk-np-err" role="alert">
                  {error}
                </p>
              </form>
              <p className="wk-np-consent">
                Mit der Anmeldung erhältst du unseren Newsletter. Abmeldung jederzeit mit einem Klick. Mehr in der{' '}
                <a href={PRIVACY_URL} target="_blank" rel="noopener">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="wk-np-done-view">
              <div className="wk-np-done-icon">
                <PawIcon />
              </div>
              <h2 className="wk-np-title">Willkommen im Rudel!</h2>
              <p className="wk-np-sub">{doneMsg}</p>
              <button type="button" className="wk-np-btn wk-np-btn-ghost" onClick={close}>
                Schließen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
