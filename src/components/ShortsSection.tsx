import { Youtube, ArrowUpRight } from 'lucide-react';

export const youtubeChannelUrl = 'https://www.youtube.com/@hundeschulewillenskraft';

/** Kuratierte Trainings-Shorts vom Willenskraft-YouTube-Kanal (Welpen, Junghund & Methodik). */
export const defaultShortIds = ['GS59aISbezM', 'jFvc-fY9irA', 'eTQsUUp8e0s', 'Csco1QPpTJc', 'egxWG2vLLVM', 'ptXxKbu4XPc'];

interface ShortsSectionProps {
  /** Welche Shorts gezeigt werden (YouTube-Video-IDs) */
  ids?: string[];
  title?: string;
  dark?: boolean;
}

/**
 * Trainings-Shorts vom Willenskraft-Kanal + Kanal-CTA.
 */
export default function ShortsSection({ ids = defaultShortIds, title = 'Echte Momente aus dem Training.', dark = false }: ShortsSectionProps) {
  const gridCols = ids.length >= 6 ? 'sm:grid-cols-2 lg:grid-cols-3 max-w-5xl' : ids.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4 max-w-6xl' : ids.length === 3 ? 'sm:grid-cols-3 max-w-4xl' : 'sm:grid-cols-2 max-w-3xl';
  return (
    <section className={`wk-section ${dark ? 'bg-ink-950 text-cream' : 'bg-card'}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="wk-eyebrow mb-5">
            <Youtube className="w-3 h-3" /> Trainings-Shorts
          </span>
          <h2 className={`wk-display text-4xl md:text-5xl ${dark ? 'text-cream' : 'text-ink-950'}`}>{title}</h2>
          <p className={`mt-5 text-lg ${dark ? 'text-ink-300' : 'text-ink-600'}`}>
            Direkt vom <strong>Willenskraft-YouTube-Kanal</strong> — kurze Einblicke in gewaltfreies Training.
          </p>
        </div>

        <div className={`grid ${gridCols} gap-5 md:gap-6 justify-center mx-auto`}>
          {ids.map((id) => (
            <div key={id} className="flex justify-center">
              <iframe
                width="100%"
                className="max-w-[300px] aspect-[9/16] h-auto rounded-[1.5rem] shadow-xl border border-ink-200"
                src={`https://www.youtube.com/embed/${id}`}
                title="Willenskraft Trainings-Short"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full px-6 h-13 bg-[#FF0000] text-white font-semibold hover:brightness-110 transition-all"
          >
            <Youtube className="w-5 h-5" />
            Mehr auf dem Willenskraft-Kanal
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
