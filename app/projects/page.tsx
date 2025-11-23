import type { Metadata } from "next";
import { projects } from "../../lib/projects";
import type { Project } from "../../lib/projects";

function ProjectCard({ img, link, name, brief }: Project) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3">
      <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <img
          src={img}
          alt={name}
          className="aspect-[2/1] w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-[var(--text)] group-hover:opacity-70 transition-opacity">
          {name}
        </h3>
        <p className="text-sm text-[var(--text-muted)]">{brief}</p>
      </div>
    </a>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and experiments.",
};

export default function ProjectsPage() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-medium tracking-tight text-[var(--text)]">
        Projects
      </h1>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
