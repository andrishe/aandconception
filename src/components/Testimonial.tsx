'use client';

import { CustomTestimonials } from './ui/CustomTestimonial';

interface Testimonial {
  text: string;
  image: string;
  name: string;
}

const testimonials: Testimonial[] = [
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
];

const Testimonial = () => {
  return (
    <div className="relative border-t-2 border-t-secondary mx-auto w-full max-w-screen-xl ">
      <div className="text-center mt-10 mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold text-primary">
          Avis et retours d&apos;expérience
        </h3>
      </div>
      <div className="relative  pb-10">
        <CustomTestimonials items={testimonials} />
      </div>
    </div>
  );
};

export default Testimonial;
