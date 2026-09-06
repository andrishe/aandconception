import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Star } from 'lucide-react';
import { testimonials } from '@/data/data';
import HeroVideo from '@/components/home/HeroVideo';

export default function Hero() {
  return (
    <section className="bg-cream px-3 pt-24 sm:px-5 lg:px-8 lg:pt-28">
      <div className="hero-still relative mx-auto min-h-[560px] w-full max-w-[1400px] overflow-hidden rounded-3xl lg:min-h-[720px] lg:rounded-4xl">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-tr from-ink/55 via-transparent to-transparent" />

        <div className="relative flex min-h-[560px] flex-col justify-between px-6 py-10 sm:px-10 lg:min-h-[720px] lg:px-14 lg:py-14">
          <div className="mt-auto">
            <div className="mb-6 inline-flex items-center gap-3 sm:mb-8 rounded-full bg-white/95 py-2 pl-2 pr-5 shadow-float backdrop-blur">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 3).map((review) => (
                  <Image
                    key={review.name}
                    src={review.image}
                    alt={review.name}
                    width={64}
                    height={64}
                    className="h-8 w-8 shrink-0 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="leading-tight">
                <p className="flex items-center gap-1 text-xs font-semibold text-ink">
                  <Star size={12} className="fill-emerald-500 text-emerald-500" />
                  Avis clients
                </p>
                <p className="text-[11px] text-muted">
                  Recommandé par {testimonials.length} clients
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="max-w-xl font-serif text-2xl leading-tight text-white sm:text-4xl lg:text-5xl">
                L&apos;art de transformer vos intérieurs
                <br className="hidden sm:block" /> en espaces d&apos;exception
              </h1>

              <div className="max-w-sm lg:text-right">
                <p className="max-w-[46ch] text-sm leading-relaxed text-white [text-shadow:0_1px_14px_rgba(43,39,36,0.9)]">
                  Nous concevons et créons des espaces intérieurs
                  exceptionnels. Où l&apos;architecture, le design et le confort
                  de luxe se rencontrent. Des destinations extraordinaires
                  conçues pour votre style de vie.
                </p>
                <Link
                  href="/Contact"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-ink transition-colors hover:bg-clay hover:text-white"
                >
                  Consultation Gratuite
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
