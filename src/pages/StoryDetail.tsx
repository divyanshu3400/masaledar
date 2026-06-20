import { useParams, Link, Navigate } from "react-router-dom";
import { stories } from "@/data/stories";
import { useLanguage } from "@/i18n/LanguageContext";
import { SpiceRating } from "@/components/common/SpiceRating";
import { Tag } from "@/components/common/Tag";
import { AdSlot } from "@/components/ads/AdSlot";
import styles from "./StoryDetail.module.css";

export default function StoryDetail() {
  const { slug } = useParams();
  const { locale, t } = useLanguage();
  const story = stories.find((s) => s.slug === slug);

  if (!story) return <Navigate to="/stories" replace />;

  return (
    <div className={`container ${styles.page}`}>
      <Link to="/stories" className={styles.back}>
        {t.storyDetail.back}
      </Link>

      <div className={styles.layout}>
        <article className={styles.article}>
          <div className={styles.meta}>
            <Tag tone="primary">{t.categories[story.category]}</Tag>
            <span className={styles.readTime}>{t.readMinutes(story.readMinutes)}</span>
            <SpiceRating level={story.spice} size="sm" />
          </div>
          <h1 className={styles.title}>{story.title[locale]}</h1>
          {story.body[locale].map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </article>

        <aside className={styles.sidebar}>
          <AdSlot placementKey="story-detail-sidebar" />
        </aside>
      </div>
    </div>
  );
}
