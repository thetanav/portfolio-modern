export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    company: "Hirewiser",
    role: "Full Stack Engineer",
    period: "Sept 2025 - Oct 2025",
    description: "Building scalable backend using Next.js and TRPC.",
  },
  {
    company: "BlockSeBlock",
    role: "Blockchain Engineer",
    period: "July 2025 - Sept 2025",
    description: "Building dapps on ICP blockchain with Rust.",
  },
];
