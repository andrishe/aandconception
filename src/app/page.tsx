import Footer from '@/components/Footer';
import Header from '@/app/Accueil.tsx/page';

import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import Testimonial from '@/components/Testimonial';
import { navbarLinks } from '@/data/data';
import { GalleryCards } from '@/components/GalleryCards';
import { UserProvider } from '@/context/UserContext';

export default function Home() {
  return (
    <UserProvider>
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
        <GalleryCards />
        <Testimonial />
        <Footer />
      </div>
    </UserProvider>
  );
}
