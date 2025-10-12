import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import { FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTurborepo,
  SiPostman,
  SiFlask,
  SiPython,
  SiRust,
  SiTypescript,
  SiShadcnui,
  SiFramer,
  SiDocker,
  SiTensorflow,
  SiNvidia,
  SiScikitlearn,
  SiPandas,
  SiPlotly,
  SiPytorch,
  SiKubernetes,
  SiAwslambda,
  SiApachekafka,
  SiRedis,
} from "react-icons/si";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

function ChannelLink({ img, link, name, count }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between">
        <div className="flex items-center space-x-5">
          <div className="relative h-16">
            <div className="w-16 h-16 relative">
              <Image
                alt={name}
                src={img}
                width={100}
                height={100}
                className="w-full h-full  z-50 group-hover:-rotate-6 contrast-125 transition-transform shadow-xl"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="group-hover:text-black transition-all">{name}</p>
            <p className="text-sm font-normal text-gray-600">{count}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

function LangCard({ comp }) {
  return (
    <div className="flex items-center justify-center rounded-lg w-10 h-10 group bg-transparent text-black">
      <span className="text-xl opacity-70 transition-opacity group-hover:opacity-100">{comp}</span>
    </div>
  );
}

export default function Page() {
  return (
    <section className="animate-entry">
      <h1 className="sm:text-4xl text-3xl h-fit mb-4 tracking-tight flex gap-2 mt-5">
        <span className={`h-fit font-black text-black ${serif.className}`}>
          Tanav Poswal
        </span>
      </h1>
      <p className="text-black">
        I'm a full-stack developer and ML enthusiast passionate about building
        scalable web apps and solving real-world problems with AI. I love
        pushing technical boundaries and collaborating on meaningful projects.
      </p>

      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={"/images/linkedin.jpg"}
          name="Get In Touch"
          link="https://cal.com/tanavposwal"
          count={"schedule a call"}
        />
        <ChannelLink
          img={"/images/x.jpg"}
          name="Twitter"
          link="https://x.com/tanavtwt"
          count={"150+"}
        />
      </div>

      <div className="text-black">
        <p>technologies I have been using since 2023,</p>
      </div>

      <div className="w-full gap-2 my-5">
        <h2>Web Development</h2>
        <div className="flex flex-wrap mt-3 mb-5">
          <LangCard comp={<FaReact />} />
          <LangCard comp={<GrGraphQl />} />
          <LangCard comp={<SiNextdotjs />} />
          <LangCard comp={<SiTailwindcss />} />
          <LangCard comp={<SiTurborepo />} />
          <LangCard comp={<SiPostman />} />
          <LangCard comp={<SiTypescript />} />
          <LangCard comp={<SiShadcnui />} />
          <LangCard comp={<SiFramer />} />
        </div>
        <h2>Machine Learning</h2>
        <div className="flex flex-wrap mt-3 mb-5">
          <LangCard comp={<SiFlask />} />
          <LangCard comp={<SiPython />} />
          <LangCard comp={<SiTensorflow />} />
          <LangCard comp={<SiNvidia />} />
          <LangCard comp={<SiScikitlearn />} />
          <LangCard comp={<SiPandas />} />
          <LangCard comp={<SiPlotly />} />
          <LangCard comp={<SiPytorch />} />
        </div>
        <h2>Cloud</h2>
        <div className="flex flex-wrap mt-2 mb-5">
          <LangCard comp={<SiRust />} />
          <LangCard comp={<SiKubernetes />} />
          <LangCard comp={<SiRedis />} />
          <LangCard comp={<SiApachekafka />} />
          <LangCard comp={<SiDocker />} />
          <LangCard comp={<SiAwslambda />} />
        </div>
      </div>
      <div className="text-black">
        <p>
          I've worked with some opensource projects, on
          <a
            href="https://github.com/thetanav"
            className="hover:text-400 text-black transition-all ml-1">
            github here
          </a>
        </p>
      </div>

      <div className="text-black text-sm mt-8 mb-6">
        #Let’s Build Together #BuildInPublic #Opensource
      </div>

      <div className="text-sm mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-black/60">
        <ExternalLink
          text={"linkedin"}
          href={"https://linkedin.com/in/tanav-poswal"}
        />
        <ExternalLink
          text={"mail me"}
          href={"mailto:tanavposwal939@gmail.com"}
        />
      </div>
    </section>
  );
}

const ExternalLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      className="flex items-center transition-all w-fit hover:text-400"
      rel="noopener noreferrer"
      target="_blank"
      href={href}>
      <ArrowTopRightIcon className="w-5 h-5" />
      <p className="ml-2 h-7">{text}</p>
    </a>
  );
};
