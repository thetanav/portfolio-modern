export const revalidate = 300;

import { ImageResponse } from "next/og";
import { getPosts } from "../get-posts";

export async function GET() {
  const posts = await getPosts();

  return new ImageResponse(
    (
      <div
        tw="flex p-10 h-full w-full bg-white flex-col"
        style={{ fontFamily: "Arial" }}
      >
        <header tw="flex text-[36px] w-full">
          <div style={{ fontFamily: "Arial", fontWeight: 500 }}>
            Tanav Poswal
          </div>
          <div tw="grow" />
          <div tw="text-[28px]">tanav.is-a.dev</div>
        </header>

        <main tw="flex mt-10 flex-col w-full">
          {posts.map((post, i) => {
            const year = getYear(post.date);
            const firstOfYear =
              !posts[i - 1] || getYear(posts[i - 1].date) !== year;

            return (
              <div key={post.id} tw="flex py-3 text-[28px] w-full items-center">
                <div tw="flex text-gray-500 w-24 text-[24px]">
                  {firstOfYear ? year : ""}
                </div>
                <div tw="flex grow">{post.title}</div>
                <div tw="flex text-gray-500 text-[24px]">
                  {post?.viewsFormatted}
                </div>
              </div>
            );
          })}
        </main>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

// lil helper to convert posts.json `date` to full year
function getYear(date: string) {
  return new Date(date).getFullYear();
}
