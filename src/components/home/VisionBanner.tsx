import Image from 'next/image';

export default function VisionBanner() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden sm:h-[520px] lg:h-[680px]">
      <Image
        src="/images/lsa_1.png"
        alt="Séjour terracotta réalisé par Lataléaand"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/20" />

      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-screen-xl px-6 pb-14 lg:px-10 lg:pb-20">
        <h2 className="max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          De la Vision à la <span className="font-bold">Réalité, Chaque</span>
          <br className="hidden sm:block" /> Détail Considéré.
        </h2>
      </div>
    </section>
  );
}
