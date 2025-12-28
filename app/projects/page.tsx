import type { Metadata } from "next";
import { projects } from "../../lib/projects";
import type { Project } from "../../lib/projects";
import Image from "next/image";
import { Github, Globe, TwitterIcon } from "lucide-react";

function ProjectCard({ img, name, brief, tech, web, git, info }: Project) {
  return (
    <div className="group flex flex-col cursor-pointer gap-3">
      <div className="overflow-hidden p-8 bg-gradient-to-tr from-neutral-900 via-neutral-700 to-neutral-900 shadow-lg max-h-80">
        <Image
          width={1000}
          height={1000}
          src={img}
          alt={name}
          className="aspect-video w-full rounded-xl object-cover shadow-xl ease-in transition-transform"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col flex-2 gap-1">
          <h3 className="text-md text-[var(--text)] capitalize first-letter:text-lg">
            {name}
          </h3>
          <p className="text-md text-[var(--text-muted)] first-letter:capitalize">
            {brief}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full hover:border-[var(--text)] hover:text-[var(--text)] transition border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--text-muted)]">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-2 mr-4">
          {web && (
            <a href={web} target="_blank" rel="noopener">
              <Globe className="w-5 h-5 opacity-40 hover:opacity-100 transition" />
            </a>
          )}
          {git && (
            <a href={git} target="_blank" rel="noopener">
              <Github className="w-5 h-5 opacity-40 hover:opacity-100 transition" />
            </a>
          )}
          {info && (
            <a href={info} target="_blank" rel="noopener">
              <TwitterIcon className="w-5 h-5 opacity-40 hover:opacity-100 transition" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and experiments.",
};

export default function ProjectsPage() {
  return (
    <section className="flex flex-col gap-8 px-6">
      <h1 className="text-2xl font-medium tracking-tight text-[var(--text)]">
        Completed Projects
      </h1>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
