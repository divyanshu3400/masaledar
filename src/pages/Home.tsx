import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categoryIds } from "@/config/brand.config";
import { useLanguage } from "@/i18n/LanguageContext";
import { jokes } from "@/data/jokes";
import { stories } from "@/data/stories";
import { JokeCard } from "@/components/common/JokeCard";
import { StoryCard } from "@/components/common/StoryCard";
import { AdSlot } from "@/components/ads/AdSlot";
import styles from "./Home.module.css";

const jokeOfTheDay = jokes[new Date().getDate() % jokes.length];
const featuredStories = stories.slice(0, 3);

export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      <section className={`container ${styles.hero}`}>
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {t.brand.tagline}
        </motion.h1>
        <motion.p
          className={styles.subhead}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          {t.home.subhead}
        </motion.p>

        <div className={styles.chips}>
          {categoryIds.map((id, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
            >
              <Link to="/stories" className={styles.chip}>
                {t.categories[id]}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <AdSlot placementKey="story-detail-sidebar" />


      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>{t.home.jokeOfDay}</h2>
        <div className={styles.jokeOfDay}>
          <JokeCard joke={jokeOfTheDay} />
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.home.featuredStories}</h2>
          <Link to="/stories" className={styles.viewAll}>
            {t.home.viewAll}
          </Link>
        </div>
        <div className={styles.grid}>
          {featuredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>
    </div>
  );
}
