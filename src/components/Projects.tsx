import Section from "./layout/Section";
import Container from "./layout/Container";
import SectionHeading from "./layout/SectionHeading";
import ProjectRow from "./ui/ProjectRow";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="A mix of things built for internships, competitions, and to learn something properly."
        />

        <div>
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}