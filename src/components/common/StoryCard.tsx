import { useNavigate } from "react-router-dom";
import type { Story } from "@/types/content";
import { useLanguage } from "@/i18n/LanguageContext";
import { SpiceRating } from "./SpiceRating";
import { Tag } from "./Tag";
import { Card } from "./Card";
import styles from "./StoryCard.module.css";

export function StoryCard({ story }: { story: Story }) {
  const navigate = useNavigate();
  const { locale, t } = useLanguage();

  return (
    <Card onClick={() => navigate(`/stories/${story.slug}`)}>
      <div className={styles.meta}>
        <Tag tone="primary">{t.categories[story.category]}</Tag>
        <span className={styles.readTime}>{t.readMinutes(story.readMinutes)}</span>
      </div>
      <h3 className={styles.title}>{story.title[locale]}</h3>
      <p className={styles.excerpt}>{story.excerpt[locale]}</p>
      <SpiceRating level={story.spice} size="sm" />
    </Card>
  );
}
