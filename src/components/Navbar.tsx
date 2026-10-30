import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./layout/Container";
import { personal } from "../data/personal";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const current = navItems.find(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      setActive(current?.id ?? "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-200 ${
        scrolled ? "bg-paper/90 backdrop-blur-sm border-b border-line" : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <button
            onClick={() => scrollTo("top")}
            className="font-serif text-lg text-ink hover:text-pine transition-colors"
          >
            {personal.name}
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm transition-colors ${
                    active === item.id ? "text-pine font-medium" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={personal.resumeUrl}
                download
                className="text-sm border border-ink/20 rounded-sm px-3.5 py-1.5 text-ink hover:border-ink/40 hover:bg-paper-alt transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>

          <button
            className="md:hidden p-2 -mr-2 text-ink"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {isOpen && (
        <div className="md:hidden border-t border-line bg-paper">
          <Container>
            <ul className="flex flex-col py-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`block w-full text-left py-3 text-base ${
                      active === item.id ? "text-pine font-medium" : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="py-3">
                <a href={personal.resumeUrl} download className="text-base text-ink-soft">
                  Download résumé
                </a>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
