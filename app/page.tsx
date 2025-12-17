import { projects } from "../lib/projects";
import { oss } from "../lib/oss";
import getPostMetadata from "../lib/posts";
import Link from "next/link";
import RecentlyPlayed from "./components/recently-played";
import {
  ChevronRightIcon,
  GitPullRequestArrowIcon,
  MailIcon,
  FileTextIcon,
} from "lucide-react";
import GithubCalendarClient from "./components/github-calendar";
import Image from "next/image";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import {
  Bash,
  CPlusPlus,
  Go,
  Java,
  JavaScript,
  Python,
  TypeScript,
} from "developer-icons";
import ViewerNumber from "./components/viewer";

export default function Page() {
  const recentProjects = projects.slice(0, 3);
  const recentPosts = getPostMetadata("posts").slice(0, 3);

  return (
    <section className="flex flex-col divide-y divide-[var(--border)]">
      <section className="flex flex-col gap-6 pb-8 mb-8 px-6">
        <h1 className="text-3xl font-medium text-[var(--text-muted)]">
          Hi! I am <span className="text-[var(--text)]">Tanav</span>
        </h1>
        <div className="flex gap-6 items-center">
          <h3 className="text-md">Knows:</h3>
          <div className="flex gap-3 items-center">
            <TypeScript className="w-5 h-5" />
            <Go className="w-7 h-7" />
            <Python className="w-5 h-5" />
            <CPlusPlus className="w-5 h-5" />
            <Bash className="w-5 h-5" />
          </div>
        </div>
        <p className="text-[var(--text-muted)] leading-relaxed max-w-prose">
          Full-stack engineer and ML practitioner. I build minimal, purposeful
          software. Building intelligent systems and scalable web architecture.
          Ethusiast in Gen AI and Realtime.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-6 text-sm text-[var(--text)] items-center">
            <a
              href="https://x.com/tanavtwt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex gap-2 justify-center items-center">
              <TwitterLogoIcon />
              Twitter
            </a>
            <a
              href="https://github.com/thetanav"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex gap-2 justify-center items-center">
              <GitHubLogoIcon />
              Github
            </a>
            <a
              href="https://linkedin.com/in/tanav-poswal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex gap-2 justify-center items-center">
              <LinkedInLogoIcon />
              Linkedin
            </a>
            <a
              href="mailto:tanavposwal939@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex gap-2 justify-center items-center">
              <MailIcon className="w-4 h-4" />
              Mail
            </a>
            <a
              href="http://docs.google.com/document/d/1rOTy341rTIquz2SzYpTs7ouaR88VzCi886iT0IEGOKk/export?format=pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="w-fit flex gap-2 justify-center items-center">
              <FileTextIcon className="rotate-6 w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 pb-8 mb-8 px-6">
        <section className="flex flex-col gap-2">
          <RecentlyPlayed />
        </section>
        <GithubCalendarClient username="thetanav" blockSize={8} />
      </section>

      <section className="flex flex-col gap-8 pb-8 mb-8 px-6">
        <h2 className="text-lg font-medium text-[var(--text)]">
          Some of my Projects
        </h2>
        <div className="flex flex-col gap-6">
          {recentProjects.map((project) => (
            <div key={project.name} className="group flex items-center gap-4">
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                <Image
                  width={100}
                  height={100}
                  src={project.img}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[var(--text)] group-hover:opacity-70 transition-opacity capitalize">
                  {project.name}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  {project.brief}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/projects"
          className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
          View all projects →
        </Link>
      </section>

      <section className="flex flex-col gap-8 pb-8 mb-8 px-6">
        <h2 className="text-lg font-medium text-[var(--text)]">
          Some of my Opensource Work
        </h2>
        <div className="flex flex-col gap-6">
          {oss.map((contri) => (
            <a
              key={contri.name}
              href={contri.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 group-hover:opacity-70 transition-opacity">
              <GitPullRequestArrowIcon className="h-4 w-4" />
              <h3 className="font-medium text-[var(--text)] group-hover:opacity-70 transition-opacity">
                {contri.name}
              </h3>
              <ChevronRightIcon className="ml-auto h-4 w-4 text-[var(--text-muted)]" />
            </a>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8 pb-8 mb-8 px-6">
        <h2 className="text-lg font-medium text-[var(--text)]">
          Some of my Writings
        </h2>
        <div className="flex flex-col gap-6">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-[var(--text)] group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h3>
                <span className="text-xs text-[var(--text-muted)] tabular-nums">
                  {post.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
          Read more →
        </Link>
      </section>

      <section className="flex items-center justify-center">
        <ViewerNumber />
      </section>
    </section>
  );
}
