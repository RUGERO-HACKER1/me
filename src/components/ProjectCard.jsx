export default function ProjectCard({ project }) {
  const { title, type, badge, description, stack, links } = project;

  return (
    <article className="glass-card group flex h-full flex-col rounded-2xl p-6 transition-all duration-300">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">{type}</span>
        {badge && (
          <span className="rounded-full bg-violet-500/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
            {badge}
          </span>
        )}
      </div>

      <h3 className="font-display text-xl font-semibold text-white group-hover:text-violet-200 transition-colors">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span key={tech} className="text-xs text-zinc-500">
            {tech}
            {stack.indexOf(tech) < stack.length - 1 && ' ·'}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-white/5 pt-5">
        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-violet-600/20 px-3 py-1.5 text-xs font-medium text-violet-300 transition-colors hover:bg-violet-600/30 hover:text-white"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live
          </a>
        )}
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
          >
            GitHub
          </a>
        )}
        {links.repos?.map((repo) => (
          <a
            key={repo.url}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
          >
            {repo.label}
          </a>
        ))}
      </div>
    </article>
  );
}
