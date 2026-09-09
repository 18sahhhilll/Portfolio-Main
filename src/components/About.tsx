import Section from "./layout/Section";
import Container from "./layout/Container";
import SectionHeading from "./layout/SectionHeading";
import { personal } from "../data/personal";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <SectionHeading title="About" />
          <div className="max-w-prose">
            <p className="text-lg leading-relaxed text-ink">{personal.bio}</p>
            <p className="mt-5 text-ink-soft leading-relaxed">{personal.currentFocus}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
