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
      className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-2 text-[color:var(--text)] shadow-[0_18px_80px_-60px_rgba(15,23,42,0.85)] hover:shadow-[0_28px_120px_-70px_rgba(93,106,255,0.35)]">
      <span
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(var(--accent-rgb),0.18), transparent 40%)",
        }}
      />
      <div className="relative h-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-soft)]">
        <Image
          src={img}
          quality={100}
          alt={name}
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 flex items-center gap-4 px-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold leading-tight sm:text-xl capitalize">
            {name}
          </h3>
          <p className="text-sm text-[color:var(--text-muted)]">{brief}</p>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-end gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)] group-hover:text-primary px-3 mb-3">
        <span>visit / github</span>
        <ArrowRightIcon className="h-4 w-4" />
      </div>
    </a>
  );
}

export const metadata: Metadata = {
  title: "Web Projects • Tanav Poswal",
  description: "My top projects",
  openGraph: {
    title: "Web Projects • Tanav Poswal",
    description: "My top projects",
    url: "https://tanav.is-a.dev/projects",
    siteName: "Tanav Poswal",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tanav Poswal - Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Projects • Tanav Poswal",
    description: "My top projects",
    images: "/opengraph-image.png",
    creator: "@tanavtwt",
  },
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

      <div className="grid grid-cols-2 gap-4" aria-label="Projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
