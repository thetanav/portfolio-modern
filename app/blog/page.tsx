import getPostMetadata from "lib/posts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs by Tanav Poswal",
};

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default async function Page() {
  const posts = await getPostMetadata("posts");

  return (
    <section className="animate-entry flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--text)] sm:text-4xl">
          Blog
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[color:var(--text-muted)] sm:text-lg">
          My thoughts on technology, learning, and building.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 transition-all hover:shadow-[0_12px_40px_-20px_rgba(93,106,255,0.15)]">
            <h2 className="text-lg font-semibold text-[color:var(--text)] group-hover:text-[rgb(var(--accent-rgb))]">
              {post.title}
            </h2>
            <p className="text-sm text-[color:var(--text-muted)]">
              {formatDate(post.date)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
