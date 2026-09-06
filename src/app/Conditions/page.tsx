import { contactInfo } from '@/data/data';

export const metadata = {
  title: 'Conditions de Service — Lataléaand',
};

export default function Conditions() {
  return (
    <div className="min-h-screen bg-cream">
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36 lg:px-10">
        <span className="section-label">Legal</span>
        <h1 className="mt-6 font-serif text-3xl text-ink sm:text-4xl">
          Conditions de Service
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Chaque prestation d&apos;architecture ou de décoration d&apos;intérieur
          fait l&apos;objet d&apos;un devis détaillé, validé par le client avant
          le démarrage des travaux. Les visuels présentés sur ce site sont des
          projections 3D de projets réalisés par Lataléaand Intérieur.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Pour obtenir la version complète de nos conditions générales,
          contactez-nous à{' '}
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-clay underline underline-offset-4"
          >
            {contactInfo.email}
          </a>
          .
        </p>
      </main>
    </div>
  );
}
