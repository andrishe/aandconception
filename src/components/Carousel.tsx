'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '@/data/data';
import Image from 'next/image';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const slideImage = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative ">
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`${
              activeIndex === index ? 'block' : 'hidden'
            } duration-700 ease-in-out relative w-full h-full`}
          >
            <Image
              src={src}
              className="object-cover absolute top-0 left-0 w-full h-full"
              alt={`carousel-item-${index}`}
              layout="fill"
            />
            {/* Overlay darkens the image */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? 'bg-black' : 'bg-white'
            }`}
            aria-current={activeIndex === index ? 'true' : 'false'}
            onClick={() => slideImage(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
          <ChevronLeft className="w-4 h-4 text-white  rtl:rotate-180" />
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <ChevronRight className="w-4 h-4 text-white rtl:rotate-180" />
        </span>
      </button>
    </div>
  );
};

export default Carousel;
