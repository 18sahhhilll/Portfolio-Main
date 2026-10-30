import Section from "./layout/Section";
import Container from "./layout/Container";
import SectionHeading from "./layout/SectionHeading";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <Section id="achievements">
      <Container>
        <SectionHeading
          title="Achievements"
          subtitle="Honors, project competitions, and bug bounty recognitions."
        />

        <div className="max-w-2xl">
          <ul className="space-y-4 border-t border-line pt-5">
            {achievements.map((a) => (
              <li key={a.id} className="pb-4 border-b border-line/60 last:border-b-0 last:pb-0">
                <p className="font-serif text-lg text-ink">{a.title}</p>
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
