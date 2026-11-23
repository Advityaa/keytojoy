import Image from "next/image";
import { book } from "@/content/book";
import { Kicker, Reveal } from "../ui";

export function Author() {
  return (
    <section id="author" className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
      <div className="grid items-center gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <figure className="mx-auto w-[280px] rotate-[-3deg] bg-white p-3 pb-14 shadow-[0_20px_40px_-12px_rgba(60,30,10,.35)]">
            <div className="hatch relative flex aspect-square items-center justify-center text-sm text-ink-soft">
              {book.authorPhoto ? <Image src={book.authorPhoto} alt={book.author} fill className="object-cover" /> : "Author photo"}
            </div>
            <figcaption className="font-hand mt-3 text-center text-2xl">{book.author}</figcaption>
          </figure>
        </Reveal>

        <Reveal className="md:col-span-7" delay={0.1}>
          <Kicker>A note from the author</Kicker>
          <div className="font-display space-y-5 text-xl leading-relaxed md:text-2xl">
            <p>
              &ldquo;[Placeholder, in her own voice] I grew up listening to my grandmother recite the Chalisa every evening.
            </p>
            <p className="text-ink-soft">
              When I looked for a version a child could truly <em>understand</em>, with meanings, conversations and
              something to do with their hands, I couldn&apos;t find one. So I made it.&rdquo;
            </p>
          </div>
          <p className="font-hand mt-8 text-4xl text-sindoor">— {book.author}</p>

          <div className="mt-12 flex items-start gap-5 border-t border-ink/15 pt-8">
            <div className="font-display grid h-14 w-14 shrink-0 place-items-center rounded-full bg-haldi-soft text-lg font-semibold text-sindoor">
              KJ
            </div>
            <div>
              <p className="font-display text-xl font-medium">
                Published by {book.publisher}
                <span className="ml-2 text-sm font-normal text-ink-soft italic">{book.publisherLine}</span>
              </p>
              <p className="mt-1 text-ink-soft">{book.publisherAbout}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
