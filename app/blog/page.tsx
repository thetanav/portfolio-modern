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
        className={"font-black text-500 text-4xl mb-5 mt-4 " + serif.className}>
        Blogs 💬
      </h1>
      <div className="w-full h-full select-none flex flex-col gap-2">
        {posts.map((post) => (
          <Link
            className="text-black/60 w-full h-full flex flex-col p-2 hover:bg-200/60 hover:scale-105 transition-all rounded-xl group"
            href={`/blog/${post.slug}`}
            key={post.slug}>
            <h3 className="text-lg -mt-1 font-semibold capitalize group-hover:text-500 transition-colors">
              {post.title}
            </h3>
            <p className="text-xs">{post.date.toDateString().slice(4)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
