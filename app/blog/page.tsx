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
        className={"font-black text-500 text-4xl mb-5 mt-4 " + serif.className}>
        Blogs 💬
      </h1>
      <div className="w-full h-full select-none flex flex-col gap-2">
        {posts.reverse().map((post) => (
          <Link
            className="text-black/60 w-full h-full flex flex-col p-4 hover:bg-400/20 hover:scale-105 transition-all rounded-xl group relative"
            href={`/blog/${post.slug}`}
            key={post.slug}>
            <h3 className="text-md -mt-1 capitalize group-hover:text-500 transition-colors">
              {post.title}
            </h3>
            <p className="md:text-md text-xs text-text">
              {post.date.toDateString().slice(4)}
            </p>
            <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-16">
              <ArrowRightIcon className="w-5 h-5 group-hover:text-black -translate-x-2 group-hover:translate-x-0 transition-transform delay-100" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
