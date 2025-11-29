export interface Project {
  img: string;
  link: string;
  name: string;
  brief: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    img: "/images/scoutly.png",
    link: "https://github.com/thetanav/scoutly/",
    name: "scoutly - a reseach rag",
    brief: "a dead simple perplexity clone with docling and web scraping.",
    tech: ["Langchain", "Vector Store", "Embeddings"],
  },
  {
    img: "/images/chess-app.png",
    link: "https://github.com/thetanav/chess",
    name: "multiplayer chess",
    brief: "multiplayer chess game with websockets.",
    tech: ["WS", "Next.js", "Chess.js"],
  },
  {
    img: "/images/simpchat.png",
    link: "https://simpchat.vercel.app/",
    name: "agentic ai chat",
    brief: "agentic ai chat with extensive tool uses.",
    tech: ["Next.js", "Openrouter", "Redis"],
  },
  {
    img: "/images/tradex.png",
    link: "https://trading-system-theta.vercel.app/",
    name: "trade exchange",
    brief: "real-time trading app with live order book.",
    tech: ["Node.js", "Next.js", "Redis", "Chart", "WebSockets"],
  },
  {
    img: "/images/linkmash.png",
    link: "https://linkmash.netlify.app/",
    name: "linkmash",
    brief: "compare your linkedin profile with others.",
    tech: ["React", "Convex"],
  },
];
