import Image from "next/image";
import { book } from "@/content/book";
import { Mountains, SunBurst } from "./illustrations";

/** Real cover if book.coverImage is set, otherwise a designed stand-in. */
export function BookCover({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[988/1280] overflow-hidden rounded-r-xl rounded-l-[4px] shadow-[-18px_28px_50px_-10px_rgba(80,30,10,.45)] ${className}`}
    >
      {book.coverImage ? (
        <Image src={book.coverImage} alt={`${book.title} cover`} fill className="object-cover" priority />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center bg-sindoor px-6 pt-8 text-center text-paper">
          <div className="absolute inset-3 rounded-md border border-haldi/60" />
          <SunBurst className="w-28 animate-spin-slow" />
          <p className="mt-3 font-deva text-xl text-haldi-soft">श्री हनुमान चालीसा</p>
          <h3 className="font-display mt-1 text-[2rem] leading-[0.95] font-semibold">
            Hanuman
            <br />
            Chalisa
            <span className="block text-lg font-normal italic opacity-90">for Kids</span>
          </h3>
          <p className="font-hand mt-2 text-2xl text-haldi-soft">Little Devotion</p>
          <Mountains className="absolute bottom-0 left-0 h-20 w-full text-sindoor-deep" />
          <p className="absolute bottom-5 text-[10px] tracking-[0.25em] uppercase opacity-80">{book.author}</p>
        </div>
      )}
      {/* spine shading */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-black/30 via-white/10 to-transparent" />
    </div>
  );
}
