import type { Metadata } from "next";
import { projects } from "../../lib/projects";
import type { Project } from "../../lib/projects";
import Image from "next/image";

function ProjectCard({ img, link, name, brief, tech }: Project) {
  return (
    <div className="group flex flex-col gap-3">
      <div className="overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)] p-8 bg-gradient-to-bl from-orange-600 to-orange-400 saturate-0 group-hover:saturate-100 transition-all">
        <Image
          width={1000}
          height={1000}
          src={img}
          alt={name}
          className="aspect-video w-full object-cover shadow-xl rounded"
        />
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="font-medium text-[var(--text)] group-hover:opacity-70 transition-opacity">
            {name}
          </h3>
          <p className="text-sm text-[var(--text-muted)]">{brief}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--text-muted)]">
              {t}
            </span>
          ))}
        </div>
      </a>
    </div>
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
