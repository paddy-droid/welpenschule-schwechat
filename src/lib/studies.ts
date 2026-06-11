/**
 * Verifizierter Studienkatalog für die Fachwissen-Sektionen der Landingpages.
 * Nur peer-reviewte Studien aus Fachjournalen; DOI-Links gegen doi.org verifiziert
 * (Katalog übernommen vom Schwesterprojekt Welpenschule Neusiedl, Stand 2026-06).
 */

export interface Study {
  id: string;
  /** Kurzzitat, z. B. "Hiby et al. (2004)" */
  short: string;
  /** Originaltitel der Publikation */
  title: string;
  journal: string;
  year: number;
  /** DOI- oder Journal-Link */
  url: string;
  /** Deutschsprachige Zusammenfassung des Kernbefunds */
  finding: string;
}

export interface FachwissenItem {
  studyId: string;
  /** Was der Befund konkret für das Training im jeweiligen Ort bedeutet */
  localTake: string;
}

export interface RegionFachwissen {
  intro: string;
  items: FachwissenItem[];
}

export const studies: Record<string, Study> = {
  hiby2004: {
    id: 'hiby2004',
    short: 'Hiby, Rooney & Bradshaw (2004)',
    title: 'Dog training methods: their use, effectiveness and interaction with behaviour and welfare',
    journal: 'Animal Welfare',
    year: 2004,
    url: 'https://doi.org/10.1017/S0962728600026683',
    finding:
      'Hunde, die mit Belohnung statt mit Strafe trainiert wurden, zeigten in dieser viel zitierten Untersuchung den höchsten Gehorsam — und deutlich weniger Problemverhalten als bestrafungsbasiert trainierte Hunde.',
  },
  china2020: {
    id: 'china2020',
    short: 'China, Mills & Cooper (2020)',
    title: 'Efficacy of Dog Training With and Without Remote Electronic Collars vs. a Focus on Positive Reinforcement',
    journal: 'Frontiers in Veterinary Science',
    year: 2020,
    url: 'https://doi.org/10.3389/fvets.2020.00508',
    finding:
      '63 Hunde mit unzuverlässigem Rückruf: Die rein belohnungsbasiert trainierte Gruppe reagierte schneller auf Signale und brauchte weniger Wiederholungen als die mit Elektrohalsband trainierten Gruppen — positive Verstärkung war selbst bei starker Ablenkung die effektivste Methode.',
  },
  castro2020: {
    id: 'castro2020',
    short: 'Vieira de Castro et al. (2020)',
    title: 'Does training method matter? Evidence for the negative impact of aversive-based methods on companion dog welfare',
    journal: 'PLOS ONE',
    year: 2020,
    url: 'https://doi.org/10.1371/journal.pone.0225023',
    finding:
      'Hunde aus aversiv arbeitenden Hundeschulen zeigten mehr Stresssignale, höhere Cortisolwerte und eine pessimistischere Grundstimmung als belohnungsbasiert trainierte Hunde — Strafe im Training hat einen messbaren Preis fürs Wohlbefinden.',
  },
  demant2011: {
    id: 'demant2011',
    short: 'Demant et al. (2011)',
    title: 'The effect of frequency and duration of training sessions on acquisition and long-term memory in dogs',
    journal: 'Applied Animal Behaviour Science',
    year: 2011,
    url: 'https://doi.org/10.1016/j.applanim.2011.05.010',
    finding:
      'Hunde, die nur ein- bis zweimal pro Woche kurz trainierten, lernten eine neue Aufgabe in weniger Einheiten als täglich trainierte Hunde. Pausen zwischen den Einheiten verbessern die Gedächtnis­konsolidierung — mehr ist beim Hundetraining nicht automatisch besser.',
  },
  salonen2020: {
    id: 'salonen2020',
    short: 'Salonen et al. (2020)',
    title: 'Prevalence, comorbidity, and breed differences in canine anxiety in 13,700 Finnish pet dogs',
    journal: 'Scientific Reports',
    year: 2020,
    url: 'https://doi.org/10.1038/s41598-020-59837-z',
    finding:
      '72,5 % von 13.700 untersuchten Hunden zeigten mindestens ein Angst-Merkmal — Geräuschempfindlichkeit war mit 32 % das häufigste. Ängstlichkeit ist also kein Einzelfall, sondern das häufigste Verhaltensthema überhaupt und gut trainierbar.',
  },
  riemer2019: {
    id: 'riemer2019',
    short: 'Riemer (2019)',
    title: 'Not a one-way road — Severity, progression and prevention of firework fears in dogs',
    journal: 'PLOS ONE',
    year: 2019,
    url: 'https://doi.org/10.1371/journal.pone.0218150',
    finding:
      'Gegenkonditionierung — laute Geräusche konsequent mit Futter und Spiel zu verknüpfen — senkte in dieser Studie das Risiko von Feuerwerksangst deutlich und half auch Hunden, die bereits Angst entwickelt hatten. Geräuschangst ist „keine Einbahnstraße".',
  },
  fagundes2018: {
    id: 'fagundes2018',
    short: 'Lopes Fagundes et al. (2018)',
    title: 'Noise Sensitivities in Dogs: An Exploration of Signs in Dogs with and without Musculoskeletal Pain',
    journal: 'Frontiers in Veterinary Science',
    year: 2018,
    url: 'https://doi.org/10.3389/fvets.2018.00017',
    finding:
      'Tritt Geräuschangst erst später im Leben auf, steckt häufig unerkannter Muskel- oder Gelenksschmerz dahinter: Der Hund verknüpft den Schreck mit dem Schmerz beim Zusammenzucken. Eine tierärztliche Abklärung gehört deshalb zu seriöser Verhaltensarbeit dazu.',
  },
  nagasawa2015: {
    id: 'nagasawa2015',
    short: 'Nagasawa et al. (2015)',
    title: 'Oxytocin-gaze positive loop and the coevolution of human-dog bonds',
    journal: 'Science',
    year: 2015,
    url: 'https://doi.org/10.1126/science.1261022',
    finding:
      'Entspannter Blickkontakt zwischen Mensch und Hund erhöht bei beiden das Bindungshormon Oxytocin — derselbe biologische Mechanismus, der auch Eltern und Kleinkinder verbindet. Bindung ist messbar und lässt sich gezielt stärken.',
  },
  puurunen2020: {
    id: 'puurunen2020',
    short: 'Puurunen et al. (2020)',
    title: 'Inadequate socialisation, inactivity, and urban living environment are associated with social fearfulness in pet dogs',
    journal: 'Scientific Reports',
    year: 2020,
    url: 'https://doi.org/10.1038/s41598-020-60546-w',
    finding:
      'Mangelnde Sozialisierung im Welpenalter, wenig Aktivität und ein städtisches Wohnumfeld erhöhen das Risiko sozialer Ängstlichkeit gegenüber fremden Menschen und Hunden deutlich. Frühe, gut dosierte Begegnungserfahrungen sind die beste Vorbeugung.',
  },
  howell2015: {
    id: 'howell2015',
    short: 'Howell, King & Bennett (2015)',
    title: 'Puppy parties and beyond: the role of early age socialization practices on adult dog behavior',
    journal: 'Veterinary Medicine: Research and Reports',
    year: 2015,
    url: 'https://doi.org/10.2147/VMRR.S62081',
    finding:
      'Frühe, positive Sozialisierungserfahrungen — etwa in gut geführten Welpenkursen — hängen mit weniger Angst und weniger Problemverhalten im Erwachsenenalter zusammen. Entscheidend ist die Qualität der Erfahrungen, nicht die bloße Menge an Reizen.',
  },
  brucks2017: {
    id: 'brucks2017',
    short: 'Brucks et al. (2017)',
    title: "Measures of Dogs' Inhibitory Control Abilities Do Not Correlate across Tasks",
    journal: 'Frontiers in Psychology',
    year: 2017,
    url: 'https://doi.org/10.3389/fpsyg.2017.00849',
    finding:
      'Impulskontrolle ist beim Hund keine Generalfähigkeit: Hunde, die in einer Aufgabe ruhig blieben, konnten in der nächsten trotzdem durchstarten. Selbstbeherrschung muss daher in jeder Reizsituation einzeln aufgebaut werden — genau dort, wo sie gebraucht wird.',
  },
  hall2020: {
    id: 'hall2020',
    short: 'Hall et al. (2020)',
    title: "Dogs Don't Die Just in Hot Cars — Exertional Heat-Related Illness (Heatstroke) Is a Greater Threat to UK Dogs",
    journal: 'Animals',
    year: 2020,
    url: 'https://doi.org/10.3390/ani10081324',
    finding:
      'Der häufigste Auslöser für Hitzschlag beim Hund ist körperliche Aktivität bei Wärme — nicht das heiße Auto. Rund drei Viertel der Fälle traten nach Bewegung auf; übergewichtige, kurznasige und junge, sehr aktive Hunde sind besonders gefährdet.',
  },
  sargisson2014: {
    id: 'sargisson2014',
    short: 'Sargisson (2014)',
    title: 'Canine separation anxiety: strategies for treatment and management',
    journal: 'Veterinary Medicine: Research and Reports',
    year: 2014,
    url: 'https://doi.org/10.2147/VMRR.S60424',
    finding:
      'Trennungsstress wird am wirksamsten mit systematischer Desensibilisierung behandelt: Alleinbleiben in winzigen, immer erfolgreichen Schritten aufbauen. Bestrafung ist kontraindiziert — sie verschärft die zugrunde liegende Angst.',
  },
  westgarth2019: {
    id: 'westgarth2019',
    short: 'Westgarth et al. (2019)',
    title: 'Dog owners are more likely to meet physical activity guidelines than people without a dog',
    journal: 'Scientific Reports',
    year: 2019,
    url: 'https://doi.org/10.1038/s41598-019-41254-6',
    finding:
      'Hundehalter erreichen die empfohlene wöchentliche Bewegungsmenge rund viermal so häufig wie Menschen ohne Hund. Der gemeinsame Spaziergang ist ein echter Gesundheitsmotor — für beide Enden der Leine.',
  },
};

/** Individuelle Fachwissen-Zuordnung je Einsatzort (Slug → Intro + 3 Studien mit lokalem Bezug). */
export const regionFachwissen: Record<string, RegionFachwissen> = {
  fischamend: {
    intro:
      'Fluglärm vom nahen Flughafen, Radverkehr am Donauradweg und Wildreize in den Donau-Auen: Fischamend fordert die Reizverarbeitung deines Hundes — diese Forschung erklärt unser Vorgehen.',
    items: [
      {
        studyId: 'salonen2020',
        localTake:
          'Geräuschempfindlichkeit ist mit 32 % das häufigste Verhaltensthema überhaupt — wenn dein Hund auf startende Flieger oder Verkehrslärm reagiert, ist das normal und vor allem: trainierbar. In Fischamend nutzen wir die abgestufte Distanz zur Einflugschneise für den systematischen Aufbau.',
      },
      {
        studyId: 'china2020',
        localTake:
          'Rehe, Hasen und Wasservögel in den Donau-Auen sind die Königsdisziplin für den Rückruf. Die Studie zeigt: Belohnungstraining mit Schleppleine funktioniert auch bei genau solchen Ablenkungen am besten — daran arbeiten wir direkt in den Auen.',
      },
      {
        studyId: 'brucks2017',
        localTake:
          'Dass dein Hund im Wohngebiet gelassen ist, sagt nichts über den Donauradweg aus. Impulskontrolle gegenüber Radfahrern üben wir genau dort, wo sie vorbeifahren — Reizkulisse für Reizkulisse.',
      },
    ],
  },
  schwadorf: {
    intro:
      'Ruhige Feldwege, wenig Verkehr, kaum Ablenkung: Schwadorf ist ein Lehrbuch-Lernort für konzentriertes Training. Drei Studien, die wir hier gezielt nutzen.',
    items: [
      {
        studyId: 'demant2011',
        localTake:
          'Die ebenen, ruhigen Feldwege rund um Schwadorf sind ideal für kurze, hochwertige Übungseinheiten — und die Forschung zeigt: genau solche verteilten Kurz-Sessions festigen Signale am schnellsten.',
      },
      {
        studyId: 'howell2015',
        localTake:
          'Für Welpen in Schwadorf gilt: Qualität vor Quantität. Ruhige Dorfrunden plus der Welpenkurs am überdachten Trainingsplatz in Schwechat ergeben genau die positiven Früherfahrungen, die erwachsene Hunde gelassen machen.',
      },
      {
        studyId: 'nagasawa2015',
        localTake:
          'Die störungsfreie Umgebung nutzen wir für Bindungsarbeit: ruhiger Blickkontakt und gemeinsames Tempo auf den Feldwegen aktivieren nachweislich das Oxytocin-System — euer Fundament für alles Weitere.',
      },
    ],
  },
  ebenfurth: {
    intro:
      'Weites Steinfeld, Bahnlinie und gelegentlicher Übungslärm aus der Region: Ebenfurth kombiniert Freiraum mit echten Geräuschreizen. Die Wissenschaft liefert den Trainingsplan.',
    items: [
      {
        studyId: 'china2020',
        localTake:
          'Die weiten Freiflächen des Steinfelds sind perfekt für den Distanz-Rückruf — und die Studie belegt: belohnungsbasierter Aufbau mit Schleppleine schlägt jede Druckmethode, auch bei Wildreiz.',
      },
      {
        studyId: 'riemer2019',
        localTake:
          'Knall- und Bahngeräusche lassen sich nach demselben Prinzip entschärfen wie Feuerwerk: konsequente Gegenkonditionierung mit Futter und Spiel — vorbeugend beim Welpen und therapeutisch beim ängstlichen Hund.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Wir planen deine Übungswochen in Ebenfurth bewusst mit Pausen: verteiltes Lernen festigt neue Signale schneller als tägliches Wiederholen — ideal vereinbar mit deinem Alltag.',
      },
    ],
  },
  gramatneusiedl: {
    intro:
      'Bahnknoten, Fischa-Wiesen und ruhige Ortsrunden: Gramatneusiedl hat vom Geräuschtraining bis zur stillen Lerneinheit alles. Das sagt die Forschung dazu.',
    items: [
      {
        studyId: 'salonen2020',
        localTake:
          'Jeder dritte Hund ist geräuschempfindlich — mit dem Bahnknoten hat Gramatneusiedl eine ehrliche, gut dosierbare Trainingsumgebung dafür. Wer hier gelassen wird, bleibt es überall.',
      },
      {
        studyId: 'fagundes2018',
        localTake:
          'Erschrickt dein erwachsener Hund plötzlich stärker bei Zügen als früher, klären wir zuerst Schmerz ab — die Studie zeigt, dass spät auftretende Geräuschangst oft körperliche Ursachen hat.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Ob Bahnhofsumfeld oder Fischa-Wiese: belohnungsbasiertes Training liefert den verlässlicheren Gehorsam — die Grundlage für jede Einheit bei dir zuhause in Gramatneusiedl.',
      },
    ],
  },
  goetzendorf: {
    intro:
      'Stille Leitha-Auen, Wildwechsel und entspannte Dorfrunden: Götzendorf an der Leitha ist ideal für konzentriertes Lernen — die Forschung liefert die Begründung.',
    items: [
      {
        studyId: 'brucks2017',
        localTake:
          'Ruhe im Ortskern bedeutet nicht automatisch Ruhe in den Leitha-Auen mit ihren Wildgerüchen. Wir bauen Impulskontrolle in Götzendorf an beiden Kulissen einzeln auf, weil sie sich nicht automatisch überträgt.',
      },
      {
        studyId: 'nagasawa2015',
        localTake:
          'Die ruhigen Auwege an der Leitha sind perfekt für Bindungsarbeit: entspannter Blickkontakt, gemeinsame Orientierung — das Oxytocin-System arbeitet für euch.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Kurze, seltene Einheiten schlagen tägliches Pauken — ideal, wenn du in Götzendorf zwischen Pendelalltag und Familie nur begrenzt Zeit hast.',
      },
    ],
  },
  himberg: {
    intro:
      'Wachsende Siedlungen an der Wiener Stadtgrenze, Pendlerverkehr und hohe Hundedichte: Himberg ist ein urbaner Trainingsort — und genau dazu gibt es klare Forschung.',
    items: [
      {
        studyId: 'puurunen2020',
        localTake:
          'Städtisches Wohnumfeld erhöht das Risiko sozialer Ängstlichkeit — der wichtigste Befund für Himbergs Neubaugebiete. Gute Sozialisierung und aktive Auslastung sind hier kein Nice-to-have, sondern Prävention.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Hohe Hundedichte heißt viele Begegnungen: belohnungsbasiertes Training liefert dafür den zuverlässigeren Gehorsam — entspannte Leinen-Begegnungen statt Frontstellung.',
      },
      {
        studyId: 'sargisson2014',
        localTake:
          'Viele Himberger pendeln nach Wien — Alleinbleiben ist daher ein Kernthema. Trennungsstress trainieren wir in winzigen, immer erfolgreichen Schritten; Strafe wäre kontraproduktiv.',
      },
    ],
  },
  'bruck-an-der-leitha': {
    intro:
      'Harrachpark, Bahnknoten und der Übungsplatz vor den Toren der Stadt: Bruck an der Leitha kombiniert Parkidylle mit echten Geräuschreizen. Die Wissenschaft gibt uns den Fahrplan.',
    items: [
      {
        studyId: 'riemer2019',
        localTake:
          'Die Knallgeräusche vom nahen Truppenübungsplatz lassen sich nach demselben Prinzip entschärfen wie Feuerwerk: konsequente Gegenkonditionierung mit Futter und Spiel — vorbeugend beim Welpen, therapeutisch beim ängstlichen Hund.',
      },
      {
        studyId: 'howell2015',
        localTake:
          'Der Harrachpark mit seiner planbaren Begegnungsfrequenz ist ein Sozialisierungs-Geschenk für Brucker Welpen: dosierte, positive Erfahrungen — genau die Qualität, die laut Forschung zählt.',
      },
      {
        studyId: 'westgarth2019',
        localTake:
          'Eure Runden durch den Harrachpark und an der Leitha sind mehr als Training: Sie sind euer gemeinsames Gesundheitsprogramm. Wir machen daraus strukturierte, entspannte Qualitätszeit.',
      },
    ],
  },
  'wien-simmering': {
    intro:
      'Dichte Stadt, Straßenbahnen, viele Hunde auf engem Raum: Wien-Simmering ist der urbanste Trainingsort unseres Einsatzgebiets — die Forschung kennt die Antworten.',
    items: [
      {
        studyId: 'puurunen2020',
        localTake:
          'Städtisches Wohnumfeld erhöht das Risiko sozialer Ängstlichkeit deutlich — der wichtigste Befund für Simmering. Gut dosierte Begegnungen, etwa im ruhigeren Teil der Parks, sind die wirksamste Vorbeugung.',
      },
      {
        studyId: 'salonen2020',
        localTake:
          'Straßenbahn, Verkehr, Sirenen: Geräuschempfindlichkeit ist das häufigste Verhaltensthema überhaupt. In Simmering arbeiten wir mit abgestufter Distanz — vom ruhigen Innenhof bis zur Simmeringer Hauptstraße.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Begegnungen auf engen Gehsteigen meistert dein Hund am zuverlässigsten über Belohnungslernen — Strafe würde genau die Anspannung füttern, die wir abbauen wollen.',
      },
    ],
  },
  parndorf: {
    intro:
      'A4-Rauschen, Outlet-Trubel, weite pannonische Felder: Parndorf fordert die Geräusch- und Reizverarbeitung deines Hundes. Das sagt die Wissenschaft dazu.',
    items: [
      {
        studyId: 'salonen2020',
        localTake:
          'Geräuschempfindlichkeit ist mit 32 % das häufigste Verhaltensthema überhaupt — wenn dein Hund auf den Autobahnlärm reagiert, ist das normal und vor allem: trainierbar. Genau dafür nutzen wir die abgestufte Distanz zur A4.',
      },
      {
        studyId: 'fagundes2018',
        localTake:
          'Reagiert dein erwachsener Hund plötzlich neu auf Lärm, prüfen wir gemeinsam mit deiner Tierarztpraxis, ob Schmerz dahintersteckt — bevor wir in Parndorf am Verhalten arbeiten.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Ob Outlet-Begegnung oder Freilauf in den Weinbergen: belohnungsbasiertes Training liefert den verlässlicheren Gehorsam — die Grundlage für jede Einheit bei dir zuhause in Parndorf.',
      },
    ],
  },
  moedling: {
    intro:
      'Belebte Fußgängerzone, der Anninger mit seinen Wildreizen und die Trockenrasen am Eichkogel: In Mödling wechselt das Reizlevel ständig — diese drei Forschungsergebnisse erklären, warum unser mobiles Training genau hier ansetzt.',
    items: [
      {
        studyId: 'brucks2017',
        localTake:
          'Dass dein Hund in der Mödlinger Fußgängerzone ruhig bleibt, heißt nicht, dass er es am Anninger-Waldweg auch tut. Deshalb trainieren wir Impulskontrolle direkt an euren echten Orten — Altstadt, Kurpark, Föhrenberge — statt auf einem neutralen Hundeplatz.',
      },
      {
        studyId: 'puurunen2020',
        localTake:
          'Die Bezirkshauptstadt ist ein urbanes Umfeld — und genau das erhöht laut Forschung das Risiko sozialer Ängstlichkeit. Gut dosierte Begegnungen in der Altstadt sind deshalb die beste Prävention, und wir steuern die Dosis.',
      },
      {
        studyId: 'westgarth2019',
        localTake:
          'Eure Runden Richtung Husarentempel und durch den Naturpark Föhrenberge sind euer gemeinsames Gesundheitsprogramm. Wir strukturieren sie so, dass daraus gleichzeitig euer wirksamstes Training wird.',
      },
    ],
  },
  'brunn-am-gebirge': {
    intro:
      'Wohngebiete an der Stadtgrenze, Gewerbetrubel und ruhige Weingärten am Ortsrand: Brunn am Gebirge verlangt deinem Hund flexible Reizverarbeitung ab. Die Wissenschaft zeigt den Weg.',
    items: [
      {
        studyId: 'puurunen2020',
        localTake:
          'Brunn wächst — und mit der Siedlungsdichte steigt laut Forschung das Risiko sozialer Unsicherheit. Frühe, positive Begegnungserfahrungen in den Wohnstraßen sind die wirksamste Vorbeugung.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Viele Hunde auf engem Raum heißt viele Begegnungen: belohnungsbasiertes Training liefert den zuverlässigeren Gehorsam — entspannte Leinen-Begegnungen statt Frontstellung.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Zwischen Job und Familie bleibt oft wenig Zeit — gute Nachricht: kurze, verteilte Einheiten in den Brunner Weingärten festigen Signale schneller als tägliches Pauken.',
      },
    ],
  },
  perchtoldsdorf: {
    intro:
      'Die Perchtoldsdorfer Heide mit ihren Zieseln ist eine der spannendsten Reizkulissen des ganzen Bezirks — und der Weinort selbst voller Begegnungen. Drei Befunde, die unser Vorgehen hier prägen.',
    items: [
      {
        studyId: 'brucks2017',
        localTake:
          'Die Heide ist der perfekte Beweis für diesen Befund: Ruhe im Ortskern garantiert nichts angesichts von Ziesel- und Wildgerüchen. Impulskontrolle bauen wir genau dort auf — kontrolliert, an der Leine, Schritt für Schritt.',
      },
      {
        studyId: 'china2020',
        localTake:
          'Auf der Heide gilt Leinenpflicht — umso wichtiger ist ein sicherer Rückruf auf den Wegen davor und danach. Die Studie belegt: belohnungsbasierter Aufbau mit Schleppleine schlägt jede Druckmethode, auch bei Wildreiz.',
      },
      {
        studyId: 'westgarth2019',
        localTake:
          'Heide, Hochberg, Weingärten: Perchtoldsdorf ist ein Bewegungsparadies. Eure täglichen Runden sind euer Gesundheitsmotor — wir machen daraus strukturierte Qualitätszeit.',
      },
    ],
  },
  'maria-enzersdorf': {
    intro:
      'Burg Liechtenstein, Föhrenwälder und dichte Wohngebiete: Maria Enzersdorf liegt genau an der Schnittstelle von Wienerwald und Stadtrand. Das sagt die Forschung zu eurem Training.',
    items: [
      {
        studyId: 'nagasawa2015',
        localTake:
          'Die ruhigen Waldwege rund um die Burg Liechtenstein sind perfekt für Bindungsarbeit: entspannter Blickkontakt, gemeinsame Orientierung — das Oxytocin-System arbeitet für euch.',
      },
      {
        studyId: 'brucks2017',
        localTake:
          'Gelassen im Wohngebiet heißt nicht gelassen im Föhrenwald mit Wildgeruch — wir üben Selbstbeherrschung in Maria Enzersdorf an beiden Kulissen, weil sie sich nicht automatisch überträgt.',
      },
      {
        studyId: 'howell2015',
        localTake:
          'Für Welpen ist die Mischung ideal: ruhige Waldrunden zum Festigen, dosierte Begegnungen im Ort fürs Sozialisierungs-Konto — Qualität vor Quantität, wie die Forschung zeigt.',
      },
    ],
  },
  'wiener-neudorf': {
    intro:
      'IZ NÖ-Süd, B17 und Badner Bahn: Wiener Neudorf ist verkehrsreich — und genau deshalb ein ehrlicher Trainingsort für Alltagsgelassenheit. Die Wissenschaft liefert den Plan.',
    items: [
      {
        studyId: 'salonen2020',
        localTake:
          'Geräuschempfindlichkeit ist mit 32 % das häufigste Verhaltensthema überhaupt — wenn dein Hund auf Lkw oder die Badner Bahn reagiert, ist das normal und trainierbar. Wir arbeiten mit abgestufter Distanz.',
      },
      {
        studyId: 'puurunen2020',
        localTake:
          'Das dichte Wohnumfeld erhöht laut Forschung das Risiko sozialer Ängstlichkeit. Gut geplante, positive Begegnungen — etwa im ruhigeren Ortszentrum — sind die beste Prävention.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Ob Begegnung am Gehsteig oder Warten vorm Geschäft: belohnungsbasiertes Training liefert den verlässlicheren Gehorsam — die Grundlage für jede Einheit bei dir zuhause in Wiener Neudorf.',
      },
    ],
  },
  voesendorf: {
    intro:
      'SCS-Trubel, große Parkflächen und der ruhige Schlosspark: Vösendorf hat extreme Reizkontraste auf engstem Raum — perfekt fürs Training, wenn man die Dosis steuert.',
    items: [
      {
        studyId: 'puurunen2020',
        localTake:
          'Das Umfeld der Shopping City Süd liefert Begegnungsreize in jeder Intensität. Die Forschung zeigt: dosierte, positive Erfahrungen schützen vor sozialer Angst — wir wählen Zeitpunkt und Abstand.',
      },
      {
        studyId: 'brucks2017',
        localTake:
          'Dass dein Hund im Schlosspark gelassen ist, sagt nichts über den Parkplatztrubel aus. Impulskontrolle üben wir in Vösendorf an jeder relevanten Kulisse einzeln.',
      },
      {
        studyId: 'hall2020',
        localTake:
          'Der wichtigste Sommer-Fakt für Vösendorf: Bewegung bei Hitze ist Hitzschlag-Auslöser Nummer eins — und große Asphaltflächen heizen extrem auf. Wir verlegen Einheiten in Morgen- und Abendstunden und zeigen dir den Handrücken-Test.',
      },
    ],
  },
  guntramsdorf: {
    intro:
      'Weingärten der Thermenregion, Badeteich-Saison und ruhige Feldwege Richtung Eichkogel: Guntramsdorf ist ein vielseitiger Lernort — die Forschung liefert die Begründung.',
    items: [
      {
        studyId: 'china2020',
        localTake:
          'Die weiten Weingartenwege sind perfekt für den Distanz-Rückruf: Die Studie belegt, dass belohnungsbasierter Aufbau mit Schleppleine jede Zwangsmethode schlägt — auch wenn ein Hase die Rebzeile kreuzt.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Drei kurze Übungseinheiten pro Woche zwischen den Rebzeilen bringen mehr als tägliches Pauken — perfekt vereinbar mit deinem Alltag in Guntramsdorf.',
      },
      {
        studyId: 'westgarth2019',
        localTake:
          'Eure Runden durch die Weingärten und zum Badeteich sind euer gemeinsames Fitnessprogramm — wir strukturieren sie so, dass daraus gleichzeitig euer wirksamstes Training wird.',
      },
    ],
  },
  gumpoldskirchen: {
    intro:
      'Weinwanderweg, Heurigen-Begegnungen und die Anninger-Hänge: Gumpoldskirchen verbindet Genuss-Kulisse mit echten Trainingschancen. Das sagt die Wissenschaft.',
    items: [
      {
        studyId: 'westgarth2019',
        localTake:
          'Der Weinwanderweg über die Anninger-Hänge ist eine der schönsten Trainingsstrecken des Bezirks — und euer gemeinsames Gesundheitsprogramm gleich dazu.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Heurigenbänke, Spaziergänger, andere Hunde: Begegnungen meistert dein Hund am zuverlässigsten über Belohnungslernen — Strafe würde genau die Unsicherheit füttern, die wir abbauen wollen.',
      },
      {
        studyId: 'nagasawa2015',
        localTake:
          'Die ruhigen Weingartenwege mit Blick übers Wiener Becken sind perfekt für Bindungsarbeit: entspannter Blickkontakt, gemeinsame Orientierung — das Oxytocin-System arbeitet für euch.',
      },
    ],
  },
  laxenburg: {
    intro:
      'Der Schlosspark Laxenburg ist mit seinen Teichen, Wiesen und Besucherströmen ein einzigartiges Trainingsgelände — wenn man weiß, wie man es dosiert. Drei Studien geben den Rahmen vor.',
    items: [
      {
        studyId: 'hiby2004',
        localTake:
          'Spaziergänger, Radfahrer, Picknickdecken: Im Schlosspark ist Belohnungslernen die zuverlässigste Basis für entspannte Begegnungen an der Leine — wissenschaftlich belegt.',
      },
      {
        studyId: 'brucks2017',
        localTake:
          'Enten und Schwäne an den Parkteichen sind ein eigener Trainingskontext: Wer hier ansprechbar bleibt, hat echte Impulskontrolle gelernt — wir bauen sie genau an dieser Reizquelle auf.',
      },
      {
        studyId: 'howell2015',
        localTake:
          'Für Welpen ist Laxenburg ein Sozialisierungs-Geschenk: planbare, dosierte Begegnungen mit Menschen, Kindern und Hunden — genau die Qualität früher Erfahrungen, die laut Forschung zählt.',
      },
    ],
  },
  biedermannsdorf: {
    intro:
      'Ruhige Wohnstraßen, der Mödlingbach und Felder Richtung Laxenburg: Biedermannsdorf ist ein stiller, konzentrierter Lernort — ideal auch für sensible Hunde.',
    items: [
      {
        studyId: 'demant2011',
        localTake:
          'Die ruhigen Feldwege Richtung Laxenburg sind ideal für kurze, hochwertige Übungseinheiten — und genau solche verteilten Kurz-Sessions festigen Signale laut Forschung am schnellsten.',
      },
      {
        studyId: 'nagasawa2015',
        localTake:
          'Die störungsarme Umgebung nutzen wir für Bindungsarbeit am Mödlingbach: ruhiger Blickkontakt und gemeinsames Tempo aktivieren nachweislich das Oxytocin-System.',
      },
      {
        studyId: 'sargisson2014',
        localTake:
          'Viele Biedermannsdorfer pendeln — Alleinbleiben ist daher ein Kernthema. Trennungsstress trainieren wir in winzigen, immer erfolgreichen Schritten; die ruhige Lage ist dafür ideal.',
      },
    ],
  },
  hinterbruehl: {
    intro:
      'Seegrotte-Besucher, stille Wienerwald-Täler und Wildwechsel: Die Hinterbrühl bietet jede Reizstufe auf kleinem Raum. Diese Forschung erklärt unser Vorgehen.',
    items: [
      {
        studyId: 'puurunen2020',
        localTake:
          'Die Besucherströme rund um die Seegrotte liefern dosierbare Begegnungsreize: erst in den stillen Tälern Vertrauen aufbauen, dann am Parkplatz üben — genau die Reihenfolge, die die Daten nahelegen.',
      },
      {
        studyId: 'china2020',
        localTake:
          'Rehe im Wienerwald sind die Königsdisziplin für den Rückruf. Die Studie zeigt: Belohnungstraining mit Schleppleine funktioniert auch bei genau solchen Ablenkungen am besten.',
      },
      {
        studyId: 'castro2020',
        localTake:
          'Sensible Hunde lernen in den ruhigen Tälern der Hinterbrühl am besten — und ausschließlich über positive Verstärkung, weil Druck nachweislich Stress erzeugt statt Sicherheit.',
      },
    ],
  },
  giesshuebl: {
    intro:
      'Hoch gelegen am Wienerwaldrand, ruhig und übersichtlich: Gießhübl ist ein geschützter Lernort — besonders wertvoll für junge und unsichere Hunde.',
    items: [
      {
        studyId: 'castro2020',
        localTake:
          'Sensible Hunde zahlen für aversive Methoden den höchsten Preis. In der geschützten Gießhübler Umgebung bauen wir Vertrauen ausschließlich über positive Verstärkung auf — messbar stressärmer.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Wir planen deine Übungswochen in Gießhübl bewusst mit Pausen: verteiltes Lernen festigt neue Signale schneller als tägliches Wiederholen.',
      },
      {
        studyId: 'china2020',
        localTake:
          'Am Übergang in den Föhrenwald entscheidet der Rückruf über die Freiheit deines Hundes. Belohnungsbasierter Aufbau mit Schleppleine schlägt jede Zwangsmethode — das zeigen die Daten eindeutig.',
      },
    ],
  },
  gaaden: {
    intro:
      'Weites Wiesental zwischen Anninger und Heiligenkreuz, Wildwechsel inklusive: Gaaden ist ideal für konzentriertes Naturtraining. Die passende Wissenschaft dazu.',
    items: [
      {
        studyId: 'china2020',
        localTake:
          'Die weiten Wiesen des Gaadener Tals sind perfekt für den Distanz-Rückruf — und die Studie belegt: Belohnungstraining funktioniert auch bei Reh- und Hasenreiz am besten.',
      },
      {
        studyId: 'brucks2017',
        localTake:
          'Gelassen auf der Dorfstraße heißt nicht gelassen am Waldrand mit Wildgeruch — wir üben Selbstbeherrschung in Gaaden an beiden Kulissen, weil sie sich nicht automatisch überträgt.',
      },
      {
        studyId: 'nagasawa2015',
        localTake:
          'Die ruhigen Wiesenwege nutzen wir für Bindungseinheiten: ruhiger Blickkontakt und gemeinsames Tempo aktivieren nachweislich das Oxytocin-System — euer Fundament für alles Weitere.',
      },
    ],
  },
  kaltenleutgeben: {
    intro:
      'Enge Waldtäler, Mountainbike-Strecken und Felswände: Kaltenleutgeben ist sportliches Wienerwald-Terrain — mit ganz eigenen Trainingsthemen.',
    items: [
      {
        studyId: 'brucks2017',
        localTake:
          'Plötzlich auftauchende Mountainbiker sind DIE Kaltenleutgebener Impulskontroll-Übung: Wir trainieren sie genau auf den Wegen, wo sie vorbeifahren — Reizkulisse für Reizkulisse.',
      },
      {
        studyId: 'castro2020',
        localTake:
          'Gerade wenn ein Hund auf Biker oder Jogger reagiert, ist die Versuchung „härterer" Methoden groß — die Daten zeigen: Sie stressen, ohne besser zu wirken. Wir arbeiten konsequent über Motivation.',
      },
      {
        studyId: 'fagundes2018',
        localTake:
          'Erschrickt dein erwachsener Hund plötzlich stärker als früher, klären wir zuerst Schmerz ab — die Studie zeigt, dass spät auftretende Schreckhaftigkeit oft körperliche Ursachen hat.',
      },
    ],
  },
  'breitenfurt-bei-wien': {
    intro:
      'Langgestreckt zwischen bewaldeten Hügeln: Breitenfurt ist von Wienerwald umschlossen — Wildreiz, Waldruhe und Bewegungsfreiheit inklusive.',
    items: [
      {
        studyId: 'china2020',
        localTake:
          'Wo der Garten direkt an den Wald grenzt, entscheidet der Rückruf über die Freiheit deines Hundes. Belohnungsbasierter Aufbau mit Schleppleine schlägt jede Druckmethode — auch bei Rehwild.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Kurze, verteilte Einheiten auf den Breitenfurter Waldwegen festigen Signale schneller als tägliches Pauken — ideal vereinbar mit deinem Pendel-Alltag.',
      },
      {
        studyId: 'westgarth2019',
        localTake:
          'Die Wienerwaldrunden vor der Haustür sind euer gemeinsames Gesundheitsprogramm — wir strukturieren sie so, dass daraus gleichzeitig euer wirksamstes Training wird.',
      },
    ],
  },
  'laab-im-walde': {
    intro:
      'Klein, still und mitten im Wald: Laab im Walde ist der ruhigste Lernort unseres Einsatzgebiets — besonders wertvoll für sensible Hunde und Tierschutzhunde.',
    items: [
      {
        studyId: 'castro2020',
        localTake:
          'Tierschutzhunde mit schwieriger Vergangenheit brauchen den nachweislich stressärmsten Weg: positive Verstärkung. In der Laaber Stille bauen wir Vertrauen auf, ohne alte Wunden zu vertiefen.',
      },
      {
        studyId: 'nagasawa2015',
        localTake:
          'Die menschenleeren Waldwege sind perfekt für Bindungsarbeit: entspannter Blickkontakt, gemeinsame Orientierung — das Oxytocin-System arbeitet für euch.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Wir dosieren die Einheiten bewusst sparsam: kurze Sessions mit Pausen dazwischen konsolidieren das Gelernte besser als tägliches „Fluten".',
      },
    ],
  },
  wienerwald: {
    intro:
      'Sittendorf, Sulz und der Wiesenwienerwald: Die Gemeinde Wienerwald bietet offene Wiesentäler und Waldränder — ein Bilderbuch-Trainingsgelände.',
    items: [
      {
        studyId: 'china2020',
        localTake:
          'Die offenen Wiesentäler rund um Sittendorf sind perfekt für den Distanz-Rückruf — und die Studie belegt: Belohnungstraining meistert auch Wildreiz am zuverlässigsten.',
      },
      {
        studyId: 'howell2015',
        localTake:
          'Für Welpen aus der Gemeinde Wienerwald gilt: ruhige Wiesenrunden zum Festigen plus dosierte Ausflüge nach Mödling oder Schwechat fürs Sozialisierungs-Konto — Qualität vor Quantität.',
      },
      {
        studyId: 'westgarth2019',
        localTake:
          'Eure Runden durch den Wiesenwienerwald sind mehr als Training: Sie sind euer gemeinsames Gesundheitsprogramm — strukturiert wird daraus euer wirksamstes Übungsfenster.',
      },
    ],
  },
  achau: {
    intro:
      'Wo Mödlingbach und Schwechat zusammenfließen: Achau ist klein, ruhig und von Feldern umgeben — ideale Bedingungen für fokussiertes Lernen.',
    items: [
      {
        studyId: 'sargisson2014',
        localTake:
          'Trennungsstress — eines unserer häufigsten Einzeltraining-Themen — wird in winzigen, immer erfolgreichen Schritten trainiert. Die ruhige Achauer Umgebung ohne Außenreize ist dafür ideal.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Die ebenen Feldwege entlang der Bäche sind ideal für kurze, hochwertige Übungseinheiten — genau solche verteilten Kurz-Sessions festigen Signale am schnellsten.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Unsere 100 % belohnungsbasierte Arbeitsweise ist keine Weltanschauung, sondern die nachweislich wirksamere Methode — auch für den Alltagsgehorsam in Achau.',
      },
    ],
  },
  muenchendorf: {
    intro:
      'Weite, ebene Felder des Wiener Beckens mit kilometerlanger Sicht: Münchendorf ist ein Traum für Distanzarbeit — die Forschung liefert den Fahrplan.',
    items: [
      {
        studyId: 'china2020',
        localTake:
          'Die endlosen Feldwege sind perfekt für den Rückruf auf große Distanz: belohnungsbasierter Aufbau mit Schleppleine schlägt jede Zwangsmethode — das zeigen die Daten eindeutig.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Drei kurze Übungseinheiten pro Woche auf den Münchendorfer Feldwegen bringen mehr als tägliches Pauken — perfekt vereinbar mit deinem Alltag.',
      },
      {
        studyId: 'howell2015',
        localTake:
          'Welpen aus Münchendorf haben den perfekten Spielplan: ruhige Feldrunden zum Festigen plus der Welpenkurs in Schwechat für dosierte, positive Begegnungserfahrungen.',
      },
    ],
  },
  hennersdorf: {
    intro:
      'Klein, stadtnah und von Feldern umgeben: Hennersdorf verbindet ruhiges Lernumfeld mit der Reizkulisse der nahen Großstadt — eine ideale Trainingskombination.',
    items: [
      {
        studyId: 'puurunen2020',
        localTake:
          'Die Nähe zur Wiener Stadtgrenze heißt: viele Reize in Reichweite, aber dosierbar. Genau diese steuerbaren Begegnungserfahrungen schützen laut Forschung vor sozialer Ängstlichkeit.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Ob Feldweg-Begegnung oder Gehsteig in der Siedlung: belohnungsbasiertes Training liefert den verlässlicheren Gehorsam — die Grundlage für jede Einheit bei dir zuhause in Hennersdorf.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Kurze, seltene Einheiten schlagen tägliches Üben — ideal, wenn du zwischen Pendelalltag und Familie nur begrenzt Zeit hast.',
      },
    ],
  },
};

export function getFachwissen(slug: string): RegionFachwissen | null {
  return regionFachwissen[slug] ?? null;
}
