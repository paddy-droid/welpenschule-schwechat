export interface WillenskraftButton {
  text: string;
  href: string;
  target?: string;
  rel?: string;
}

export interface WillenskraftContent {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  buttons: WillenskraftButton[];
}

export interface LocationConfig {
  [key: string]: WillenskraftContent;
}

export type LocationKey = 'fischamend' | 'schwadorf' | 'ebenfurth' | 'gramatneusiedl' | 'goetzendorf' | 'himberg' | 'bruck-an-der-leitha';
