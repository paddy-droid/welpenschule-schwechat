import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import GoogleBadge from '@/components/GoogleBadge';
import { WhatsAppIcon, waHref } from '@/components/WhatsAppFloat';

interface CtaBannerProps {
  /** Ortsname für regionale Personalisierung */
  regionName?: string;
  /** Überschrift überschreiben */
  title?: string;
  text?: string;
}

/**
 * Auffälliger Kontakt-CTA für den Content-Bereich — Termin, Anruf, WhatsApp.
 */
export default function CtaBanner({ regionName, title, text }: CtaBannerProps) {
  const ort = regionName ?? 'deiner Region';
  return (
    <section className="container mx-auto px-6 py-8">
      <div className="relative overflow-hidden rounded-[2rem] max-w-5xl mx-auto p-8 md:p-10 bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 text-ink-950 shadow-[0_30px_60px_-20px_rgba(186,135,30,0.45)]">
        <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-cream/30 blur-3xl" />
        <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute inset-0 wk-grain opacity-30" />
        <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <h3 className="wk-display text-2xl md:text-3xl mb-2">
              {title ?? `Bereit für entspannte Spaziergänge in ${ort}?`}
            </h3>
            <p className="text-ink-950/80 leading-relaxed text-sm md:text-base">
              {text ??
                'Jessy ist nur eine Nachricht entfernt — unverbindlich anfragen und gemeinsam Schritt für Schritt euren gewaltfreien Trainingsplan festlegen. Rückmeldung innerhalb von 24 Stunden an Werktagen.'}
            </p>
            <div className="mt-4 hidden sm:block">
              <GoogleBadge />
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-ink-950 text-cream rounded-full px-6 h-12 font-semibold text-sm hover:bg-ink-900 transition-colors"
            >
              Jetzt Termin anfragen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="tel:+436643903673"
                className="inline-flex items-center justify-center gap-2 rounded-full px-4 h-11 bg-cream/85 border border-cream text-ink-950 font-semibold text-sm hover:bg-cream transition-colors"
              >
                <Phone className="w-4 h-4" /> Anrufen
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-4 h-11 bg-[#25D366] text-white font-semibold text-sm hover:brightness-105 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
            </div>
            <p className="text-[11px] text-ink-950/70 text-center leading-snug">
              Kostenlose Anfahrt im gesamten Einsatzgebiet · max. 4 Teams pro Gruppe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
