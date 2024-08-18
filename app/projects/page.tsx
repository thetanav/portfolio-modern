import type { Metadata } from 'next';
import { SiGithub } from 'react-icons/si';

function ProjectCard({ img, link, name, brief }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full border p-3 border-neutral-700 hover:border-white hover:ring-4 ring-white/15 transition"
      >
        <div className="flex flex-col gap-3">
          <img alt={name} src={img} className=" w-full rounded-xl border border-neutral-800" />
          <div className="flex flex-col ml-2">
            <p className="font-semibold text-neutral-100">
              {name}
            </p>
            <p className="md:text-md text-sm text-neutral-400">{brief}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "My top projects",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Projects 🚀🚀
      </h1>
      <div className="grid grid-cols-1 grid-rows-auto sm:grid-cols-2 gap-4 mb-4">
        <ProjectCard
          img={'/images/mpeg3.png'}
          link={'https://mpeg3.vercel.app'}
          name="mpeg3"
          brief="A spotify clone with supabase."
        />
        <ProjectCard
          img={'/images/notrz.png'}
          link={'https://notrz.vercel.app'}
          name="notrz"
          brief="Todo list app."
        />
        <ProjectCard
          img={'/images/twiclone.png'}
          link={'https://github.com/tanavposwal/twiclone-api'}
          name="twiclone"
          brief="Fullstack twitter clone in MERN stack + NextJS."
        />
        <ProjectCard
          img={'/images/myspace.png'}
          link={'https://github.com/tanavposwal/my-next-space'}
          name="myspace"
          brief="Myspace clone with NextJS + Prisma."
        />
        <ProjectCard
          img={'/images/chat.png'}
          link={'https://github.com/tanavposwal/react-ws-chat'}
          name="react-chat"
          brief="Chat app with ReactJs + WebSockets."
        />
        <ProjectCard
          img={'/images/twiclone.png'}
          link={'https://github.com/tanavposwal/expenses-tracker'}
          name="xpenze"
          brief="Fullstack expense tracker app with MERN stack."
        />
      </div>
      <div className="mb-8">
      <a
        href="https://github.com/tanavposwal"
        target="_blank"
        className="flex w-full border p-3 border-neutral-700 hover:border-neutral-500 hover:ring-4 ring-white/15 transition items-center justify-center gap-3"
      >
        <SiGithub/> more on github
      </a>
      </div>
    </section>
  );
}
