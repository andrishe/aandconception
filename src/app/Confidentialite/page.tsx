import { contactInfo } from '@/data/data';

export const metadata = {
  title: 'Politique de Confidentialité — Lataléaand',
};

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-cream">
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36 lg:px-10">
        <span className="section-label">Legal</span>
        <h1 className="mt-6 font-serif text-3xl text-ink sm:text-4xl">
          Politique de Confidentialité
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Les données transmises via notre formulaire de contact (nom, adresse
          e-mail, message) sont utilisées uniquement pour répondre à votre
          demande et ne sont jamais cédées à des tiers.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Pour toute question relative à vos données ou pour exercer votre droit
          d&apos;accès, de rectification ou de suppression, écrivez-nous à{' '}
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
