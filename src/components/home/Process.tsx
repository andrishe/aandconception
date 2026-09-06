import { CalendarDays, FileText, Hammer, PencilRuler } from 'lucide-react';
import { processSteps } from '@/data/data';

const stepIcons = {
  calendar: CalendarDays,
  quote: FileText,
  design: PencilRuler,
  build: Hammer,
} as const;

export default function Process() {
  return (
    <section id="processus" className="bg-white px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-screen-xl">
        <span className="section-label">Notre Processus</span>

        <h2 className="mt-8 max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
          Conçu pour un Service d&apos;Intérieur Exceptionnel
        </h2>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => {
            const Icon = stepIcons[step.icon];
            return (
              <div
                key={step.step}
                className="rounded-2xl border border-line bg-cream p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white">
                  <Icon className="h-5 w-5 text-clay" />
                </span>
                <h3 className="mt-8 font-serif text-lg text-ink">
                  {step.step}. {step.title}
                </h3>
                <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
