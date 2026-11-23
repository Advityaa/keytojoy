// Hand-built SVG motifs. Stand-ins until the book's own illustrations are dropped in.
type P = { className?: string };

export function SunBurst({ className, rays = 18 }: P & { rays?: number }) {
  const items = Array.from({ length: rays }, (_, i) => {
    const long = i % 2 === 0;
    return (
      <path
        key={i}
        d={long ? "M100 6 L106 44 L94 44 Z" : "M100 22 L104 46 L96 46 Z"}
        transform={`rotate(${(360 / rays) * i} 100 100)`}
      />
    );
  });
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <g fill="var(--color-haldi)">{items}</g>
      <circle cx="100" cy="100" r="46" fill="var(--color-haldi)" />
      <circle cx="100" cy="100" r="36" fill="none" stroke="var(--color-sindoor)" strokeWidth="2" strokeDasharray="2 5" />
    </svg>
  );
}

export function Moon({ className }: P) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <path d="M62 10a40 40 0 1 0 28 62A34 34 0 0 1 62 10Z" fill="var(--color-haldi-soft)" />
      <circle cx="44" cy="58" r="4" fill="var(--color-haldi)" opacity=".5" />
      <circle cx="32" cy="40" r="2.5" fill="var(--color-haldi)" opacity=".5" />
    </svg>
  );
}

export function Sparkle({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 0c.6 6.5 5.5 11.4 12 12-6.5.6-11.4 5.5-12 12-.6-6.5-5.5-11.4-12-12C6.5 11.4 11.4 6.5 12 0Z" fill="currentColor" />
    </svg>
  );
}

export function Mountains({ className }: P) {
  return (
    <svg viewBox="0 0 400 120" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M0 120 L70 50 L120 85 L190 20 L260 80 L310 45 L400 110 L400 120Z" fill="currentColor" opacity=".55" />
      <path d="M0 120 L50 85 L110 105 L170 65 L240 110 L320 75 L400 120Z" fill="currentColor" />
    </svg>
  );
}

export function Mountain({ className }: P) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <path d="M20 160 L90 50 L120 95 L140 70 L185 160Z" fill="var(--color-leaf)" />
      <path d="M90 50 L105 74 L96 70 L88 80 L80 66Z" fill="var(--color-paper)" />
      {[[70, 130], [110, 140], [140, 125], [95, 110], [125, 150], [60, 150]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="var(--color-haldi)" />
      ))}
      <path d="M20 160 H185" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" />
      <path d="M150 40c8 2 14 8 16 16-8-2-14-8-16-16Z" fill="var(--color-leaf)" />
      <path d="M160 30c6 0 11 4 13 10-6 0-11-4-13-10Z" fill="var(--color-leaf)" opacity=".6" />
    </svg>
  );
}

export function Gada({ className }: P) {
  return (
    <svg viewBox="0 0 60 200" className={className} aria-hidden>
      <rect x="26" y="70" width="8" height="120" rx="4" fill="currentColor" />
      <circle cx="30" cy="190" r="7" fill="currentColor" />
      <ellipse cx="30" cy="40" rx="26" ry="34" fill="currentColor" />
      <path d="M6 32 H54 M5 48 H55" stroke="var(--color-haldi)" strokeWidth="3" />
      <path d="M30 0 L35 8 H25Z" fill="currentColor" />
    </svg>
  );
}

export function Diya({ className }: P) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden>
      <path d="M60 8c10 14 12 26 0 38C48 34 50 22 60 8Z" fill="var(--color-haldi)" />
      <path d="M60 22c5 8 5 14 0 20-5-6-5-12 0-20Z" fill="var(--color-sindoor)" />
      <path d="M8 56h104c-6 22-28 34-52 34S14 78 8 56Z" fill="var(--color-sindoor)" />
      <path d="M22 66c12 6 64 6 76 0" stroke="var(--color-haldi)" strokeWidth="2.5" fill="none" strokeDasharray="1 6" strokeLinecap="round" />
    </svg>
  );
}

export function HandArrow({ className }: P) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M110 8C80 10 40 22 22 62" />
      <path d="M14 48l8 16 14-10" />
    </svg>
  );
}

export function VerseIllo({ kind, className }: P & { kind: "sun" | "mountain" | "moon" }) {
  if (kind === "sun") return <SunBurst className={className} />;
  if (kind === "mountain") return <Mountain className={className} />;
  return <Moon className={className} />;
}
