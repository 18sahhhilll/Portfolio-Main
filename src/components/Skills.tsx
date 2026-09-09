import Section from "./layout/Section";
import Container from "./layout/Container";
import SectionHeading from "./layout/SectionHeading";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading title="Technical stack" />

        <div className="max-w-3xl">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="flex flex-col gap-2 border-t border-line py-5 first:border-t-0 first:pt-0 sm:flex-row sm:gap-8"
            >
              <h3 className="shrink-0 font-mono text-xs text-ink-faint sm:w-52">
                <span className="text-ink-soft">0{i + 1}</span> / {group.category}
              </h3>
              <p className="flex-1 leading-relaxed text-ink">
                {group.items.map((item, idx) => (
                  <span key={item}>
                    <span className="cursor-default transition-colors hover:text-pine">{item}</span>
                    {idx < group.items.length - 1 && <span className="text-ink-faint"> · </span>}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}