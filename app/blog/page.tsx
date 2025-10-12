import getPostMetadata from "lib/posts";
import { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import Link from "next/link";

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs by Tanav Poswal",
};

export default async function Page() {
  const posts = await getPostMetadata("posts");

  return (
    <section className="animate-entry">
      <h1 className="sm:text-4xl text-3xl h-fit mb-4 tracking-tight flex gap-2 mt-5">
        <span className={`h-fit font-black text-black ${serif.className}`}>
          Blogs
        </span>
      </h1>
      <p className="text-black mb-8">
        Thoughts on development, design, and everything in between.
      </p>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="text-black hover:text-gray-600 transition-colors"
          >
            <div className="flex flex-col">
              <h2 className="text-xl font-normal mb-1">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.date.toDateString().slice(4)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
