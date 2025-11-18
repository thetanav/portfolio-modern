import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import Image from "next/image";
import { projects } from "../../lib/projects";
import type { Project } from "../../lib/projects";

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

function ProjectCard({ img, link, name, brief }: Project) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 transition-all hover:shadow-[0_12px_40px_-20px_rgba(93,106,255,0.15)]">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={img}
          quality={100}
          alt={name}
          width={1000}
          height={1000}
          className="h-40 w-full object-cover transition-all group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-[color:var(--text)]">
          {name}
        </h3>
        <p className="text-sm text-[color:var(--text-muted)]">{brief}</p>
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
    <section className="animate-entry flex flex-col gap-8">
      <header className="flex flex-col gap-4 text-balance">
        <h1 className="text-lg font-black leading-[1.05] text-[color:var(--text)] sm:text-4xl">
          Selected projects
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
