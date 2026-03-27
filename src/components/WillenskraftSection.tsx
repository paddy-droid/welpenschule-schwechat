import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WillenskraftContent, WillenskraftButton } from './WillenskraftSection/types';
import { defaultWillenskraftContent } from './WillenskraftSection/config/defaultContent';

interface WillenskraftSectionProps {
  content?: WillenskraftContent;
}

export default function WillenskraftSection({ content = defaultWillenskraftContent }: WillenskraftSectionProps) {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
                    <p className="text-lg text-gray-700">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {content.images.map((src: string, index: number) => (
                        <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={src}
                                alt={`Hundeschule Willenskraft Bild ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-lg text-gray-700 mb-6">
                        {content.description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                        {content.buttons.map((button: WillenskraftButton, index: number) => (
                            <Button
                                key={index}
                                asChild
                                size="lg"
                                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                            >
                                <Link
                                    href={button.href}
                                    target={button.target || "_blank"}
                                    rel={button.rel || "noopener noreferrer"}
                                >
                                    {button.text}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
