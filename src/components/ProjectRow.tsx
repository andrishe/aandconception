import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/data';

type ProjectRowProps = {
  project: Project;
  /** Un indice pair place l'image à gauche, impair à droite. */
  index: number;
  priority?: boolean;
};

export default function ProjectRow({
  project,
  index,
  priority = false,
}: ProjectRowProps) {
  const imageADroite = index % 2 === 1;

  return (
    <Link
      href={`/Projets/${project.slug}`}
      className="group grid items-center gap-8 border-t border-line pt-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:pt-14"
    >
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden rounded-3xl ${
          imageADroite ? 'lg:order-2' : ''
        }`}
      >
        <Image
          src={project.images[0]}
          alt={project.alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className={imageADroite ? 'lg:order-1' : ''}>
        <p className="text-sm text-clay">{project.category}</p>

        <h3 className="mt-4 max-w-[18ch] font-serif text-2xl leading-tight text-ink sm:text-3xl lg:text-4xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-muted">
          {project.tagline}
        </p>

        <span className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-ink">
          Voir les {project.images.length} photos
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line transition-colors group-hover:border-clay group-hover:bg-clay group-hover:text-cream">
            <ArrowUpRight size={16} />
          </span>
        </span>
      </div>
    </Link>
  );
}
