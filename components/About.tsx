import Image from 'next/image';
import { about } from '@/lib/content';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section className="section-padding border-t border-white/5 bg-brand-slate/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="apropos"
          eyebrow="Profil"
          title="À propos de moi"
          description="Développeur orienté produit, qualité et expérience utilisateur."
        />

        <div className="grid items-center gap-12 lg:grid-cols-[280px_1fr]">
          <div className="mx-auto lg:mx-0">
            <div className="relative mx-auto aspect-square w-full max-w-[280px] animate-float">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/30 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-panel shadow-glow-sm">
                <Image
                  src="/logo.jpg"
                  alt="The Code²"
                  width={560}
                  height={560}
                  className="h-full w-full object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-zinc-300">
                {p.split('Thecode2').map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <strong className="font-semibold text-white">Thecode2</strong>
                    </span>
                  ) : (
                    part
                  ),
                )}
              </p>
            ))}

            <ul className="grid gap-4 sm:grid-cols-3">
              {about.highlights.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-brand-panel/80 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-glow">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-zinc-200">{item.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
