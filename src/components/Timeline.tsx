import React from 'react';
import { CalendarDays, NotepadText, LaptopMinimal, Hammer } from 'lucide-react';

export default function Timeline() {
  const items = [
    {
      title: 'Premier rdv',
      description:
        'Lors de ce premier contact, nous prenons le temps de discuter de vos besoins, vos idées et vos attentes afin de mieux comprendre votre projet.',
      icon: <CalendarDays color="#f1e7e6" />,
    },
    {
      title: 'Devis',
      description:
        'Nous établissons un devis détaillé en fonction de votre projet, avec une estimation précise des coûts et des délais pour chaque étape.',
      icon: <NotepadText color="#f1e7e6" />,
    },
    {
      title: 'Conception',
      description:
        'Nous concevons des plans et des maquettes personnalisées en tenant compte de vos préférences et des contraintes techniques de votre espace.',
      icon: <LaptopMinimal color="#f1e7e6" />,
    },
    {
      title: 'Chantier',
      description:
        'Nous assurons un suivi rigoureux du chantier pour garantir le respect des délais, du budget et de la qualité des travaux.',
      icon: <Hammer color="#f1e7e6" />,
    },
  ];

  return (
    <div className="relative w-full bg-gradient-to-r from-primary via-black to-secondary pb-8">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 pt-8">
        <div className="text-center mb-10">
          <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold">
            Les étapes de notre collaboration
          </h2>
        </div>
        <ol className="items-center sm:flex ">
          {items.map((item, index) => (
            <li key={index} className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-1 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-0 ring-white  sm:ring-8  shrink-0">
                  {item.icon}
                </div>
                {index < items.length - 1 && (
                  <div className="hidden sm:flex w-full bg-secondary h-0.5"></div>
                )}
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-secondary">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
