export interface Project {
    img: string;
    link: string;
    name: string;
    brief: string;
}

export const projects: Project[] = [
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
        img: "/images/exp.png",
        link: "https://linkmash.netlify.app/",
        name: "linkmash",
        brief: "compare your linkedin profile with others.",
    },
    {
        img: "/images/neura.png",
        link: "https://flowcode-tnv.vercel.app/",
        name: "ai enabled Code editor ai",
        brief: "a simple code editor on the web with ai.",
    },
    {
        img: "/images/anime.png",
        link: "https://animes-eta.vercel.app/",
        name: "anime vault",
        brief: "anime netflix via open api. Next JS infinite scroll.",
    },
    {
        img: "/images/x-clone.png",
        link: "https://myspace-pi-six.vercel.app/",
        name: "X Clone",
        brief: "Fullstack twitter clone in Prisma + NextJS + ShadCN.",
    },
    {
        img: "/images/groove.png",
        link: "https://groove-next.vercel.app/",
        name: "groove nest",
        brief: "music social for collaborated music listening.",
    },
];