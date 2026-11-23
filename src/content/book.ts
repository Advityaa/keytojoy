// ─────────────────────────────────────────────────────────────
//  All site copy & facts live here. Edit this file, not the components.
//  Anything wrapped in [brackets] is a placeholder to confirm/replace.
// ─────────────────────────────────────────────────────────────

export const book = {
  title: "Hanuman Chalisa for Kids",
  tagline: "Little hands, Big Devotion",
  publisher: "Key to Joy",
  publisherLine: "Books for a Kinder, Brighter Tomorrow",
  publisherAbout:
    "We create meaningful books for children that build values, curiosity and a lifelong love for our culture and stories.",
  siteUrl: "https://www.keytojoy.com",
  isbn: "978-93-6123-790-4",
  author: "[Author Name]",
  amazonUrl: "https://www.amazon.in/dp/936123790X",
  instagram: { handle: "@[yourhandle]", url: "https://instagram.com/" },
  whatsappUrl: "https://wa.me/91XXXXXXXXXX", // TODO
  ages: "[4–10]", // TODO: confirm
  metaDescription:
    "Hanuman Chalisa for Kids by Key to Joy: every chaupai with a simple meaning, word-by-word understanding, parent-corner questions and fun activities.",

  coverImage: "/images/cover.jpg" as string | null,
  backCoverImage: "/images/back-cover.jpg" as string | null,
  authorPhoto: null as string | null, // e.g. "/images/author.jpg"
};

/** The four promises printed on the back cover */
export const pillars = [
  { name: "Read", body: "Child-friendly Hindi text with a simple meaning.", color: "bg-[#f9d3dc]" },
  { name: "Connect", body: "Relate each verse to beautiful stories and real-life values.", color: "bg-[#cfe6fb]" },
  { name: "Activities", body: "Fun and engaging puzzles, questions and activities.", color: "bg-[#d9efc6]" },
  { name: "Understand", body: "Helps children grow with courage, kindness, devotion and humility.", color: "bg-[#fde3b5]" },
];

/** Real spreads from the book, used in the "Open the book" explorer */
export const verses = [
  {
    id: "c1",
    chaupai: 1,
    page: 5,
    tab: "Jai Hanuman",
    image: "/images/chaupai-01.jpg",
    deva: "जय हनुमान ज्ञान गुण सागर।",
    thought: "Victory to Hanuman, who is an ocean of wisdom and good qualities.",
    glossary: [] as [string, string][],
    parentCorner: [
      "What is something special you love about your family?",
      "How can you show your family that you care?",
    ],
    activity: {
      title: "Build Hanuman Ji's Crown!",
      body: "Trace the crown and colour each gem. Every gem is one गुण: दयालु (kind), ज्ञानी (wise), बहादुर (brave), सहायक (helpful)…",
    },
  },
  {
    id: "c4",
    chaupai: 4,
    page: 11,
    tab: "Kanchan baran",
    image: "/images/chaupai-04.jpg",
    deva: "कंचन बरन बिराज सुबेसा।\nकानन कुंडल कुंचित केसा॥",
    thought:
      "Hanuman Ji has a shining golden body, beautiful clothes, golden earrings and curly hair. His appearance reminds us that the goodness within us shines on the outside too.",
    glossary: [
      ["कंचन", "Golden"],
      ["सुबेसा", "Beautiful clothes"],
      ["कानन कुंडल", "Earrings in ear"],
      ["कुंचित केसा", "Curly hair"],
    ] as [string, string][],
    parentCorner: [] as string[],
    activity: {
      title: "Decorate Hanuman Ji!",
      body: "Draw a line to match each ornament (crown, earrings, necklace, gada) to where it belongs.",
    },
  },
  {
    id: "c16",
    chaupai: 16,
    page: 29,
    tab: "Tum upkar",
    image: "/images/chaupai-16.jpg",
    deva: "तुम उपकार सुग्रीवहि कीन्हा।\nराम मिलाय राज पद दीन्हा॥",
    thought: "Hanuman Ji helped Sugreev meet Lord Ram. Lord Ram helped Sugreev get his kingdom back.",
    glossary: [
      ["उपकार", "Kind help"],
      ["सुग्रीवहि", "Sugreev"],
      ["राम मिलाय", "Helped him meet Lord Ram"],
      ["राज पद", "Kingdom"],
      ["दीन्हा", "Gave"],
    ] as [string, string][],
    parentCorner: [] as string[],
    activity: {
      title: "Activity Time!",
      body: "A friend drops books. Grandma is carrying a bag. A friend is sad. Circle the best way to help.",
    },
  },
];

export const worries = [
  {
    lead: "You still hum the Chalisa without thinking.",
    rest: "Your Dadi taught you. Now you want it to live on in your child, not just in your memory.",
  },
  {
    lead: "But Awadhi verses can sound like a puzzle,",
    rest: "to a six-year-old, and if we're honest, sometimes to us too. Reciting without understanding rarely sticks.",
  },
  {
    lead: "And 'quality time' has quietly become screen time.",
    rest: "You'd trade it in a heartbeat for a few calm minutes together that actually mean something.",
  },
];

export const values = [
  { deva: "साहस", word: "Courage", line: "Big hearts can do big things, even little ones." },
  { deva: "दया", word: "Kindness", line: "Helping a friend who drops their books, just like Hanuman ji helped Sugreev." },
  { deva: "ईमानदारी", word: "Honesty", line: "The goodness inside us shines on the outside too." },
  { deva: "विनम्रता", word: "Humility", line: "The strongest one is also the most humble." },
];

/** One page, five steps, exactly how each spread is laid out */
export const ritual = [
  { time: "8:00", title: "Read the chaupai", body: "Say the verse together, slowly. The big, clear Hindi text is made for small fingers to follow." },
  { time: "8:02", title: "A Thought To Treasure", body: "One short, simple meaning, so they understand what they just said instead of only repeating it." },
  { time: "8:04", title: "Let's Understand", body: "Word-by-word meanings. उपकार = kind help. Suddenly the Chalisa isn't a puzzle any more." },
  { time: "8:06", title: "Parent Corner", body: "Two gentle questions to ask your child. Listen. You'll be surprised what they say." },
  { time: "8:10", title: "Activity Time", body: "A puzzle, colouring or matching game. Save it for the morning if it's lights-out." },
];

export const occasions = [
  { name: "Birthdays", note: "A thoughtful, memorable gift" },
  { name: "Diwali gifting", note: "Spread devotion, learning & joy" },
  { name: "Return gifts", note: "School events & functions" },
  { name: "Religious occasions", note: "Puja, housewarming, festivals" },
  { name: "Children & families", note: "Nurtures values and culture" },
  { name: "Families abroad", note: "Keep the little ones connected to their roots" },
];

export const faqs = [
  {
    q: "What age is it for?",
    a: "[Confirm] Best for ages 4–10. Younger children enjoy the pictures and activities with a parent; older children can read the Hindi and meanings on their own.",
  },
  {
    q: "Which language is it in?",
    a: "Each chaupai is in Hindi (Devanagari), with a simple English meaning (A Thought To Treasure) and word-by-word explanations (Let's Understand). It works for families in India and abroad.",
  },
  {
    q: "Is the full Chalisa included?",
    a: "[Confirm] Yes. Every chaupai gets its own illustrated page, with meanings, parent-corner questions and an activity.",
  },
  {
    q: "What kind of activities are inside?",
    a: "Tracing and colouring (Build Hanuman Ji's crown), matching (Decorate Hanuman Ji), and real-life value games like 'circle the best way to help a friend'.",
  },
  {
    q: "We're not very religious. Is it still for us?",
    a: "Absolutely. Many parents use it to share culture, language and values like courage, kindness, honesty and humility, the things every child should grow up with.",
  },
  {
    q: "Can we order in bulk?",
    a: "Yes, for schools, temples, satsangs and return gifts. Message us on WhatsApp or Instagram.",
  },
];

// Leave empty until you have REAL reviews (Amazon or Instagram DMs, with permission).
export const reviews: { quote: string; name: string; detail: string }[] = [];
