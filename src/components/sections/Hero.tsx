"use client";

import { motion } from "motion/react";
import { book, pillars } from "@/content/book";
import { BookCover } from "../BookCover";
import { HandArrow, Sparkle, SunBurst } from "../illustrations";
import { BuyButton } from "../ui";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
      <p
        aria-hidden
        className="pointer-events-none absolute -right-10 top-16 font-deva text-[22rem] leading-none text-transparent select-none md:text-[30rem]"
        style={{ WebkitTextStroke: "1.5px rgba(200,54,27,.12)" }}
      >
        हनुमान
      </p>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink-soft"
          >
            <Sparkle className="h-3 w-3 text-haldi" />
            {book.title} · by {book.publisher}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="font-display text-[3.2rem] leading-[0.98] font-medium tracking-tight md:text-[5.4rem]"
          >
            Little hands,
            <br />
            <span className="relative inline-block italic text-sindoor">
              big devotion.
              <svg viewBox="0 0 300 20" className="absolute -bottom-3 left-0 w-full" aria-hidden>
                <motion.path
                  d="M3 14 C80 4, 200 4, 297 12"
                  stroke="var(--color-haldi)"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, delay: 0.8, ease }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="mt-9 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
          >
            The Hanuman Chalisa you grew up with, made for your child to <em>understand</em>, not just recite.
            Every chaupai comes with a simple meaning, word-by-word explanations, questions for you to ask, and a
            fun activity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <BuyButton>Get your copy on Amazon</BuyButton>
            <a href="#inside" className="font-semibold underline decoration-haldi decoration-2 underline-offset-8 hover:text-sindoor">
              See the real pages
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 flex max-w-lg flex-wrap items-center gap-x-3 gap-y-2 border-t border-ink/15 pt-6 font-display text-xl"
          >
            {pillars.map((p, i) => (
              <li key={p.name} className="flex items-center gap-3">
                {p.name}
                {i < pillars.length - 1 && <Sparkle className="h-2.5 w-2.5 text-haldi" />}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative mx-auto w-full max-w-[340px] md:col-span-5 md:max-w-none">
          <SunBurst className="absolute -top-16 left-1/2 w-[130%] -translate-x-1/2 animate-spin-slow opacity-30" rays={28} />
          <motion.div
            initial={{ opacity: 0, rotate: -1, y: 40 }}
            animate={{ opacity: 1, rotate: -5, y: 0 }}
            whileHover={{ rotate: -1, y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
            className="relative mx-auto w-[82%]"
          >
            <BookCover />
          </motion.div>
          <div className="absolute -bottom-14 -left-2 flex items-end gap-1 text-ink-soft md:-left-16">
            <HandArrow className="h-14 w-20 -scale-x-100 rotate-[200deg]" />
            <p className="font-hand max-w-[170px] -rotate-3 text-2xl leading-6">made for little hands (and busy parents)</p>
          </div>
        </div>
      </div>
    </header>
  );
}
