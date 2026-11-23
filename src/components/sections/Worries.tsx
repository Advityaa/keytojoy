import { worries } from "@/content/book";
import { Kicker, Reveal } from "../ui";

const devaNums = ["०१", "०२", "०३"];

export function Worries() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <Kicker>For the parent who</Kicker>
            <h2 className="font-display text-4xl leading-tight font-medium md:text-5xl">
              wants to pass on their roots, but isn&apos;t sure <span className="italic text-sindoor">where to begin.</span>
            </h2>
          </div>
        </div>

        <ol className="md:col-span-7">
          {worries.map((w, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <li className="grid grid-cols-[4rem_1fr] gap-4 border-t border-ink/15 py-10 last:border-b">
                <span className="font-deva text-3xl text-haldi">{devaNums[i]}</span>
                <p className="text-xl leading-relaxed md:text-2xl">
                  <span className="font-display font-medium">{w.lead}</span>{" "}
                  <span className="text-ink-soft">{w.rest}</span>
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal>
        <p className="font-display mx-auto mt-24 max-w-4xl text-center text-3xl leading-snug md:text-[2.6rem]">
          <span className="italic">Hanuman Chalisa for Kids</span> is the bridge between the prayer{" "}
          <span className="bg-[linear-gradient(transparent_62%,var(--color-haldi-soft)_62%)]">you grew up with</span> and the
          child <span className="bg-[linear-gradient(transparent_62%,var(--color-haldi-soft)_62%)]">you&apos;re raising.</span>
        </p>
      </Reveal>
    </section>
  );
}
