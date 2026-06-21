import { useState, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { stories } from "@/data/stories";
import { useLanguage } from "@/i18n/LanguageContext";
import { SpiceRating } from "@/components/common/SpiceRating";
import { Tag } from "@/components/common/Tag";
import { AdSlot } from "@/components/ads/AdSlot";
import styles from "./StoryDetail.module.css";
// How many paragraphs to show in the preview before the gate
const PREVIEW_PARAGRAPHS = 2;

export default function StoryDetail() {
  const { slug } = useParams();
  const { locale, t } = useLanguage();
  const story = stories.find((s) => s.slug === slug);

  const [revealed, setRevealed] = useState(false);
  if (!story) return <Navigate to="/stories" replace />;

  const paragraphs = story.body[locale];
  const preview = paragraphs.slice(0, PREVIEW_PARAGRAPHS);
  const rest = paragraphs.slice(PREVIEW_PARAGRAPHS);

  return (
    <div className={`container ${styles.page}`}>
      <Link to="/stories" className={styles.back}>
        {t.storyDetail.back}
      </Link>

      <div className={styles.layout}>
        <article className={styles.article}>
          <div className={styles.meta}>
            <Tag tone="primary">{t.categories[story.category]}</Tag>
            <span className={styles.readTime}>
              {t.readMinutes(story.readMinutes)}
            </span>
            <SpiceRating level={story.spice} size="sm" />
          </div>

          <h1 className={styles.title}>{story.title[locale]}</h1>

          {/* Always-visible preview paragraphs */}
          {preview.map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}

          {/* Content gate */}
          {!revealed && rest.length > 0 && (
            <div className={styles.gate}>
              {/* Fade-out gradient over cut-off text */}
              <div className={styles.gateFade} aria-hidden="true" />

              <div className={styles.gateCard}>
                <span className={styles.gateIcon}>🔥</span>
                <p className={styles.gateText}>
                  {t.storyDetail.gateText ??
                    "The spicy part is just ahead…"}
                </p>
                <button
                  className={styles.continueBtn}
                >
                  {t.storyDetail.continueReading ?? "Continue Reading"}
                  <span className={styles.continueBtnArrow}>→</span>
                </button>
                <p className={styles.gateNote}>
                  {t.storyDetail.gateNote ??
                    "A short ad will play, then the full story unlocks."}
                </p>
              </div>
            </div>
          )}

          {/* Rest of story — revealed after interstitial */}
          <AnimatePresence>
            {revealed && rest.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {rest.map((paragraph, i) => (
                  <p key={i + PREVIEW_PARAGRAPHS} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </article>

        <aside className={styles.sidebar}>
          <AdSlot placementKey="story-detail-sidebar" />
        </aside>
      </div>
    </div>
  );
}