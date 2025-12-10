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
    img: "/images/scoutly.png",
    git: "https://github.com/thetanav/crawler",
    info: "https://x.com/tanavtwt/status/1996956098310615175",
    name: "crawler - search engine",
    brief:
      "a tiny serch engine that scrapes all the pages in a domain and maps to their title for searching",
    tech: ["Bun js", "Fetch", "CLI"],
  },
  {
    img: "/images/scoutly.png",
    git: "https://github.com/thetanav/scoutly/",
    info: "https://x.com/tanavtwt/status/1994856020099920261",
    name: "scoutly - a reseach rag",
    brief: "a dead simple perplexity clone with docling and web scraping.",
    tech: ["Python", "Langchain", "Vector Store", "Embeddings", "Docling"],
  },
  {
    img: "/images/scoutly.png",
    git: "https://github.com/thetanav/road-vision/",
    name: "ADAS",
    brief:
      "a comprehensive real-time assistance system provides intelligent driving assistance and road sign alerts.",
    tech: ["Python", "Pytorch", "YOLOv8", "OpenCV", "Colab"],
  },
  {
    img: "/images/chess-app.png",
    git: "https://github.com/thetanav/chess",
    name: "multiplayer chess",
    brief: "multiplayer chess game with websockets.",
    tech: ["WebSockets", "Next js", "Chess js", "Turborepo"],
  },
  {
    img: "/images/tradex.png",
    web: "https://trading-system-theta.vercel.app/",
    git: "",
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
