import { ArrowUpRight, Github } from "lucide-react";
import Tag from "./Tag";
import type { Project } from "../../data/projects";

const linkStyles =
  "inline-flex items-center gap-1 text-ink-soft transition-colors hover:text-pine";

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <article
      className="group -ml-4 border-b border-l-2 border-l-transparent border-line py-7 pl-4 transition-colors
                 duration-150 first:pt-0 last:border-b-0 hover:border-l-pine hover:bg-paper-alt/40
                 focus-within:border-l-pine sm:-ml-5 sm:pl-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex-1">
          <div className="flex items-baseline gap-3">
            <h3 className="font-serif text-xl text-ink transition-colors group-hover:text-pine">
              {project.title}
            </h3>
            {project.featured && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-pine-dim font-medium">
                Featured
              </span>
            )}
          </div>
          <p className="mt-1.5 max-w-prose leading-relaxed text-ink-soft">{project.description}</p>

          {project.breakdown && (
            <div className="mt-4 space-y-2.5 rounded-md border border-line bg-paper-alt/60 p-4 text-xs sm:text-sm">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-pine shrink-0">
                  Problem:
                </span>
                <span className="text-ink-soft leading-relaxed">{project.breakdown.problem}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-pine shrink-0">
                  Approach:
                </span>
                <span className="text-ink-soft leading-relaxed">{project.breakdown.approach}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-rust shrink-0">
                  Challenge Solved:
                </span>
                <span className="text-ink font-medium leading-relaxed">
                  {project.breakdown.challenge}
                </span>
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 gap-4 font-mono text-xs sm:pt-1">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkStyles}>
              <Github size={13} /> source
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={linkStyles}>
              live <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
