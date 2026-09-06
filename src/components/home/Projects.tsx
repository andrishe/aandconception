import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/data';

const cardLayout = [
  'lg:mt-16 lg:h-[320px]',
  'lg:mt-0 lg:h-[420px]',
  'lg:mt-10 lg:h-[360px]',
];

export default function Projects() {
  return (
    <section id="portfolio" className="bg-sand px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-lg font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            Découvrez notre <span className="font-bold">Nouvelle</span>
            <br className="hidden sm:block" /> Galerie de Projets
          </h2>

          <Link
            href="/Contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-clay py-2 pl-6 pr-2 text-sm font-medium text-white transition-colors hover:bg-clayDark sm:self-auto"
          >
            Parler de votre projet
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-clay transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative h-[320px] overflow-hidden rounded-3xl shadow-card ${cardLayout[index] ?? ''}`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />

              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-ink backdrop-blur">
                {project.category}
              </span>

              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 px-5 py-4 backdrop-blur">
                <h3 className="font-serif text-base leading-snug text-ink">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-muted">{project.tagline}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
