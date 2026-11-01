import { contact, site } from '@/lib/content';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Contact portfolio The Code²')}`;

  return (
    <section className="section-padding mesh-bg">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="contact"
          eyebrow="Contact"
          title="Travaillons ensemble"
          description={contact.intro}
        />

        <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-brand-panel/70 p-8 text-center shadow-glow-sm backdrop-blur-sm sm:p-10">
          <p className="text-sm text-zinc-400">{contact.availability}</p>
          <a
            href={mailto}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-8 py-4 text-base font-semibold text-brand-navy transition hover:bg-brand-glow sm:w-auto"
          >
            {site.email}
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href={site.github}
              className="text-zinc-400 underline-offset-4 hover:text-brand-glow hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span className="text-zinc-700" aria-hidden>
              ·
            </span>
            <a
              href={site.linkedin}
              className="text-zinc-400 underline-offset-4 hover:text-brand-glow hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
