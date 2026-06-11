import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

const umlandLinks = [
  { href: '/mobiles-hundetraining', label: 'Schwechat' },
  { href: '/mobiles-hundetraining/wien-simmering', label: 'Wien-Simmering' },
  { href: '/mobiles-hundetraining/fischamend', label: 'Fischamend' },
  { href: '/mobiles-hundetraining/schwadorf', label: 'Schwadorf' },
  { href: '/mobiles-hundetraining/himberg', label: 'Himberg' },
  { href: '/mobiles-hundetraining/gramatneusiedl', label: 'Gramatneusiedl' },
  { href: '/mobiles-hundetraining/ebenfurth', label: 'Ebenfurth' },
  { href: '/mobiles-hundetraining/goetzendorf', label: 'Götzendorf' },
  { href: '/mobiles-hundetraining/bruck-an-der-leitha', label: 'Bruck/Leitha' },
  { href: '/mobiles-hundetraining/parndorf', label: 'Parndorf' },
];

const moedlingLinks = [
  { href: '/mobiles-hundetraining/moedling', label: 'Mödling' },
  { href: '/mobiles-hundetraining/brunn-am-gebirge', label: 'Brunn am Gebirge' },
  { href: '/mobiles-hundetraining/perchtoldsdorf', label: 'Perchtoldsdorf' },
  { href: '/mobiles-hundetraining/maria-enzersdorf', label: 'Maria Enzersdorf' },
  { href: '/mobiles-hundetraining/wiener-neudorf', label: 'Wiener Neudorf' },
  { href: '/mobiles-hundetraining/voesendorf', label: 'Vösendorf' },
  { href: '/mobiles-hundetraining/guntramsdorf', label: 'Guntramsdorf' },
  { href: '/mobiles-hundetraining/gumpoldskirchen', label: 'Gumpoldskirchen' },
  { href: '/mobiles-hundetraining/laxenburg', label: 'Laxenburg' },
  { href: '/mobiles-hundetraining/biedermannsdorf', label: 'Biedermannsdorf' },
  { href: '/mobiles-hundetraining/hinterbruehl', label: 'Hinterbrühl' },
  { href: '/mobiles-hundetraining/giesshuebl', label: 'Gießhübl' },
  { href: '/mobiles-hundetraining/gaaden', label: 'Gaaden' },
  { href: '/mobiles-hundetraining/kaltenleutgeben', label: 'Kaltenleutgeben' },
  { href: '/mobiles-hundetraining/breitenfurt-bei-wien', label: 'Breitenfurt' },
  { href: '/mobiles-hundetraining/laab-im-walde', label: 'Laab im Walde' },
  { href: '/mobiles-hundetraining/wienerwald', label: 'Wienerwald' },
  { href: '/mobiles-hundetraining/achau', label: 'Achau' },
  { href: '/mobiles-hundetraining/muenchendorf', label: 'Münchendorf' },
  { href: '/mobiles-hundetraining/hennersdorf', label: 'Hennersdorf' },
];

export default function Footer() {
  return (
    <footer className="relative mt-12 bg-ink-950 text-ink-200 overflow-hidden">
      <div className="absolute inset-0 wk-mesh-dark opacity-90 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-[10px] font-bold uppercase tracking-[0.18em]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              Hundeschule Willenskraft
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold leading-[1.05] tracking-tight text-cream">
              Gemeinsam wachsen –<br />
              <span className="wk-text-gradient">mit Achtsamkeit, Klarheit & echter Verbindung.</span>
            </h3>
            <p className="text-ink-400 leading-relaxed max-w-md">
              Welpenschule Schwechat ist Teil der Hundeschule Willenskraft. Gewaltfreies, ganzheitliches
              Hundetraining nach den modernsten verhaltensbiologischen Standards.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/hundeschule_willenskraft/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-ink-700 hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-300 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Hundeschule.Willenskraft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-ink-700 hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-300 flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.willenskraft.co.at"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 px-3.5 h-10 rounded-full border border-ink-700 hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-300 text-xs font-medium transition-all"
              >
                willenskraft.co.at
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 mb-5">Navigation</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-brand-300 transition-colors">Startseite</Link></li>
              <li><Link href="/mobiles-hundetraining" className="hover:text-brand-300 transition-colors">Mobiles Training</Link></li>
              <li><Link href="/kurse" className="hover:text-brand-300 transition-colors">Kurse</Link></li>
              <li><Link href="/kontakt" className="hover:text-brand-300 transition-colors">Kontakt</Link></li>
              <li><Link href="/impressum" className="hover:text-brand-300 transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-brand-300 transition-colors">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Regions */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 mb-5">Schwechat & Umland</p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm mb-8">
              {umlandLinks.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="hover:text-brand-300 transition-colors">{r.label}</Link>
                </li>
              ))}
            </ul>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 mb-5">Bezirk Mödling</p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm">
              {moedlingLinks.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="hover:text-brand-300 transition-colors">{r.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 mb-5">Kontakt</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+436643903673" className="flex items-start gap-2.5 hover:text-brand-300 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" />
                  <span>+43 664 3903673</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:bruck_leitha@willenskraft.co.at"
                  className="flex items-start gap-2.5 hover:text-brand-300 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" />
                  <span>bruck_leitha@willenskraft.co.at</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" />
                <span>2320 Schwechat<br />Niederösterreich, AT</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-800 pt-8 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-ink-500">
          <p>© {new Date().getFullYear()} Hundeschule Willenskraft · Alle Rechte vorbehalten.</p>
          <p className="text-ink-600">
            Inhaberin: Jessica Pusch · Welpenschule Schwechat · Niederösterreich
          </p>
        </div>
      </div>
    </footer>
  );
}
