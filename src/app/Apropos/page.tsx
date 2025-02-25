import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { navbarLinks } from '@/data/data';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Apropos() {
  return (
    <div>
      {/* Navbar avec position fixe */}
      <Navbar
        logoDark="/logoBlack.svg"
        links={navbarLinks}
        textColorDark="text-black"
        dynamicLogo={false}
      />

      {/* Conteneur principal avec espace en haut */}
      <section className=" py-8 px-4 mx-auto max-w-screen-xl lg:py-16 mt-10 lg:mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8  p-6 sm:p-8 md:p-12">
          {/* Bloc Texte */}
          <div className="lg:max-w-[365px]">
            <h1 className="text-black text-3xl md:text-5xl font-extrabold mb-4">
              Qui suis-je ?
            </h1>
            <p className="text-black text-lg font-normal leading-relaxed mb-6">
              Architecte d&apos;intérieur et designer, formée en école
              d&apos;architecture intérieure et en agence, je vous accompagne
              dans la conception de vos projets de rénovation ou de décoration
              intérieure en créant des lieux uniques qui vous ressemblent. En
              tant que designer d&apos;espace, j&apos;interviens également dans
              les projets événementiels, en proposant des aménagements à
              l&apos;image de votre enseigne. Toujours à l&apos;affût des
              nouvelles tendances en décoration et design mobilier, je
              m&apos;efforce de vous offrir des intérieurs modernes et dans
              l&apos;air du temps.
            </p>
            <button className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-white rounded-3xl bg-primary hover:bg-primaryDark focus:ring-4 focus:ring-primaryLight">
              <a href="/Contact">Premier Contact</a>
              <ArrowRight className="w-4 h-4 ms-2" />
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[500px] h-[400px] sm:h-[450px] md:h-[500px] relative overflow-hidden rounded-3xl ">
            <Image
              src="/graduation.gif"
              alt="Interior Design"
              className="object-cover opacity-80 w-full h-full"
              layout="fill"
              unoptimized
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
