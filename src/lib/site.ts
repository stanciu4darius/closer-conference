/**
 * Single source of truth for CLOSER Conference 2026 content & config.
 * Keeping copy here makes the components clean and the text easy to update.
 */

export const SITE = {
  name: "CLOSER Conference 2026",
  shortName: "CLOSER",
  tagline: "Conferință de tineret creștin",
  dateLabel: "Sâmbătă, 21 Noiembrie 2026",
  dateShort: "21 NOIEMBRIE 2026",
  dateISO: "2026-11-21",
  city: "Beclean",
  venue: "Biserica Sfânta Treime",
  registrationUrl: "https://forms.gle/o3bdvoAnjM8wZqbM9",
  // Public URL of the deployed site (used for SEO/OpenGraph canonical tags).
  url: "https://conferintacloser.ro",
} as const;

/**
 * The exact Romanian verse as printed on the official banner.
 * Romanian typographic quotes are preserved intentionally („ … ").
 */
export const VERSE = {
  // Typographic quotes („ „ … ” ") preserved exactly as on the banner.
  text: "„Inima îmi spune din partea Ta: „Caută fața Mea!”. DOAMNE, fața Ta o caut!”",
  reference: "Psalmii 27:8",
} as const;

export const SCHEDULE = [
  {
    time: "15:00",
    title: "Socializare & Cafea",
    description:
      "Ne întâlnim devreme — timp de conexiune, cafea caldă și conversații bune înainte să începem.",
  },
  {
    time: "16:00",
    title: "Conferința CLOSER",
    description:
      "Inima serii: închinare, Cuvânt și un spațiu în care ne apropiem de fața lui Dumnezeu.",
  },
] as const;

export type LineupItem = {
  label: string;
  status: string;
  hint: string;
  /** When present, the card is a reveal (image poster) instead of a mystery. */
  image?: string;
  /** The revealed name shown alongside the poster. */
  name?: string;
  /** Alt text for the reveal image. */
  alt?: string;
};

export const LINEUP: LineupItem[] = [
  {
    label: "Message",
    status: "Stay Tuned",
    hint: "Vorbitorul va fi anunțat în curând.",
  },
  {
    label: "Worship",
    status: "Revelat",
    hint: "Echipa de închinare Revel — Simone Asăndoaie & Band — ne conduce în închinare.",
    name: "Revel · Simone Asăndoaie & Band",
    image: "/images/worship-revel.jpeg",
    alt: "Echipa de închinare Revel — Simone Asăndoaie & Band — la CLOSER Conference 2026, 21 Noiembrie 2026, Biserica Sfânta Treime Beclean.",
  },
];

export const NAV_LINKS = [
  { label: "Viziune", href: "#viziune" },
  { label: "Lineup", href: "#lineup" },
  { label: "Program", href: "#program" },
  { label: "Locație", href: "#locatie" },
] as const;

/**
 * Prefix an absolute public-asset path with the configured base path.
 * Needed for assets referenced outside of <Image> (e.g. CSS backgrounds,
 * <link> tags). <Image> and <Link> already handle the base path internally.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}
