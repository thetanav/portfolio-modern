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
} from "react-icons/si";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const serif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

function ChannelLink({ img, link, name, subimg, count }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <div className="w-16 h-16 rounded-xl overflow-hidden">
              <Image
                alt={name}
                src={img}
                width={100}
                height={100}
                className="w-full h-full saturate-0 group-hover:saturate-100 transition-all"
              />
            </div>
            <div className="absolute right-0 bottom-0 inline-flex h-6 w-6 items-center rounded-full">
              <img
                src={subimg}
                className="saturate-0 group-hover:saturate-100 transition-all"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold group-hover:text-500 transition-colors">
              {name}
            </p>
            <p className="text-sm font-medium text-black/60">{count}</p>
          </div>
        </div>
        <div className="w-fit rounded-full">
          <ArrowTopRightIcon />
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
      <h1 className="sm:text-5xl text-4xl h-fit mb-4 tracking flex gap-2 mt-5">
        <span className={`h-fit font-black text-500 ${serif.className}`}>
          Tanav Poswal
        </span>
      </h1>
      <p className="text-black/60">
        I'm a full-stack developer and machine learning enthusiast driven by a
        passion for innovation. From building scalable web applications to
        exploring the cutting edge of AI and ML, I thrive on solving complex
        problems and pushing the boundaries of what's possible. Let's build
        something amazing together!
      </p>

      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={"/images/linkedin.jpg"}
          name="Get In Touch !"
          link="https://www.linkedin.com/in/tanav-poswal/"
          subimg={
            "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
          }
          count={"500+"}
        />
        <ChannelLink
          img={"/images/x.jpg"}
          name="Twitter"
          link="https://x.com/tanavindev"
          subimg={
            "https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png"
          }
          count={"100+"}
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
          <LangCard comp={<SiDocker />} />
        </div>
      </div>
      <div className="text-black/60">
        <p>
          I've worked with some opensource projects, on{" "}
          <a
            href="https://github.com/tanavposwal"
            className="hover:text-500 text-black transition no-underline">
            github here
          </a>
        </p>
      </div>
      <ul className="font-sm mt-8 mb-6 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-black/60">
        <li>
          <a
            className="flex items-center transition-all w-fit hover:text-500"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:tanavposwal939@gmail.com">
            <ArrowTopRightIcon />
            <p className="ml-2 h-7">mail me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all w-fit hover:text-500"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/tanav-poswal/">
            <ArrowTopRightIcon />
            <p className="ml-2 h-7">get in touch</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
