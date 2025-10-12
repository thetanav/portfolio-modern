import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { SiGithub } from "react-icons/si";

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

function ProjectCard({ img, link, name, brief }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group relative">
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <img
              alt={name}
              src={img}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-normal text-black group-hover:text-gray-600 transition-colors capitalize">
              {name}
            </p>
            <p className="text-sm text-gray-600">{brief}</p>
          </div>
        </div>
        <div className="flex items-center">
          <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
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
      <h1 className="sm:text-4xl text-3xl h-fit mb-4 tracking-tight flex gap-2 mt-5">
        <span className={`h-fit font-black text-black ${serif.className}`}>
          Projects
        </span>
      </h1>
      <p className="text-black mb-8">
        A showcase of my recent work and experiments.
      </p>
      <div className="flex flex-col gap-4">
        <ProjectCard
          img={"/images/tradex.png"}
          link={"https://trading-system-theta.vercel.app/"}
          name="trade exchange"
          brief="real-time trading app with live order book."
        />
        <ProjectCard
          img={"/images/chess-app.png"}
          link={"https://github.com/thetanav/chess"}
          name="multiplayer chess"
          brief="mulitplayer chess game with websockets."
        />
        <ProjectCard
          img={"/images/exp.png"}
          link={"https://linkmash.netlify.app/"}
          name="linkmash"
          brief="compare you linkedin profile with others."
        />
        <ProjectCard
          img={"/images/neura.png"}
          link={"https://flowcode-tnv.vercel.app/"}
          name="ai enabled Code editor ai"
          brief="a simple code editor on the web with ai."
        />
        <ProjectCard
          img={"/images/anime.png"}
          link={"https://animes-eta.vercel.app/"}
          name="anime vault"
          brief="anime netflix via open api. Next JS infinite scroll."
        />
        <ProjectCard
          img={"/images/x-clone.png"}
          link={"https://myspace-pi-six.vercel.app/"}
          name="X Clone"
          brief="Fullstack twitter clone in Prisma + NextJS + ShadCN."
        />
        <ProjectCard
          img={"/images/groove.png"}
          link={"https://groove-next.vercel.app/"}
          name="groove nest"
          brief="music social for colaborated music listening."
        />

        <div className="group flex w-full">
          <a
            href={"https://github.com/thetanav"}
            target="_blank"
            className="flex w-full items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group relative">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100 rounded-md flex items-center justify-center">
                <SiGithub className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-normal text-black group-hover:text-gray-600 transition-colors capitalize">
                  GitHub Profile
                </p>
                <p className="text-sm text-gray-600">
                  All my open source projects
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
