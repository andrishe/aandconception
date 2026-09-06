import Image from 'next/image';
import {
  DoorOpen,
  FileText,
  Hammer,
  Home,
  Layout,
  LayoutDashboard,
  Palette,
  PenTool,
  Ruler,
  Sofa,
} from 'lucide-react';
import { PiDresser } from 'react-icons/pi';

export const metadata = {
  title: 'Nos Services — Lataléaand',
  description:
    "Découvrez nos prestations en décoration et architecture d'intérieur.",
};

const services = [
  {
    label: 'Décoration',
    title: 'Améliorez votre intérieur avec nos conseils déco',
    description:
      'Lors d’un échange téléphonique ou d’un rendez-vous, nous définissons ensemble vos besoins et vos envies pour choisir le mobilier, l’éclairage et les accessoires.',
    image: '/Image9.png',
    alt: 'Décoration intérieure',
    items: [
      { icon: PenTool, label: 'Conseil en décoration' },
      { icon: Palette, label: 'Mise en couleur' },
      { icon: Sofa, label: 'Ameublement des pièces' },
      { icon: LayoutDashboard, label: 'Conception de cuisines et salles de bain' },
      { icon: PiDresser, label: 'Création de dressings et rangements' },
    ],
  },
  {
    label: 'Architecture d’intérieur',
    title: 'Des espaces fonctionnels et esthétiques',
    description:
      'Particulier ou professionnel, vous souhaitez repenser votre intérieur ? Nous optimisons vos espaces, en rénovation ou en construction, avec des solutions adaptées.',
    image: '/Image1.png',
    alt: "Architecture d'intérieur",
    items: [
      { icon: PenTool, label: 'Rénovation' },
      { icon: Ruler, label: 'Optimisation' },
      { icon: Layout, label: 'Agencement' },
      { icon: DoorOpen, label: 'Ouvertures' },
    ],
  },
  {
    label: 'Permis Maison Individuelle',
    title: 'Conception de la maison de vos rêves',
    description:
      'Vous rêvez de construire votre maison ? Nous vous accompagne de l’esquisse au permis de construire, avec une conception sur mesure et une décoration harmonieuse.',
    image: '/Image2.png',
    alt: 'Permis Maison Individuelle',
    items: [
      { icon: Ruler, label: 'Conception des plans architecturaux' },
      { icon: FileText, label: 'Obtention du permis de construire' },
      { icon: Palette, label: 'Décoration intérieure sur mesure' },
      { icon: Hammer, label: 'Suivi du chantier' },
    ],
  },
];

const serviceIcons = [PenTool, Home, FileText];

export default function Services() {
  return (
    <div className="bg-cream">
      <section className="px-5 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="section-label">Nos prestations</h2>

          <h1 className="mt-8 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            Nos Services
          </h1>
          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted">
            Découvrez nos prestations en décoration et architecture
            d&apos;intérieur.
          </p>

          <div className="mt-16 space-y-6">
            {services.map((service, index) => {
              const Badge = serviceIcons[index];
              return (
                <article
                  key={service.label}
                  className="grid overflow-hidden rounded-3xl border border-line bg-white md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
                >
                  <div className="relative h-56 md:h-auto md:min-h-[340px]">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      fill
                    />
                  </div>

                  <div className="p-7 lg:p-12">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-cream">
                        <Badge className="h-5 w-5 text-clay" />
                      </span>
                      <span className="text-sm text-muted">
                        {service.label}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-2xl leading-snug text-ink lg:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>

                    <ul className="mt-8 grid gap-x-8 gap-y-4 border-t border-line pt-7 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item.label}
                          className="flex items-start gap-3 text-sm text-inkSoft"
                        >
                          <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                          <span>{item.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
