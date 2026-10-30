import Section from "./layout/Section";
import Container from "./layout/Container";
import SectionHeading from "./layout/SectionHeading";
import TimelineEntry from "./ui/TimelineEntry";
import { experience } from "../data/experience";

export default function Education() {
  const education = experience.filter((e) => e.type === "education");

  return (
    <Section id="education">
      <Container>
        <SectionHeading
          title="Education"
          subtitle="Academic degrees and engineering fundamentals."
        />

        <div className="max-w-2xl">
          <div>
            {education.map((entry) => (
              <TimelineEntry key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
