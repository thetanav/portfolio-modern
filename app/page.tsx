import { projects } from "../lib/projects";
import getPostMetadata from "../lib/posts";
import Link from "next/link";
import NowPlaying from "./components/now-playing";

export default function Page() {
  const recentProjects = projects.slice(0, 3);
  const recentPosts = getPostMetadata("posts").slice(0, 3);

  return (
    <section className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <h1 className="text-3xl font-medium tracking-tight text-[var(--text)]">
          Hi! I am <span className="font-semibold">Tanav</span>
        </h1>
        <p className="text-[var(--text-muted)] leading-relaxed max-w-prose">
          Full-stack engineer and ML practitioner. I build minimal, purposeful
          software. Currently focused on intelligent systems and scalable web
          architecture.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 text-sm text-[var(--text-muted)]">
            <a
              href="https://x.com/tanavtwt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text)] transition-colors">
              X (Twitter)
            </a>
            <a
              href="https://github.com/thetanav"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text)] transition-colors">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tanav-poswal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text)] transition-colors">
              LinkedIn
            </a>
            <a
              href="mailto:hello@tanav.is-a.dev"
              className="hover:text-[var(--text)] transition-colors">
              Email
            </a>
          </div>
          <NowPlaying />
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="text-lg font-medium text-[var(--text)]">Projects</h2>
        <div className="flex flex-col gap-6">
          {recentProjects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4">
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                <img
                  src={project.img}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-[var(--text)] group-hover:opacity-70 transition-opacity">
                  {project.name}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  {project.brief}
                </p>
              </div>
            </a>
          ))}
        </div>
        <Link
          href="/projects"
          className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
          View all projects →
        </Link>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="text-lg font-medium text-[var(--text)]">Writing</h2>
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
    </section>
  );
}
