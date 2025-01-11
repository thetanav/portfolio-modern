import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "lib/posts";
import CodeBlock from "app/components/codeblock";

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
      <header className="mb-8 py-8 border-b border-neutral-600">
        <h1 className="text-2xl sm:text-3xl font-bold text-white my-1 capitalize">
          {post.data.title}
        </h1>
        <p className="text-sm text-neutral-400 my-1">
          ~ tanav @ {post.data.date}
        </p>
      </header>
      <main>
        <article className="prose text-sm prose-headings:text-white lg:prose-lg mx-auto text-white">
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
