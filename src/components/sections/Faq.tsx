"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { faqs } from "@/content/book";
import { Kicker } from "../ui";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Kicker>Good to know</Kicker>
          <h2 className="font-display text-4xl leading-tight font-medium md:text-5xl">
            Questions parents <span className="italic">ask us</span>
          </h2>
        </div>
        <div className="md:col-span-8">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-t border-ink/15 last:border-b">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-xl font-medium md:text-2xl">{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-3xl leading-none text-sindoor">
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-7 text-lg text-ink-soft">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
