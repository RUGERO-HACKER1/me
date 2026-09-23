import { projects } from '../data/siteData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="section-label mb-2">Portfolio</p>
        <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Projects</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
