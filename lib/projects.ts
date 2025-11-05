export interface Project {
  img: string;
  link: string;
  name: string;
  brief: string;
}

export const projects: Project[] = [
  {
    img: "/images/simpchat.png",
    link: "https://simpchat.vercel.app/",
    name: "agentic ai chat",
    brief: "agentic ai chat with extensive tool uses.",
  },
  {
    img: "/images/tradex.png",
    link: "https://trading-system-theta.vercel.app/",
    name: "trade exchange",
    brief: "real-time trading app with live order book.",
  },
  {
    img: "/images/chess-app.png",
    link: "https://github.com/thetanav/chess",
    name: "multiplayer chess",
    brief: "multiplayer chess game with websockets.",
  },
  {
    img: "/images/linkmash.png",
    link: "https://linkmash.netlify.app/",
    name: "linkmash",
    brief: "compare your linkedin profile with others.",
  },
];
