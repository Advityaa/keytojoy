import { pillars } from "@/content/book";
import { Kicker, Reveal } from "../ui";

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-28 md:px-8 md:pt-36">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Kicker>How it works</Kicker>
          <h2 className="font-display text-4xl leading-tight font-medium md:text-5xl">
            Four little steps on <span className="italic text-sindoor">every page.</span>
          </h2>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 md:col-span-8">
          {pillars.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <li className={`h-full rounded-3xl p-7 ${p.color}`}>
                <span className="font-display text-sm text-ink-soft">0{i + 1}</span>
                <h3 className="font-display mt-6 text-3xl font-medium">{p.name}</h3>
                <p className="mt-2 text-ink-soft">{p.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
