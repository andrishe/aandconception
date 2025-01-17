import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layouts from '@/components/Layouts';
import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <Header />
      <Timeline />
      <Layouts />
      <Footer />
    </div>
  );
}
