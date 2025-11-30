import type { Metadata } from "next";
import { projects } from "../../lib/projects";
import type { Project } from "../../lib/projects";
import Image from "next/image";

function ProjectCard({ img, link, name, brief, tech }: Project) {
  return (
    <div className="group flex flex-col gap-3 cursor-pointer">
      <div className="overflow-hidden rounded-2xl p-8 bg-gradient-to-tr from-fuchsia-500 via-orange-400 to-purple-500 squircle-24 shadow-lg max-h-96">
        <Image
          width={1000}
          height={1000}
          src={img}
          alt={name}
          className="aspect-video w-full object-cover shadow-xl -rotate-6 rounded-lg scale-125 translate-20 border border-neutral-600 group-hover:-rotate-4 group-hover:translate-y-16 group-hover:translate-x-18 transition-transform ease-in-out"
        />
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-2"
      >
        <div className="flex flex-col gap-1">
          <h3 className="font-medium text-[var(--text)] group-hover:opacity-70 transition-opacity capitalize">
            {name}
          </h3>
          <p className="text-sm text-[var(--text-muted)]">{brief}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--text-muted)]"
            >
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
