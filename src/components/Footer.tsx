import Container from "./layout/Container";
import { personal } from "../data/personal";

export default function Footer() {
  return (
    <footer className="bg-navy text-paper/70">
      <Container>
        <div className="flex flex-col items-start justify-between gap-3 py-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} {personal.name}
          </p>
          <p className="font-mono text-xs text-paper/40">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
