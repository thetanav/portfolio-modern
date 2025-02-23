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
      <h1 className="font-bold text-2xl mb-5 mt-4 tracking-tighter">
        Blogs 💬
      </h1>
      <ol className="w-full h-full">
        {posts.map((post) => (
          <li className="list-decimal ml-3 pl-1 text-text text-sm w-full">
            <Link
              className="group flex gap-2 items-center justify-start"
              href={`/blog/${post.slug}`}
              key={post.slug}>
              <h3 className="text-lg font-bold capitalize text-text group-hover:text-dark transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-text group-hover:text-dark transition-colors">
                {post.date.toDateString().slice(4)}
              </p>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
