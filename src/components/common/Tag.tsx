import type { ReactNode } from "react";
import styles from "./Tag.module.css";

interface TagProps {
  children: ReactNode;
  tone?: "primary" | "accent" | "neutral";
}

export function Tag({ children, tone = "neutral" }: TagProps) {
  return <span className={`${styles.tag} ${styles[tone]}`}>{children}</span>;
}
