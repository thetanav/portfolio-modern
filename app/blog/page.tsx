import getPostMetadata from 'lib/posts';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Blogs by Tanav Poswal',
};

export default async function Page() {
  const posts = await getPostMetadata('posts');

  return (
    <main>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">Blogs 💬</h1>
      <div className="w-full h-full flex flex-col">
        {posts.map((post) => (
          <Link
            className="group w-full py-6 border-b border-neutral-600 last:border-0"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <h3 className="text-3xl font-bold capitalize text-neutral-300 hover:text-white transition-colors">
              {post.title}
            </h3>
            <p className="text-md text-neutral-400 my-2 font-semibold">{post.discription}</p>
            <p className="text-xs text-neutral-400">{post.date}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
