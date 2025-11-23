import type { Metadata } from "next";
import { experience } from "../../lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "My work experience.",
};

export default function ExperiencePage() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-medium tracking-tight text-[var(--text)]">
        Experience
      </h1>
      <div className="flex flex-col gap-8">
        {experience.map((job) => (
          <div key={job.company} className="flex flex-col gap-2">
            <div className="flex justify-between items-baseline">
              <h3 className="font-medium text-[var(--text)]">{job.company}</h3>
              <span className="text-sm text-[var(--text-muted)]">
                {job.period}
              </span>
            </div>
            <p className="text-sm text-[var(--text)]">{job.role}</p>
            <p className="text-sm text-[var(--text-muted)]">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
