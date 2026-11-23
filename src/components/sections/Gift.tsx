import Image from "next/image";
import { book, occasions } from "@/content/book";
import { BookCover } from "../BookCover";
import { BuyButton, Kicker, Reveal } from "../ui";

export function Gift() {
  return (
    <section className="px-5 md:px-8">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 overflow-hidden rounded-[2rem] bg-sindoor px-8 py-16 text-paper md:grid-cols-12 md:px-16 md:py-20">
        <div className="md:col-span-7">
          <Kicker light>A meaningful gift for every occasion</Kicker>
          <h2 className="font-display text-4xl leading-tight font-medium md:text-5xl">
            Skip the plastic toy.
            <br />
            <span className="italic text-haldi-soft">Gift a blessing</span> they&apos;ll keep.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-paper/80">
            Timeless stories. Stronger values. Happier, kinder children. Grandparents approve of it, and kids actually use it.
          </p>
          <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {occasions.map((o) => (
              <li key={o.name} className="border-t border-paper/25 pt-3">
                <p className="font-display text-lg font-medium">{o.name}</p>
                <p className="text-sm text-paper/70">{o.note}</p>
              </li>
            ))}
          </ul>
          <BuyButton className="mt-10 bg-paper !text-sindoor shadow-[0_6px_0_var(--color-haldi)] hover:shadow-[0_8px_0_var(--color-haldi)]">
            Gift a copy
          </BuyButton>
        </div>

        <Reveal className="relative mx-auto h-[380px] w-64 md:col-span-5 md:h-[440px] md:w-72">
          {book.backCoverImage && (
            <div className="absolute top-6 left-10 w-full rotate-[9deg] overflow-hidden rounded-r-xl rounded-l-[4px] shadow-2xl">
              <Image src={book.backCoverImage} alt="Back cover" width={988} height={1280} />
            </div>
          )}
          <div className="absolute top-0 left-0 w-full -rotate-3">
            <BookCover />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
