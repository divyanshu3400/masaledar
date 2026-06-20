import { useLanguage } from "@/i18n/LanguageContext";
import { locales, localeLabel } from "@/i18n/types";
import styles from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={styles.toggle} role="group" aria-label="Choose language">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={l === locale ? `${styles.option} ${styles.active}` : styles.option}
          aria-pressed={l === locale}
        >
          {localeLabel[l]}
        </button>
      ))}
    </div>
  );
}
