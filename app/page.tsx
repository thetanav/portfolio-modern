import Image from 'next/image';
import { Suspense } from 'react';
import { FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiNextdotjs, SiTailwindcss, SiTurborepo, SiPostman, SiFlask, SiPython, SiRust, SiTypescript, SiShadcnui, SiFlutter, SiFramer } from "react-icons/si";

function ChannelLink({ img, link, name, subimg, count }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 hover:border-neutral-500 hover:ring-4 ring-white/15 transition"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <img
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
            />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white dark:border-neutral-700">
              <img src={subimg} />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}>
              {count}
            </Suspense>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-200 group-hover:-rotate-12 dark:text-neutral-300">
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
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">hey, I'm tanav 👋</h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm a fullstack developer, optimist, and highly focused. I currently worked on <strong>50+ projects</strong>, some are deployed on {' '}
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

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I create educational content for developers, teaching them about web
          development, JavaScript and TypeScript, React and Next.js, and more.
          This comes in all forms: blog posts, videos, tweets, conference talks,
          and workshops. You can watch some of my favorites below.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={"https://media.licdn.com/dms/image/D5603AQGAAqKKVIgjcg/profile-displayphoto-shrink_400_400/0/1703482763904?e=1720051200&v=beta&t=tCcLgXSWWEr5L_IavFmk1XcE3Au2B8JcOeUkIXZr_pk"}
          name="@tanav-poswal"
          link="https://www.linkedin.com/in/tanav-poswal/"
          subimg={"https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"}
          count={"70+"}
        />
        <ChannelLink
          img={"https://pbs.twimg.com/profile_images/1760952410661326848/BL-Hm4SI_400x400.jpg"}
          name="@TanavPoswal"
          link="https://twitter.com/TanavPoswal"
          subimg={"https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png"}
          count={"40+"}
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          technologies I have been using since 2023,
        </p>
      </div>

      <div className="grid grid-rows-auto w-full sm:grid-cols-10 grid-cols-5 gap-6">
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
        <LangCard comp={<SiFramer />} />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I've worked with some opensource projects, on <a href="https://github.com/tanavposwal">github here</a>
        </p>
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
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
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
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
    <div className="flex items-center justify-center rounded border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 w-12 h-12">
      <span className='text-3xl text-white'>{comp}</span>
    </div>
  )
}