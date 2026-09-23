import { site } from '../data/siteData';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07070d]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-bold tracking-tight text-white">
          {site.name.split(' ')[0]}
          <span className="text-violet-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${site.contact.email}`}
          className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 transition-all hover:border-violet-400/50 hover:bg-violet-500/20 hover:text-white"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
