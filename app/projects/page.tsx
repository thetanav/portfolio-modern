import type { Metadata } from "next";
import { SiGithub } from "react-icons/si";

function ProjectCard({ img, link, name, brief }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded-lg border-2 border-text hover:border-dark hover:scale-105 hover:shadow-xl hover:shadow-primary transition overflow-hidden bg-background">
        <div className="flex flex-col gap-3">
          <div className="w-full h-52 flex items-center justify-center overflow-hidden">
            <img
              alt={name}
              src={img}
              className="group-hover:scale-110 transition-transform object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col m-2 ml-3">
            <p className="font-semibold text-dark">{name}</p>
            <p className="md:text-md text-sm text-text">{brief}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description: "My top projects",
};

export default function Page() {
  return (
    <section className="animate-entry">
      <h1 className="font-bold text-2xl mb-5 mt-4 tracking-tighter text-dark">
        Projects 🚀🚀
      </h1>
      <div className="grid grid-cols-1 grid-rows-auto sm:grid-cols-2 gap-4 mb-4">
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
          img={"/images/ecommerce.png"}
          link={"https://github.com/tanavposwal/ecommerce-store"}
          name="ecommerce store"
          brief="ecommerce store w/ NextJS + Prisma + Google Auth + stripe payment wall."
        />
        <ProjectCard
          img={"/images/x-clone.png"}
          link={"https://myspace-pi-six.vercel.app/"}
          name="X Clone"
          brief="Fullstack twitter clone in Prisma + NextJS + ShadCN."
        />
        <ProjectCard
          img={"/images/chess-app.png"}
          link={"https://github.com/tanavposwal/chess"}
          name="Multiplayer Chess"
          brief="Chess game with WS and google auth, game saving"
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
      <div className="mb-8">
        <a
          href="https://github.com/tanavposwal"
          target="_blank"
          className="flex w-full p-3 text-text hover:border-dark transition items-center justify-center gap-3 rounded-lg">
          <SiGithub /> more on github
        </a>
      </div>
    </section>
  );
}
