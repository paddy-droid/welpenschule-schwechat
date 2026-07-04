import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Heart, MapPin, Phone, Quote } from 'lucide-react';
import GoogleBadge from '@/components/GoogleBadge';
import { WhatsAppIcon, waHref } from '@/components/WhatsAppFloat';

interface JessySectionProps {
  /** Ortsname für regionale Personalisierung, z. B. "Mödling" */
  regionName?: string;
}

const jessyImage = 'https://www.willenskraft.co.at/wp-content/uploads/2025/06/Jessica-Pusch-Hundeschule-Wien-Niederoesterreich.webp';

/**
 * Persönliche Vorstellung von Jessica Pusch („Jessy") — der mobilen
 * Willenskraft-Hundetrainerin für Schwechat & das südliche Wiener Umland.
 */
export default function JessySection({ regionName }: JessySectionProps) {
  const ortText = regionName ? `in ${regionName} und Umgebung` : 'in Schwechat und dem südlichen Wiener Umland';

  return (
    <section className="wk-section bg-card relative overflow-hidden">
      <div className="absolute inset-0 wk-mesh opacity-40 pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait */}
          <div className="lg:col-span-4 min-w-0">
            <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px]">
              <div className="absolute -inset-5 bg-gradient-to-br from-brand-100 to-brand-200 rounded-full opacity-70 blur-2xl" />
              <Image
                src={jessyImage}
                alt={`Jessica Pusch — mobile Hundetrainerin & Welpenschule ${ortText}`}
                width={420}
                height={420}
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                className="relative w-full h-auto rounded-full object-cover aspect-square border-4 border-cream shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]"
              />
            </div>
            <div className="relative mt-6 text-center">
              <p className="wk-display text-2xl sm:text-3xl text-ink-950">Jessica Pusch</p>
              <p className="mt-1 text-sm font-semibold text-brand-700">
                „Jessy" — deine Hundetrainerin {regionName ? `für ${regionName}` : 'für Schwechat & Umgebung'}
              </p>
              <div className="mt-4 flex justify-center">
                <GoogleBadge />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-8 min-w-0 space-y-6">
            <div>
              <span className="wk-eyebrow mb-4">
                <Heart className="w-3 h-3" /> Deine Trainerin vor Ort
              </span>
              <h2 className="wk-display text-3xl md:text-4xl xl:text-5xl text-ink-950 [text-wrap:balance]">
                Bei Jessy trainierst du nicht irgendwo —
                <br className="hidden md:block" />
                <span className="wk-text-gradient"> sondern bei dir zuhause.</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-ink-600 leading-relaxed">
              Jessica Pusch — von ihren Kund:innen liebevoll <strong className="text-ink-900">Jessy</strong> genannt —
              leitet den regionalen Standort der <strong className="text-ink-900">Hundeschule Willenskraft</strong> für
              Schwechat, das südliche Wiener Umland und die Region Mödling. Als{' '}
              <strong className="text-ink-900">mobile Hundetrainerin</strong> kommt sie zum Training direkt zu dir
              nach Hause {ortText} — dorthin, wo euer Alltag wirklich stattfindet. Die{' '}
              <strong className="text-ink-900">Welpen-Gruppenkurse</strong> finden am überdachten Trainingsplatz in
              Schwechat statt, weitere Gruppenkurse an sorgfältig ausgewählten Treffpunkten in der Region.
            </p>

            <div className="rounded-3xl bg-cream-soft border border-ink-200/60 p-5 md:p-7">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-brand-600 shrink-0 mt-1" />
                <div className="min-w-0">
                  <p className="text-ink-700 italic leading-relaxed">
                    „Jessy ist total einfühlsam, geduldig und geht auf die Bedürfnisse von Hund und Halter ein —
                    fachlich einfach top."
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <p className="text-xs text-ink-500">— aus den verifizierten Google-Rezensionen</p>
                    <GoogleBadge className="!py-1.5" />
                  </div>
                </div>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                'Mobile Hundetrainerin — Training bei dir zuhause',
                '100 % gewaltfrei, mit positiver Verstärkung',
                'Willenskraft-Standort Schwechat & südliches Wiener Umland',
                'Kostenlose Anfahrt im gesamten Einsatzgebiet',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
              <Link
                href="/kontakt"
                className="wk-btn-primary inline-flex items-center justify-center gap-2 px-7 h-13 rounded-full font-semibold"
              >
                Jessy kennenlernen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 h-13 rounded-full bg-[#25D366] text-white font-semibold hover:brightness-105 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp an Jessy
              </a>
              <a
                href="tel:+436643903673"
                className="wk-btn-ghost inline-flex items-center justify-center gap-2 px-6 h-13 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" /> +43 664 3903673
              </a>
            </div>

            <p className="flex items-center gap-2 text-xs text-ink-500">
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              Einsatzgebiet: Schwechat & südliches Wiener Umland — vom Flughafen bis in den gesamten Bezirk Mödling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
