import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { WillenskraftContent, WillenskraftButton } from './WillenskraftSection/types';
import { defaultWillenskraftContent } from './WillenskraftSection/config/defaultContent';

interface WillenskraftSectionProps {
  content?: WillenskraftContent;
}

export default function WillenskraftSection({ content = defaultWillenskraftContent }: WillenskraftSectionProps) {
  return (
    <section className="wk-section relative overflow-hidden bg-cream-soft">
      <div className="absolute inset-0 wk-mesh opacity-50 pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="wk-eyebrow mb-5">Hundeschule Willenskraft</span>
          <h2 className="wk-display text-3xl md:text-4xl lg:text-5xl text-ink-950 leading-[1.05]">
            {content.title}
          </h2>
          <p className="mt-6 text-lg text-ink-600 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-14">
          {content.images.map((src: string, index: number) => (
            <div
              key={index}
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_18px_40px_-20px_rgba(0,0,0,0.18)] group"
            >
              <Image
                src={src}
                alt={`Hundeschule Willenskraft Bild ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-ink-950/5" />
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-ink-700 leading-relaxed mb-8">
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            {content.buttons.map((button: WillenskraftButton, index: number) => (
              <Link
                key={index}
                href={button.href}
                target={button.target || '_blank'}
                rel={button.rel || 'noopener noreferrer'}
                className="wk-btn-primary inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full font-semibold text-sm"
              >
                {button.text}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
