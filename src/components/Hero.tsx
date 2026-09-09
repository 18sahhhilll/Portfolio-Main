import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import Container from "./layout/Container";
import Avatar from "./ui/Avatar";
import { ButtonLink } from "./ui/Button";
import { personal } from "../data/personal";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-5 flex items-center gap-2 font-mono text-xs text-ink-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pine/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pine" />
              </span>
              Open to new opportunities · {personal.location}
            </p>

            <h1 className="text-display-lg font-medium text-ink text-balance">
              {personal.name}
            </h1>
            <p className="mt-3 text-xl text-pine-dim sm:text-2xl">{personal.role}</p>

            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">
              {personal.positioning}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink href="#projects">
                View projects
                <ArrowDown size={15} />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Get in touch
              </ButtonLink>
              <ButtonLink href={personal.resumeUrl} download variant="ghost" className="px-2">
                Resume
                <ArrowUpRight size={15} />
              </ButtonLink>
            </div>

            <div className="mt-10 flex items-center gap-5 text-ink-soft">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hover:text-ink transition-colors"
              >
                <Github size={19} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-ink transition-colors"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </div>

          <div className="order-1 w-32 sm:w-40 lg:order-2 lg:w-full">
            <Avatar src="/image.jpeg" alt={personal.name} initials="SS" />
          </div>
        </div>
      </Container>
    </section>
  );
}
