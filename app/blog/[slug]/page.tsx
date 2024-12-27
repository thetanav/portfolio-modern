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

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? ' ⋅ ' + params?.slug : '';
  return {
    title: id.replaceAll('_', ' '),
  };
}

export default function Page(props) {
  const slug = props.params.slug;
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
    <div className="p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white">My Markdown Blog</h1>
        <p className="text-neutral-400 mt-2">{post.data.date}</p>
      </header>
      <main>
        <article className="prose lg:prose-xl mx-auto">
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
