/**
 * Gruppenkurs-Angebot von Jessy (Willenskraft-Standort Bruck/Leitha–Wien)
 * für die Region Schwechat & südliches Wiener Umland. Quelle: willenskraft.co.at
 * Kurs-Detailseiten (Preise, Einheiten, Inhalte, Voraussetzungen — Stand 2026-06).
 * Welpen- & Junghundekurse finden am überdachten Trainingsplatz in Schwechat statt,
 * weitere Kurse an sorgfältig ausgewählten Treffpunkten in der Region.
 */

export interface KursFAQ {
  question: string;
  answer: string;
}

export interface KursData {
  slug: string;
  name: string;
  menuLabel: string;
  /** Kurze Einordnung fürs Menü/Karten */
  teaser: string;
  claim: string;
  price: string;
  units: string;
  groupSize: string;
  audience: string;
  start: string;
  intro: string[];
  inhalte: string[];
  voraussetzungen?: string[];
  equipment?: string[];
  faqs: KursFAQ[];
  heroImage: string;
  heroAlt: string;
  wkImage: { src: string; alt: string };
  wkImage2?: { src: string; alt: string };
  shorts: string[];
  video?: { id: string; title: string };
  calendarId?: string;
  metaTitle: string;
  metaDescription: string;
}

const WK = 'https://www.willenskraft.co.at/wp-content/uploads';

export const kurse: KursData[] = [
  {
    slug: 'welpenkurs',
    name: 'Welpenkurs',
    menuLabel: 'Welpenkurs',
    teaser: 'Der perfekte Start — Welpen bis ~5 Monate',
    claim: 'Der gewaltfreie & ganzheitliche Start ins Hundeleben — 6 Einheiten in Kleingruppen am überdachten Trainingsplatz in Schwechat.',
    price: '195 €',
    units: '6 Einheiten à 60 Min.',
    groupSize: 'max. 4 Mensch-Hund-Teams',
    audience: 'Welpen bis zu einem Alter von ca. 5 Monaten — alle Rassen. Die wichtigste Sozialisierungsphase liegt etwa zwischen der 8. und 16. Lebenswoche: je früher ihr startet, desto besser.',
    start: 'Jeden Monat startet mindestens ein neuer Welpen-Gruppenkurs.',
    intro: [
      'Im Welpenkurs arbeiten wir gemeinsam an den grundlegenden Fähigkeiten: positiver Signalaufbau, die Auswahl des richtigen Equipments, Objektvorstellung und Leinenhandling — und wir beobachten genau, wie sich die Ausdrucksmöglichkeiten deines jungen Hundes entwickeln. Unser Hauptanliegen: Jeder neue Eindruck soll für deinen Welpen eine positive Erfahrung sein.',
      'Die sechs Einheiten finden am überdachten Trainingsplatz in Schwechat statt — wetterunabhängig und in einem geschützten Rahmen mit maximal vier Teams. Als Welpeneltern könnt ihr zusätzlich private Einzelstunden um 55 € buchen, mobil bei euch zuhause.',
    ],
    inhalte: [
      'Grundbedürfnisse der Hunde',
      'Kommunikation — die Sprache der Hunde & Menschen',
      'Sozialisierung in der Prägephase',
      'Freilauf, Spiel & Spaß',
      'Erste Signale: Sitz, Platz & Bleib — mit positiver Verstärkung',
      'Suchspiele — Nasenspaß',
      'Diverse Untergründe kennenlernen',
      'Umgang mit Leine & Schleppleine',
      'Positiv aufgebautes Unterbrechungssignal',
      'Rückruf-Aufbau',
      'Vorstellung diverser Objekte',
    ],
    faqs: [
      { question: 'Ab wann kann mein Welpe teilnehmen?', answer: 'Sobald die erste Grundimmunisierung gemacht ist — idealerweise direkt nach dem Einzug, denn die wichtigste Sozialisierungsphase endet etwa mit der 16. Lebenswoche. Teilnehmen können Welpen bis zu einem Alter von rund 5 Monaten, alle Rassen.' },
      { question: 'Wo findet der Welpenkurs statt?', answer: 'Am überdachten Trainingsplatz in Schwechat — dadurch trainieren wir wetterunabhängig das ganze Jahr. Die genaue Adresse erfährst du bei der Anmeldung.' },
      { question: 'Was kostet der Welpenkurs?', answer: 'Der Kurs umfasst 6 Einheiten zu je einer Stunde und kostet 195 €. Ergänzend könnt ihr mobile Einzelstunden um 55 € buchen — Jessy kommt dafür zu euch nach Hause.' },
      { question: 'Findet der Kurs auch im Winter statt?', answer: 'Ja — der überdachte Trainingsplatz macht uns wetterunabhängig, im Winter gibt es zusätzlich die „Willenskraft Winteredition" mit entsprechend angepasster Kursgestaltung. Wir empfehlen warme Kleidung für dich und eine Decke für deinen Welpen.' },
    ],
    heroImage: '/heroes/kurs-welpen.webp',
    heroAlt: 'Welpengruppe lernt auf der Wiese — Welpenkurs der Welpenschule Schwechat (Hundeschule Willenskraft)',
    wkImage: { src: `${WK}/2024/05/Hundeschule-Niederoesterreich-Welpen-845x684.webp`, alt: 'Junger Welpe im Welpentraining der Willenskraft Welpenschule' },
    wkImage2: { src: `${WK}/2024/05/Hundeschule-Willenskraft-Parndorf-Welpenschule-845x684.webp`, alt: 'Welpenschule mit Willenskraft — Gruppentraining in Kleingruppen' },
    shorts: ['0tDJyXQznMk', 'kPctHDJ5zHw', 'nY7-Vl5bOc0'],
    video: { id: 'yyp4gCZdwK4', title: 'Expertinnen-Talk: Welpen — Bianca Willen & Martha Höhr' },
    calendarId: 'ae98e030dbc6780ab9fc5e7b8a27a55122d8b594d1e42eba54d5a154aa9e7f5e@group.calendar.google.com',
    metaTitle: 'Welpenkurs Schwechat – 6 Einheiten | Willenskraft',
    metaDescription: 'Welpenkurs mit Jessy: 6 Einheiten à 60 Min. um 195 € ✓ max. 4 Teams ✓ gewaltfrei ✓ überdachter Trainingsplatz in Schwechat. ☎ 0664 3903673',
  },
  {
    slug: 'junghundekurs',
    name: 'Junghundekurs',
    menuLabel: 'Junghundekurs',
    teaser: 'Souverän durch die Pubertät',
    claim: 'Wenn die Pubertät zuschlägt: Signale festigen, Rückruf sichern, Reize meistern — der moderne Junghundekurs in Kleingruppen.',
    price: '195 €',
    units: '6 Einheiten à 60 Min.',
    groupSize: 'kleine Gruppen',
    audience: 'Junghunde nach dem Welpenkurs oder als Quereinstieg — auch adoptierte Junghunde aus dem Ausland sind herzlich willkommen.',
    start: 'Jeden Monat startet mindestens ein Junghundekurs.',
    intro: [
      'Im Junghundekurs festigen wir bereits Erlerntes, etablieren neue Signale, bauen den Sozialisierungs-Erfahrungsschatz aus und erobern neue Umgebungen. Besonderes Augenmerk legen wir darauf, körpersprachliche Stresssignale deines Hundes zu erkennen und individuelle Strategien im Umgang mit Außenreizen zu entwickeln.',
      'Gerade in der Pubertät scheint vieles „plötzlich weg" zu sein — das ist normal und vor allem trainierbar. Mit Struktur, positiver Verstärkung und echten Alltagssituationen rund um den Trainingsplatz in Schwechat wird aus dem wilden Teenager ein souveräner Begleiter.',
    ],
    inhalte: [
      'Intensivierung & Ausbau erlernter Signale',
      'Etablierung neuer Signale',
      'Kommunikation & Körpersprache',
      'Begegnungstraining: Hunde, Jogger, Kinder & Co',
      'Training in ungewohnter Umgebung',
      'Kooperationstraining',
      'Ausbau des sicheren Rückrufs',
      'Praktische Übungen zur geistigen Auslastung',
      'Leinenhandling für Hund & Mensch',
    ],
    voraussetzungen: [
      'Erstgespräch mit Anamnese (2 Std.)',
      'Gesunder & schmerzfreier Hund',
      'Grundbedürfnisse im Alltag gedeckt',
      'Haftpflichtversicherung & Registrierung',
      'Läufige Hündinnen können nicht teilnehmen',
    ],
    equipment: [
      'Gut sitzendes Geschirr',
      '5-Meter-Leine (keine Flexileine)',
      'Stabiles Schuhwerk & wetterfeste Kleidung',
      'Leckerchen & Lieblingsspielzeug',
      'Wasser für Hund & Mensch, Decke/Handtuch',
    ],
    faqs: [
      { question: 'Für welche Hunde ist der Junghundekurs geeignet?', answer: 'Für Junghunde nach dem Welpenkurs genauso wie für Quereinsteiger — auch adoptierte Junghunde aus dem Ausland. Vorab führen wir ein zweistündiges Erstgespräch mit Anamnese, damit der Kurs zu euch passt.' },
      { question: 'Mein Junghund hört plötzlich nicht mehr — ist das normal?', answer: 'Absolut. In der Pubertät wird das Hundehirn umgebaut, Erlerntes scheint zeitweise verschwunden. Genau dafür ist der Kurs da: Signale festigen, Rückruf neu absichern und Strategien für Außenreize entwickeln — gewaltfrei und ohne Frust.' },
      { question: 'Was kostet der Junghundekurs?', answer: 'Der Kurs umfasst 6 Einheiten zu je einer Stunde und kostet 195 €. Jeden Monat startet mindestens ein neuer Kurs in Schwechat.' },
      { question: 'Welches Equipment brauche ich?', answer: 'Ein gut sitzendes Geschirr, eine 5-Meter-Leine (keine Flexileine), wetterfeste Kleidung mit stabilem Schuhwerk, Leckerchen, Lieblingsspielzeug und Wasser für euch beide.' },
    ],
    heroImage: '/heroes/kurs-junghund.webp',
    heroAlt: 'Junghund übt Blickkontakt mit Halterin am Feldweg — Junghundekurs Willenskraft Region Schwechat',
    wkImage: { src: `${WK}/2024/05/Hundeschule-Bruck-an-der-Leitha-Junghundekurs-845x684.webp`, alt: 'Hundetrainerin Jessy im Junghundekurs der Hundeschule Willenskraft' },
    wkImage2: { src: `${WK}/2024/05/Hundeschule-Jois-Markertraining-845x684.webp`, alt: 'Markertraining mit der Hundeschule Willenskraft' },
    shorts: ['jFvc-fY9irA', 'kPctHDJ5zHw', 'IegFt24xnbs', '7XcpETZiW1E'],
    video: { id: 'iTfYQh1IKXs', title: 'Rückruftraining im Junghundekurs mit Willenskraft' },
    calendarId: '010c46a5c45f0d69465927b26e6e5c6190e79009c1ba222fb87b159660c0c190@group.calendar.google.com',
    metaTitle: 'Junghundekurs Schwechat | Willenskraft',
    metaDescription: 'Junghundekurs mit Jessy: 6 Einheiten um 195 € ✓ Rückruf, Impulskontrolle & Begegnungen ✓ gewaltfrei ✓ Schwechat & Umgebung. ☎ 0664 3903673',
  },
  {
    slug: 'begegnungstraining',
    name: 'Begegnungstraining',
    menuLabel: 'Begegnungstraining',
    teaser: 'Entspannte Spaziergänge statt Leinenfrust',
    claim: 'Dein Hund zieht, bellt oder will flüchten, wenn andere Hunde auftauchen? Hier lernt ihr entspannte Begegnungen — Schritt für Schritt.',
    price: '260 €',
    units: '8 Einheiten à 60 Min.',
    groupSize: 'max. 4 Mensch-Hund-Teams',
    audience: 'Hunde, die bei Begegnungen an der Leine ziehen, nicht mehr ansprechbar sind oder am liebsten flüchten würden — vom „kleinen Wildling" bis zum unsicheren Hund.',
    start: 'Jeden Monat startet mindestens ein Gruppenkurs.',
    intro: [
      'Im Begegnungstraining lernst du praktische, wirkungsvolle Methoden für entspannte Hundebegegnungen: richtiges Leinenhandling, die fünf Begegnungszonen und den „Volumenregler" — also die richtige Intensität deiner Umorientierungssignale. Trainiert wird in ruhiger, kontrollierter Umgebung mit maximal vier Mensch-Hund-Teams.',
      'Das Ziel: sichere, entspannte und freudige Spaziergänge — für dich und deinen Hund. Die praktischen Übungseinheiten mit den anderen Teams simulieren echte Begegnungen, aber in einem Rahmen, in dem dein Hund lernen kann statt nur reagieren zu müssen. Die Treffpunkte liegen in der Region Schwechat — du erfährst sie bei der Anmeldung.',
    ],
    inhalte: [
      'Hund trifft Hund — Lösungsansätze',
      'Richtiges Leinenhandling',
      'Die 5 Begegnungszonen',
      'Der „Volumenregler" der Signale',
      'Kommunikation & Körpersprache',
      'Training in ruhiger Umgebung',
      'Kooperationstraining',
      'Leitfaden für euer Begegnungstraining',
      'Praktische Übungen mit anderen Mensch-Hund-Teams',
    ],
    voraussetzungen: [
      'Erstgespräch mit Anamnese',
      'Erziehungs-Basics (bei Bedarf vorab Einzeltraining)',
      'Gesunder & schmerzfreier Hund (fachlich abgeklärt)',
      'Haftpflichtversicherung & Registrierung',
      'Läufige Hündinnen & kranke Hunde können nicht teilnehmen',
    ],
    equipment: [
      'Gut sitzendes Geschirr',
      '3–5-Meter-Leine (keine Flexileine)',
      'Stabiles Schuhwerk & wetterfeste Kleidung',
      'Leckerchen & Lieblingsspielzeug, Wasser',
    ],
    faqs: [
      { question: 'Für welche Hunde ist das Begegnungstraining gedacht?', answer: 'Für Hunde, die bei Begegnungen an der Leine ziehen, bellen, nicht mehr ansprechbar sind oder flüchten wollen. Im Erstgespräch mit Anamnese klären wir, ob der Gruppenkurs passt oder ob vorab Einzeltraining sinnvoll ist.' },
      { question: 'Wie läuft das Training ab?', answer: 'In kleinen Gruppen mit maximal vier Teams üben wir in ruhiger, kontrollierter Umgebung: Leinenhandling, die fünf Begegnungszonen, Umorientierungssignale — und simulieren Begegnungen so, dass dein Hund lernen kann statt nur zu reagieren.' },
      { question: 'Was kostet das Begegnungstraining?', answer: 'Der Kurs umfasst 8 Einheiten zu je einer Stunde und kostet 260 €. Jeden Monat startet mindestens ein neuer Kurs in der Region.' },
      { question: 'Mein Hund ist sehr reaktiv — ist eine Gruppe nicht zu viel?', answer: 'Genau dafür gibt es das Erstgespräch: Wenn die Gruppensituation (noch) zu viel ist, bauen wir mit mobilen Einzelstunden bei dir zuhause die Basis auf und steigen dann in den Kurs ein.' },
    ],
    heroImage: '/heroes/kurs-begegnung.webp',
    heroAlt: 'Zwei Hunde begegnen sich entspannt an lockerer Leine — Begegnungstraining Willenskraft Region Schwechat',
    wkImage: { src: `${WK}/2024/05/Hundeschule-Wien-Begegnungstraining-845x684.webp`, alt: 'Begegnungstraining mit der Hundeschule Willenskraft' },
    wkImage2: { src: `${WK}/2024/05/Hundeschule-Bruck-an-der-Leitha-Gruppenkurs-845x684.webp`, alt: 'Gruppenkurs der Hundeschule Willenskraft mit Trainerin Jessy' },
    shorts: ['ptXxKbu4XPc', '0Zu11PoYFIA', 'HmUmOI8bmAM'],
    video: { id: 'qoOzcnxtHCo', title: 'BAT Leinenhandling 2.0 — Willenskraft' },
    calendarId: 'e5b8dcf4bf67c1ce1a35a5c159a9bdddde96dfe40d78fe9c6f9bfce85249a90e@group.calendar.google.com',
    metaTitle: 'Begegnungstraining für Hunde Schwechat | Willenskraft',
    metaDescription: 'Begegnungstraining mit Jessy: 8 Einheiten um 260 € ✓ max. 4 Teams ✓ entspannte Hundebegegnungen statt Leinenfrust. ☎ 0664 3903673',
  },
  {
    slug: 'dummytraining',
    name: 'Dummytraining',
    menuLabel: 'Dummytraining',
    teaser: 'Auslastung mit Köpfchen — ab ca. 10 Monaten',
    claim: 'Suchen, finden, apportieren: Dummytraining ist die perfekte Mischung aus Spaß, Nasenarbeit und Impulskontrolle für deinen Hund.',
    price: '220 €',
    units: '8 Einheiten à 60 Min. (wöchentlich)',
    groupSize: '3–6 Mensch-Hund-Teams',
    audience: 'Hunde ab ca. 10 Monaten, die Freude am Suchen oder Apportieren haben — keine Vorkenntnisse nötig, prinzipiell alle Rassen. Dein Hund sollte gesund, sozial verträglich und grundkonditioniert sein.',
    start: 'Wechselnde, großzügige Trainingsareale in der Region — Dummys werden gestellt.',
    intro: [
      'Beim Dummytraining lernt dein Hund, spezielle Futtersäckchen (Dummys) auf Signal zu suchen, zu finden und zu apportieren. Das ist weit mehr als Ballwerfen: Es schult Warten, Selbstkontrolle, Aufmerksamkeit, Konzentration, den Rückruf und das Gehen an lockerer Leine — und lastet deinen Hund körperlich UND geistig aus.',
      'Wir bauen die vier Basisapporte auf, etablieren Stopp- und Rückrufpfiff und steigern die Distanzarbeit Schritt für Schritt. Die Dummys werden gestellt; du brauchst nur Leine, gute Leckerlis und Wasser. Bei Bedarf kannst du vorab Einzeltraining buchen.',
    ],
    inhalte: [
      'Aufbau der vier Basisapporte',
      'Stopp- und Rückrufpfiff',
      'Richtiges Belohnen',
      'Nasenarbeit: Such- & Fährtenarbeit',
      'Verbesserung der Selbstkontrolle',
      'Steigerung der Konzentration',
      'Erweiterung der Distanzarbeit',
      'Verschiedene Geländeübergänge',
      'Die Verhaltenskette im Apport',
    ],
    equipment: [
      'Normale Leine (keine Flexileine)',
      'Gute Leckerlis & Lieblingsspielzeug',
      'Wasser für Hund & Mensch',
      'Optional: Pfeife & Klicker',
      'Dummys werden gestellt',
    ],
    faqs: [
      { question: 'Braucht mein Hund Vorkenntnisse?', answer: 'Nein. Geeignet sind Hunde ab etwa 10 Monaten, die Freude am Suchen oder Apportieren haben — prinzipiell alle Rassen. Dein Hund sollte gesund, sozial verträglich sein und über Grundkondition verfügen.' },
      { question: 'Was bringt Dummytraining meinem Hund?', answer: 'Die perfekte Kombination aus körperlicher Aktivität und geistiger Auslastung: Warten, Selbstkontrolle, Konzentration, Rückruf und lockere Leine werden ganz nebenbei mittrainiert. Ideal für Hunde, die „nie müde" scheinen.' },
      { question: 'Was kostet das Dummytraining?', answer: 'Der Kurs umfasst 8 wöchentliche Einheiten zu je 60 Minuten und kostet 220 €. Die Gruppengröße liegt bei 3–6 Mensch-Hund-Teams, die Dummys werden gestellt.' },
      { question: 'Wo wird trainiert?', answer: 'An wechselnden, großzügigen Trainingsarealen in der Region — die weiten Wiesen und Felder rund um Schwechat und das südliche Wiener Umland sind dafür ideal. Die Treffpunkte erfährst du bei der Anmeldung.' },
    ],
    heroImage: '/heroes/kurs-dummy.webp',
    heroAlt: 'Hund apportiert freudig einen Trainingsdummy über die Wiese — Dummytraining Willenskraft Region Schwechat',
    wkImage: { src: `${WK}/2024/05/Hundeschule-Willenskraft-Wien-Dummytraining-845x684.webp`, alt: 'Dummytraining mit der mobilen Hundeschule Willenskraft' },
    wkImage2: { src: `${WK}/2024/05/Hundeschule-Bruck-an-der-Leitha-Dummytraining-845x684.webp`, alt: 'Hund im Dummytraining der Hundeschule Willenskraft' },
    shorts: ['egxWG2vLLVM', '2-b8ixsY2Pw', 'be6NqbZVI8M', 'b_FS2GF6zbg'],
    video: { id: 'S4QvY_0zUS0', title: 'Dummytraining & Stationing mit 2 Hunden' },
    calendarId: 'b284f1a136b4238c756dc8ee81f8658c5129f30d6e8f77c638d7bb33285f4e66@group.calendar.google.com',
    metaTitle: 'Dummytraining Schwechat | Willenskraft',
    metaDescription: 'Dummytraining mit Jessy: 8 Einheiten um 220 € ✓ Apport, Nasenarbeit & Impulskontrolle ✓ Hunde ab ca. 10 Monaten. ☎ 0664 3903673',
  },
  {
    slug: 'medical-training',
    name: 'Medical Training',
    menuLabel: 'Medical Training',
    teaser: 'Stressfrei zu Tierarzt & Pflege — Basis & Fortgeschritten',
    claim: 'Krallen schneiden, Ohrentropfen, Tierarztbesuch — ohne Kampf: Medical Training macht Pflege & Untersuchungen zur Kooperationsübung.',
    price: '220 € je Kurs',
    units: 'Basis & Fortgeschritten: je 8 Einheiten à 60 Min.',
    groupSize: '3–6 Mensch-Hund-Teams',
    audience: 'Hunde jeden Alters, jeder Rasse und jedes Temperaments — keine speziellen Vorkenntnisse nötig. Freude an positiver Zusammenarbeit reicht völlig.',
    start: 'Training auf geeignetem Gelände in der Region — Targets & Pflegeutensilien werden gestellt.',
    intro: [
      'Medical Training bereitet deinen Hund kooperativ auf medizinische Untersuchungen, Behandlungen und Pflegemaßnahmen vor: Mit Brückensignalen, Keep-Going-Signalen und „Ich-bin-bereit"-Signalen wie Handtouch, Vorderpfoten-Target, Chinrest und Seitenlage lernt dein Hund, aktiv mitzumachen statt auszuhalten.',
      'Im Basiskurs legen wir das Fundament (Targets, Kooperationssignale, Desensibilisierung), im Fortgeschrittenenkurs üben wir die echten Anwendungen: Krallen kürzen, Augen- und Ohrentropfen, Bürsten, Zecke entfernen, ins Maul schauen, Abhören mit dem Stethoskop bis zur Blutabnahme-Vorbereitung. Alle Teilnehmer:innen bekommen Zugang zu einer WhatsApp-Gruppe.',
    ],
    inhalte: [
      'Basiskurs: Brückensignal & Targettraining',
      'Basiskurs: Keep-Going- & Kooperationssignale',
      'Basiskurs: Richtiges Belohnen & Desensibilisierung',
      'Basiskurs: Pflegeutensilien & Untersuchungen kennenlernen',
      'Fortgeschritten: Krallen kürzen, Augen-/Ohrentropfen',
      'Fortgeschritten: Bürsten, Scheren & Zecke entfernen',
      'Fortgeschritten: Ins Maul schauen, auf den Tisch heben',
      'Fortgeschritten: Abhören mit Stethoskop, Vorbereitung Impfen & Blutabnahme',
    ],
    equipment: [
      'Leckerli (kleinteilig & hochwertig)',
      'Optional: Klicker',
      'Matte oder Decke für deinen Hund',
      'Wasser',
      'Targets & Pflegeutensilien werden gestellt',
    ],
    faqs: [
      { question: 'Für welche Hunde ist Medical Training geeignet?', answer: 'Für Hunde jeden Alters, jeder Rasse und jedes Temperaments — vom Welpen bis zum Senior. Spezielle Vorkenntnisse braucht es nicht, nur Freude an positiver Zusammenarbeit.' },
      { question: 'Was ist der Unterschied zwischen Basis- und Fortgeschrittenenkurs?', answer: 'Im Basiskurs bauen wir die Grundlagen auf: Brückensignal, Targets, Kooperationssignale und Desensibilisierung. Im Fortgeschrittenenkurs wenden wir sie an — vom Krallenkürzen über Ohrentropfen bis zur Vorbereitung auf Blutabnahme und Impfung.' },
      { question: 'Was kostet das Medical Training?', answer: 'Basiskurs und Fortgeschrittenenkurs umfassen je 8 wöchentliche Einheiten à 60 Minuten und kosten je 220 €. Targets und Pflegeutensilien werden gestellt; alle Teilnehmer:innen bekommen Zugang zu einer WhatsApp-Gruppe.' },
      { question: 'Mein Hund hat schon Angst vorm Tierarzt — hilft das noch?', answer: 'Ja — genau dafür ist kooperatives Medical Training da. Dein Hund lernt über „Ich-bin-bereit"-Signale, selbst mitzuentscheiden. Das gibt Kontrolle zurück und baut Angst nachhaltig ab. Bei starker Angst starten wir mit mobilen Einzelstunden.' },
    ],
    heroImage: '/heroes/kurs-medical.webp',
    heroAlt: 'Hund legt entspannt das Kinn in die Hand der Trainerin (Chinrest) — Medical Training Willenskraft Region Schwechat',
    wkImage: { src: `${WK}/2024/05/Hundeschule-Willenskraft-Wien-Medical-Training-845x684.webp`, alt: 'Medical Training mit der Hundeschule Willenskraft' },
    wkImage2: { src: `${WK}/2024/05/Hundetrainer-Eisenstadt-Medical-Training-845x684.webp`, alt: 'Kooperatives Medical Training mit Willenskraft' },
    shorts: ['7dOA4z3M9Eg', 'MccAfEAagXs', 'Mz1kCLxJALA', 'iKANIVJCmyM'],
    video: { id: 'EXJJUMFu49s', title: 'Expertinnen-Talk: Medical Training — mit Jessy Pusch & Bianca Oriana Willen' },
    metaTitle: 'Medical Training für Hunde Schwechat | Willenskraft',
    metaDescription: 'Medical Training mit Jessy: Basis & Fortgeschritten, je 8 Einheiten um 220 € ✓ stressfrei zu Tierarzt & Pflege ✓ kooperativ. ☎ 0664 3903673',
  },
];

export function getKurs(slug: string): KursData | undefined {
  return kurse.find((k) => k.slug === slug);
}
