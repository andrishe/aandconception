import React from 'react';

export default function Header() {
  return (
    <div className=" relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src="/salon.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
          AAND CONCEPTION
        </h1>
        <p className="text-white sm:text-base md:text-lg lg:text-xl font-medium mt-4">
          L&apos;art de transformer vos intérieurs en espaces d&apos;exception,
          à votre image.
        </p>
        <button className="bg-primary text-white px-6 py-2 rounded-full mt-8 hover:bg-secondary hover:text-black focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50">
          Premier Contact
        </button>
      </div>
    </div>
  );
}
