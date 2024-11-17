import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { Suspense } from 'react';
import { FaReact } from 'react-icons/fa';
import { GrGraphQl } from 'react-icons/gr';
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
  SiFlutter,
  SiFramer,
  SiDocker, 
  SiTensorflow,
  SiNvidia,
  SiScikitlearn,
  SiPandas,
  SiPlotly,
  SiPytorch
} from 'react-icons/si';

const poppins = Poppins({ subsets: ["latin"], weight: '800' })

function ChannelLink({ img, link, name, subimg, count }) {
  return (
    <div className="group/arrow flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border  px-3 py-4 border-neutral-700 bg-neutral-900 hover:border-white hover:ring-4 active:ring-4 ring-white/15 transition"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <img
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-700"
            />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-700">
              <img src={subimg} />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-400">{name}</p>
            <Suspense fallback={<p className="h-6" />}>{count}</Suspense>
          </div>
        </div>
        <div className="group w-fit rounded-full grid overflow-hidden inset-4">
          <span className="[grid-area:1/1] flex items-center justify-center h-8 w-8 transition ease-in-out  translate-y-10 -translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0"><ArrowIcon /></span>
          <span className="[grid-area:1/1] flex items-center justify-center h-8 w-8 transition ease-in-out delay-300 duration-300 group-hover:-translate-y-10 group-hover:translate-x-10"><ArrowIcon /></span>
        </div>
      </a>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border p-1 text-sm leading-4  no-underline border-neutral-700 bg-neutral-800 text-neutral-100"
    />
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-black md:text-6xl sm:text-5xl text-3xl h-fit mb-8 tracking-tighter flex items-center gap-2 mt-10">
        <span className={'h-fit ' + poppins.className}>hey, I'm Tanav</span>
        <Image className="sm:scale-100 scale-75" width={65} height={65} src="/images/wave.png" alt="wave hand" />
      </h1>
      <p className="prose prose-invert">
        I'm a fullstack developer and Machine Learning enthusiast, optimist, and highly focused. I currently
        worked on <strong>60+ projects</strong> both personal and client, some are deployed on{' '}
        <Badge href="https://vercel.com/home">
          <svg
            width="13"
            height="11"
            role="img"
            aria-label="Vercel logo"
            className="mr-1 inline-flex"
          >
            <use href="/sprite.svg#vercel" />
          </svg>
          Vercel
        </Badge>
        {' , where I build fullstack app with '}
        <Badge href="https://nextjs.org">
          <Image
            alt="Next.js logomark"
            src="/next-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Next.js
        </Badge>
        {' and '}
        <Badge href="https://turbo.build">
          <Image
            alt="Next.js logomark"
            src="/turbo-repo.svg"
            className="!mr-1"
            width="13"
            height="13"
          />
          Turborepo
        </Badge>
      </p>

      {/* <div className="prose prose-neutral dark:prose-invert">
        <p>
          I create educational content for developers, teaching them about web
          development, JavaScript and TypeScript, React and Next.js, and more.
          This comes in all forms: blog posts, videos, tweets, conference talks,
          and workshops. You can watch some of my favorites below.
        </p>
      </div> */}

      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={
            'https://media.licdn.com/dms/image/v2/D5603AQHYGCAUOytRXA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726923901866?e=1735776000&v=beta&t=AsrH6ZiaZ8pmovfRddSXh2Mu-1I7dv5hLWak1y2Ckw8'
          }
          name="tanav-poswal"
          link="https://www.linkedin.com/in/tanav-poswal/"
          subimg={
            'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'
          }
          count={'300+'}
        />
        <ChannelLink
          img={
            'https://pbs.twimg.com/profile_images/1809588565375954945/I8yb5ipp_400x400.jpg'
          }
          name="tanavindev"
          link="https://x.com/tanavindev"
          subimg={
            'https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png'
          }
          count={'60+'}
        />
      </div>

      <div className="prose prose-invert">
        <p>technologies I have been using since 2023,</p>
      </div>

      <div className="grid grid-rows-auto w-full lg:grid-cols-15 md:grid-cols-12 sm:grid-cols-7 grid-cols-7 gap-6">
        <LangCard comp={<FaReact />} />
        <LangCard comp={<GrGraphQl />} />
        <LangCard comp={<SiNextdotjs />} />
        <LangCard comp={<SiTailwindcss />} />
        <LangCard comp={<SiTurborepo />} />
        <LangCard comp={<SiPostman />} />
        <LangCard comp={<SiFlask />} />
        <LangCard comp={<SiPython />} />
        <LangCard comp={<SiRust />} />
        <LangCard comp={<SiTypescript />} />
        <LangCard comp={<SiShadcnui />} />
        <LangCard comp={<SiFlutter />} />
        <LangCard comp={<SiDocker />} />
        <LangCard comp={<SiFramer />} />
        <LangCard comp={<SiPython />} />
        <LangCard comp={<SiTensorflow />} />
        <LangCard comp={<SiNvidia />} />
        <LangCard comp={<SiScikitlearn />} />
        <LangCard comp={<SiPandas />} />
        <LangCard comp={<SiPlotly />} />
        <LangCard comp={<SiPytorch />} />

      </div>
      <div className="prose prose-invert">
        <p>
          I've worked with some opensource projects, on{' '}
          <a href="https://github.com/tanavposwal" className="text-neutral-400 hover:text-white">github here</a>
        </p>
      </div>
      <ul className="font-sm mt-8 mb-6 flex flex-col space-x-0 space-y-2  md:flex-row md:space-x-4 md:space-y-0 text-neutral-400">
        <li>
          <a
            className="flex items-center transition-all hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:tanavposwal939@gmail.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">mail me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/tanav-poswal/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">get in touch</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

function LangCard({ comp }) {
  return (
    <div className="flex items-center justify-center rounded border border-neutral-700 bg-neutral-800 w-12 h-12 group">
      <span className="text-3xl opacity-50 group-hover:opacity-90 transition-opacity">
        {comp}
      </span>
    </div>
  );
}
