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
  const post = getPostContent(id);
  const title = post.data.title || id.replaceAll("_", " ");
  const description =
    post.data.description ||
    post.content.slice(0, 160).replace(/[#*`]/g, "") + "...";

  return {
    title: `${title} • Tanav Poswal`,
    description,
    openGraph: {
      title: `${title} • Tanav Poswal`,
      description,
      url: `https://tanav.is-a.dev/blog/${id}`,
      siteName: "Tanav Poswal",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.data.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} • Tanav Poswal`,
      description,
      images: "/opengraph-image.png",
      creator: "@tanavtwt",
    },
  };
}

export default async function Page(props) {
  const slug = (await props.params).slug;
  const post = getPostContent(slug);
  const readingTime = getReadingTime(post.content);

  return (
    <section className="animate-entry flex flex-col gap-10">
      <header className="relative flex flex-col gap-8 rounded-3xl border-2 border-[color:var(--border)] bg-gradient-to-br from-[color:var(--surface)] to-[color:var(--surface-soft)] p-8 shadow-[0_20px_80px_-50px_rgba(var(--accent-rgb),0.4)] backdrop-blur-xl sm:p-10 lg:p-12">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[rgba(var(--accent-rgb),0.05)] via-transparent to-[rgba(244,114,182,0.05)] opacity-60" />

        <div className="relative z-10 flex flex-wrap items-start justify-between gap-6">
          <div className="flex flex-col gap-4 text-balance">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[rgba(var(--accent-rgb),0.3)] bg-gradient-to-r from-[color:var(--accent-soft)] to-transparent px-5 py-2.5 text-xs font-bold uppercase tracking-[0.35em] text-[rgb(var(--accent-rgb))] shadow-lg">
              <HiOutlineSparkles className="h-4 w-4 animate-pulse" />
              field notes
            </span>
            <h1
              className={`blog-title text-5xl font-black leading-[1.05] text-[color:var(--text)] sm:text-6xl lg:text-7xl ${serif.className}`}>
              {post.data.title}
            </h1>
          </div>
          <Share />
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.5)] to-transparent" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
            published {formatDate(post.data.date)} • {readingTime}
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-[rgba(var(--accent-rgb),0.5)] to-transparent" />
        </div>
      </header>

      <article
        className={`prose prose-xl max-w-none 
          prose-headings:scroll-mt-24 prose-headings:font-extrabold prose-headings:tracking-tight 
          prose-h1:mb-8 prose-h1:mt-16 prose-h1:text-5xl prose-h1:bg-gradient-to-r prose-h1:from-[color:var(--text)] prose-h1:to-[rgb(var(--accent-rgb))] prose-h1:bg-clip-text prose-h1:text-transparent
          prose-h2:relative prose-h2:mb-8 prose-h2:mt-16 prose-h2:text-4xl prose-h2:text-[color:var(--text)] prose-h2:before:absolute prose-h2:before:-left-4 prose-h2:before:top-0 prose-h2:before:h-full prose-h2:before:w-1.5 prose-h2:before:rounded-full prose-h2:before:bg-gradient-to-b prose-h2:before:from-[rgb(var(--accent-rgb))] prose-h2:before:to-transparent prose-h2:before:content-['']
          prose-h3:mb-6 prose-h3:mt-12 prose-h3:text-3xl prose-h3:text-[color:var(--text)]
          prose-h4:mb-4 prose-h4:mt-8 prose-h4:text-2xl prose-h4:text-[color:var(--text)]
          prose-p:mb-8 prose-p:text-xl prose-p:leading-[1.85] prose-p:text-[color:var(--text-muted)]
          prose-blockquote:my-10 prose-blockquote:rounded-2xl prose-blockquote:border-l-[6px] prose-blockquote:border-[rgba(var(--accent-rgb),0.6)] prose-blockquote:bg-gradient-to-r prose-blockquote:from-[color:var(--accent-soft)] prose-blockquote:to-transparent prose-blockquote:py-6 prose-blockquote:pl-8 prose-blockquote:pr-6 prose-blockquote:text-xl prose-blockquote:font-medium prose-blockquote:italic prose-blockquote:text-[color:var(--text)] prose-blockquote:shadow-lg
          prose-strong:font-bold prose-strong:text-[color:var(--text)]
          prose-em:text-[color:var(--text)]
          prose-code:rounded-lg prose-code:bg-[color:var(--accent-soft)] prose-code:px-2.5 prose-code:py-1.5 prose-code:text-base prose-code:font-semibold prose-code:text-[rgb(var(--accent-rgb))] prose-code:shadow-sm prose-code:before:content-[''] prose-code:after:content-['']
          prose-pre:my-10 prose-pre:overflow-x-auto prose-pre:rounded-2xl prose-pre:border-2 prose-pre:border-[color:var(--border)] prose-pre:bg-[#282c34] prose-pre:p-0 prose-pre:shadow-2xl
          prose-a:font-bold prose-a:text-[rgb(var(--accent-rgb))] prose-a:underline prose-a:decoration-[rgba(var(--accent-rgb),0.4)] prose-a:decoration-2 prose-a:underline-offset-4 prose-a:transition-all hover:prose-a:decoration-[rgb(var(--accent-rgb))] hover:prose-a:decoration-4
          prose-ol:my-8 prose-ol:text-lg prose-ol:text-[color:var(--text-muted)]
          prose-ul:my-8 prose-ul:text-lg prose-ul:text-[color:var(--text-muted)]
          prose-li:my-3 prose-li:pl-2 marker:prose-li:text-[rgb(var(--accent-rgb))] marker:prose-li:font-bold
          prose-hr:my-12 prose-hr:border-t-2 prose-hr:border-[color:var(--border)]
          prose-img:my-10 prose-img:rounded-3xl prose-img:shadow-2xl prose-img:ring-2 prose-img:ring-[color:var(--border)]
          ${bodySerif.className}`}>
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
