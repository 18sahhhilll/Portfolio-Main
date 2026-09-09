/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F3EC",
        "paper-alt": "#EEEADD",
        ink: "#1C1B18",
        "ink-soft": "#5B564C",
        "ink-faint": "#8C8677",
        line: "#DCD6C6",
        "line-strong": "#C7BFA9",
        pine: "#2F4D38",
        "pine-dim": "#4B6B54",
        "pine-tint": "#E3E9E0",
        ochre: "#8A6A32",
        rust: "#9C4A26",
        navy: "#1D2129",
        "navy-soft": "#2A303B",
        cream: "#F5F3EC",
      },
      fontFamily: {
        serif: ["'Newsreader'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      fontSize: {
        "display-lg": ["clamp(2.75rem, 5vw + 1rem, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3vw + 1rem, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
