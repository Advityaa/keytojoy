"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { verses } from "@/content/book";
import { Kicker } from "../ui";

export function VerseExplorer() {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const v = verses[i];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="inside" className="bg-paper-deep py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Kicker>Open the book</Kicker>
            <h2 className="font-display max-w-xl text-4xl leading-tight font-medium md:text-5xl">
              One chaupai. One page. <span className="italic">Everything</span> a child needs to understand it.
            </h2>
          </div>
          <div role="tablist" className="flex flex-wrap gap-2">
            {verses.map((x, idx) => (
              <button
                key={x.id}
                role="tab"
                aria-selected={idx === i}
                onClick={() => setI(idx)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  idx === i ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-white"
                }`}
              >
                <span className="opacity-60">Chaupai {x.chaupai} · </span>
                {x.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-12">
          {/* the real page */}
          <div className="md:col-span-5">
            <AnimatePresence mode="wait">
              <motion.button
                key={v.id}
                onClick={() => setZoom(true)}
                initial={{ opacity: 0, rotate: -4, y: 20 }}
                animate={{ opacity: 1, rotate: -2, y: 0 }}
                exit={{ opacity: 0, rotate: 2, y: -10 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative block w-full cursor-zoom-in overflow-hidden rounded-lg bg-white p-2 shadow-[0_30px_60px_-20px_rgba(80,40,10,.45)]"
                aria-label={`Enlarge page ${v.page}`}
              >
                <Image src={v.image} alt={`Page ${v.page}, Chaupai ${v.chaupai}`} width={1000} height={1280} className="rounded" />
                <span className="absolute right-4 bottom-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-paper">
                  Tap to enlarge
                </span>
              </motion.button>
            </AnimatePresence>
            <p className="font-hand mt-5 text-center text-2xl text-ink-soft">page {v.page}, straight from the book</p>
          </div>

          {/* anatomy of the page */}
          <AnimatePresence mode="wait">
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4 }}
              className="space-y-5 md:col-span-7"
            >
              <Block n="1" label="Read the chaupai">
                <p className="font-deva text-3xl leading-relaxed whitespace-pre-line text-sindoor">{v.deva}</p>
              </Block>

              <Block n="2" label="A Thought To Treasure">
                <p className="font-display text-xl leading-relaxed md:text-2xl">{v.thought}</p>
              </Block>

              {v.glossary.length > 0 && (
                <Block n="3" label="Let's Understand">
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
                    {v.glossary.map(([hi, en]) => (
                      <div key={hi} className="border-b border-dashed border-ink/15 pb-2">
                        <dt className="font-deva text-lg text-sindoor">{hi}</dt>
                        <dd className="text-sm text-ink-soft">{en}</dd>
                      </div>
                    ))}
                  </dl>
                </Block>
              )}

              {v.parentCorner.length > 0 && (
                <Block n="3" label="Parent Corner · Let's talk together">
                  <ul className="space-y-1">
                    {v.parentCorner.map((q) => (
                      <li key={q} className="font-hand text-[1.7rem] leading-8">“{q}”</li>
                    ))}
                  </ul>
                </Block>
              )}

              <Block n="4" label={v.activity.title} accent>
                <p className="text-lg">{v.activity.body}</p>
              </Block>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(false)}
            className="fixed inset-0 z-[90] flex cursor-zoom-out items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          >
            <motion.div initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative h-[90vh] w-full max-w-[700px]">
              <Image src={v.image} alt={`Page ${v.page}`} fill className="object-contain" sizes="700px" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Block({ n, label, accent, children }: { n: string; label: string; accent?: boolean; children: React.ReactNode }) {
  return (
    <div className={`rounded-2xl p-6 md:p-7 ${accent ? "border-2 border-dashed border-haldi bg-haldi-soft/30" : "bg-[#fffaf1]"}`}>
      <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-sindoor uppercase">
        <span className="font-display grid h-6 w-6 place-items-center rounded-full bg-sindoor text-[11px] text-paper">{n}</span>
        {label}
      </p>
      {children}
    </div>
  );
}
