import { NavbarLinksType } from '@/types/navbar';

export const navbarLinks: NavbarLinksType = [
  { label: 'Accueil', href: '/' },
  { label: 'Projets', href: '/Projets' },
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
  slug: string;
  category: string;
  title: string;
  tagline: string;
  alt: string;
  /** La première image sert de couverture. */
  images: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'sejour-familial-nantes',
    category: 'Nantes',
    title: "Agencement d'un séjour familial",
    tagline: 'Une ambiance intense et ethnique.',
    alt: 'Séjour familial à l’ambiance ethnique',
    images: [
      '/images/a_5.jpg',
      '/images/a_6.jpg',
      '/images/a_7.png',
      '/images/a_8.jpg',
    ],
  },
  {
    slug: 'relooking-salon-nantes',
    category: 'Nantes',
    title: "Relooking d'un salon",
    tagline: 'Une tendance Art Déco.',
    alt: 'Salon relooké dans un esprit Art Déco',
    images: ['/images/n_1.jpg', '/images/n_2.jpg', '/images/n_3.jpg'],
  },
  {
    slug: 'sejour-brindas',
    category: 'Brindas',
    title: 'Un séjour à dimension familiale',
    tagline: 'Un style raffiné avec le Terracotta',
    alt: 'Séjour familial aux murs terracotta',
    featured: true,
    images: [
      '/images/lsa_1.png',
      '/images/lsa_2.png',
      '/images/lsa_3.png',
      '/images/lsa_4.png',
      '/images/lsa_5.png',
    ],
  },
  {
    slug: 'cuisine-sur-mesure-brindas',
    category: 'Brindas',
    title: "Aménagement d'une cuisine sur mesure",
    tagline: 'Une tendance campagne et vintage',
    alt: 'Cuisine sur mesure vert sapin',
    featured: true,
    images: [
      '/images/lc_4.png',
      '/images/lc_3.png',
      '/images/lc_2.png',
      '/images/lc_1.png',
    ],
  },
  {
    slug: 'renovation-cuisine-lyon',
    category: 'Lyon',
    title: "Rénovation d'une cuisine",
    tagline: 'Un style sophistiqué avec le Terrazzo',
    alt: 'Cuisine jaune rénovée avec suspensions',
    featured: true,
    images: [
      '/images/lcl_3.png',
      '/images/lcl_4.png',
      '/images/lcl_1.png',
      '/images/lcl_2.png',
    ],
  },
  {
    slug: 'arriere-cuisine-lyon',
    category: 'Lyon',
    title: "Aménagement d'une arrière-cuisine",
    tagline: 'Une ambiance chaleureuse et naturelle',
    alt: 'Arrière-cuisine en bois clair avec rangements ouverts',
    images: [
      '/images/arc_2.png',
      '/images/arc_1.png',
      '/images/arc_3.png',
      '/images/arc_4.png',
    ],
  },
  {
    slug: 'salle-d-eau-lyon',
    category: 'Lyon',
    title: "Rénovation d'une salle d'eau",
    tagline: 'Un style épuré et minimaliste',
    alt: 'Salle d’eau épurée aux carreaux à motifs',
    images: [
      '/images/lsab_2.png',
      '/images/lsab_3.png',
      '/images/lsab_4.png',
      '/images/lsab_1.png',
    ],
  },
  {
    slug: 'suite-parentale-mayotte',
    category: 'Petite-Terre (Mayotte)',
    title: 'Une suite parentale sur mesure',
    tagline: 'Une ambiance chic et tropicale',
    alt: 'Suite parentale aux tons verts et dorés',
    images: [
      '/images/mp_1.png',
      '/images/mp_2.png',
      '/images/mp_3.png',
      '/images/mp_4.png',
      '/images/mp_5.png',
    ],
  },
  {
    slug: 'restaurant-mayotte',
    category: 'Petite-Terre (Mayotte)',
    title: "Aménagement d'un restaurant",
    tagline: 'Le bal des couleurs',
    alt: 'Salle de restaurant aux couleurs vives',
    images: [
      '/images/mr_1.png',
      '/images/mr_2.png',
      '/images/mr_3.png',
      '/images/mr_4.png',
      '/images/mr_5.png',
      '/images/mr_6.png',
      '/images/mr_7.png',
      '/images/mr_8.png',
      '/images/mr_9.png',
      '/images/mr_10.png',
    ],
  },
];

/** Les trois projets mis en avant sur l'accueil. */
export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

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
