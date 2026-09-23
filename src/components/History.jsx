import { timeline } from '../data/siteData';

export default function History() {
  return (
    <section id="history" className="scroll-mt-20 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="section-label mb-2">Background</p>
        <h2 className="font-display text-2xl font-bold text-white md:text-3xl">History</h2>

        <div className="relative mt-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent md:left-[11px]" />

          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={`${item.year}-${item.title}`} className="relative flex gap-6 md:gap-8">
                <div className="relative z-10 mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center md:h-6 md:w-6">
                  <div className="h-3 w-3 rounded-full border-2 border-violet-500 bg-[#07070d] md:h-4 md:w-4" />
                </div>

                <div className="glass-card flex-1 rounded-xl p-5 md:p-6">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-display text-sm font-bold text-violet-400">{item.year}</span>
                    <h3 className="font-display text-base font-semibold text-white md:text-lg">{item.title}</h3>
                  </div>
                  <p className="mt-1 text-sm font-medium text-zinc-500">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
