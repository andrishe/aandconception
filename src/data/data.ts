import { NavbarLinksType } from '@/types/navbar';

export const navbarLinks: NavbarLinksType = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/Services' },
  { label: 'Contact', href: '/Contact' },
];

type ImagesType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const images: ImagesType[] = [
  {
    src: '/Image9.png',
    alt: 'Décoration intérieure',
    width: 800,
    height: 600,
  },
  {
    src: '/Image6.png',
    alt: 'Décoration intérieure',
    width: 800,
    height: 600,
  },
  {
    src: '/Image21.png',
    alt: 'Interior Design',
    width: 800,
    height: 600,
  },
  {
    src: '/Image8.png',
    alt: 'Décoration intérieure',
    width: 800,
    height: 600,
  },
];

export const about = {
  heading: 'Qui suis-je ?',
  quote:
    "L'art de transformer vos intérieurs en espaces d'exception, à votre image avec un design",
  quoteAccent: 'Conçu pour durer',
  body:
    "Architecte d'intérieur et designer, formée en école d'architecture intérieure et en agence, je vous accompagne dans la conception de vos projets de rénovation ou de décoration intérieure en créant des lieux uniques qui vous ressemblent. En tant que designer d'espace, j'interviens également dans les projets événementiels, en proposant des aménagements à l'image de votre enseigne. Toujours à l'affût des nouvelles tendances en décoration et design mobilier, je m'efforce de vous offrir des intérieurs modernes et dans l'air du temps.",
};

export type Stat = {
  value: string;
  label: string;
  icon: 'projects' | 'experience' | 'satisfaction';
};

export const stats: Stat[] = [
  { value: '10', label: 'Projets complétés', icon: 'projects' },
  { value: '5', label: "Années d'expérience", icon: 'experience' },
  { value: '100%', label: 'Clients satisfaits', icon: 'satisfaction' },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: 'calendar' | 'quote' | 'design' | 'build';
};

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Premier rdv',
    description:
      'Lors de ce premier contact, nous prenons le temps de discuter de vos besoins, vos idées et vos attentes afin de mieux comprendre votre projet.',
    icon: 'calendar',
  },
  {
    step: '02',
    title: 'Devis',
    description:
      'Nous établissons un devis détaillé en fonction de votre projet, avec une estimation précise des coûts et des délais pour chaque étape.',
    icon: 'quote',
  },
  {
    step: '03',
    title: 'Conception',
    description:
      'Nous concevons des plans et des maquettes personnalisées en tenant compte de vos préférences et des contraintes techniques de votre espace.',
    icon: 'design',
  },
  {
    step: '04',
    title: 'Chantier',
    description:
      'Nous assurons un suivi rigoureux du chantier pour garantir le respect des délais, du budget et de la qualité des travaux.',
    icon: 'build',
  },
];

export type Project = {
  category: string;
  title: string;
  tagline: string;
  src: string;
  alt: string;
};

export const projects: Project[] = [
  {
    category: 'Brindas',
    title: 'Un séjour à dimension familiale',
    tagline: 'Un style raffiné avec le Terracotta',
    src: '/images/lsa_1.png',
    alt: 'Séjour familial aux murs terracotta',
  },
  {
    category: 'Lyon',
    title: "Rénovation d'une cuisine",
    tagline: 'Un style sophistiqué avec le Terrazzo',
    src: '/images/lcl_3.png',
    alt: 'Cuisine jaune rénovée avec suspensions',
  },
  {
    category: 'Brindas',
    title: "Aménagement d'une cuisine sur mesure",
    tagline: 'Une tendance campagne et vintage',
    src: '/images/lc_4.png',
    alt: 'Cuisine sur mesure vert sapin',
  },
];

export const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/aandconceptioninterieur/',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/aandconception/',
  },
  {
    label: 'X',
    href: 'https://x.com/AandInterieur',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@aand_conception_interieur?lang=fr',
  },
];

export const legalLinks = [
  { label: 'Politique de Confidentialité', href: '/Confidentialite' },
  { label: 'Conditions de Service', href: '/Conditions' },
];

export const contactInfo = {
  email: 'aand.conception.interieur@gmail.com',
  phone: '0639567236',
};

export type Review = {
  text: string;
  image: string;
  name: string;
};

export const testimonials: Review[] = [
  {
    text: `"Je recommande fortement service au top!"`,
    image: '/images/n_3.jpg',
    name: 'Madame Ben',
  },
  {
    text: `"Entreprise très sérieuse et dévouée. La personne en charge de mon dossier a été disponible et à mon écoute. Je recommande vivement de passer par eux."`,
    image: '/images/lsa_5.png',
    name: 'Mme Kayla',
  },
  {
    text: `"Un restaurant magnifique avec une ambiance exceptionnelle ! La décoration intérieure est soignée et l'atmosphère est chaleureuse. Un grand bravo à l'architecte pour ce superbe travail."`,
    image: '/images/mr_6.png',
    name: 'Mr Nadj',
  },
  {
    text: `"L'aménagement de la suite parentale a ete conçue par anina et réalisée par une entreprise de conception dressing et décoration basée à Mayotte.Celle-ci a fait fabriquer le dressing et la console par une entreprise de France métropolitaine .Du coup, le rendu est réussi"`,
    image: '/images/mp_1.png',
    name: 'Madame User',
  },
];
