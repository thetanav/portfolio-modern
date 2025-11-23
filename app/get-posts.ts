import getPostMetadata from "../lib/posts";

export async function getPosts() {
  const posts = getPostMetadata("posts");
  return posts.map((post) => ({
    id: post.slug,
    title: post.title,
    date: post.date.toISOString(),
    viewsFormatted: "", // Placeholder, as views are not available
  }));
}
