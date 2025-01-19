import Image from 'next/image';
import React from 'react';

export default function Gallery() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 pt-8 mb-10 -mt-8">
      <div className="text-center mb-10">
        <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold">
          Galeries
        </h2>
      </div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2 relative group">
            <Image
              alt="gallery"
              width={640}
              height={426}
              className="block rounded-lg object-cover object-center transform transition-transform duration-300 hover:scale-105"
              src="/Image1.png"
            />
            <p className="absolute bottom-2 left-2 bg-primary bg-opacity-60 text-secondary text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Salon
            </p>
          </div>
          <div className="w-1/2 p-1 md:p-2 relative group">
            <Image
              alt="gallery"
              width={640}
              height={426}
              className="block rounded-lg object-cover object-center transform transition-transform duration-300 hover:scale-105"
              src="/Image2.png"
            />
            <p className="absolute bottom-2 left-2 bg-primary bg-opacity-60 text-secondary text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Cusine
            </p>
          </div>
          <div className="w-full p-1 md:p-2 relative group">
            <Image
              alt="gallery"
              width={640}
              height={426}
              className="block rounded-lg object-cover object-center transform transition-transform duration-300 hover:scale-105"
              src="/Image28.png"
            />
            <p className="absolute bottom-2 left-2 bg-primary bg-opacity-60 text-secondary text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Cusine
            </p>
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2 relative group">
            <Image
              alt="gallery"
              width={640}
              height={426}
              className="block rounded-lg object-cover object-center transform transition-transform duration-300 hover:scale-105"
              src="/Image6.png"
            />
            <p className="absolute bottom-2 left-2 bg-primary bg-opacity-60 text-secondary text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Salon
            </p>
          </div>
          <div className="w-1/2 p-1 md:p-2 relative group">
            <Image
              alt="gallery"
              width={640}
              height={426}
              className="block rounded-lg object-cover object-center transform transition-transform duration-300 hover:scale-105"
              src="/Image29.png"
            />
            <p className="absolute bottom-2 left-2 bg-primary bg-opacity-60 text-secondary text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Couloir
            </p>
          </div>
          <div className="w-1/2 p-1 md:p-2 relative group">
            <Image
              alt="gallery"
              width={640}
              height={426}
              className="block rounded-lg object-cover object-center transform transition-transform duration-300 hover:scale-105"
              src="/Image12.png"
            />
            <p className="absolute bottom-2 left-2 bg-primary bg-opacity-60 text-secondary text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Salle à manger
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
