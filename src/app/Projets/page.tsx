import ProjectRow from '@/components/ProjectRow';
import { projects } from '@/data/data';

export const metadata = {
  title: 'Nos Projets — Lataléaand',
  description:
    "Séjours, cuisines, suites parentales et restaurants : découvrez nos réalisations d'architecture et de décoration d'intérieur.",
};

export default function Projets() {
  return (
    <div className="bg-cream">
      <section className="px-5 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="section-label">Réalisations</h2>

          <h1 className="mt-8 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            Nos Projets
          </h1>
          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted">
            Séjours, cuisines, suites parentales et restaurants, de Nantes à
            Mayotte. Chaque projet se visite en images.
          </p>

          <div className="mt-16 space-y-14 lg:mt-20 lg:space-y-20">
            {projects.map((project, index) => (
              <ProjectRow
                key={project.slug}
                project={project}
                index={index}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
