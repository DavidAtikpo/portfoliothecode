'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { nav, site } from '@/lib/content';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-brand-navy/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#accueil"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-brand-blue/40 transition group-hover:ring-brand-blue/70">
            <Image src="/logo.jpg" alt="" fill className="object-cover" sizes="40px" priority />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Thecode
            <sup className="ml-0.5 text-sm font-bold text-brand-blue">2</sup>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-xl text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '×' : '☰'}
        </button>

        <nav
          className={`${
            open
              ? 'fixed inset-0 top-16 z-40 flex flex-col bg-brand-slate/98 p-6 md:static md:flex md:bg-transparent md:p-0'
              : 'hidden md:block'
          }`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white md:py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="md:ml-2">
              <Link
                href="#contact"
                className="mt-2 block rounded-full bg-brand-blue px-5 py-2.5 text-center text-sm font-semibold text-brand-navy transition hover:bg-brand-glow md:mt-0"
                onClick={() => setOpen(false)}
              >
                Parlons-en
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <span className="sr-only">{site.name}</span>
    </header>
  );
}
