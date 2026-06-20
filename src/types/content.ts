import type { Localized } from "@/i18n/types";

export type SpiceLevel = 1 | 2 | 3;

export type ContentCategory =
  | "desi-shaadi"
  | "office-gossip"
  | "honeymoon"
  | "one-liners"
  | "long-distance"
  | "roommates";

export interface Joke {
  id: string;
  category: ContentCategory;
  spice: SpiceLevel;
  setup?: Localized<string>;
  punchline: Localized<string>;
}

export interface Story {
  id: string;
  slug: string;
  title: Localized<string>;
  category: ContentCategory;
  spice: SpiceLevel;
  readMinutes: number;
  excerpt: Localized<string>;
  body: Localized<string[]>;
  publishedAt: string; // ISO date
}

