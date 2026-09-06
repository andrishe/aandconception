import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Process from '@/components/home/Process';
import Projects from '@/components/home/Projects';
import VisionBanner from '@/components/home/VisionBanner';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-cream">
      <Hero />
      <About />
      <Process />
      <Projects />
      <Testimonial />
      <VisionBanner />
    </div>
  );
}
