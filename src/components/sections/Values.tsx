import { values } from "@/content/book";
import { Gada } from "../illustrations";
import { Kicker, Reveal } from "../ui";

export function Values() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
      <div className="mb-16 grid items-end gap-8 md:grid-cols-2">
        <div>
          <Kicker>What they&apos;ll carry</Kicker>
          <h2 className="font-display text-4xl leading-tight font-medium md:text-5xl">
            Not a lesson. <span className="italic text-sindoor">A lifetime</span> of quiet strength.
          </h2>
        </div>
        <div className="flex items-end gap-6 md:justify-end">
          <p className="max-w-sm text-lg text-ink-soft">
            Hanuman ji is the hero children instantly love: strong, funny, fiercely loyal. Through him, the values you care about land naturally.
          </p>
          <Gada className="hidden h-32 shrink-0 text-sindoor md:block" />
        </div>
      </div>

      <div className="grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <Reveal key={v.word} delay={i * 0.08}>
            <div className="group h-full border-b border-ink/15 py-10 sm:px-6 lg:border-r lg:last:border-r-0 lg:first:pl-0">
              <p className="font-deva text-5xl text-sindoor transition-transform duration-500 group-hover:-translate-y-1">{v.deva}</p>
              <p className="font-display mt-5 text-2xl font-medium">{v.word}</p>
              <p className="mt-2 text-ink-soft">{v.line}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
