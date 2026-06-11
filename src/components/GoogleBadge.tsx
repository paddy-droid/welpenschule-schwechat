import Link from 'next/link';
import { Star } from 'lucide-react';

interface GoogleBadgeProps {
  /** Anker oder URL, zu dem das Badge führt — Standard: Bewertungs-Sektion der aktuellen Seite */
  href?: string;
  /** 'light' für helle Hintergründe, 'dark' für dunkle Sektionen */
  variant?: 'light' | 'dark';
  className?: string;
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.82-.07-1.6-.21-2.36H12v4.47h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.56-5.17 3.56-8.73Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3c-1.07.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.95H1.29v3.09A11.99 11.99 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.29 14.29A7.2 7.2 0 0 1 4.91 12c0-.8.14-1.57.38-2.29V6.62H1.29a11.97 11.97 0 0 0 0 10.76l4-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.43-3.43C17.94 1.19 15.23 0 12 0A11.99 11.99 0 0 0 1.29 6.62l4 3.09C6.23 6.87 8.88 4.77 12 4.77Z"
      />
    </svg>
  );
}

/**
 * Google-Bewertungs-Trust-Badge — führt zu den eingebundenen Google-Rezensionen
 * (Anker #bewertungen auf jeder Seite mit Reviews-Sektion).
 */
export default function GoogleBadge({ href = '#bewertungen', variant = 'light', className = '' }: GoogleBadgeProps) {
  const isDark = variant === 'dark';
  return (
    <Link
      href={href}
      aria-label="5,0 Sterne auf Google — Bewertungen ansehen"
      className={`group inline-flex items-center gap-2.5 rounded-full pl-2.5 pr-4 py-2 border transition-all ${
        isDark
          ? 'bg-cream/10 border-cream/25 backdrop-blur hover:bg-cream/20 hover:border-cream/40'
          : 'bg-white/85 border-ink-200 backdrop-blur shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)] hover:border-brand-400 hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.2)]'
      } ${className}`}
    >
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white shadow-sm shrink-0">
        <GoogleG className="w-4 h-4" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="flex items-center gap-1.5">
          <span className={`text-sm font-bold ${isDark ? 'text-cream' : 'text-ink-950'}`}>5,0</span>
          <span className="flex" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-brand-500 text-brand-500" />
            ))}
          </span>
        </span>
        <span
          className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
            isDark ? 'text-cream/70 group-hover:text-cream' : 'text-ink-500 group-hover:text-brand-700'
          } transition-colors`}
        >
          Google-Bewertungen ansehen
        </span>
      </span>
    </Link>
  );
}
