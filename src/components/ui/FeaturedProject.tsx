import { ArrowUpRight, Github } from "lucide-react";
import Tag from "./Tag";
import type { Project } from "../../data/projects";

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="border border-line-strong/70 bg-paper-alt/50 p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="font-serif text-2xl text-ink">{project.title}</h3>
        <div className="flex gap-4 font-mono text-xs">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink-soft hover:text-pine transition-colors"
            >
              <Github size={13} /> source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink-soft hover:text-pine transition-colors"
            >
              live <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 max-w-prose leading-relaxed text-ink-soft">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </article>
  );
}
