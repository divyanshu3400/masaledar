import type { ContentCategory } from "@/types/content";

/**
 * Change the brand once, here. Nothing else in the app should hardcode
 * the site name or domain.
 *
 * Tagline, age disclaimer, and category labels live in
 * src/i18n/dictionaries.ts instead, since those need an English AND a
 * Hinglish version.
 */
export const brand = {
  name: "Masaledar",
  domain: "masaledar.example", // replace with your real domain before launch
};

/** Every category in the app. Labels come from the dictionary (t.categories[id]). */
export const categoryIds: ContentCategory[] = [
  "desi-shaadi",
  "office-gossip",
  "honeymoon",
  "one-liners",
  "long-distance",
  "roommates",
];
