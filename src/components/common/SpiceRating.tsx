import type { SpiceLevel } from "@/types/content";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./SpiceRating.module.css";

interface SpiceRatingProps {
  level: SpiceLevel;
  size?: "sm" | "md";
}

function ChiliIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      className={active ? styles.iconActive : styles.iconInactive}
    >
      <path
        fill="currentColor"
        d="M9.5 3c.6 1 .2 2-.4 2.7-1.7 1.9-3.8 4.6-3.8 8.1 0 4 2.8 7.2 6.7 7.2 4.3 0 7.5-3.4 7.5-7.7 0-3-1.4-4.9-2.7-6.2-.4-.4-.3-.9.2-1 .6-.1 1.6.1 2.3 1.1.4.5 1.1.3 1-.4-.3-2-1.9-4-4.3-4.4-.5-.1-.8.4-.5.8.4.6.3 1.3-.3 1.1C13.8 3.7 11.7 2 9.5 3z"
      />
    </svg>
  );
}

export function SpiceRating({ level, size = "md" }: SpiceRatingProps) {
  const { t } = useLanguage();
  const levelLabel: Record<SpiceLevel, string> = {
    1: t.spice.mild,
    2: t.spice.medium,
    3: t.spice.extraHot,
  };

  return (
    <div
      className={`${styles.row} ${size === "sm" ? styles.sm : ""}`}
      role="img"
      aria-label={`${levelLabel[level]}`}
    >
      {[1, 2, 3].map((i) => (
        <ChiliIcon key={i} active={i <= level} />
      ))}
      <span className={styles.text}>{levelLabel[level]}</span>
    </div>
  );
}
