'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { heroSlides } from '@/lib/content';

export function Hero() {
  const [index, setIndex] = useState(0);
  const count = heroSlides.length;

  const go = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => go(index + 1), 6500);
    return () => window.clearInterval(id);
  }, [index, go]);

  const slide = heroSlides[index];

  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-center overflow-hidden mesh-bg pt-16"
    >
      <div
        className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-brand-glow/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <p
            key={`eyebrow-${index}`}
            className="mb-4 animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-brand-glow"
          >
            Portfolio · {index + 1} / {count}
          </p>
          <h1
            key={`title-${index}`}
            className="animate-fade-up font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="text-gradient">{slide.title}</span>
          </h1>
          <p
            key={`sub-${index}`}
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-zinc-400 sm:text-xl"
            style={{ animationDelay: '0.1s' }}
          >
            {slide.subtitle}
          </p>
          <div
            className="mt-10 flex animate-fade-up flex-wrap gap-4"
            style={{ animationDelay: '0.15s' }}
          >
            <Link
              href={slide.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-brand-navy shadow-glow-sm transition hover:bg-brand-glow hover:shadow-glow"
            >
              {slide.cta.label}
            </Link>
            <Link
              href="#apropos"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-brand-blue/50 hover:bg-white/5"
            >
              En savoir plus
            </Link>
          </div>
        </div>

        <div
          className="mt-14 flex gap-2"
          role="tablist"
          aria-label="Messages d’accueil"
        >
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-10 bg-brand-blue' : 'w-2 bg-white/25 hover:bg-white/40'
              }`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
