import type { ExperienceEntry } from "../../data/experience";

const yearOf = (period: string) => period.match(/\d{4}/)?.[0] ?? "";

export default function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative border-l border-line pb-9 pl-6 last:pb-0">
      <span
        className={`absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full ${
          entry.type === "work" ? "bg-pine" : "bg-ochre"
        }`}
      />
      <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
        <span className="font-mono text-xs text-ink-faint">{yearOf(entry.period)}</span>
        <h3 className="font-serif text-lg text-ink">{entry.title}</h3>
      </div>
      <p className="mt-0.5 text-sm text-pine-dim">
        {entry.org}
        {entry.location ? ` · ${entry.location}` : ""}
        <span className="text-ink-faint"> — {entry.period}</span>
      </p>
      <ul className="mt-2.5 space-y-1.5">
        {entry.points.map((point, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
            <span className="text-ink-faint">—</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}