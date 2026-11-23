"use client";

import { motion } from "motion/react";
import { book } from "@/content/book";

export function BuyButton({ children = "Buy on Amazon", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={book.amazonUrl}
      target="_blank"
      rel="noopener"
      className={`group inline-flex items-center gap-3 rounded-full bg-sindoor px-7 py-4 font-semibold text-paper shadow-[0_6px_0_var(--color-sindoor-deep)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_0_var(--color-sindoor-deep)] active:translate-y-1 active:shadow-[0_2px_0_var(--color-sindoor-deep)] ${className}`}
    >
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase ${light ? "text-haldi" : "text-sindoor"}`}>
      <span className={`h-px w-8 ${light ? "bg-haldi" : "bg-sindoor"}`} />
      {children}
    </p>
  );
}
