import Footer from '@/components/Footer';
import Header from '@/app/Accueil.tsx/page';
import Gallery from '@/components/Gallery';
import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import Testimonial from '@/components/Testimonial';
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
        dynamicLogo={true}
      />
      <Header />
      <Timeline />
      <Gallery />
      <Testimonial />
      <Footer />
    </div>
  );
}
