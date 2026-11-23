import { ritual } from "@/content/book";
import { Diya, Moon } from "../illustrations";
import { Kicker, Reveal } from "../ui";

export function Ritual() {
  return (
    <section className="relative overflow-hidden bg-night py-28 text-paper md:py-36">
      {Array.from({ length: 40 }).map((_, s) => (
        <span
          key={s}
          className="absolute animate-twinkle rounded-full bg-haldi-soft"
          style={{
            left: `${(s * 41) % 100}%`,
            top: `${(s * 67) % 100}%`,
            width: s % 3 === 0 ? 3 : 2,
            height: s % 3 === 0 ? 3 : 2,
            animationDelay: `${(s % 7) * 0.45}s`,
          }}
        />
      ))}
      <Moon className="absolute top-14 right-[8%] w-24 md:w-36" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Kicker light>The bedtime ritual</Kicker>
          <h2 className="font-display text-4xl leading-tight font-medium md:text-5xl">
            Ten minutes that become <span className="italic text-haldi">their favourite</span> part of the day.
          </h2>
          <p className="mt-6 max-w-md text-lg text-paper/70">
            No prep, no screens, no lecture. Just you, your child, and one page.
          </p>
          <Diya className="mt-12 w-28" />
        </div>

        <ol className="relative md:col-span-7">
          <div className="absolute top-3 bottom-3 left-[3.25rem] border-l-2 border-dashed border-haldi/40" />
          {ritual.map((r, i) => (
            <Reveal key={r.time} delay={i * 0.08}>
              <li className="relative grid grid-cols-[6.5rem_1fr] gap-4 pb-12 last:pb-0">
                <span className="font-display relative z-10 w-fit rounded-full bg-night-soft px-3 py-1 text-xl text-haldi tabular-nums">
                  {r.time}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium">{r.title}</h3>
                  <p className="mt-2 text-paper/70">{r.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
