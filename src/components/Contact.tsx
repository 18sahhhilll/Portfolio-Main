import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Phone } from "lucide-react";
import Section from "./layout/Section";
import Container from "./layout/Container";
import SectionHeading from "./layout/SectionHeading";
import { personal } from "../data/personal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — the mailto link below still works
    }
  };

  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          title="Get in touch"
          subtitle="Open to internships, junior developer roles, and interesting freelance work."
        />

        <div className="flex flex-col gap-3 max-w-prose">
          <div className="flex items-center justify-between border-b border-line py-3">
            <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-ink hover:text-pine transition-colors">
              <Mail size={17} className="text-ink-faint" />
              {personal.email}
            </a>
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 font-mono text-xs text-ink-soft hover:text-pine transition-colors"
              aria-label="Copy email address"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? "copied" : "copy"}
            </button>
          </div>

          <a
            href={`tel:${personal.phone}`}
            className="flex items-center gap-3 border-b border-line py-3 text-ink hover:text-pine transition-colors"
          >
            <Phone size={17} className="text-ink-faint" />
            {personal.phone}
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border-b border-line py-3 text-ink hover:text-pine transition-colors"
          >
            <span className="flex items-center gap-3">
              <Github size={17} className="text-ink-faint" />
              github.com/18sahhhilll
            </span>
            <ArrowUpRight size={15} className="text-ink-faint" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-3 text-ink hover:text-pine transition-colors"
          >
            <span className="flex items-center gap-3">
              <Linkedin size={17} className="text-ink-faint" />
              linkedin.com/in/connnect-sahil-sangle
            </span>
            <ArrowUpRight size={15} className="text-ink-faint" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
