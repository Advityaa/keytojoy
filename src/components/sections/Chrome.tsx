"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { book } from "@/content/book";
import { SunBurst } from "../illustrations";
import { BuyButton } from "../ui";

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 40));

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <SunBurst className="h-8 w-8" />
          <span className="font-display text-xl font-semibold italic">{book.publisher}</span>
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden gap-8 text-sm font-semibold md:flex">
            <a href="#inside" className="hover:text-sindoor">Inside the book</a>
            <a href="#author" className="hover:text-sindoor">The author</a>
            <a href="#faq" className="hover:text-sindoor">FAQ</a>
          </div>
          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-sindoor"
          >
            Buy now
          </a>
        </div>
      </div>
    </nav>
  );
}

export function StickyBuy() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 700));
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-between gap-3 rounded-2xl bg-ink p-3 pl-5 text-paper shadow-2xl md:hidden"
        >
          <p className="text-sm leading-tight">
            <span className="font-display block text-base italic">Hanuman Chalisa for Kids</span>
            <span className="text-paper/60">on Amazon</span>
          </p>
          <a href={book.amazonUrl} target="_blank" rel="noopener" className="rounded-xl bg-sindoor px-5 py-3 text-sm font-semibold">
            Buy now →
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32 text-center md:py-44">
      <SunBurst className="absolute top-1/2 left-1/2 w-[900px] max-w-none -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-20" rays={36} />
      <div className="relative mx-auto max-w-3xl px-5">
        <h2 className="font-display text-5xl leading-[1.05] font-medium md:text-7xl">
          The prayer you grew up with, <span className="italic text-sindoor">now in their little hands.</span>
        </h2>
        <p className="mt-8 text-lg text-ink-soft">Start tonight. Your future self, and their future self, will thank you.</p>
        <BuyButton className="mt-10">Order on Amazon</BuyButton>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-night py-14 text-paper/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 text-sm md:flex-row md:px-8">
        <div><p className="font-display text-xl text-paper italic">{book.publisher}</p><p className="text-xs">{book.publisherLine}</p></div>
        <p>
          Verse of the week, reels &amp; giveaways on{" "}
          <a href={book.instagram.url} target="_blank" rel="noopener" className="font-semibold text-haldi">
            Instagram {book.instagram.handle}
          </a>
        </p>
        <p>ISBN {book.isbn} · © {new Date().getFullYear()} {book.publisher}</p>
      </div>
    </footer>
  );
}
