export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    company: "Tech Corp",
    role: "Software Engineer",
    period: "2023 - Present",
    description:
      "Building scalable web applications and microservices using Next.js and Go.",
  },
  {
    company: "Startup Inc",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description:
      "Led the development of the core product from MVP to Series A.",
  },
];
