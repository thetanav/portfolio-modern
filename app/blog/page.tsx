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
      <h1
        className={"font-black text-4xl mb-5 mt-4 " + serif.className}
      >
        Blogs
      </h1>
      <div className="flex flex-col gap-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="text-black hover:text-400 transition-colors"
          >
            {post.title} - {post.date.toDateString().slice(4)}
          </Link>
        ))}
      </div>
    </section>
  );
}
