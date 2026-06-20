import { NavLink } from "react-router-dom";
import { routes } from "@/config/routes.config";
import { brand } from "@/config/brand.config";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Footer.module.css";

const footerLinks = routes.filter((r) => r.showInFooter);

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.brand}>{brand.name}</p>
        <p className={styles.disclaimer}>{t.brand.ageDisclaimer}</p>
        <nav className={styles.links} aria-label="Footer">
          {footerLinks.map((route) => (
            <NavLink key={route.path} to={route.path} className={styles.link}>
              {route.label(t)}
            </NavLink>
          ))}
        </nav>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {brand.name}. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
