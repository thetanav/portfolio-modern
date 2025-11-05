import getPostMetadata from "lib/posts";
import { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import Link from "next/link";
import { HiOutlineSparkles } from "react-icons/hi";

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
    <section className="animate-entry flex flex-col gap-10">
      <header className="flex flex-col gap-5 text-balance">
        <span className="inline-flex w-fit items-center gap-2 self-start rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
          <HiOutlineSparkles className="h-4 w-4" />
          build in public
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
          <span
            className={`text-5xl font-black leading-[1.05] text-[color:var(--text)] sm:text-6xl ${serif.className}`}>
            Latest writing
          </span>
        </h1>
      </header>

      <div className="flex flex-col gap-3" aria-label="Recent posts">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative flex flex-col gap-6 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-5 text-[color:var(--text)] shadow-[0_18px_70px_-60px_rgba(15,23,42,0.85)] hover:shadow-[0_28px_120px_-70px_rgba(93,106,255,0.35)]">
            <h2
              className={`text-3xl font-semibold text-[color:var(--text)] sm:text-4xl font-serif ${serif.className}`}>
              {post.title}
            </h2>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.25em] text-[color:var(--text-muted)]">
              <span>{formatDate(post.date)}</span>
              <span>read journal</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
