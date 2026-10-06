import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getProject, projects } from '@/data/data';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: 'Projet introuvable — Lataléaand' };

  return {
    title: `${project.title} — Lataléaand`,
    description: `${project.tagline} — ${project.category}.`,
  };
}

export default async function Projet({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const [couverture, ...autres] = project.images;
  const suivant =
    projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];

  return (
    <div className="bg-cream">
      <section className="px-5 pt-32 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-screen-xl">
          <Link
            href="/Projets"
            className="group inline-flex items-center gap-3 rounded-full border border-line bg-white py-2 pl-2 pr-6 text-sm font-medium text-ink transition-colors hover:border-clay"
          >
            {/* La flèche passe devant le libellé : c'est un retour, pas une avancée. */}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream text-clay transition-colors group-hover:bg-clay group-hover:text-cream">
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </span>
            Tous les projets
          </Link>

          <div className="mt-12 grid gap-8 border-t border-line pt-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <p className="text-sm text-clay">{project.category}</p>
              <h1 className="mt-4 max-w-[16ch] font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
            </div>

            <div className="lg:pt-3">
              <p className="max-w-[40ch] text-base leading-relaxed text-muted">
                {project.tagline}
              </p>
              <p className="mt-6 text-sm text-muted">
                {project.images.length} photos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Récit photo : une image large, puis une alternance pleine largeur / paires. */}
      <section className="px-5 pb-20 pt-14 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl">
            <Image
              src={couverture}
              alt={project.alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>

          {autres.length > 0 && (
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {autres.map((image, index) => {
                // Pleine largeur un cran sur trois, et aussi pour la
                // dernière image si elle resterait seule sur sa rangée.
                const pleineLargeur =
                  index % 3 === 0 ||
                  (index === autres.length - 1 && index % 3 === 1);

                return (
                  <div
                    key={image}
                    className={`relative w-full overflow-hidden rounded-3xl ${
                      pleineLargeur
                        ? 'aspect-[16/9] sm:col-span-2'
                        : 'aspect-[16/10]'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} — vue ${index + 2}`}
                      fill
                      sizes={
                        pleineLargeur
                          ? '(max-width: 1280px) 100vw, 1280px'
                          : '(max-width: 640px) 100vw, 50vw'
                      }
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-muted">Projet suivant</p>
            <Link
              href={`/Projets/${suivant.slug}`}
              className="group mt-3 inline-flex items-baseline gap-3 font-serif text-2xl leading-tight text-ink transition-colors hover:text-clay sm:text-3xl"
            >
              {suivant.title}
              <ArrowUpRight
                size={20}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <Link
            href="/Contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-ink py-2 pl-6 pr-2 text-sm font-medium text-cream transition-colors hover:bg-clay sm:self-auto"
          >
            Parler de votre projet
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-clay text-cream transition-colors group-hover:bg-ink">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
