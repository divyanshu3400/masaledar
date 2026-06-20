import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Joke } from "@/types/content";
import { useLanguage } from "@/i18n/LanguageContext";
import { SpiceRating } from "./SpiceRating";
import { Card } from "./Card";
import styles from "./JokeCard.module.css";

export function JokeCard({ joke }: { joke: Joke }) {
  const [revealed, setRevealed] = useState(false);
  const { locale, t } = useLanguage();

  return (
    <Card onClick={() => setRevealed((r) => !r)}>
      <div className={styles.top}>
        <SpiceRating level={joke.spice} size="sm" />
      </div>
      {joke.setup && <p className={styles.setup}>{joke.setup[locale]}</p>}
      <AnimatePresence mode="wait" initial={false}>
        {revealed ? (
          <motion.p
            key="punchline"
            className={styles.punchline}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            {joke.punchline[locale]}
          </motion.p>
        ) : (
          <motion.span
            key="prompt"
            className={styles.prompt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {t.jokeCard.tapToReveal}
          </motion.span>
        )}
      </AnimatePresence>
    </Card>
  );
}
