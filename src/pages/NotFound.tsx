import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./NotFound.module.css";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className={`container ${styles.page}`}>
      <h1 className={styles.title}>{t.notFound.title}</h1>
      <p className={styles.body}>{t.notFound.body}</p>
      <Link to="/" className={styles.link}>
        {t.notFound.link}
      </Link>
    </div>
  );
}
