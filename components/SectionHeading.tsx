type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, eyebrow, title, description }: Props) {
  return (
    <div id={id} className="mx-auto mb-14 max-w-2xl text-center scroll-mt-24">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-zinc-400">{description}</p>
      ) : null}
    </div>
  );
}
