import { Instrument_Serif } from "next/font/google";
import { FiCalendar, FiTwitter, FiGithub } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { FaReact, FaUps } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTurborepo,
  SiPostman,
  SiFlask,
  SiPython,
  SiRust,
  SiTypescript,
  SiShadcnui,
  SiFramer,
  SiDocker,
  SiTensorflow,
  SiNvidia,
  SiScikitlearn,
  SiPandas,
  SiPlotly,
  SiPytorch,
  SiKubernetes,
  SiAwslambda,
  SiApachekafka,
  SiRedis,
  SiPostgresql,
  SiBun,
  SiTrpc,
  SiSocketdotio,
  SiKaggle,
  SiTableau,
  SiGo,
  SiLangchain,
} from "react-icons/si";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import GitHubCalendar from "react-github-calendar";
import { ArrowUpNarrowWide } from "lucide-react";

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

const featuredLinks = [
  {
    title: "Let's collaborate",
    href: "https://cal.com/tanavposwal",
    meta: "Lets call",
    icon: <FiCalendar className="h-4 w-4" />,
  },
  {
    title: "Follow the build",
    href: "https://x.com/tanavtwt",
    meta: "Sharing what I learn",
    icon: <FiTwitter className="h-4 w-4" />,
  },
  {
    title: "Open source",
    href: "https://github.com/thetanav",
    meta: "My projects on GitHub",
    icon: <FiGithub className="h-4 w-4" />,
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
    tools: [
      SiLangchain,
      SiPython,
      SiPytorch,
      SiTensorflow,
      SiScikitlearn,
      SiKaggle,
    ],
  },
  {
    title: "Cloud scale",
    copy: "Distributed systems, data streaming, and container-first deployments.",
    tools: [SiDocker, SiApachekafka, SiRedis, SiAwslambda, SiGo, SiFlask],
  },
];

const focus = [
  {
    heading: "Learning in public",
    description:
      "Sharing knowledge through blog posts, open source contributions, and community engagement.",
    icon: <HiOutlineSparkles className="h-6 w-6" />,
  },
  {
    heading: "Hackathon Winner",
    description:
      "Building rapid prototypes that solve real problems, earning top honors at major hackathons.",
    icon: <ArrowUpNarrowWide className="h-6 w-6" />,
  },
];

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
      className="group relative flex min-w-[240px] flex-1 flex-col gap-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 text-sm text-[color:var(--text)] shadow-[0_20px_70px_-60px_rgba(15,23,42,0.85)] hover:shadow-[0_28px_120px_-70px_rgba(93,106,255,0.35)]">
      <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--text-muted)]">
        {icon}
        <span>{title}</span>
      </span>
      <span className="text-lg text-[color:var(--text)]">{meta}</span>
    </a>
  );
}

function FocusCard({ heading, description, icon }: (typeof focus)[number]) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-8 shadow-[0_22px_80px_-70px_rgba(15,23,42,0.9)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--accent-rgb),0.16),transparent_55%)]" />
      <div className="relative z-10 flex flex-col gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(var(--accent-rgb),0.18)] bg-[color:var(--accent-soft)] text-[rgb(var(--accent-rgb))]">
          {icon}
        </span>
        <h3 className="text-lg font-semibold text-[color:var(--text)]">
          {heading}
        </h3>
        <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
          {description}
        </p>
      </div>
    </div>
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
    <span className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--chip-border)] bg-[color:var(--chip-bg)] text-[color:var(--text-muted)] transition-all hover:border-[rgba(var(--accent-rgb),0.35)] hover:text-[rgb(var(--accent-rgb))]">
      <Icon className="h-5 w-5" aria-hidden />
      <span className="sr-only">{label}</span>
    </span>
  );
}

export default function Page() {
  return (
    <section className="animate-entry flex flex-col gap-12">
      <header className="flex flex-col gap-6 text-balance">
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
          <span
            className={`text-5xl font-black leading-[1.05] text-[color:var(--text)] sm:text-6xl ${serif.className}`}>
            Hi! I am Tanav Poswal
          </span>
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[color:var(--text-muted)] sm:text-lg">
          Full-stack engineer and ML practitioner focused on crafting minimal,
          purposeful products. I combine modern web tooling with intelligent
          systems to move fast, design boldly, and deliver reliable, scalable
          outcomes.
        </p>

        <div className="flex flex-wrap gap-3">
          {featuredLinks.map((link) => (
            <QuickLink key={link.href} {...link} />
          ))}
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2" aria-label="Focus areas">
        {focus.map((item) => (
          <FocusCard key={item.heading} {...item} />
        ))}
      </section>

      <section>
        <GitHubCalendar username="thetanav" />
      </section>

      <section className="flex flex-col gap-6" aria-label="Stacks">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-[color:var(--text)]">
            Stacks that stay in rotation
          </h2>
          <p className="max-w-2xl text-sm text-[color:var(--text-muted)]">
            Since 2023, these tools have helped me ship products that balance
            experimentation with robustness.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {stacks.map(({ title, copy, tools }) => (
            <article
              key={title}
              className="flex flex-col gap-4 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[0_20px_80px_-70px_rgba(15,23,42,0.85)] backdrop-blur-xl">
              <header className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-[color:var(--text)]">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-[color:var(--text-muted)]">
                  {copy}
                </p>
              </header>
              <div className="flex flex-wrap gap-2.5">
                {tools.map((Icon, index) => (
                  <TechIcon
                    key={`${title}-${index}`}
                    icon={Icon}
                    label={Icon.name}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3 text-sm text-[color:var(--text-muted)]">
        <p>
          Currently collaborating with teams and founders to experiment,
          validate, and scale ideas in public. #Let’sBuildTogether
        </p>
        <div className="flex flex-wrap gap-4 text-[color:var(--text)]">
          <ExternalLink
            text="linkedin"
            href="https://linkedin.com/in/tanav-poswal"
          />
          <ExternalLink text="mail" href="mailto:tanavposwal939@gmail.com" />
          <ExternalLink text="github" href="https://github.com/thetanav" />
        </div>
      </section>
    </section>
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
