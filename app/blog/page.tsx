import getPostMetadata from "lib/posts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs by Tanav Poswal",
};

export default async function Page() {
  const posts = await getPostMetadata("posts");

  return (
    <section className="animate-entry">
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">Blogs 💬</h1>
      <ol className="w-full h-full">
        {posts.map((post) => (
          <li className="list-decimal ml-3 pl-1 text-neutral-400 text-sm w-full">
            <Link
              className="group flex gap-2 items-center justify-start"
              href={`/blog/${post.slug}`}
              key={post.slug}>
              <p className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">
                {post.date.toDateString().slice(4)}
              </p>
              <h3 className="text-lg font-bold capitalize text-neutral-400 group-hover:text-white transition-colors">
                {post.title}
              </h3>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
