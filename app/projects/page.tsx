import type { Metadata } from "next";
import { SiGithub } from "react-icons/si";

function ProjectCard({ img, link, name, brief }) {
  return (
    <div className="group flex w-full text-black/60">
      <a
        href={link}
        target="_blank"
        className="text-black/60 w-full h-full flex p-2 hover:bg-200/60 hover:scale-105 transition-all rounded-xl group">
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
      <h1 className="font-bold text-2xl mb-5 mt-4 tracking-tighter text-500">
        Web Projects 🚀🚀
      </h1>
      <div className="flex flex-col gap-3 mb-4">
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
      </div>
    </section>
  );
}
