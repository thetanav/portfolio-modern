import getPostMetadata from "lib/posts";
import { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import Link from "next/link";

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

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
      <header className="flex flex-col gap-4 text-balance">
        <h1 className="text-lg font-black leading-[1.05] text-[color:var(--text)] sm:text-4xl">
          Latest writing
        </h1>
        <p className="w-full text-base text-[color:var(--text-muted)] sm:text-md">
          Thoughts on technology, learning, and building.
        </p>
      </header>

      <div className="flex flex-col gap-3" aria-label="Recent posts">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[0_20px_80px_-70px_rgba(15,23,42,0.85)] hover:shadow-[0_28px_120px_-70pxrgba(93,106,255,0.35)] transition-all">
            <h3 className="text-lg font-semibold text-[color:var(--text)] group-hover:text-[rgb(var(--accent-rgb))]">
              {post.title}
            </h3>
            <p className="text-sm text-[color:var(--text-muted)]">
              {formatDate(post.date)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
