import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Award, Layers, Smile } from 'lucide-react';
import { about, stats } from '@/data/data';

const statIcons = {
  projects: Layers,
  experience: Award,
  satisfaction: Smile,
} as const;

export default function About() {
  return (
    <section id="apropos" className="bg-cream px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="section-label">À propos</h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="relative min-h-[420px] w-full overflow-hidden rounded-3xl shadow-card sm:min-h-[520px] lg:min-h-0">
            <Image
              src="/images/lsa_3.png"
              alt="Salle à manger habillée de voilages et d'un luminaire sur mesure"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="max-w-[24ch] font-serif text-2xl leading-[1.35] text-ink sm:text-3xl lg:text-4xl">
              &laquo;&nbsp;{about.quote}{' '}
              <span className="text-clay">{about.quoteAccent}</span>
              &nbsp;&raquo;
            </p>

            <h3 className="mt-12 font-serif text-2xl text-ink">
              {about.heading}
            </h3>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted">
              {about.body}
            </p>

            <Link
              href="/Contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-6 pr-2 text-sm font-medium text-cream transition-colors hover:bg-clay"
            >
              Premier Contact
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-clay text-cream transition-colors group-hover:bg-ink">
                <ArrowUpRight size={16} />
              </span>
            </Link>

            <div className="mt-14 grid gap-4 border-t border-line pt-10 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = statIcons[stat.icon];
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-line bg-white px-6 py-8 text-center"
                  >
                    <Icon className="mx-auto h-5 w-5 text-clay" />
                    <p className="mt-5 font-serif text-2xl text-ink">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-muted">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
