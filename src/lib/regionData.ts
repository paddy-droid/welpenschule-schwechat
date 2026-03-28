export interface RegionFAQ {
  question: string;
  answer: string;
}

export interface RegionPillar {
  title: string;
  description: string;
}

export interface RegionProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface RegionNearby {
  name: string;
  slug: string;
}

export interface RegionData {
  name: string;
  slug: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  detailsTitle: string;
  detailsText: string;
  targetTitle: string;
  targetText: string;
  pillars: RegionPillar[];
  processSteps: RegionProcessStep[];
  faqs: RegionFAQ[];
  nearbyLocations: RegionNearby[];
  localDescription: string;
  localFeatures: string[];
  contactTitle: string;
  contactText: string;
}

const commonProcessSteps: Omit<RegionProcessStep, 'description'>[] = [
  { step: 1, title: 'Kontaktaufnahme & Erstgespräch' },
  { step: 2, title: 'Individueller Trainingsplan' },
  { step: 3, title: 'Training vor Ort & Begleitung' },
];

const allLocations: RegionNearby[] = [
  { name: 'Fischamend', slug: 'fischamend' },
  { name: 'Schwadorf', slug: 'schwadorf' },
  { name: 'Ebenfurth', slug: 'ebenfurth' },
  { name: 'Gramatneusiedl', slug: 'gramatneusiedl' },
  { name: 'Götzendorf', slug: 'goetzendorf' },
  { name: 'Himberg', slug: 'himberg' },
  { name: 'Bruck an der Leitha', slug: 'bruck-an-der-leitha' },
];

function getNearby(currentSlug: string, priority: string[]): RegionNearby[] {
  const ordered = priority
    .map(slug => allLocations.find(l => l.slug === slug))
    .filter((l): l is RegionNearby => l !== undefined && l.slug !== currentSlug);
  const rest = allLocations.filter(l => l.slug !== currentSlug && !priority.includes(l.slug));
  return [...ordered, ...rest];
}

export const regionData: Record<string, RegionData> = {
  fischamend: {
    name: 'Fischamend',
    slug: 'fischamend',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining – flexibel bei dir zuhause in Fischamend oder an deinem Wunschort.',
    introTitle: 'Du wünschst dir individuelles Hundetraining in Fischamend, das sich nach dir richtet?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Fischamend die perfekte Lösung. Wir kommen zu dir nach Hause und gestalten das Training ganz nach deinen Bedürfnissen.',
    detailsTitle: 'Dein Vorteil: Training im Alltag in Fischamend',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Fischamend oder auf euren gewohnten Spazierrunden entlang der Donau. So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen. Wir arbeiten gemeinsam an Leinenführigkeit, entspannten Hundebegegnungen, einem sicheren Rückruf und vielem mehr.',
    targetTitle: 'Für wen ist mobiles Training in Fischamend geeignet?',
    targetText: 'Mobiles Hundetraining in Fischamend eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach, um die Grundlagen in einer stressfreien 1:1-Betreuung zu festigen.',
    pillars: [
      { title: 'Individuelles Training', description: 'In Fischamend gehen wir gezielt auf deine Wünsche und die Bedürfnisse deines Hundes ein – für maximale Erfolge direkt bei dir vor Ort.' },
      { title: 'Training in gewohnter Umgebung', description: 'Dein Hund lernt dort, wo das Gelernte am Ende sitzen muss: in seinem Alltag, bei dir zuhause in Fischamend.' },
      { title: 'Flexible Terminvereinbarung', description: 'Kein Stress, keine Anfahrt. Wir richten uns nach deinem Zeitplan und kommen zu dir nach Fischamend.' },
      { title: 'Alltagsnahe Probleme lösen', description: 'Ob Leinenführigkeit, Rückruf oder Begegnungen – wir arbeiten in Fischamend an deinen konkreten Herausforderungen.' },
      { title: 'Stärkung der Bindung', description: 'Durch das gemeinsame Training in vertrauter Atmosphäre in Fischamend wird die Beziehung zwischen dir und deinem Hund gefestigt.' },
    ],
    processSteps: [
      { ...commonProcessSteps[0], description: 'Ruf uns an oder schreib uns. Wir besprechen deine Situation, deine Ziele und welche Themen dir in Fischamend am wichtigsten sind.' },
      { ...commonProcessSteps[1], description: 'Basierend auf dem Gespräch erstellen wir einen maßgeschneiderten Trainingsplan für dich und deinen Hund in Fischamend.' },
      { ...commonProcessSteps[2], description: 'Wir kommen zu dir nach Fischamend und arbeiten gemeinsam Schritt für Schritt an euren individuellen Zielen.' },
    ],
    faqs: [
      { question: 'Wie weit kommt ihr zu mir nach Fischamend?', answer: 'Fischamend liegt nur etwa 15 Minuten von unserem Standort in Schwechat entfernt. Wir kommen ohne Probleme zu dir nach Hause. Die Anfahrt ist für dich völlig kostenlos – du zahlst nur das Training selbst.' },
      { question: 'Was kostet mobiles Hundetraining in Fischamend?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse der Situation, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstunden buchst du flexibel nach Bedarf.' },
      { question: 'Gibt es in Fischamend gute Trainingsorte?', answer: 'Ja, Fischamend bietet hervorragende Bedingungen für Hundetraining. Die Donau-Auen und umliegenden Wiesen eignen sich perfekt für Freilauf- und Rückruftraining. Wir nutzen bei Bedarf auch öffentliche Plätze für Alltagstraining.' },
      { question: 'Wie lange dauert eine Trainingseinheit?', answer: 'Eine reguläre Trainingseinheit dauert 60 Minuten. Die Erstberatung umfasst 90 Minuten, damit wir uns ausführlich kennenlernen und einen fundierten Trainingsplan erstellen können.' },
      { question: 'Ist mobiles Training auch für Welpen geeignet?', answer: 'Absolut! Gerade für Welpen ist das Training in der gewohnten Umgebung ideal. Wir beginnen mit Grundsignalen, Sozialisierung und dem Aufbau einer starken Bindung – alles direkt bei dir zuhause in Fischamend.' },
      { question: 'Wie unterscheidet sich das mobile Training vom Gruppenkurs?', answer: 'Beim mobilen Training in Fischamend gehen wir zu 100% auf eure individuellen Bedürfnisse ein. Es gibt keine Ablenkung durch andere Hunde, und wir können genau dort arbeiten, wo die Herausforderungen im Alltag entstehen.' },
    ],
    nearbyLocations: getNearby('fischamend', ['schwadorf', 'goetzendorf', 'schwechat']),
    localDescription: 'Fischamend liegt direkt an der Donau im Bezirk Bruck an der Leitha in Niederösterreich, nur wenige Kilometer von Schwechat entfernt. Die malerische Marktgemeinde mit ihren rund 4.800 Einwohnern bietet mit den nahegelegenen Donau-Auen und ausgedehnten Grünflächen ideale Bedingungen für aktive Hundehalter. Die verkehrsgünstige Lage nahe dem Flughafen Wien-Schwechat und der Autobahn A4 macht Fischamend zu einem attraktiven Wohnort für Pendler, die sich gleichzeitig ein naturverbundenes Leben mit ihrem Hund wünschen.',
    localFeatures: [
      'Donau-Auen als naturbelassenes Ausflugsgebiet für Hunde',
      'Kurze Anfahrtszeit von Schwechat (ca. 15 Min.)',
      'Ländliche Umgebung mit guten Trainingsmöglichkeiten',
      'Aktive Hundehalter-Community in der Region',
    ],
    contactTitle: 'Interesse am mobilen Training in Fischamend?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Fischamend.',
  },

  schwadorf: {
    name: 'Schwadorf',
    slug: 'schwadorf',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining – flexibel bei dir zuhause in Schwadorf oder an deinem Wunschort.',
    introTitle: 'Du kommst aus Schwadorf und suchst individuelles Hundetraining?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Schwadorf die perfekte Lösung. Wir kommen zu dir nach Hause und gestalten das Training ganz nach deinen Bedürfnissen.',
    detailsTitle: 'Training im Alltag in Schwadorf',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Schwadorf oder auf euren gewohnten Spazierrunden. So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen. Wir arbeiten gemeinsam an Leinenführigkeit, entspannten Hundebegegnungen, einem sicheren Rückruf und vielem mehr.',
    targetTitle: 'Für wen ist mobiles Training in Schwadorf geeignet?',
    targetText: 'Mobiles Hundetraining in Schwadorf eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach, um die Grundlagen in einer stressfreien 1:1-Betreuung zu festigen.',
    pillars: [
      { title: 'Individuelles Training', description: 'In Schwadorf gehen wir gezielt auf deine Wünsche und die Bedürfnisse deines Hundes ein – für maximale Erfolge direkt bei dir zuhause.' },
      { title: 'Training in gewohnter Umgebung', description: 'Dein Hund lernt dort, wo das Gelernte am Ende sitzen muss: in seinem Alltag in Schwadorf, bei dir zuhause.' },
      { title: 'Flexible Terminvereinbarung', description: 'Kein Stress, keine Anfahrt ab Schwadorf. Wir richten uns nach deinem Zeitplan und kommen direkt zu dir.' },
      { title: 'Alltagsnahe Probleme lösen', description: 'Ob Leinenführigkeit, Rückruf oder Begegnungen in Schwadorf – wir arbeiten an konkreten Herausforderungen.' },
      { title: 'Stärkung der Bindung', description: 'Durch das gemeinsame Training in vertrauter Atmosphäre in Schwadorf wird die Beziehung zwischen dir und deinem Hund gefestigt.' },
    ],
    processSteps: [
      { ...commonProcessSteps[0], description: 'Ruf uns an oder schreib uns. Wir besprechen deine Situation und welche Themen dir und deinem Hund in Schwadorf am wichtigsten sind.' },
      { ...commonProcessSteps[1], description: 'Basierend auf dem Gespräch erstellen wir einen maßgeschneiderten Trainingsplan für dich und deinen Hund in Schwadorf.' },
      { ...commonProcessSteps[2], description: 'Wir kommen zu dir nach Schwadorf und arbeiten gemeinsam Schritt für Schritt an euren individuellen Zielen.' },
    ],
    faqs: [
      { question: 'Wie schnell seid ihr in Schwadorf?', answer: 'Schwadorf ist nur etwa 10-15 Minuten von unserem Standort in Schwechat entfernt. Wir kommen schnell und unkompliziert zu dir nach Hause. Die Anfahrt ist für dich kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Schwadorf?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstunden buchst du flexibel nach Bedarf.' },
      { question: 'Welche Trainingsorte in Schwadorf nutzt ihr?', answer: 'Wir trainieren primär bei dir zuhause in Schwadorf. Bei Bedarf nutzen wir auch umliegende Spazierwege und Grünflächen für Training in realen Alltagssituationen. Das Steinfeld in der Umgebung bietet zusätzliche Möglichkeiten.' },
      { question: 'Könnt ihr auch bei Verhaltensproblemen helfen?', answer: 'Ja, selbstverständlich. Wir haben Erfahrung mit Leinenaggression, Trennungsangst, Angstverhalten, übermäßigem Bellen und vielen weiteren Verhaltens-Themen. Das mobile Training in Schwadorf ist besonders effektiv, da wir die Probleme dort angehen, wo sie auftreten.' },
      { question: 'Mein Hund ist schon älter – lohnt sich Training noch?', answer: 'Absolut! Hunde sind lebenslang lernfähig. Gerade ältere Hunde profitieren enorm von gezielter geistiger Auslastung und dem Training neuer Signale. Wir passen das Training in Schwadorf individuell an das Alter und die Fitness deines Hundes an.' },
      { question: 'Wie viele Sitzungen brauche ich?', answer: 'Das hängt von den individuellen Zielen ab. Nach der Erstberatung in Schwadorf erstellen wir gemeinsam einen Plan. Manche Themen sind in 2-3 Sitzungen gelöst, andere benötigen mehr Zeit. Du buchst immer nur die Sitzungen, die du tatsächlich brauchst.' },
    ],
    nearbyLocations: getNearby('schwadorf', ['ebenfurth', 'fischamend', 'goetzendorf']),
    localDescription: 'Schwadorf ist eine charmante Marktgemeinde im Bezirk Bruck an der Leitha in Niederösterreich mit rund 2.300 Einwohnern. Gelegen im Herzen des Schwechater Hinterlandes, bietet Schwadorf eine idyllische Umgebung mit landwirtschaftlich geprägter Umgebung und nahen Naturgebieten. Die Gemeinde profitiert von der verkehrsgünstigen Lage nahe der A3 und der Nähe zu Schwechat, was mobiles Hundetraining besonders unkompliziert macht.',
    localFeatures: [
      'Ruhige, ländliche Umgebung ideal für konzentriertes Training',
      'Nur 10-15 Min. von Schwechat entfernt',
      'Gute Erreichbarkeit über A3 und B10',
      'Umgebung mit naturnahen Spazierwegen',
    ],
    contactTitle: 'Interesse am mobilen Training in Schwadorf?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Schwadorf.',
  },

  ebenfurth: {
    name: 'Ebenfurth',
    slug: 'ebenfurth',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining – flexibel bei dir zuhause oder an deinem Wunschort in Ebenfurth.',
    introTitle: 'Du wünschst dir individuelles Hundetraining in Ebenfurth, das sich nach dir richtet?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Ebenfurth die perfekte Lösung. Wir kommen zu dir nach Hause und gestalten das Training ganz nach deinen Bedürfnissen.',
    detailsTitle: 'Dein Vorteil: Training im Alltag in Ebenfurth',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Ebenfurth oder auf euren gewohnten Spazierrunden am Steinfeld. So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen. Wir arbeiten gemeinsam an Leinenführigkeit, entspannten Hundebegegnungen, einem sicheren Rückruf und vielem mehr.',
    targetTitle: 'Für wen ist mobiles Training in Ebenfurth geeignet?',
    targetText: 'Mobiles Hundetraining in Ebenfurth eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach, um die Grundlagen in einer stressfreien 1:1-Betreuung zu festigen.',
    pillars: [
      { title: 'Individuelles Training in Ebenfurth', description: 'Wir gehen gezielt auf deine Wünsche und die Bedürfnisse deines Hundes ein – für maximale Erfolge direkt in Ebenfurth.' },
      { title: 'Training in gewohnter Umgebung', description: 'Dein Hund lernt dort, wo das Gelernte am Ende sitzen muss: in seinem Alltag, bei dir zuhause in Ebenfurth.' },
      { title: 'Flexible Terminvereinbarung', description: 'Kein Stress, keine Anfahrt. Wir richten uns nach deinem Zeitplan und kommen zu dir nach Ebenfurth.' },
      { title: 'Alltagsnahe Probleme lösen', description: 'Ob Leinenführigkeit, Rückruf oder Begegnungen – wir arbeiten an konkreten Herausforderungen in Ebenfurth.' },
      { title: 'Stärkung der Bindung', description: 'Durch das gemeinsame Training in vertrauter Atmosphäre in Ebenfurth wird die Beziehung zwischen dir und deinem Hund gefestigt.' },
    ],
    processSteps: [
      { ...commonProcessSteps[0], description: 'Ruf uns an oder schreib uns. Wir besprechen deine Situation und ermitteln, welche Trainings-Schwerpunkte für dich und deinen Hund in Ebenfurth wichtig sind.' },
      { ...commonProcessSteps[1], description: 'Basierend auf dem Gespräch erstellen wir einen maßgeschneiderten Trainingsplan für dich und deinen Hund in Ebenfurth.' },
      { ...commonProcessSteps[2], description: 'Wir kommen zu dir nach Ebenfurth und arbeiten gemeinsam Schritt für Schritt an euren individuellen Zielen.' },
    ],
    faqs: [
      { question: 'Wie weit ist Ebenfurft von Schwechat entfernt?', answer: 'Ebenfurth liegt etwa 15-20 Autominuten von Schwechat entfernt. Wir kommen ohne Probleme zu dir nach Hause. Die Anfahrt ist für dich völlig kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Ebenfurth?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstunden buchst du flexibel.' },
      { question: 'Trainiert ihr auch draußen am Steinfeld?', answer: 'Ja, das Steinfeld bietet hervorragende Bedingungen für Freilauf- und Rückruftraining. Je nach Trainingsziel nutzen wir sowohl dein Zuhause in Ebenfurth als auch die umliegenden Freiflächen.' },
      { question: 'Kann ich auch eine Welpenschule in Ebenfurth besuchen?', answer: 'Unsere Welpenschule findet in Schwechat statt, nur 15-20 Minuten entfernt. Zusätzlich bieten wir mobiles Welpentraining direkt bei dir zuhause in Ebenfurth an – ideal für den perfekten Start mit deinem Welpen.' },
      { question: 'Mein Hund zieht an der Leine – könnt ihr helfen?', answer: 'Ja, Leinenführigkeit ist eines unserer Spezialgebiete. Im mobilen Training in Ebenfurth arbeiten wir genau dort an dem Problem, wo es auftritt – auf euren gewohnten Spazierwegen. Mit positiver Verstärkung und den richtigen Techniken wird Spazierengehen wieder entspannt.' },
      { question: 'Bietet ihr auch Online-Beratung an?', answer: 'Ja, ergänzend zum mobilen Training in Ebenfurth bieten wir auch Online-Beratungen an. So kannst du zwischen Terminen vor Ort und digitaler Begleitung wählen – ganz flexibel nach deinen Bedürfnissen.' },
    ],
    nearbyLocations: getNearby('ebenfurth', ['schwadorf', 'goetzendorf', 'gramatneusiedl']),
    localDescription: 'Ebenfurth ist eine Marktgemeinde im Bezirk Wiener Neustadt in Niederösterreich mit rund 3.000 Einwohnern. Gelegen am Rande des Steinfeldes, bietet Ebenfurth eine einzigartige Kombination aus ländlicher Ruhe und guter Erreichbarkeit. Die weiten Flächen des Steinfeldes sind bei Hundehaltern besonders beliebt und bieten ideale Bedingungen für Freilauf und Training. Die Nähe zu Wiener Neustadt und Schwechat macht Ebenfurth zu einem optimalen Standort für mobiles Hundetraining.',
    localFeatures: [
      'Steinfeld mit weiten Freiflächen für Hunde',
      'Etwa 15-20 Min. von Schwechat entfernt',
      'Mischung aus ländlicher Ruhe und Stadt-Nähe',
      'Gute Erreichbarkeit über B17 und A2',
    ],
    contactTitle: 'Interesse am mobilen Training in Ebenfurth?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Ebenfurth.',
  },

  gramatneusiedl: {
    name: 'Gramatneusiedl',
    slug: 'gramatneusiedl',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining – flexibel bei dir zuhause oder an deinem Wunschort in Gramatneusiedl.',
    introTitle: 'Du wünschst dir individuelles Hundetraining in Gramatneusiedl, das sich nach dir richtet?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Gramatneusiedl die perfekte Lösung. Wir kommen zu dir nach Hause und gestalten das Training ganz nach deinen Bedürfnissen.',
    detailsTitle: 'Dein Vorteil: Training im Alltag in Gramatneusiedl',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause oder auf euren gewohnten Spazierrunden in Gramatneusiedl. So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen. Wir arbeiten gemeinsam an Leinenführigkeit, entspannten Hundebegegnungen, einem sicheren Rückruf und vielem mehr.',
    targetTitle: 'Für wen ist mobiles Training in Gramatneusiedl geeignet?',
    targetText: 'Mobiles Hundetraining eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach, um die Grundlagen in einer stressfreien 1:1-Betreuung zu festigen.',
    pillars: [
      { title: 'Individuelles Training', description: 'Wir gehen gezielt auf deine Wünsche und die Bedürfnisse deines Hundes ein – für maximale Erfolge in Gramatneusiedl.' },
      { title: 'Training in gewohnter Umgebung', description: 'Dein Hund lernt dort, wo das Gelernte am Ende sitzen muss: in seinem Alltag, bei dir zuhause in Gramatneusiedl.' },
      { title: 'Flexible Terminvereinbarung', description: 'Kein Stress, keine Anfahrt. Wir richten uns nach deinem Zeitplan und kommen zu dir nach Gramatneusiedl.' },
      { title: 'Alltagsnahe Probleme lösen', description: 'Ob Leinenführigkeit, Rückruf oder Begegnungen – wir arbeiten an konkreten Herausforderungen in Gramatneusiedl.' },
      { title: 'Stärkung der Bindung', description: 'Durch das gemeinsame Training in vertrauter Atmosphäre in Gramatneusiedl wird die Beziehung zwischen dir und deinem Hund gefestigt.' },
    ],
    processSteps: [
      { ...commonProcessSteps[0], description: 'Ruf uns an oder schreib uns. Wir besprechen deine Situation und welche Themen dir und deinem Hund in Gramatneusiedl am wichtigsten sind.' },
      { ...commonProcessSteps[1], description: 'Basierend auf dem Gespräch erstellen wir einen maßgeschneiderten Trainingsplan für dich und deinen Hund in Gramatneusiedl.' },
      { ...commonProcessSteps[2], description: 'Wir kommen zu dir nach Gramatneusiedl und arbeiten gemeinsam Schritt für Schritt an euren individuellen Zielen.' },
    ],
    faqs: [
      { question: 'Wie schnell seid ihr in Gramatneusiedl?', answer: 'Gramatneusiedl liegt nur etwa 15 Minuten von Schwechat entfernt. Wir kommen unkompliziert zu dir nach Hause. Die Anfahrt kostet dich nichts.' },
      { question: 'Was kostet mobiles Hundetraining in Gramatneusiedl?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstunden buchst du flexibel.' },
      { question: 'Gibt es in Gramatneusiedl gute Orte für Hundetraining?', answer: 'Ja, die Umgebung von Gramatneusiedl bietet zahlreiche Feldwege und naturbelassene Flächen, die sich hervorragend für Training im Freien eignen. Wir nutzen je nach Trainingsziel dein Zuhause und die umliegenden Spazierwege.' },
      { question: 'Könnt ihr bei Trennungsangst helfen?', answer: 'Ja, Trennungsangst ist ein häufiges Thema, das wir mit viel Erfahrung und einfühlsamen Methoden behandeln. Gerade im mobilen Training in Gramatneusiedl können wir die Situation zuhause genau beobachten und gezielt ansetzen.' },
      { question: 'Arbeitet ihr auch mit Tierschutzhunden?', answer: 'Selbstverständlich! Tierschutzhunde brauchen oft besonderes Verständnis und Geduld. Wir haben viel Erfahrung im Aufbau von Vertrauen und der schrittweisen Gewöhnung an das neue Leben in Gramatneusiedl.' },
      { question: 'Wie läuft die Erstberatung ab?', answer: 'Die Erstberatung dauert 90 Minuten. Wir lernen dich und deinen Hund kennen, analysieren die aktuelle Situation, besprechen deine Ziele und erstellen einen individuellen Trainingsplan. Alles direkt bei dir zuhause in Gramatneusiedl.' },
    ],
    nearbyLocations: getNearby('gramatneusiedl', ['ebenfurth', 'schwadorf', 'goetzendorf']),
    localDescription: 'Gramatneusiedl ist eine Marktgemeinde im Bezirk Bruck an der Leitha in Niederösterreich mit rund 3.500 Einwohnern. Die idyllische Gemeinde liegt inmitten der Wein- und Ackerbaugebiete des südlichen Marchfeldes und bietet mit ihren weitläufigen Feldwegen und Naturflächen ideale Voraussetzungen für Hundehalter. Die Nähe zu Ebreichsdorf und der Autobahn A3 sorgt für eine hervorragende Anbindung, während die ländliche Ruhe den perfekten Rahmen für entspanntes Hundetraining bietet.',
    localFeatures: [
      'Weitläufige Feldwege ideal für Training',
      'Nur ca. 15 Min. von Schwechat entfernt',
      'Ruhige Umgebung mit wenig Ablenkung für konzentriertes Lernen',
      'Gute Anbindung über A3 und B10',
    ],
    contactTitle: 'Interesse am mobilen Training in Gramatneusiedl?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund.',
  },

  goetzendorf: {
    name: 'Götzendorf',
    slug: 'goetzendorf',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining – flexibel bei dir zuhause in Götzendorf oder an deinem Wunschort.',
    introTitle: 'Du wünschst dir professionelles Hundetraining in Götzendorf an der Leitha?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Götzendorf die perfekte Lösung. Wir kommen zu dir nach Hause und gestalten das Training ganz nach deinen Bedürfnissen.',
    detailsTitle: 'Dein Vorteil: Training im Alltag in Götzendorf',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Götzendorf oder auf euren gewohnten Spazierwegen an der Leitha. So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen. Wir arbeiten gemeinsam an Leinenführigkeit, entspannten Hundebegegnungen, einem sicheren Rückruf und vielem mehr.',
    targetTitle: 'Für wen ist mobiles Training in Götzendorf geeignet?',
    targetText: 'Mobiles Hundetraining in Götzendorf eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach, um die Grundlagen in einer stressfreien 1:1-Betreuung zu festigen.',
    pillars: [
      { title: 'Individuelles Training', description: 'In Götzendorf gehen wir gezielt auf deine Wünsche und die Bedürfnisse deines Hundes ein – für maximale Erfolge direkt bei dir.' },
      { title: 'Training in gewohnter Umgebung', description: 'Dein Hund lernt dort, wo das Gelernte am Ende sitzen muss: in seinem Alltag, bei dir zuhause in Götzendorf.' },
      { title: 'Flexible Terminvereinbarung', description: 'Kein Stress, keine Anfahrt. Wir richten uns nach deinem Zeitplan und kommen zu dir nach Götzendorf.' },
      { title: 'Alltagsnahe Probleme lösen', description: 'Ob Leinenführigkeit, Rückruf oder Begegnungen – wir arbeiten in Götzendorf an deinen konkreten Herausforderungen.' },
      { title: 'Stärkung der Bindung', description: 'Durch das gemeinsame Training in vertrauter Atmosphäre in Götzendorf wird die Beziehung zwischen dir und deinem Hund gefestigt.' },
    ],
    processSteps: [
      { ...commonProcessSteps[0], description: 'Ruf uns an oder schreib uns. Wir besprechen deine Situation und welche Themen dir und deinem Hund in Götzendorf am wichtigsten sind.' },
      { ...commonProcessSteps[1], description: 'Basierend auf dem Gespräch erstellen wir einen maßgeschneiderten Trainingsplan für dich und deinen Hund in Götzendorf.' },
      { ...commonProcessSteps[2], description: 'Wir kommen zu dir nach Götzendorf und arbeiten gemeinsam Schritt für Schritt an euren individuellen Zielen.' },
    ],
    faqs: [
      { question: 'Wie weit ist Götzendorf von Schwechat entfernt?', answer: 'Götzendorf an der Leitha liegt etwa 15-20 Autominuten von Schwechat entfernt. Wir kommen ohne Probleme zu dir nach Hause. Die Anfahrt ist für dich kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Götzendorf?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstufen buchst du flexibel nach Bedarf.' },
      { question: 'Die Leitha-Auen sind nah – nutzt ihr die für Training?', answer: 'Ja, die Leitha-Auen bieten fantastische Bedingungen für Freilauf- und Rückruftraining. Wir nutzen bei Bedarf sowohl dein Zuhause als auch die Natur um Götzendorf für ein abwechslungsreiches Training.' },
      { question: 'Mein Hund bellt viel – könnt ihr helfen?', answer: 'Ja, übermäßiges Bellen ist ein häufiges Thema. Wir analysieren die Ursachen in Götzendorf und erarbeiten gemeinsam Strategien, die auf positiver Verstärkung basieren. Oft liegt die Lösung in besserer Auslastung und klarem Kommunikationsaufbau.' },
      { question: 'Bietet ihr auch Junghundekurse in Götzendorf an?', answer: 'Unsere Gruppenkurse finden in Schwechat statt. Für Götzendorf bieten wir mobiles Einzeltraining an, das individuell auf die Bedürfnisse deines Junghundes eingeht – flexibel bei dir zuhause.' },
      { question: 'Wie schnell sieht man Erfolge?', answer: 'Das hängt vom jeweiligen Thema ab. Viele Halter in Götzendorf berichten bereits nach der Erstberatung von deutlichen Verbesserungen. Grundlegende Verhaltensänderungen benötigen in der Regel 3-6 Sitzungen. Wir geben dir nach jeder Einheit Hausaufgaben mit.' },
    ],
    nearbyLocations: getNearby('goetzendorf', ['schwadorf', 'ebenfurth', 'bruck-an-der-leitha']),
    localDescription: 'Götzendorf an der Leitha ist eine gemütliche Marktgemeinde im Bezirk Bruck an der Leitha in Niederösterreich mit rund 2.200 Einwohnern. Gelegen direkt an der Leitha, profitiert die Gemeinde von einer malerischen Naturlandschaft mit den nahegelegenen Leitha-Auen. Diese einzigartige Flusslandschaft bietet Hundehaltern hervorragende Möglichkeiten für ausgedehnte Spaziergänge und Naturerlebnisse mit dem Vierbeiner. Götzendorf verbindet ländlichen Charme mit der Nähe zum Industriepark Schwechat und der Hauptstadt Wien.',
    localFeatures: [
      'Leitha-Auen als naturbelassenes Ausflugsgebiet',
      'Etwa 15-20 Min. von Schwechat entfernt',
      'Ländliche Ruhe mit guter Verkehrsanbindung',
      'Ideale Umgebung für konzentriertes Hundetraining',
    ],
    contactTitle: 'Interesse am mobilen Training in Götzendorf?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Götzendorf.',
  },

  himberg: {
    name: 'Himberg',
    slug: 'himberg',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining – flexibel bei dir zuhause in Himberg oder an deinem Wunschort.',
    introTitle: 'Du wünschst dir individuelles Hundetraining in Himberg, das sich nach dir richtet?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Himberg die perfekte Lösung. Wir kommen zu dir nach Hause und gestalten das Training ganz nach deinen Bedürfnissen.',
    detailsTitle: 'Dein Vorteil: Training im Alltag in Himberg',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Himberg oder auf euren gewohnten Spazierrunden. So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen. Wir arbeiten gemeinsam an Leinenführigkeit, entspannten Hundebegegnungen, einem sicheren Rückruf und vielem mehr.',
    targetTitle: 'Für wen ist mobiles Training in Himberg geeignet?',
    targetText: 'Mobiles Hundetraining in Himberg eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach, um die Grundlagen in einer stressfreien 1:1-Betreuung zu festigen.',
    pillars: [
      { title: 'Individuelles Training', description: 'In Himberg gehen wir gezielt auf deine Wünsche und die Bedürfnisse deines Hundes ein – für maximale Erfolge direkt bei dir.' },
      { title: 'Training in gewohnter Umgebung', description: 'Dein Hund lernt dort, wo das Gelernte am Ende sitzen muss: in seinem Alltag, bei dir zuhause in Himberg.' },
      { title: 'Flexible Terminvereinbarung', description: 'Kein Stress, keine Anfahrt. Wir richten uns nach deinem Zeitplan und kommen zu dir nach Himberg.' },
      { title: 'Alltagsnahe Probleme lösen', description: 'Ob Leinenführigkeit, Rückruf oder Begegnungen – wir arbeiten in Himberg an deinen konkreten Herausforderungen.' },
      { title: 'Stärkung der Bindung', description: 'Durch das gemeinsame Training in vertrauter Atmosphäre in Himberg wird die Beziehung zwischen dir und deinem Hund gefestigt.' },
    ],
    processSteps: [
      { ...commonProcessSteps[0], description: 'Ruf uns an oder schreib uns. Wir besprechen deine Situation und welche Themen dir und deinem Hund in Himberg am wichtigsten sind.' },
      { ...commonProcessSteps[1], description: 'Basierend auf dem Gespräch erstellen wir einen maßgeschneiderten Trainingsplan für dich und deinen Hund in Himberg.' },
      { ...commonProcessSteps[2], description: 'Wir kommen zu dir nach Himberg und arbeiten gemeinsam Schritt für Schritt an euren individuellen Zielen.' },
    ],
    faqs: [
      { question: 'Wie schnell seid ihr in Himberg?', answer: 'Himberg liegt direkt südlich von Wien, nur etwa 20 Minuten von Schwechat entfernt. Wir kommen schnell und unkompliziert zu dir nach Hause. Die Anfahrt ist kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Himberg?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstunden buchst du flexibel.' },
      { question: 'Himberg liegt nahe Wien – bietet das Vorteile fürs Training?', answer: 'Definitiv! Die Nähe zu Wien bedeutet, dass wir in Himberg sowohl ruhige, ländliche Trainingsumgebungen als auch urbanere Situationen trainieren können. So bereiten wir deinen Hund optimal auf alle Alltagssituationen vor.' },
      { question: 'Mein Hund hat Angst vor anderen Hunden – könnt ihr helfen?', answer: 'Ja, das ist ein häufiges Thema. Im mobilen Training in Himberg können wir die Begegnungssituationen kontrolliert aufbauen und schrittweise das Vertrauen deines Hundes stärken. Wir arbeiten ohne Druck und mit positiver Verstärkung.' },
      { question: 'Bietet ihr auch Beratung zur artgerechten Haltung an?', answer: 'Ja, ganzheitliche Beratung ist ein wichtiger Teil unseres Ansatzes. Neben dem eigentlichen Training beraten wir dich in Himberg auch zu Themen wie artgerechte Auslastung, Ernährung, Schlaf und Einrichtung des Zuhauses.' },
      { question: 'Kann ich das Training mit einer Gruppenkurs-Erfahrung kombinieren?', answer: 'Sehr gerne! Viele unserer Kundinnen und Kunden in Himberg besuchen ergänzend unsere Welpenschule in Schwechat. So profitierst du sowohl vom individuellen Training zuhause als auch von der Sozialisierung in der Gruppe.' },
    ],
    nearbyLocations: getNearby('himberg', ['schwechat', 'gramatneusiedl', 'bruck-an-der-leitha']),
    localDescription: 'Himberg ist eine Marktgemeinde im Bezirk Bruck an der Leitha in Niederösterreich mit rund 7.000 Einwohnern und liegt direkt an der südlichen Stadtgrenze von Wien. Diese einzigartige Lage verbindet die Vorteile des großstädtischen Umfelds mit dem Charme des niederösterreichischen Flachlandes. Himberg bietet eine wachsende Infrastruktur und ist bei Hundehaltern besonders beliebt dank der umliegenden Felder, Wiesen und der Nähe zu den Donau-Auen. Die ausgezeichnete Anbindung an Wien über die A2 und S1 macht Himberg zu einem idealen Ort für mobiles Hundetraining.',
    localFeatures: [
      'Direkte Nähe zu Wien (Stadtgrenze)',
      'Nur ca. 20 Min. von Schwechat entfernt',
      'Kombination aus urbaner und ländlicher Trainingsumgebung',
      'Ausgezeichnete Verkehrsanbindung über A2 und S1',
    ],
    contactTitle: 'Interesse am mobilen Training in Himberg?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Himberg.',
  },

  'bruck-an-der-leitha': {
    name: 'Bruck an der Leitha',
    slug: 'bruck-an-der-leitha',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining – flexibel bei dir zuhause in Bruck an der Leitha oder an deinem Wunschort.',
    introTitle: 'Du wünschst dir individuelles Hundetraining in Bruck an der Leitha, das sich nach dir richtet?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Bruck an der Leitha die perfekte Lösung. Wir kommen zu dir nach Hause und gestalten das Training ganz nach deinen Bedürfnissen.',
    detailsTitle: 'Dein Vorteil: Training im Alltag in Bruck an der Leitha',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Bruck an der Leitha oder auf euren gewohnten Spazierwegen entlang der Leitha. So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen. Wir arbeiten gemeinsam an Leinenführigkeit, entspannten Hundebegegnungen, einem sicheren Rückruf und vielem mehr.',
    targetTitle: 'Für wen ist mobiles Training in Bruck an der Leitha geeignet?',
    targetText: 'Mobiles Hundetraining in Bruck an der Leitha eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach, um die Grundlagen in einer stressfreien 1:1-Betreuung zu festigen.',
    pillars: [
      { title: 'Individuelles Training', description: 'In Bruck an der Leitha gehen wir gezielt auf deine Wünsche und die Bedürfnisse deines Hundes ein – für maximale Erfolge direkt bei dir.' },
      { title: 'Training in gewohnter Umgebung', description: 'Dein Hund lernt dort, wo das Gelernte am Ende sitzen muss: in seinem Alltag, bei dir zuhause in Bruck an der Leitha.' },
      { title: 'Flexible Terminvereinbarung', description: 'Kein Stress, keine Anfahrt. Wir richten uns nach deinem Zeitplan und kommen zu dir nach Bruck an der Leitha.' },
      { title: 'Alltagsnahe Probleme lösen', description: 'Ob Leinenführigkeit, Rückruf oder Begegnungen – wir arbeiten an konkreten Herausforderungen in Bruck an der Leitha.' },
      { title: 'Stärkung der Bindung', description: 'Durch das gemeinsame Training in vertrauter Atmosphäre in Bruck an der Leitha wird die Beziehung zwischen dir und deinem Hund gefestigt.' },
    ],
    processSteps: [
      { ...commonProcessSteps[0], description: 'Ruf uns an oder schreib uns. Wir besprechen deine Situation und welche Themen dir und deinem Hund in Bruck an der Leitha am wichtigsten sind.' },
      { ...commonProcessSteps[1], description: 'Basierend auf dem Gespräch erstellen wir einen maßgeschneiderten Trainingsplan für dich und deinen Hund in Bruck an der Leitha.' },
      { ...commonProcessSteps[2], description: 'Wir kommen zu dir nach Bruck an der Leitha und arbeiten gemeinsam Schritt für Schritt an euren individuellen Zielen.' },
    ],
    faqs: [
      { question: 'Wie weit ist Bruck an der Leitha von Schwechat entfernt?', answer: 'Bruck an der Leitha liegt etwa 20-25 Autominuten von Schwechat entfernt. Wir kommen ohne Probleme zu dir nach Hause. Die Anfahrt ist für dich kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Bruck an der Leitha?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstunden buchst du flexibel.' },
      { question: 'Bruck ist Bezirkshauptstadt – bietet das Vorteile fürs Training?', answer: 'Ja, als Bezirkshauptstadt bietet Bruck an der Leitha eine vielfältige Umgebung: Stadtleben, Parks und die nahen Leitha-Auen. Das ermöglicht uns, Trainingssituationen von ruhig bis belebt abzudecken und deinen Hund optimal auf alle Alltagssituationen vorzubereiten.' },
      { question: 'Gibt es in Bruck Auslaufgebiete für Hunde?', answer: 'Ja, die Umgebung von Bruck an der Leitha bietet mit den Leitha-Auen und den umliegenden Feldern hervorragende Möglichkeiten für Freilauf. Wir können diese Gebiete gezielt für Rückruf- und Begegnungstraining nutzen.' },
      { question: 'Mein Hund hat Probleme beim Tierarzt – könnt ihr helfen?', answer: 'Ja, Medical Training ist ein wichtiger Bestandteil unseres Angebots. Wir bereiten deinen Hund in Bruck an der Leitha spielerisch auf Untersuchungen vor, sodass Tierarztbesuche stressfrei werden.' },
      { question: 'Arbeitet ihr mit allen Hunderassen?', answer: 'Ja, wir arbeiten mit allen Rassen und Mischlingen – vom Chihuahua bis zur Dogge. Unser mobiles Training in Bruck an der Leitha passt sich individuell an Größe, Temperament und die besonderen Bedürfnisse deines Hundes an.' },
    ],
    nearbyLocations: getNearby('bruck-an-der-leitha', ['goetzendorf', 'himberg', 'gramatneusiedl']),
    localDescription: 'Bruck an der Leitha ist die Bezirkshauptstadt des gleichnamigen Bezirks in Niederösterreich und zählt rund 8.000 Einwohner. Die historische Stadt liegt malerisch an der Leitha, dem Grenzfluss zwischen Niederösterreich und dem Burgenland. Als regionales Zentrum bietet Bruck eine voll ausgebaute Infrastruktur, vielfältige Freizeitmöglichkeiten und eine reizvolle Naturlandschaft mit den Leitha-Auen. Für Hundehalter ist Bruck an der Leitha besonders attraktiv: Die Kombination aus städtischem Umfeld und naturnahen Ausflugszielen ermöglicht ein abwechslungsreiches Hundeleben.',
    localFeatures: [
      'Bezirkshauptstadt mit vollständiger Infrastruktur',
      'Leitha-Auen als Naherholungsgebiet',
      'Ca. 20-25 Min. von Schwechat entfernt',
      'Vielfältige Trainingsumgebung (Stadt + Natur)',
    ],
    contactTitle: 'Interesse am mobilen Training in Bruck an der Leitha?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Bruck an der Leitha.',
  },
};

export function getRegionData(slug: string): RegionData {
  return regionData[slug];
}

export function getAllRegionSlugs(): string[] {
  return Object.keys(regionData);
}
