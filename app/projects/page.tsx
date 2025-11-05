import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import Image from "next/image";
import { HiOutlineSparkles } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { projects } from "../../lib/projects";
import type { Project } from "../../lib/projects";

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

function ProjectCard({ img, link, name, brief }: Project) {
  return (
    <a
      href={link}
      target="_blank"
      className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-[color:var(--text)] shadow-[0_18px_80px_-60px_rgba(15,23,42,0.85)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_120px_-70px_rgba(93,106,255,0.35)]">
      <span
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(var(--accent-rgb),0.18), transparent 65%)",
        }}
      />
      <div className="relative z-10 flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)]">
          <Image
            src={img}
            alt={name}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold leading-tight sm:text-xl">
            {name}
          </h3>
          <p className="text-sm text-[color:var(--text-muted)]">{brief}</p>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-end gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
        <span>visit</span>
        <ArrowRightIcon className="h-4 w-4" />
      </div>
    </a>
  );
}

export const metadata: Metadata = {
  title: "Web Projects",
  description: "My top projects",
};

export default function Page() {
  return (
    <section className="animate-entry flex flex-col gap-10">
      <header className="flex flex-col gap-5 text-balance">
        <span className="inline-flex w-fit items-center gap-2 self-start rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
          <HiOutlineSparkles className="h-4 w-4" />
          build, measure, iterate
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
          <span
            className={`text-5xl font-black leading-[1.05] text-[color:var(--text)] sm:text-6xl ${serif.className}`}>
            Selected projects
          </span>
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[color:var(--text-muted)] sm:text-lg">
          A sample of product builds, experiments, and infrastructure that
          demonstrate how I deliver minimal, resilient experiences.
        </p>
      </header>

      <div className="grid gap-4" aria-label="Projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

        <a
          href="https://github.com/thetanav"
          target="_blank"
          className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-[color:var(--text)] shadow-[0_18px_80px_-60px_rgba(15,23,42,0.85)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_120px_-70px_rgba(93,106,255,0.35)]">
          <span
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 0% 0%, rgba(129,140,248,0.24), transparent 70%)",
            }}
          />
          <div className="relative z-10 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[color:var(--surface-soft)] text-[rgb(var(--accent-rgb))]">
              <SiGithub className="h-6 w-6" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold leading-tight sm:text-xl">
                GitHub profile
              </h3>
              <p className="text-sm text-[color:var(--text-muted)]">
                Explore all public experiments and source code.
              </p>
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-end gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
            <span>open workspace</span>
            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </a>
      </div>
    </section>
  );
}
