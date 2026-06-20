export type Locale = "en" | "hi";

/**
 * Wraps any value with an English and a Hinglish (Hindi written in Roman
 * script, not Devanagari) version. Used for both UI strings and content
 * (joke punchlines, story paragraphs, etc.) so there's exactly one shape
 * for "this needs to exist in both languages" across the whole app.
 */
export type Localized<T> = Record<Locale, T>;

export const locales: Locale[] = ["en", "hi"];

export const localeLabel: Record<Locale, string> = {
  en: "EN",
  hi: "HI",
};
