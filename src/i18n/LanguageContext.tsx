import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Locale } from "./types";
import { dictionaries, type Dictionary } from "./dictionaries";

const STORAGE_KEY = "masaledar:locale";

interface LanguageContextValue {
  locale: Locale;
  t: Dictionary;
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "hi";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "hi" ? "hi" : "en";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = (next: Locale) => setLocaleState(next);
  const toggleLocale = () => setLocaleState((prev) => (prev === "en" ? "hi" : "en"));

  return (
    <LanguageContext.Provider
      value={{ locale, t: dictionaries[locale], toggleLocale, setLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

/** Access the current locale, its dictionary (`t`), and a toggle. */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
