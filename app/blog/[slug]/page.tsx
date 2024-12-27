import Markdown from 'markdown-to-jsx';
import fs from 'fs';
import matter from 'gray-matter';
import getPostMetadata from 'lib/posts';
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";

function getPostContent(slug) {
  const folder = 'posts/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata('posts');
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata(props) {
  const params = await props.params;
  const id = params?.slug ? params?.slug : '';
  return {
    title: id.replaceAll('_', ' '),
  };
}

export default async function Page(props) {
  const slug = (await props.params).slug;
  const post = getPostContent(slug);

  const CodeBlock = ({ children, className }) => {
    const language = className?.replace('lang-', '');
    const html = Prism.highlight(children, Prism.languages[language], language);

    return (
      <pre className={`language-${language}`}>
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    );
  };

  return (
    <div className="">
      <header className="mb-8 py-8 border-b border-neutral-600">
        <h1 className="text-3xl sm:text-5xl font-bold text-white my-2">{post.data.title}</h1>
        <p className="text-xl text-neutral-400 font-semibold">{post.data.discription}</p>
        <p className="text-xs text-neutral-400 my-2">~ tanav @ {post.data.date}</p>
      </header>
      <main>
        <article className="prose prose-headings:text-white lg:prose-xl mx-auto text-white">
          <Markdown
            options={{
              overrides: {
                code: {
                  component: CodeBlock,
                },
              },
            }}
          >
            {post.content}
          </Markdown>
        </article>
      </main>
    </div>
  );
}
