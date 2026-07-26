/**
 * Emblem — the real Crown Code Collective C.C.CVII DNA-crown mark.
 * Source: client-supplied logo, black background punched to transparency.
 *   variant="mark" → crown only (header, favicon, watermark)
 *   variant="full" → crown + C.C.CVII wordmark crest (footer)
 */
interface EmblemProps {
  className?: string;
  title?: string;
  variant?: "mark" | "full";
}

export default function Emblem({ className, title, variant = "mark" }: EmblemProps) {
  const src = variant === "full" ? "/emblem-full.png" : "/emblem-mark.png";
  return (
    <img
      src={src}
      className={className}
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
      draggable={false}
      loading="lazy"
      decoding="async"
    />
  );
}
