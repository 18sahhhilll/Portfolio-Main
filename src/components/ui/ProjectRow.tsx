import { ArrowUpRight, Github } from "lucide-react";
import Tag from "./Tag";
import type { Project } from "../../data/projects";

const linkStyles =
  "inline-flex items-center gap-1 text-ink-soft transition-colors hover:text-pine";

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <article
      className="group -ml-4 border-b border-l-2 border-l-transparent border-line py-6 pl-4 transition-colors
                 duration-150 first:pt-0 last:border-b-0 hover:border-l-pine hover:bg-paper-alt/40
                 focus-within:border-l-pine sm:-ml-5 sm:pl-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex-1">
          <h3 className="font-serif text-xl text-ink transition-colors group-hover:text-pine">
            {project.title}
          </h3>
          <p className="mt-1.5 max-w-prose leading-relaxed text-ink-soft">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
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