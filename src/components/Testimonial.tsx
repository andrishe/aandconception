'use client';

import { CustomTestimonials } from './ui/CustomTestimonial';
import { testimonials } from '@/data/data';

const Testimonial = () => {
  return (
    <section id="avis" className="bg-white px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-screen-xl">
        <span className="section-label">Avis clients</span>

        <h2 className="mt-8 max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
          Avis et retours d&apos;expérience
        </h2>
      </div>

      <div className="mt-14">
        <CustomTestimonials items={testimonials} speed="slow" />
      </div>
    </section>
  );
};

export default Testimonial;
