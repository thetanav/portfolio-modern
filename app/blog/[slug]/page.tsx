import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "lib/posts";
import CodeBlock from "app/components/codeblock";
import { Instrument_Serif, Inter } from "next/font/google";
import ImgBlock from "app/components/imgblock";
import { Share } from "app/components/share";
import { HiOutlineSparkles } from "react-icons/hi";

function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const bodySerif = Inter({ weight: "400", subsets: ["latin"] });

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

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
    <section className="animate-entry flex flex-col gap-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-3 text-balance">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
              <HiOutlineSparkles className="h-4 w-4" />
              field notes
            </span>
            <h1
              className={`text-4xl font-bold leading-[1.1] text-[color:var(--text)] sm:text-5xl ${serif.className}`}>
              {post.data.title}
            </h1>
          </div>
          <Share />
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
          published {formatDate(post.data.date)} • {readingTime}
        </p>
      </header>

      <article
        className={`prose prose-lg prose-headings:font-semibold prose-headings:text-[color:var(--text)] prose-p:leading-relaxed prose-p:text-[color:var(--text-muted)] prose-blockquote:border-l-4 prose-blockquote:border-[rgba(var(--accent-rgb),0.35)] prose-blockquote:text-[color:var(--text)] prose-strong:text-[color:var(--text)] prose-code:text-[rgb(var(--accent-rgb))] prose-a:text-[rgb(var(--accent-rgb))] prose-ol:text-[color:var(--text-muted)] prose-ul:text-[color:var(--text-muted)] ${bodySerif.className}`}>
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
          }}>
          {post.content}
        </Markdown>
      </article>
    </section>
  );
}
