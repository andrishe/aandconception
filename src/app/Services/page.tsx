import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { navbarLinks } from '@/data/data';
import Image from 'next/image';

export default function Services() {
  return (
    <div>
      <Navbar
        logoDark="/logoBlack.svg"
        links={navbarLinks}
        textColorDark="text-black"
        dynamicLogo={false}
      />

      <h1>Services</h1>
      <p>Notre entreprise vous propose les services suivants:</p>
      <Footer />
    </div>
  );
}
