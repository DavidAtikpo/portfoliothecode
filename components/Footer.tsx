import { site } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-navy py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-zinc-500 sm:flex-row sm:px-6 sm:text-left">
        <p>
          © {year}{' '}
          <span className="font-medium text-zinc-300">
            {site.name}
          </span>
          . Tous droits réservés.
        </p>
        <p className="text-xs">Construit avec Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
