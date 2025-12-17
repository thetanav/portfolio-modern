export interface Project {
  img: string;
  name: string;
  brief: string;
  git?: string;
  web?: string;
  info?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    img: "/images/uber.png",
    git: "https://github.com/thetanav/uber",
    name: "End to end uber clone",
    brief:
      "a end 2 end uber clone made with latest tech stack and best practices.",
    tech: ["ElysiaJS", "Turbo Repo", "NextJS", "Postgres", "Websocket"],
  },
  {
    img: "/images/scoutly.png",
    git: "https://github.com/thetanav/road-vision/",
    name: "scoutly - a reseach rag",
    brief: "a dead simple perplexity clone with docling and web scraping.",
    tech: ["Python", "Langchain", "Vector Store", "Embeddings", "Docling"],
  },
  {
    img: "/images/crawler.png",
    git: "https://github.com/thetanav/road-vision/",
    name: "crawler - search engine",
    brief:
      "a tiny serch engine that scrapes all the pages in a domain and maps to their title for searching",
    tech: ["BunJS", "Fetch", "JSON", "React"],
  },
  {
    img: "/images/chess-app.png",
    git: "https://github.com/thetanav/chess",
    name: "multiplayer chess",
    brief: "multiplayer chess game with websockets.",
    tech: ["WebSockets", "Next js", "Chess js", "Turborepo"],
  },
  {
    img: "/images/trading.png",
    git: "https://github.com/thetanav/trading-system",
    name: "trade exchange",
    brief: "real-time trading app with live order book.",
    tech: ["Express", "Next js", "Redis", "Chart", "WebSockets"],
  },
  {
    img: "/images/linkmash.png",
    web: "https://linkmash.netlify.app/",
    name: "linkmash",
    brief: "compare your linkedin profile with others.",
    tech: ["React", "Convex"],
  },
];
