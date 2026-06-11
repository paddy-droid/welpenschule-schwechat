import { LocationConfig, WillenskraftContent } from '../types';
import { defaultWillenskraftContent } from './defaultContent';

/**
 * Personalisierte Willenskraft-Inhalte je Einsatzort. Die Texte folgen einem
 * festen Muster — deshalb werden sie aus dem Ortsnamen generiert statt 29-fach
 * kopiert. `nameKurz` ist die Kurzform für den zweiten Satz (z. B. „Götzendorf"
 * statt „Götzendorf an der Leitha").
 */
function makeLocationContent(name: string, nameKurz?: string): WillenskraftContent {
  const kurz = nameKurz ?? name;
  return {
    ...defaultWillenskraftContent,
    subtitle: `Willkommen bei der Hundeschule Willenskraft in ${name} – Dein ganzheitlicher Wegbegleiter für ein harmonisches Leben mit Hund. Wir stehen für tierschutzkonformes & modernes Hundetraining – mobil bei dir vor Ort in ${kurz} und Umgebung, online im eigenen Tempo oder als zertifizierte Ausbildung für angehende Hundetrainer:innen.`,
    description: `Die Hundeschule Willenskraft & Akademie bietet ganzheitliches, bedürfnisorientiertes und tierschutzkonformes Hundetraining direkt in ${name}. Seit über 10 Jahren bilden wir Hundetrainer aus. Mit mobilen Trainings direkt bei dir zuhause in ${kurz}, einer Online-Hundeschule mit Videos und Begleitung sowie einer zertifizierten Ausbildung zum Hundetrainer, unterstützen wir Mensch-Hund-Teams dabei, eine faire, respektvolle und klare Beziehung aufzubauen. Unsere Expertise umfasst Welpen, Junghunde, Tierschutzhunde, Medical Training, Begegnungstraining, Trennungsstress, Dummytraining und Alltagstraining.`,
  };
}

/** Slug → Ortsname (optional mit Kurzform) für alle 29 Einsatzorte. */
const locationNames: Record<string, { name: string; kurz?: string }> = {
  // Cluster Schwechat-Umland
  fischamend: { name: 'Fischamend' },
  schwadorf: { name: 'Schwadorf' },
  ebenfurth: { name: 'Ebenfurth' },
  gramatneusiedl: { name: 'Gramatneusiedl' },
  goetzendorf: { name: 'Götzendorf an der Leitha', kurz: 'Götzendorf' },
  himberg: { name: 'Himberg' },
  'bruck-an-der-leitha': { name: 'Bruck an der Leitha' },
  'wien-simmering': { name: 'Wien-Simmering' },
  parndorf: { name: 'Parndorf' },
  // Cluster Bezirk Mödling
  moedling: { name: 'Mödling' },
  'brunn-am-gebirge': { name: 'Brunn am Gebirge', kurz: 'Brunn' },
  perchtoldsdorf: { name: 'Perchtoldsdorf' },
  'maria-enzersdorf': { name: 'Maria Enzersdorf' },
  'wiener-neudorf': { name: 'Wiener Neudorf' },
  voesendorf: { name: 'Vösendorf' },
  guntramsdorf: { name: 'Guntramsdorf' },
  gumpoldskirchen: { name: 'Gumpoldskirchen' },
  laxenburg: { name: 'Laxenburg' },
  biedermannsdorf: { name: 'Biedermannsdorf' },
  hinterbruehl: { name: 'Hinterbrühl', kurz: 'der Hinterbrühl' },
  giesshuebl: { name: 'Gießhübl' },
  gaaden: { name: 'Gaaden' },
  kaltenleutgeben: { name: 'Kaltenleutgeben' },
  'breitenfurt-bei-wien': { name: 'Breitenfurt bei Wien', kurz: 'Breitenfurt' },
  'laab-im-walde': { name: 'Laab im Walde', kurz: 'Laab' },
  wienerwald: { name: 'der Gemeinde Wienerwald', kurz: 'Sittendorf, Sulz & Co' },
  achau: { name: 'Achau' },
  muenchendorf: { name: 'Münchendorf' },
  hennersdorf: { name: 'Hennersdorf' },
};

export const locationConfigs: LocationConfig = Object.fromEntries(
  Object.entries(locationNames).map(([slug, { name, kurz }]) => [slug, makeLocationContent(name, kurz)])
);

export const getLocationConfig = (location: string) => {
  return locationConfigs[location] || defaultWillenskraftContent;
};
