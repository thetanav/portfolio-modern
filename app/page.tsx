import { Instrument_Serif } from "next/font/google";
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
  SiCaldotcom,
} from "react-icons/si";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import GitHubCalendar from "react-github-calendar";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpNarrowWide } from "lucide-react";
import { projects } from "../lib/projects";
import getPostMetadata from "../lib/posts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

const featuredLinks = [
  {
    title: "X",
    href: "https://x.com/tanavtwt",
    meta: "@tanavtwt",
    icon: <FiTwitter className="h-5 w-5" />,
  },
  {
    title: "GitHub",
    href: "https://github.com/thetanav",
    meta: "thetanav",
    icon: <FiGithub className="h-5 w-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/tanav-poswal",
    meta: "tanav-poswal",
    icon: <FiLinkedin className="h-5 w-5" />,
  },
  {
    title: "Let's Connect",
    href: "https://cal.com/tanavposwal",
    meta: "tanavposwal",
    icon: <SiCaldotcom className="h-5 w-5" />,
  },
];

const stacks = [
  {
    title: "Product engineering",
    copy: "Delightful interfaces with resilient architecture across web and mobile surfaces.",
    tools: [
      FaReact,
      GrGraphQl,
      SiPostgresql,
      SiBun,
      SiTypescript,
      SiTrpc,
      SiSocketdotio,
    ],
  },
  {
    title: "Intelligent systems",
    copy: "Applied machine learning workflows from research to production and MLOps.",
    tools: [SiPython, SiPytorch, SiTensorflow, SiScikitlearn, SiKaggle],
  },
  {
    title: "Cloud scale",
    copy: "Distributed systems, data streaming, and container-first deployments.",
    tools: [SiDocker, SiApachekafka, SiRedis, SiAwslambda, SiGo, SiFlask],
  },
];

function getIconLabel(Icon: React.ElementType): string {
  const iconMap = new Map<React.ElementType, string>([
    [FaReact, "React"],
    [GrGraphQl, "GraphQL"],
    [SiPostgresql, "PostgreSQL"],
    [SiBun, "Bun"],
    [SiTypescript, "TypeScript"],
    [SiTrpc, "tRPC"],
    [SiSocketdotio, "Socket.io"],
    [SiPython, "Python"],
    [SiPytorch, "PyTorch"],
    [SiTensorflow, "TensorFlow"],
    [SiScikitlearn, "Scikit-learn"],
    [SiKaggle, "Kaggle"],
    [SiDocker, "Docker"],
    [SiApachekafka, "Apache Kafka"],
    [SiRedis, "Redis"],
    [SiAwslambda, "AWS Lambda"],
    [SiGo, "Go"],
    [SiFlask, "Flask"],
  ]);

  return iconMap.get(Icon) || "Unknown";
}

function QuickLink({
  title,
  href,
  meta,
  icon,
}: (typeof featuredLinks)[number]) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 text-sm text-[color:var(--text)] transition-color hover:shadow-[0_12px_40px_-20px_rgba(93,106,255,0.15)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center">
          {icon}
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-[color:var(--text)]">
            {title}
          </span>
          <span className="text-xs text-[color:var(--text-muted)]">{meta}</span>
        </div>
      </div>
      <span className="text-[color:var(--text-muted)]">
        <ArrowRightIcon className="h-4 w-4 -rotate-45" />
      </span>
    </a>
  );
}

function TechIcon({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          aria-label={label}
          role="img"
          className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--chip-border)] bg-[color:var(--chip-bg)] text-[color:var(--text-muted)] transition-all hover:border-[rgba(var(--accent-rgb))] hover:text-[rgb(var(--accent-rgb))]">
          <Icon className="h-5 w-5" aria-hidden />
          <span className="sr-only">{label}</span>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
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
        <img
          src={img}
          alt={name}
          className="h-auto w-full object-contain transition-all group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-[color:var(--text)] capitalize">
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
  date: Date;
  slug: string;
}) {
  return (
    <a
      href={`/blog/${slug}`}
      className="group flex flex-col gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[0_20px_80px_-70px_rgba(15,23,42,0.85)] hover:shadow-[0_28px_120px_-70pxrgba(93,106,255,0.35)] transition-all">
      <h3 className="text-lg font-semibold text-[color:var(--text)] group-hover:text-[rgb(var(--accent-rgb))]">
        {title}
      </h3>
      <p className="text-sm text-[color:var(--text-muted)]">
        {date.toLocaleDateString("en-US", {
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
    <TooltipProvider>
      <section className="animate-entry flex flex-col gap-8">
        <header className="flex flex-col gap-4 text-balance">
          <h1 className="text-lg font-black leading-[1.05] text-[color:var(--text)] sm:text-4xl">
            Hi! I'm Tanav
          </h1>
          <p className="w-full text-base text-[color:var(--text-muted)] sm:text-md">
            Full-stack engineer and ML practitioner focused on crafting minimal,
            purposeful products. I combine modern web tooling with intelligent
            systems to move fast, design boldly, and deliver reliable, scalable
            outcomes.
          </p>

          <div className="grid grid-cols-2 gap-3 my-6">
            {featuredLinks.map((link) => (
              <QuickLink key={link.href} {...link} />
            ))}
          </div>
        </header>

        <section className="flex flex-col gap-4 mb-6" aria-label="Tech Stack">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-[color:var(--text)]">
              Tech Stack
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {stacks.map((stack) => (
              <div key={stack.title} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-medium text-[color:var(--text)]">
                    {stack.title}
                  </h3>
                  <p className="text-xs text-[color:var(--text-muted)]">
                    {stack.copy}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map((Icon, index) => (
                    <TechIcon
                      key={index}
                      icon={Icon}
                      label={getIconLabel(Icon)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <GitHubCalendar username="thetanav" theme={calendarTheme} />
        </section>

        <section
          className="flex flex-col gap-4 mb-6"
          aria-label="Recent Projects">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-[color:var(--text)]">
              Recent Projects
            </h2>
            <p className="max-w-2xl text-sm text-[color:var(--text-muted)]">
              Some of my latest work and experiments.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
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

        <section className="flex flex-col gap-4 mb-6" aria-label="Recent Posts">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-[color:var(--text)]">
              Recent Posts
            </h2>
            <p className="max-w-2xl text-sm text-[color:var(--text-muted)]">
              Thoughts on technology, learning, and building.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
          <a
            href="/blog"
            className="self-start text-sm text-[color:var(--accent)] hover:underline">
            View all posts →
          </a>
        </section>

        <section className="flex flex-col gap-3 text-sm text-[color:var(--text-muted)] mb-6">
          <p>
            Currently collaborating with teams and founders to experiment,
            validate, and scale ideas in public. #Let'sBuildTogether
          </p>
        </section>
      </section>
    </TooltipProvider>
  );
}
