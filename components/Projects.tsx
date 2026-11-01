import Link from 'next/link';
import { projects } from '@/lib/content';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section className="section-padding border-t border-white/5 bg-brand-slate/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projets"
          eyebrow="Réalisations"
          title="Projets"
          description="Quelques exemples de ce que je construis — détail modifiable dans lib/content.ts."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-brand-panel to-brand-navy p-6 transition hover:border-brand-blue/35 hover:shadow-glow-sm ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-white group-hover:text-brand-glow">
                  {project.title}
                </h3>
                {project.featured ? (
                  <span className="shrink-0 rounded-full bg-brand-blue/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-glow">
                    Featured
                  </span>
                ) : null}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="text-xs text-zinc-500">
                    #{tag}
                  </li>
                ))}
              </ul>
              {project.href ? (
                <Link
                  href={project.href}
                  className="mt-6 inline-flex text-sm font-semibold text-brand-blue hover:text-brand-glow"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir le projet →
                </Link>
              ) : (
                <p className="mt-6 text-xs text-zinc-600">Lien à ajouter dans content.ts</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
