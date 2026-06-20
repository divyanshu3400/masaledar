import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Legal.module.css";

export default function Legal() {
  const { t } = useLanguage();

  return (
    <div className={`container ${styles.page}`}>
      <h1 className={styles.title}>{t.legal.title}</h1>
      <p className={styles.updated}>{t.legal.updated}</p>

      <section className={styles.section}>
        <h2 className={styles.heading}>{t.legal.ageHeading}</h2>
        <p className={styles.body}>{t.brand.ageDisclaimer}</p>
        <p className={styles.body}>{t.legal.fictionalNotice}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>{t.legal.privacyHeading}</h2>
        <p className={styles.body}>{t.legal.privacyBody}</p>
        <p className={styles.body}>{t.legal.privacyChildren}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>{t.legal.termsHeading}</h2>
        <p className={styles.body}>{t.legal.termsBody}</p>
      </section>
    </div>
  );
}
