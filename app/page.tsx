import { FiCalendar, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import {
  SiFlask,
  SiPython,
  SiTypescript,
  SiDocker,
  SiTensorflow,
  SiScikitlearn,
  SiPytorch,
  SiAwslambda,
  SiApachekafka,
  SiRedis,
  SiPostgresql,
  SiBun,
  SiTrpc,
  SiSocketdotio,
  SiKaggle,
  SiGo,
  SiYoutube,
} from "react-icons/si";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { ArrowUpNarrowWide } from "lucide-react";
import { projects } from "../lib/projects";
import getPostMetadata from "../lib/posts";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar"),
  { ssr: false }
);

const featuredLinks = [
  {
    title: "X",
    href: "https://x.com/tanavtwt",
    meta: "@tanavtwt",
    icon: <FiTwitter className="h-5 w-5" />,
    color: "#1DA1F2",
  },
  {
    title: "GitHub",
    href: "https://github.com/thetanav",
    meta: "thetanav",
    icon: <FiGithub className="h-5 w-5" />,
    color: "#333",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/tanav-poswal",
    meta: "tanav-poswal",
    icon: <FiLinkedin className="h-5 w-5" />,
    color: "#0A66C2",
  },
  {
    title: "YouTube",
    href: "https://youtube.com",
    meta: "@thetanav",
    icon: <SiYoutube className="h-5 w-5" />,
    color: "#FF0000",
  },
];

const stacks = [
  {
    title: "Product engineering",
    copy: "Delightful interfaces with resilient architecture across web and mobile surfaces.",
    tools: [
      { icon: FaReact, label: "React" },
      { icon: GrGraphQl, label: "GraphQL" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: SiBun, label: "Bun" },
      { icon: SiTypescript, label: "TypeScript" },
      { icon: SiTrpc, label: "tRPC" },
      { icon: SiSocketdotio, label: "Socket.io" },
    ],
  },
  {
    title: "Intelligent systems",
    copy: "Applied machine learning workflows from research to production and MLOps.",
    tools: [
      { icon: SiPython, label: "Python" },
      { icon: SiPytorch, label: "PyTorch" },
      { icon: SiTensorflow, label: "TensorFlow" },
      { icon: SiScikitlearn, label: "scikit-learn" },
      { icon: SiKaggle, label: "Kaggle" },
    ],
  },
  {
    title: "Cloud scale",
    copy: "Distributed systems, data streaming, and container-first deployments.",
    tools: [
      { icon: SiDocker, label: "Docker" },
      { icon: SiApachekafka, label: "Apache Kafka" },
      { icon: SiRedis, label: "Redis" },
      { icon: SiAwslambda, label: "AWS Lambda" },
      { icon: SiGo, label: "Go" },
      { icon: SiFlask, label: "Flask" },
    ],
  },
];

function QuickLink({
  title,
  href,
  meta,
  icon,
  color,
}: (typeof featuredLinks)[number]) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text)] transition-all hover:shadow-[0_12px_40px_-20px_rgba(93,106,255,0.15)]">
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[color:var(--surface-soft)] text-[color:var(--text-muted)] border border-[color:var(--chip-border)] transition-colors group-hover:bg-[var(--hover-color)] group-hover:text-white"
          style={{ "--hover-color": color } as React.CSSProperties}>
          {icon}
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-[color:var(--text)]">
            {title}
          </span>
          <span className="text-xs text-[color:var(--text-muted)]">{meta}</span>
        </div>
      </div>
      <span className="text-[color:var(--text-muted)]">↗</span>
    </a>
  );
}

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";
import Image from "next/image";

function TechIcon({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            aria-label={label}
            role="img"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--chip-bg)] text-[color:var(--text-muted)] transition-all hover:text-[rgb(var(--accent-rgb))]">
            <Icon className="h-5 w-5" aria-hidden />
            <span className="sr-only">{label}</span>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function ProjectCard({ img, link, name, brief }: (typeof projects)[number]) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 transition-all hover:shadow-[0_12px_40px_-20px_rgba(93,106,255,0.15)]">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={name}
          width={1200}
          height={630}
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

function PostCard({
  title,
  date,
  slug,
}: {
  title: string;
  date: string;
  slug: string;
}) {
  return (
    <a
      href={`/blog/${slug}`}
      className="group flex flex-col gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 transition-all hover:shadow-[0_12px_40px_-20px_rgba(93,106,255,0.15)]">
      <h3 className="text-lg font-semibold text-[color:var(--text)] group-hover:text-[rgb(var(--accent-rgb))]">
        {title}
      </h3>
      <p className="text-sm text-[color:var(--text-muted)]">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </a>
  );
}

const ExternalLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--text-muted)] transition-all hover:border-[rgba(var(--accent-rgb),0.35)] hover:text-[rgb(var(--accent-rgb))]"
      rel="noopener noreferrer"
      target="_blank"
      href={href}>
      <ArrowTopRightIcon className="h-4 w-4" />
      <span>{text}</span>
    </a>
  );
};

export default function Page() {
  const recentProjects = projects.slice(0, 2);
  const recentPosts = getPostMetadata("posts").slice(0, 2);

  const calendarTheme = {
    light: [
      "rgba(15, 23, 42, 0.08)", // level 0 - very light
      "rgba(93, 106, 255, 0.2)", // level 1 - light accent
      "rgba(93, 106, 255, 0.4)", // level 2 - medium accent
      "rgba(93, 106, 255, 0.7)", // level 3 - strong accent
      "rgb(93, 106, 255)", // level 4 - full accent color
    ],
    dark: [
      "rgba(148, 163, 184, 0.18)", // level 0 - dark border color
      "rgba(129, 140, 248, 0.2)", // level 1 - light dark accent
      "rgba(129, 140, 248, 0.4)", // level 2 - medium dark accent
      "rgba(129, 140, 248, 0.7)", // level 3 - strong dark accent
      "rgb(129, 140, 248)", // level 4 - full dark accent color
    ],
  };

  return (
    <section className="animate-entry flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--text)] sm:text-4xl">
          Tanav Poswal
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[color:var(--text-muted)] sm:text-lg">
          Full-stack engineer and ML practitioner. I build minimal, purposeful
          products with modern web tools and intelligent systems.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {featuredLinks.map((link) => (
            <QuickLink key={link.href} {...link} />
          ))}
        </div>
      </header>

      <section>
        <GitHubCalendar username="thetanav" theme={calendarTheme} />
      </section>

      <section className="flex flex-col gap-4" aria-label="Recent Projects">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-[color:var(--text)]">
            Recent Projects
          </h2>
          <p className="max-w-2xl text-sm text-[color:var(--text-muted)]">
            Some of my latest work and experiments.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {recentProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
        <a
          href="/projects"
          className="self-start text-sm text-[color:var(--accent)] hover:underline">
          View all projects →
        </a>
      </section>

      <section className="flex flex-col gap-4" aria-label="My Stack">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-[color:var(--text)]">
            My Stack
          </h2>
          <p className="max-w-2xl text-sm text-[color:var(--text-muted)]">
            A look at the tools and technologies I love to use.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {stacks.flatMap((stack) => stack.tools).map((tool, index) => (
            <TechIcon key={index} icon={tool.icon} label={tool.label} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4" aria-label="Recent Posts">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-[color:var(--text)]">
            Recent Posts
          </h2>
          <p className="max-w-2xl text-sm text-[color:var(--text-muted)]">
            Thoughts on technology, learning, and building.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {recentPosts.map((post) => (
            <PostCard
              key={post.slug}
              {...post}
              date={post.date.toString()}
            />
          ))}
        </div>
        <a
          href="/blog"
          className="self-start text-sm text-[color:var(--accent)] hover:underline">
          View all posts →
        </a>
      </section>

      <section className="flex flex-col gap-3 text-sm text-[color:var(--text-muted)]">
        <p>
          Currently collaborating with teams and founders to experiment,
          validate, and scale ideas in public. #Let'sBuildTogether
        </p>
      </section>
    </section>
  );
}
