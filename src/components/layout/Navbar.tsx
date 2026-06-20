import { NavLink } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "@/config/routes.config";
import { brand } from "@/config/brand.config";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import styles from "./Navbar.module.css";

const navLinks = routes.filter((r) => r.showInNav);

export function Navbar() {
  const { t } = useLanguage();

  return (
    <Disclosure as="header" className={styles.header}>
      {({ open, close }) => (
        <>
          <div className={`container ${styles.bar}`}>
            <NavLink to="/" className={styles.brand}>
              {brand.name}
            </NavLink>

            <nav className={styles.desktopNav} aria-label="Primary">
              {navLinks.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                  }
                >
                  {route.label(t)}
                </NavLink>
              ))}
            </nav>

            <div className={styles.desktopToggle}>
              <LanguageToggle />
            </div>

            <DisclosureButton className={styles.menuButton} aria-label="Toggle menu">
              <span className={open ? styles.iconCross : styles.iconBars} />
            </DisclosureButton>
          </div>

          <AnimatePresence>
            {open && (
              <DisclosurePanel static aria-label="Primary mobile" as="div">
                <motion.nav
                  className={styles.mobileNav}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                >
                  {navLinks.map((route) => (
                    <NavLink
                      key={route.path}
                      to={route.path}
                      onClick={() => close()}
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.mobileLink} ${styles.linkActive}`
                          : styles.mobileLink
                      }
                    >
                      {route.label(t)}
                    </NavLink>
                  ))}
                  <div className={styles.mobileToggle}>
                    <LanguageToggle />
                  </div>
                </motion.nav>
              </DisclosurePanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
}
