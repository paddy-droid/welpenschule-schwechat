import { CheckCircle2 } from 'lucide-react';

interface SeoRegionSectionProps {
    region: string;
}

export default function SeoRegionSection({ region }: SeoRegionSectionProps) {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Warum professionelles Hundetraining in <span className="text-yellow-500">{region}</span> den Unterschied macht
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Hundeerziehung ist mehr als nur das Erlernen von Kommandos. Es geht um eine vertrauensvolle Bindung und ein stressfreies Zusammenleben. Entdecke, wie unser mobiles Hundetraining dich und deinen Vierbeiner in {region} und Umgebung unterstützt.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="space-y-8">
                        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gezielte Problemlösung vor Ort</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Viele Verhaltensweisen wie Leinenaggression, Trennungsangst oder ständiges Bellen treten spezifisch in der gewohnten Umgebung auf. Durch unser Konzept des mobilen Trainings direkt in {region} können wir die Ursachen analysieren und genau dort ansetzen, wo die Herausforderungen im Alltag entstehen.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stärkung der Mensch-Hund-Beziehung</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Eine klare Kommunikation ist das Herzstück unserer gewaltfreien Trainingsphilosophie. Wir helfen dir dabei, die Körpersprache deines Hundes besser zu verstehen und Souveränität auszustrahlen. Ein gut sozialisierter Hund bedeutet mehr Freiheit für gemeinsame Spaziergänge in der Natur rund um {region}.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Deine Langzeit-Vorteile auf einen Blick:</h3>
                        <ul className="space-y-5">
                            {[
                                `Stressfreie Begegnungen mit anderen Hunden in ${region}`,
                                'Ein entspannter Alltag zuhause ohne ständiges Kontrollverhalten',
                                'Zuverlässiger Rückruf auch bei starker Ablenkung',
                                'Methoden auf Basis positiver Verstärkung ohne Druck',
                                'Individuelle Anpassung des Trainingsplans an deine Bedürfnisse',
                                'Umfassende Beratung zu artgerechter Auslastung und Beschäftigung'
                            ].map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="bg-yellow-100 rounded-full p-1 mt-1 flex-shrink-0">
                                        <CheckCircle2 className="text-yellow-600 w-5 h-5" />
                                    </div>
                                    <span className="text-gray-700 text-lg leading-relaxed font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 bg-gray-900 rounded-3xl p-10 lg:p-14 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 relative z-10">Mache den ersten Schritt zu einem harmonischen Alltag</h3>
                    <p className="text-gray-300 mb-0 max-w-2xl mx-auto relative z-10 text-lg">
                        Ganz gleich, ob du einen Welpen hast oder einen erwachsenen Hund mit kleinen &quot;Baustellen&quot; – unser Hundetraining in {region} passt sich euch an.
                    </p>
                </div>
            </div>
        </section>
    );
}
