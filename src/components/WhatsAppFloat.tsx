const waHref =
  'https://wa.me/436643903673?text=' +
  encodeURIComponent('Hallo Jessy! Ich interessiere mich für mobiles Hundetraining. 🐾');

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.04 3C9.02 3 3.32 8.7 3.32 15.72c0 2.24.59 4.43 1.71 6.36L3.2 28.8l6.89-1.8a12.66 12.66 0 0 0 5.95 1.51h.01c7.01 0 12.72-5.7 12.72-12.72 0-3.4-1.32-6.6-3.73-9A12.65 12.65 0 0 0 16.04 3Zm0 23.36h-.01a10.5 10.5 0 0 1-5.36-1.47l-.38-.23-3.98 1.04 1.06-3.88-.25-.4a10.53 10.53 0 0 1-1.62-5.61c0-5.83 4.74-10.57 10.58-10.57 2.82 0 5.48 1.1 7.47 3.1a10.5 10.5 0 0 1 3.1 7.48c0 5.83-4.75 10.57-10.57 10.57Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58a9.6 9.6 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.61 0 1.54 1.13 3.04 1.28 3.25.16.21 2.22 3.39 5.38 4.75.75.33 1.34.52 1.8.66.75.24 1.44.21 1.98.13.6-.09 1.87-.77 2.13-1.5.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

/**
 * Schwebender WhatsApp-Button — nur mobil sichtbar.
 * Direkter Draht zu Jessy mit vorausgefüllter Nachricht.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp-Nachricht an Hundetrainerin Jessy schreiben"
      className="md:hidden fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] active:scale-95 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" aria-hidden="true" />
      <WhatsAppIcon className="w-7 h-7 relative" />
    </a>
  );
}

export { WhatsAppIcon, waHref };
