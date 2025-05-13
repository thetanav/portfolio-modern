import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "lib/posts";
import CodeBlock from "app/components/codeblock";
import { Instrument_Serif } from "next/font/google";

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

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

  return (
    <section className="animate-entry">
      <header className="mb-6 py-6 border-b border-black/20">
        <h1
          className={
            "text-4xl sm:text-5xl font-bold text-dark my-1 capitalize " +
            serif.className
          }>
          {post.data.title}
        </h1>
        <p className="text-sm text-black/60 my-1">on {post.data.date}</p>
      </header>
      <main>
        <article className="prose text-sm text-black/60 prose-headings:text-black lg:prose-lg mx-auto text-text">
          <Markdown
            options={{
              overrides: {
                code: {
                  component: CodeBlock,
                },
              },
            }}>
            {post.content}
          </Markdown>
        </article>
      </main>
    </section>
  );
}
