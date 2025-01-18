import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { navbarLinks } from '@/data/data';
import Image from 'next/image';

export default function Apropos() {
  return (
    <div>
      <Navbar
        logoDark="/logoBlack.svg"
        links={navbarLinks}
        textColorDark="text-black"
        dynamicLogo={false} // Désactive la bascule et force le logo noir
      />

      {/* Titre juste en dessous de la Navbar */}

      <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-6 sm:p-8 md:p-12 mt-20">
        {/* White Card */}
        <div className="bg-secondary rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 z-10 -mr-0 lg:-mr-28 max-w-full lg:max-w-[365px] mb-8 lg:mb-0">
          <h1 className="text-[28px] text-primary font-medium mb-4">
            Qui suis-je ?
          </h1>
          <p className="text-black text-sm sm:text-base lg:text-[15px] leading-relaxed mb-6 sm:mb-8">
            Conceptrice d&apos;espace, Décoratrice d&apos;intérieur formée en
            école d&apos;architecture intérieur et en agence. Nous vous
            accompagnons dans la conception de votre projet d&apos;aménagement,
            en vous proposant un lieu unique qui vous ressemble. En tant que
            concepteur d&apos;espace, nous intervenons dans les projets de types
            événementiels en vous proposant un aménagement à l&apos;image de
            votre enseigne. A l&apos;affût des nouvelles tendances en décoration
            et dans le design mobilier, nous nous efforçons de vous proposer des
            intérieurs dans l&apos;air du temps.
          </p>

          <button className="bg-primary text-white px-6 py-2 rounded-full mt-8 hover:bg-transparent hover:border hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50">
            Premier Contact
          </button>
        </div>

        {/* Black Background with Design Image */}
        <div className="bg-black rounded-3xl w-full lg:w-[500px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] relative overflow-hidden flex items-center justify-center">
          <Image
            src="/Image12.png"
            alt="Interior Design"
            className="object-cover opacity-60 w-full h-full"
            layout="fill"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
