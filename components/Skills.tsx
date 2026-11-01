import { skills } from '@/lib/content';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section className="section-padding mesh-bg">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="competences"
          eyebrow="Stack"
          title="Compétences"
          description="Technologies et méthodes que j’utilise au quotidien."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-white/10 bg-brand-panel/60 p-6 backdrop-blur-sm transition hover:border-brand-blue/30 hover:shadow-glow-sm"
            >
              <h3 className="font-display text-lg font-semibold text-white">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-brand-blue/25 bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-glow"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
