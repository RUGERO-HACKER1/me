import { site } from '../data/siteData';

export default function Footer() {
  const { contact, cta, name } = site;

  return (
    <footer id="contact" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card rounded-3xl px-8 py-14 text-center md:px-16">
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="font-display text-2xl font-bold text-white md:text-4xl">
            Ready to collaborate?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            {site.availability} Reach out and let&apos;s turn your idea into a high-performance product.
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:bg-violet-500 hover:shadow-violet-500/30"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {cta}
          </a>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-zinc-500 transition-colors hover:text-violet-400"
            >
              {contact.email}
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-violet-400"
            >
              GitHub
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} {name}. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
