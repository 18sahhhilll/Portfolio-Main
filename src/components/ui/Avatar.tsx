import { useState } from "react";

export default function Avatar({
  src,
  alt,
  initials,
  className = "",
}: {
  src: string;
  alt: string;
  initials: string;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-line-strong/70 bg-paper-alt ${className}`}
    >
      {!errored ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover grayscale-[15%]"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-serif text-5xl text-ink-faint">{initials}</span>
        </div>
      )}
    </div>
  );
}
