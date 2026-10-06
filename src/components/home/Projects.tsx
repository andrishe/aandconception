'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { featuredProjects, projects } from '@/data/data';

export default function Projects() {
  const [actif, setActif] = useState(0);

  return (
    <section id="portfolio" className="bg-ink px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-lg font-serif text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
            Découvrez notre <span className="font-bold">Nouvelle</span>
            <br className="hidden sm:block" /> Galerie de Projets
          </h2>

          <Link
            href="/Projets"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-clay py-2 pl-6 pr-2 text-sm font-medium text-white transition-colors hover:bg-clayDark sm:self-auto"
          >
            Voir les {projects.length} projets
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-clay">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>

        {/* Accordéon : un panneau s'élargit au survol ou au focus clavier. */}
        <div className="mt-14 hidden h-[520px] gap-4 lg:flex">
          {featuredProjects.map((project, index) => {
            const ouvert = index === actif;

            return (
              <Link
                key={project.slug}
                href={`/Projets/${project.slug}`}
                aria-label={`${project.title} — ${project.category}, ${project.images.length} photos`}
                onMouseEnter={() => setActif(index)}
                onFocus={() => setActif(index)}
                style={{ flexGrow: ouvert ? 2.5 : 1 }}
                className="group relative basis-0 overflow-hidden rounded-[2rem] transition-[flex-grow] duration-500 ease-out"
              >
                <Image
                  src={project.images[0]}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />

                <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-ink">
                  {project.category}
                </span>

                <div className="absolute inset-x-6 bottom-7">
                  <h3
                    className={`font-serif leading-snug text-white transition-all duration-500 ${
                      ouvert ? 'text-2xl' : 'text-lg'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <div
                    className={`grid transition-all duration-500 ${
                      ouvert
                        ? 'mt-3 grid-rows-[1fr] opacity-100'
                        : 'mt-0 grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[34ch] text-sm leading-relaxed text-white/80">
                        {project.tagline}
                      </p>
                      <p className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/70">
                        {project.images.length} photos
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* En dessous de lg, l'accordéon n'a pas la place : les projets s'empilent. */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:hidden">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/Projets/${project.slug}`}
              className="group relative block h-[340px] overflow-hidden rounded-[2rem]"
            >
              <Image
                src={project.images[0]}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />

              <span className="absolute left-5 top-5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-ink">
                {project.category}
              </span>

              <div className="absolute inset-x-5 bottom-6">
                <h3 className="font-serif text-xl leading-snug text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {project.tagline}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-white/70">
                  {project.images.length} photos
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
