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
                className="w-full h-full rounded-xl z-50 group-hover:-rotate-6 transition-transform"
              />
              <Image
                alt={name}
                src={img}
                width={100}
                height={100}
                className="w-full h-full absolute top-0 bottom-0 blur-lg scale-105 rounded-xl -z-10 opacity-0 group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold group-hover:text-500 transition-all">
              {name}
            </p>
            <p className="text-sm font-medium text-black/60">{count}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

function LangCard({ comp }) {
  return (
    <div className="flex items-center justify-center rounded-lg border border-black/20 shadow w-10 h-10 group bg-white">
      <span className="text-xl opacity-60 transition-opacity">{comp}</span>
    </div>
  );
}

export default function Page() {
  return (
    <section className="animate-entry">
      <h1 className="sm:text-4xl text-3xl h-fit mb-4 tracking flex gap-2 mt-5">
        <span className={`h-fit font-black text-500 ${serif.className}`}>
          Tanav Poswal
        </span>
      </h1>
      <p className="text-black/60">
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
          link="https://x.com/tanavindev"
          count={"150+"}
        />
      </div>

      <div className="text-black/60">
        <p>technologies I have been using since 2023,</p>
      </div>

      <div className="w-full gap-2 my-5">
        <h2 className="font-semibold">Web Development</h2>
        <div className="flex flex-wrap gap-2 mt-3 mb-5">
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
        <h2 className="font-semibold">Machine Learning</h2>
        <div className="flex flex-wrap gap-2 mt-3 mb-5">
          <LangCard comp={<SiFlask />} />
          <LangCard comp={<SiPython />} />
          <LangCard comp={<SiTensorflow />} />
          <LangCard comp={<SiNvidia />} />
          <LangCard comp={<SiScikitlearn />} />
          <LangCard comp={<SiPandas />} />
          <LangCard comp={<SiPlotly />} />
          <LangCard comp={<SiPytorch />} />
        </div>
        <h2 className="font-semibold">Cloud</h2>
        <div className="flex flex-wrap gap-2 mt-2 mb-5">
          <LangCard comp={<SiRust />} />
          <LangCard comp={<SiKubernetes />} />
          <LangCard comp={<SiRedis />} />
          <LangCard comp={<SiApachekafka />} />
          <LangCard comp={<SiDocker />} />
          <LangCard comp={<SiAwslambda />} />
        </div>
      </div>
      <div className="text-black/60">
        <p>
          I've worked with some opensource projects, on{" "}
          <a
            href="https://github.com/tanavposwal"
            className="hover:text-500 text-black transition-all">
            github here
          </a>
        </p>
      </div>

      <div className="prose text-black/60 text-sm mt-8 mb-6">
        #Let’s Build Together #BuildInPublic #Opensource
      </div>

      <div className="font-sm mt-8 mb-6 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-black/60">
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
      className="flex items-center transition-all w-fit hover:text-500"
      rel="noopener noreferrer"
      target="_blank"
      href={href}>
      <ArrowTopRightIcon className="w-5- h-5" />
      <p className="ml-2 h-7">{text}</p>
    </a>
  );
};
