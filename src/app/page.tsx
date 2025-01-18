import Footer from '@/components/Footer';
import Header from '@/app/Accueil.tsx/page';
import Layouts from '@/components/Layouts';
import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import { navbarLinks } from '@/data/data';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar
        logoLight="/logoBlanc.svg"
        logoDark="/logoBlack.svg"
        links={navbarLinks}
        textColorLight="text-white"
        textColorDark="text-black"
        dynamicLogo={true} // Active la bascule entre les deux logos
      />
      <Header />
      <Timeline />
      <Layouts />
      <Footer />
    </div>
  );
}
