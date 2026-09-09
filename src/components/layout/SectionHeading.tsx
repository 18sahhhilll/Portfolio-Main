import type { ReactNode } from "react";

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
}: {
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-10 sm:mb-14 ${align === "center" ? "text-center mx-auto max-w-prose" : "max-w-prose"}`}>
      <h2 className="text-display-md font-medium text-ink text-balance">{title}</h2>
      {subtitle && <p className="mt-3 text-ink-soft leading-relaxed">{subtitle}</p>}
    </div>
  );
}
