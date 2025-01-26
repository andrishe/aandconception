'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  text: string;
  image: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: `"Je recommande fortement service au top!"`,
    image: '/image2.png',
    name: ' Madame Ben',
  },
  {
    text: `"Je suis très satisfait de la qualité du service."`,
    image: '/image6.png',
    name: 'Monsieur Ben',
  },
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative border-t-2 border-t-secondary mx-auto w-full max-w-screen-xl ">
      <div className="text-center mt-10 mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold text-primary">
          Avis et retours d&apos;expérience
        </h3>
      </div>
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg pb-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full text-center transition-transform duration-[600ms] ease-in-out ${
              index === activeIndex ? 'block' : 'hidden'
            }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <p className="mx-auto max-w-4xl text-sm italic text-black">
              {testimonial.text}
            </p>

            <div className="mb-6 mt-4 flex justify-center">
              <div className="w-20 h-20 relative">
                <Image
                  src={testimonial.image}
                  className="rounded-full shadow-lg dark:shadow-black/30"
                  alt={`carousel-item-${index}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <p className="text-black ">{testimonial.name}</p>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 sm:left-8 md:left-12 lg:left-24 transform -translate-y-1/2 -translate-x-1/2 z-[1] flex items-center justify-center h-10 w-10  opacity-80 transition-opacity duration-150 ease-in-out hover:opacity-90 focus:opacity-90 motion-reduce:transition-none"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      <button
        className="absolute top-1/2 right-4 sm:right-8 md:right-12 lg:right-24 transform -translate-y-1/2 translate-x-1/2 z-[1] flex items-center justify-center h-10 w-10  opacity-80 transition-opacity duration-150 ease-in-out hover:opacity-90 focus:opacity-90 motion-reduce:transition-none"
        onClick={goToNext}
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  );
};

export default Carousel;
