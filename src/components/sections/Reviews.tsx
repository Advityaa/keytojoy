import { reviews } from "@/content/book";
import { Kicker, Reveal } from "../ui";

/** Renders nothing until real reviews are added in content/book.ts */
export function Reviews() {
  if (reviews.length === 0) return null;
  return (
    <section className="bg-paper-deep py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Kicker>From parents</Kicker>
        <div className="grid gap-10 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <blockquote className="font-display text-xl leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
              <p className="mt-4 font-semibold">{r.name}</p>
              <p className="text-sm text-ink-soft">{r.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
