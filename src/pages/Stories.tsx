import { motion } from "framer-motion";
import { stories } from "@/data/stories";
import { useLanguage } from "@/i18n/LanguageContext";
import { StoryCard } from "@/components/common/StoryCard";
import { AdSlot } from "@/components/ads/AdSlot";
import styles from "./Stories.module.css";

export default function Stories() {
  const { t } = useLanguage();

  return (
    <div className={`container ${styles.page}`}>
      <h1 className={styles.title}>{t.storiesPage.title}</h1>
      <p className={styles.subtitle}>{t.storiesPage.subtitle}</p>

      <div className={styles.grid}>
        {stories.map((story, i) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.05 }}
          >
            <StoryCard story={story} />
          </motion.div>
        ))}
      </div>

      <AdSlot placementKey="stories-feed-native" />
    </div>
  );
}
