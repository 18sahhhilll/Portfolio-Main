import Section from "./layout/Section";
import Container from "./layout/Container";
import SectionHeading from "./layout/SectionHeading";
import TimelineEntry from "./ui/TimelineEntry";
import { experience } from "../data/experience";
import { achievements } from "../data/achievements";

export default function Experience() {
  const work = experience.filter((e) => e.type === "work");

  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          title="Experience"
          subtitle="Internships, industry training, and engineering roles."
        />

        <div className="max-w-2xl">
          <div>
            {work.map((entry) => (
              <TimelineEntry key={entry.id} entry={entry} />
            ))}
          </div>

          <h3 className="mb-5 mt-14 font-mono text-xs uppercase tracking-wide text-ink-faint">
            Achievements
          </h3>
          <ul className="space-y-4 border-t border-line pt-5">
            {achievements.map((a) => (
              <li key={a.id}>
                <p className="text-ink">{a.title}</p>
                <p className="text-sm text-ink-soft">
                  {a.result}
                  <span className="text-ink-faint"> · {a.category}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}