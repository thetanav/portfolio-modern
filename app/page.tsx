import Image from 'next/image';
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
  SiPytorch,
} from 'react-icons/si';

function ChannelLink({ img, link, name, subimg, count }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border px-3 py-3 border-neutral-700 bg-neutral-900 hover:border-neutral-400 hover:ring-4 active:ring-4 ring-white/15 transition"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <div className="w-16 h-16 bg-neutral-700 rounded-full overflow-hidden">
              <img alt={name} src={img} className="w-full h-full" />
            </div>
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-700">
              <img src={subimg} />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-400">{name}</p>
            <p className="text-sm font-medium text-neutral-500">{count}</p>
          </div>
        </div>
        <div className="w-fit rounded-full relative right-3">
          <ArrowIcon />
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
      className="inline-flex items-center justify-center py-0 px-2 text-xs h-8 text-neutral-300 no-underline bg-neutral-800 rounded"
    />
  );
}

export default function Page() {
  return (
    <section className="animate-entry">
      <h1 className="sm:text-4xl text-3xl h-fit mb-8 tracking-tighter flex gap-2 mt-6">
        <span className={'h-fit'}>
          hey, I'm <span className="font-black">Tanav</span>
        </span>
        <Image
          className="sm:scale-100 scale-75 ml-2"
          width={37}
          height={37}
          src="/images/wave.png"
          alt="wave hand"
        />
      </h1>
      <p className="prose prose-invert">
        I'm a fullstack developer and Machine Learning enthusiast, optimist, and
        highly focused. I currently worked on <strong>100+ projects</strong>{' '}
        both personal and opensource, some are deployed on{' '}
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
            className="mr-1 inline-flex"
            width="13"
            height="13"
          />
          Next.js
        </Badge>
        {' and '}
        <Badge href="https://turbo.build">
          <Image
            alt="Next.js logomark"
            src="/turbo-repo.svg"
            className="mr-1 inline-flex"
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

      <div className="mt-8 justify-center">
        <h2 className="font-semibold mb-3">My GitHub Activity 📊</h2>
        <img
          src="https://ghchart.rshah.org/216e39/tanavposwal"
          alt="tanavposwal's Github chart"
        />
      </div>

      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={
            'https://media.licdn.com/dms/image/v2/D5603AQHYGCAUOytRXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726923901882?e=1741824000&v=beta&t=hDqkhKr6DbCQ-aHcXuAPLuDKRMXD8ZXsrl7jxzsKq7U'
          }
          name="Get In Touch !"
          link="https://www.linkedin.com/in/tanav-poswal/"
          subimg={
            'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'
          }
          count={'500+'}
        />
        <ChannelLink
          img={
            'https://pbs.twimg.com/profile_images/1863427870573690880/U3S8Tv5W_400x400.jpg'
          }
          name="Twitter"
          link="https://x.com/tanavindev"
          subimg={
            'https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png'
          }
          count={'100+'}
        />
      </div>

      <div className="prose prose-invert">
        <p>technologies I have been using since 2023,</p>
      </div>

      <div className="w-full gap-2 my-5">
        <h2 className="font-bold">FullStack</h2>
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
        <h2 className="font-bold">Machine Learning</h2>
        <div className="flex flex-wrap gap-2 mt-3 mb-5">
          <LangCard comp={<SiFlask />} />
          <LangCard comp={<SiPython />} />
          <LangCard comp={<SiPython />} />
          <LangCard comp={<SiTensorflow />} />
          <LangCard comp={<SiNvidia />} />
          <LangCard comp={<SiScikitlearn />} />
          <LangCard comp={<SiPandas />} />
          <LangCard comp={<SiPlotly />} />
          <LangCard comp={<SiPytorch />} />
        </div>
        <h2 className="font-bold">Cloud</h2>
        <div className="flex flex-wrap gap-2 mt-2 mb-5">
          <LangCard comp={<SiRust />} />
          <LangCard comp={<SiFlutter />} />
          <LangCard comp={<SiDocker />} />
        </div>
      </div>
      <div className="prose prose-invert">
        <p>
          I've worked with some opensource projects, on{' '}
          <a
            href="https://github.com/tanavposwal"
            className="text-neutral-500 hover:text-white transition no-underline"
          >
            github here
          </a>
        </p>
      </div>
      <ul className="font-sm mt-8 mb-6 flex flex-col space-x-0 space-y-2  md:flex-row md:space-x-4 md:space-y-0 text-neutral-500">
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
    <div className="flex items-center justify-center rounded border border-neutral-700 bg-neutral-800 w-10 h-10 group">
      <span className="text-xl opacity-50 group-hover:opacity-90 transition-opacity">
        {comp}
      </span>
    </div>
  );
}
