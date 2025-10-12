import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "lib/posts";
import CodeBlock from "app/components/codeblock";
import { Instrument_Serif, Inter } from "next/font/google";
import ImgBlock from "app/components/imgblock";
import { Share1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Share } from "app/components/share";

function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const bodySerif = Inter({ weight: "400", subsets: ["latin"] });

function getPostContent(slug) {
  const folder = "posts/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata(props) {
  const params = await props.params;
  const id = params?.slug ? params?.slug : "";
  return {
    title: id.replaceAll("_", " "),
  };
}

export default async function Page(props) {
  const slug = (await props.params).slug;
  const post = getPostContent(slug);
  const readingTime = getReadingTime(post.content);

  return (
    <section className="animate-entry w-full">
      <header className="mb-3 py-6 justify-between items-center flex">
        <div>
          <h1 className={"text-4xl text-black my-1 " + serif.className}>
            {post.data.title}
          </h1>
          <p className="text-sm text-gray-600 my-1">
            on {post.data.date} • {readingTime}
          </p>
        </div>
        <div>
          <Share />
        </div>
      </header>
      <article
        className={
          "min-w-full prose prose-headings:text-text prose-headings:font-normal prose-p:text-xl prose-p:leading-relaxed prose-a:text-text prose-a:underline prose-blockquote:text-text prose-blockquote:border-l-4 prose-blockquote:border-400 prose-blockquote:pl-4 prose-blockquote:italic prose-li:text-xl text-text " +
          bodySerif.className
        }
      >
        <Markdown
          options={{
            overrides: {
              code: {
                component: CodeBlock,
              },
              img: {
                component: ImgBlock,
              },
            },
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </section>
  );
}
