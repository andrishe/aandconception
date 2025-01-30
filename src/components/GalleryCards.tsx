'use client';

import Image from 'next/image';
import React, { FC } from 'react';
import { Carousel, Card } from '@/components/ui/ImageCards';

// Type for the card data
interface CardData {
  category: string;
  title: string;
  src: string;
  text: string;

  content: React.ReactNode;
}

// Type for the DummyContent component props
interface DummyContentProps {
  images: string[];
  text?: string;
}

// GalleryCards component
export const GalleryCards: FC = () => {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-black ">
        Galeries
      </h2>
      <Carousel items={cards} />
    </div>
  );
};

// DummyContent component for displaying images
const DummyContent: FC<DummyContentProps> = ({ images }) => {
  return (
    <>
      {images.map((imageSrc, index) => (
        <div
          key={'dummy-content' + index}
          className="bg-[#F5F5F7] p-2 md:p-4 rounded-3xl mb-4"
        >
          <Image
            src={imageSrc}
            alt={`Category Image ${index + 1}`}
            height={500}
            width={500}
            className="md:w-2/2 md:h-2/2 h-full w-full mx-auto object-cover rounded-3xl "
          />
        </div>
      ))}
    </>
  );
};

// Define the data for the categories and cards
const data: CardData[] = [
  {
    category: 'NANTES',
    title: "Agencement d'un séjour familial",
    src: '/images/a_5.jpg',
    text: 'Une ambiance intense et ethnique.',

    content: (
      <DummyContent
        images={[
          '/images/a_5.jpg',
          '/images/a_6.jpg',
          '/images/a_7.png',
          '/images/a_8.jpg',
        ]}
      />
    ),
  },
  {
    category: 'NANTES',
    title: "Relooking d'un salon",
    src: '/images/n_1.jpg',
    text: 'Une tendance Art Déco.',

    content: (
      <DummyContent
        images={['/images/n_2.jpg', '/images/n_2.jpg', '/images/n_3.jpg']}
      />
    ),
  },
  {
    category: 'BRINDAS',
    title: 'Un séjour à dimension familiale',
    src: '/images/lsa_1.png',
    text: 'Un style raffiné avec le Terracotta',

    content: (
      <DummyContent
        images={[
          '/images/lsa_1.png',
          '/images/lsa_2.png',
          '/images/lsa_3.png',
          '/images/lsa_4.png',
          '/images/lsa_5.png',
        ]}
      />
    ),
  },
  {
    category: 'BRINDAS',
    title: "Aménagement d'une cuisine sur mesure",
    src: '/images/lc_4.png',
    text: 'Une tendance campagne et vintage',

    content: (
      <DummyContent
        images={[
          '/images/lc_3.png',
          '/images/lc_2.png',
          '/images/lc_4.png',
          '/images/lc_1.png',
        ]}
      />
    ),
  },
  {
    category: 'Lyon',
    title: "Rénovation d'une cuisine",
    src: '/images/lcl_3.png',
    text: 'Un style sophistiqué avec le Terrazzo',

    content: (
      <DummyContent
        images={[
          '/images/lcl_3.png',
          '/images/lcl_4.png',
          '/images/lcl_1.png',
          '/images/lcl_2.png',
        ]}
      />
    ),
  },

  {
    category: 'Lyon',
    title: "Aménagement d'une arrière-cuisine",
    src: '/images/arc_1.png',
    text: 'Une ambiance chaleureuse et naturelle',

    content: (
      <DummyContent
        images={[
          '/images/arc_1.png',
          '/images/arc_2.png',
          '/images/arc_3.png',
          '/images/arc_4.png',
        ]}
      />
    ),
  },
  {
    category: 'Lyon',
    title: "rénovation d'une salle d'eau",
    src: '/images/lsab_2.png',
    text: 'Un style épuré et minimaliste',

    content: (
      <DummyContent
        images={[
          '/images/lsab_2.png',
          '/images/lsab_3.png',
          '/images/lsab_4.png',
          '/images/lsab.png',
        ]}
      />
    ),
  },
  {
    category: 'PETITE-TERRE (MAYOTTE)',
    title: 'Une suite parentale sur mesure',
    src: '/images/mp_1.png',
    text: 'Une ambiance chic et tropicale',

    content: (
      <DummyContent
        images={[
          '/images/mp_1.png',
          '/images/mp_2.png',
          '/images/mp_3.png',
          '/images/mp_4.png',
          '/images/mp_5.png',
        ]}
      />
    ),
  },
  {
    category: 'PETITE-TERRE (MAYOTTE)',
    title: "Aménagement d'un restaurant",
    src: '/images/mr_1.png',
    text: 'Le bal des couleurs',

    content: (
      <DummyContent
        images={[
          '/images/mr_1.png',
          '/images/mr_2.png',
          '/images/mr_3.png',
          '/images/mr_4.png',
          '/images/mr_5.png',
          '/images/mr_6.png',
          '/images/mr_7.png',
          '/images/mr_8.png',
          '/images/mr_9.png',
        ]}
      />
    ),
  },
];
