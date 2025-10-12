import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { SiGithub } from "react-icons/si";
import { projects } from "../../lib/projects";

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

function ProjectCard({ img, link, name, brief }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group relative">
        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12 flex-shrink-0">
            <img
              alt={name}
              src={img}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-base font-normal text-black group-hover:text-gray-600 transition-colors capitalize">
              {name}
            </p>
            <p className="text-xs text-gray-600">{brief}</p>
          </div>
        </div>
        <div className="flex items-center">
          <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
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
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            link={project.link}
            name={project.name}
            brief={project.brief}
          />
        ))}

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
