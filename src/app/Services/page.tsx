'use client';

import {
  PenTool,
  Home,
  Layout,
  Palette,
  LayoutDashboard,
  Ruler,
  FileText,
  Hammer,
  DoorOpen,
  Sofa,
} from 'lucide-react';
import { PiDresser } from 'react-icons/pi';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { navbarLinks } from '@/data/data';
import Carousel from '@/components/Carousel';

export default function Services() {
  return (
    <div>
      <Navbar
        logoDark="/logoBlack.svg"
        links={navbarLinks}
        textColorDark="text-black"
        dynamicLogo={false}
      />

      <div className="bg-secondary pt-20">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-screen-lg mx-auto text-center mb-10">
            <h1 className="text-4xl font-bold text-black">Nos Services</h1>
            <p className="text-lg text-primary mt-2">
              Découvrez nos prestations en décoration et architecture
              d&apos;intérieur.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Service Décoration */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-40 md:h-auto relative">
                <Image
                  src="/Image9.png"
                  alt="Décoration intérieure"
                  className="object-cover"
                  fill
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <PenTool className="text-white w-5 h-5" />
                    </div>
                    <span className="text-black text-sm font-medium">
                      Décoration
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-black mb-2">
                    Améliorez votre intérieur avec nos conseils déco
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Lors d’un échange téléphonique ou d’un rendez-vous, nous
                    définissons ensemble vos besoins et vos envies pour choisir
                    le mobilier, l’éclairage et les accessoires.
                  </p>
                  <div className="grid grid-cols-1 gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <PenTool className="text-primary w-6 h-6" />
                      <span>Conseil en décoration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Palette className="text-primary w-6 h-6" />
                      <span>Mise en couleur</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sofa className="text-primary w-6 h-6" />
                      <span>Ameublement des pièces</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LayoutDashboard className="text-primary w-6 h-6" />
                      <span>Conception de cuisines et salles de bain</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* <Home className="text-primary w-6 h-6" /> */}
                      <PiDresser className="text-primary w-6 h-6" />
                      <span>Création de dressings et rangements</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Architecture d'intérieur */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              {/* Image */}
              <div className="w-full md:w-1/2 h-40 md:h-auto relative">
                <Image
                  src="/Image1.png"
                  alt="Architecture d'intérieur"
                  className="object-cover"
                  fill
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  {/* Titre + Icône */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <Home className="text-white w-5 h-5" />
                    </div>
                    <span className="text-black text-sm font-medium">
                      Architecture d’intérieur
                    </span>
                  </div>

                  {/* Sous-titre */}
                  <h2 className="text-lg font-semibold text-black mb-2">
                    Des espaces fonctionnels et esthétiques
                  </h2>

                  {/* Paragraphe explicatif */}
                  <p className="text-sm text-gray-600 mb-4">
                    Particulier ou professionnel, vous souhaitez repenser votre
                    intérieur ? Nous optimisons vos espaces, en rénovation ou en
                    construction, avec des solutions adaptées.
                  </p>

                  {/* Services sous forme d'icônes */}
                  <div className="grid grid-cols-2 gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <PenTool className="text-black w-6 h-6" />
                      <span>Rénovation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="text-black w-6 h-6" />
                      <span>Optimisation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layout className="text-black w-6 h-6" />
                      <span>Agencement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DoorOpen className="text-black w-6 h-6" />
                      <span>Ouvertures</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Permis Maison Individuelle */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-40 md:h-auto relative">
                <Image
                  src="/Image2.png"
                  alt="Permis Maison Individuelle"
                  className="object-cover"
                  layout="fill"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-30"></div>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <FileText className="text-white w-5 h-5" />
                    </div>
                    <span className="text-black text-sm font-medium">
                      Permis Maison Individuelle
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-black mb-2">
                    Conception de la maison de vos rêves
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Vous rêvez de construire votre maison ? Nous vous accompagne
                    de l’esquisse au permis de construire, avec une conception
                    sur mesure et une décoration harmonieuse.
                  </p>

                  <div className="grid grid-cols-1 gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Ruler className="text-primary w-6 h-6" />
                      <span>Conception des plans architecturaux</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="text-primary w-6 h-6" />
                      <span>Obtention du permis de construire</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Palette className="text-primary w-6 h-6" />
                      <span>Décoration intérieure sur mesure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Hammer className="text-primary w-6 h-6" />
                      <span>Suivi du chantier</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black text-center mt-20 mb-10">
              Nos Réalisations
            </h2>
            <Carousel />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
