export interface Experience {
  company: string;
  img: string;
  url: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export const experience: Experience[] = [
  {
    company: "Hirewiser",
    img: "/company/hw.jpg",
    url: "https://www.hirewiser.in/",
    role: "Full Stack Engineer",
    period: "Sept 2025 - Oct 2025",
    location: "Remote (India)",
    description: "Building scalable backend using Next.js and TRPC.",
  },
  {
    company: "BlockSeBlock",
    img: "/company/bsb.png",
    url: "https://blockseblock.com/",
    role: "Blockchain Engineer",
    period: "July 2025 - Sept 2025",
    location: "Remote (India)",
    description: "Building dapps on ICP blockchain with Rust.",
  },
];
