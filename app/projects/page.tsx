import type { Metadata } from "next";
import { projects } from "../../lib/projects";
import type { Project } from "../../lib/projects";
import Image from "next/image";
import { Github, Globe, TwitterIcon } from "lucide-react";

function ProjectCard({ img, name, brief, tech, web, git, info }: Project) {
  return (
    <div className="group flex flex-col gap-3">
      <div className="overflow-hidden p-10 bg-(--accent)/20 flex items-center justify-center">
        <Image
          width={1000}
          height={1000}
          src={img}
          alt={name}
          className="w-fit rounded-xl object-cover shadow-lg max-h-72"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col flex-2">
          <h3 className="text-md font-semibold text-[var(--text)] capitalize first-letter:text-lg">
            {name}
          </h3>
          <p className="text-sm text-[var(--text-muted)] first-letter:capitalize">
            {brief}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tech.map((t) => (
              <span
                key={t}
                className="transition text-xs text-(--text-muted) font-mono font-black">
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
    <section className="flex flex-col gap-6 px-3 sm:px-6">
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
