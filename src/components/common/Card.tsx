import type { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  as?: "div" | "article";
}

export function Card({ children, onClick, as = "article" }: CardProps) {
  const Component = motion[as];
  return (
    <Component
      className={styles.card}
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </Component>
  );
}
