import Section from "./layout/Section";
import Container from "./layout/Container";
import SectionHeading from "./layout/SectionHeading";
import TimelineEntry from "./ui/TimelineEntry";
import { experience } from "../data/experience";

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
        </div>
      </Container>
    </Section>
  );
}
