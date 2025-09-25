import { ArrowRightIcon } from "@radix-ui/react-icons";
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
        className={"font-black text-100 text-4xl mb-5 mt-4 " + serif.className}
      >
        Blogs
      </h1>
      <div className="w-full select-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            className="text-black/60 flex flex-col p-4 hover:bg-400/40 transition-all rounded-xl group relative border border-white/10 hover:border-400/50 min-h-32"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <h3 className="text-lg font-semibold -mt-1 capitalize group-hover:text-white transition-colors mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-text mb-4">
              {post.date.toDateString().slice(4)}
            </p>
            <div className="mt-auto">
              <span className="text-xs text-200/60 group-hover:text-white transition-colors">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
