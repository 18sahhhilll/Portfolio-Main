export default function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded border border-line-strong/70 bg-paper-alt px-2 py-0.5 font-mono text-[0.72rem] text-ink-soft">
      {children}
    </span>
  );
}
