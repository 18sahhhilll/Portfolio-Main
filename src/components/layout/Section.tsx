import type { ReactNode } from "react";

export default function Section({
  id,
  children,
  className = "",
  bare = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bare?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 sm:py-20 lg:py-24 ${bare ? "" : "border-t border-line"} ${className}`}
    >
      {children}
    </section>
  );
}
