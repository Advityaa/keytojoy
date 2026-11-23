import { Author } from "@/components/sections/Author";
import { FinalCta, Footer, Nav, StickyBuy } from "@/components/sections/Chrome";
import { Faq } from "@/components/sections/Faq";
import { Gift } from "@/components/sections/Gift";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Reviews } from "@/components/sections/Reviews";
import { Pillars } from "@/components/sections/Pillars";
import { Ritual } from "@/components/sections/Ritual";
import { Values } from "@/components/sections/Values";
import { VerseExplorer } from "@/components/sections/VerseExplorer";
import { Worries } from "@/components/sections/Worries";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Worries />
        <Pillars />
        <VerseExplorer />
        <Values />
        <Ritual />
        <Author />
        <Reviews />
        <Gift />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyBuy />
    </>
  );
}
