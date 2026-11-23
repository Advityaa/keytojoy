import { Sparkle } from "../illustrations";

const lines = [
  "जय हनुमान ज्ञान गुन सागर",
  "Courage",
  "राम दूत अतुलित बल धामा",
  "Kindness",
  "महाबीर बिक्रम बजरंगी",
  "Devotion",
  "संकट कटै मिटै सब पीरा",
  "Friendship",
];

export function Marquee() {
  const row = [...lines, ...lines];
  return (
    <div className="relative -rotate-1 overflow-hidden bg-sindoor py-5 text-paper shadow-lg">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className={i % 2 === 0 ? "font-deva text-2xl" : "font-display text-2xl italic text-haldi-soft"}>{t}</span>
            <Sparkle className="h-4 w-4 text-haldi" />
          </span>
        ))}
      </div>
    </div>
  );
}
