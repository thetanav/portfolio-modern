import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { SiGithub } from "react-icons/si";

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

function ProjectCard({ img, link, name, brief }) {
  return (
    <div className="group flex w-full text-black/60">
      <a
        href={link}
        target="_blank"
        className="text-black/60 w-full h-full flex p-2 hover:bg-400/20 hover:scale-105 transition-all rounded-xl group relative">
        <img
          alt={name}
          src={img}
          className="w-16 h-auto aspect-video rounded-xl transition-transform object-cover border group-hover:border-500"
        />
        <div className="flex flex-col m-2 ml-3">
          <p className="text-md -mt-1 capitalize group-hover:text-500 transition-colors">
            {name}
          </p>
          <p className="md:text-md text-xs text-text">{brief}</p>
        </div>
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-16">
          <ArrowRightIcon className="w-5 h-5 group-hover:text-black -translate-x-2 group-hover:translate-x-0 transition-transform delay-100" />
        </div>
      </a>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Web Projects",
  description: "My top projects",
};

export default function Page() {
  return (
    <section className="animate-entry">
      <h1
        className={"font-black text-4xl mb-5 mt-4 text-500 " + serif.className}>
        Projects 🚀
      </h1>
      <div className="flex flex-col gap-3 mb-4">
        <ProjectCard
          img={"/images/chess-app.png"}
          link={"https://github.com/tanavposwal/chess"}
          name="multiplayer chess"
          brief="mulitplayer chess game with websockets."
        />
        <ProjectCard
          img={"/images/exp.png"}
          link={"https://exp-zeta.vercel.app/"}
          name="expenses tracker"
          brief="cleanest expense tracker."
        />
        <ProjectCard
          img={"/images/neura.png"}
          link={"https://neura-chat.vercel.app/"}
          name="neura ai chat"
          brief="fastest ai chat app with gemini-2-flash."
        />
        <ProjectCard
          img={"/images/anime.png"}
          link={"https://animes-eta.vercel.app/"}
          name="anime vault"
          brief="anime netflix via open api. Next JS infinite scroll"
        />
        <ProjectCard
          img={"/images/x-clone.png"}
          link={"https://myspace-pi-six.vercel.app/"}
          name="X Clone"
          brief="Fullstack twitter clone in Prisma + NextJS + ShadCN."
        />
        <ProjectCard
          img={"/images/promptopia.png"}
          link={"https://promptopia-snowy.vercel.app/"}
          name="Promptopia"
          brief="Open source community for prompt sharing"
        />
        <ProjectCard
          img={"/images/groove.png"}
          link={"https://groove-next.vercel.app/"}
          name="groove nest"
          brief="music social for colaborated music listening"
        />

        <div className="group flex w-full text-black/60">
          <a
            href={"https://github.com/tanavposwal/repositories"}
            target="_blank"
            className="text-black/60 w-full h-full flex p-2 hover:bg-400/20 hover:scale-105 transition-all rounded-xl group relative">
            <div className="w-16 h-auto aspect-video rounded-xl transition-transform object-cover border group-hover:border-500 flex items-center justify-center">
              <SiGithub className="w-5 h-5" />
            </div>
            <div className="flex flex-col m-2 ml-3">
              <p className="text-md -mt-1 capitalize group-hover:text-500 transition-colors">
                My github repositories
              </p>
              <p className="md:text-md text-xs text-text">
                all the projects i've done
              </p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-16">
              <ArrowRightIcon className="w-5 h-5 group-hover:text-black -translate-x-2 group-hover:translate-x-0 transition-transform delay-100" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
