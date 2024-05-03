
function ProjectCard({ img, link, name, brief }) {
    return (
      <div className="group flex w-full">
        <a
          href={link}
          target="_blank"
          className="flex w-fit items-center justify-between rounded border border-neutral-200 px-3 py-4 dark:border-neutral-700 hover:border-neutral-500 hover:ring-4 ring-white/15 transition"
        >
          <div className="flex flex-col gap-3">
              <img
                alt={name}
                src={img}
                className="h-48 w-fit rounded-md"/>
            <div className="flex flex-col ml-2">
              <p className="font-bold text-neutral-900 dark:text-neutral-100">
                {name}
              </p>
                <p>{brief}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
export default function Page() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">Projects 🚀🚀</h1>
            <div className="grid grid-cols-2 grid-rows-auto gap-2">
                <ProjectCard img={'/images/mpeg3.png'} link={'https://mpeg3.vercel.app'} name="mpeg3" brief="A spotify clone with supabase." />
                <ProjectCard img={'/images/notrz.png'} link={'https://notrz.vercel.app'} name="notrz" brief="Todo list app." />
                <ProjectCard img={'/images/twiclone.png'} link={'https://github.com/tanavposwal/twiclone-api'} name="twiclone" brief="Fullstack twitter clone in MERN stack + NextJS." />
                <ProjectCard img={'/images/myspace.png'} link={'https://github.com/tanavposwal/my-next-space'} name="myspace" brief="Myspace clone with NextJS + Prisma." />
                <ProjectCard img={'/images/chat.png'} link={'https://github.com/tanavposwal/react-ws-chat'} name="react-chat" brief="Chat app with ReactJs + WebSockets." />
                <ProjectCard img={'/images/twiclone.png'} link={'https://github.com/tanavposwal/expenses-tracker'} name="xpenze" brief="Fullstack expense tracker app with MERN stack." />
            </div>
        </section>
    )
}