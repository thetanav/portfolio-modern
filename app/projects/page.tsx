import type { Metadata } from 'next';
import { SiGithub } from 'react-icons/si';

function ProjectCard({ img, link, name, brief }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full border p-3 border-neutral-700 hover:ring-4 hover:bg-white/10 ring-white/15 transition"
      >
        <div className="flex flex-col gap-3">
          <div className="w-full h-52 flex items-center border border-neutral-800 justify-center rounded-xl overflow-hidden bg-black">
            <img alt={name} src={img} className="w-full group-hover:scale-110 transition-transform" />
          </div>
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
        Projects 🚀🚀 (not updated go on github) 
      </h1>
      <div className="grid grid-cols-1 grid-rows-auto sm:grid-cols-2 gap-4 mb-4">
        <ProjectCard
          img={'/images/ecommerce.png'}
          link={'https://github.com/tanavposwal/ecommerce-store'}
          name="ecommerce store"
          brief="ecommerce store w/ NextJS + Prisma + Google Auth + stripe payment wall."
        />
        <ProjectCard
          img={'/images/anime.png'}
          link={'https://animes-eta.vercel.app/'}
          name="anime vault"
          brief="anime netflix via open api. Next JS infinite scroll"
        />
        <ProjectCard
          img={'/images/x-clone.png'}
          link={'https://myspace-pi-six.vercel.app/'}
          name="X Clone"
          brief="Fullstack twitter clone in Prisma + NextJS + ShadCN."
        />
        <ProjectCard
          img={'/images/chess-app.png'}
          link={'https://github.com/tanavposwal/chess'}
          name="Multiplayer Chess"
          brief="Chess game with WS and google auth, game saving"
        />
        <ProjectCard
          img={'/images/promptopia.png'}
          link={'https://promptopia-snowy.vercel.app/'}
          name="Promptopia"
          brief="Open source community for prompt sharing"
        />
        <ProjectCard
          img={'/images/groove.png'}
          link={'https://groove-next.vercel.app/'}
          name="groove nest"
          brief="music social for colaborated music listening"
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
