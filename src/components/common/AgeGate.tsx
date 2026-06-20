import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { motion } from "framer-motion";
import { brand } from "@/config/brand.config";
import { useAgeVerified } from "@/hooks/useAgeVerified";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./AgeGate.module.css";

/**
 * Blocks the entire site behind an 18+ confirmation until the visitor
 * confirms, then never shows again on that device (see useAgeVerified).
 * Mount this once, at the top of <App />, above all routes.
 */
export function AgeGate() {
  const { isVerified, confirm } = useAgeVerified();
  const { t } = useLanguage();

  if (isVerified) return null;

  return (
    <Dialog open={!isVerified} onClose={() => {}} className={styles.root}>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        aria-hidden="true"
      />
      <div className={styles.wrapper}>
        <DialogPanel className={styles.panelWrapper}>
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <DialogTitle className={styles.title}>
              {brand.name} {t.ageGate.heading}
            </DialogTitle>
            <p className={styles.body}>{t.brand.ageDisclaimer}</p>
            <p className={styles.body}>{t.ageGate.confirmAge}</p>
            <div className={styles.actions}>
              <button className={styles.confirm} onClick={confirm}>
                {t.ageGate.confirmButton}
              </button>
              <a className={styles.leave} href="https://www.google.com">
                {t.ageGate.leaveButton}
              </a>
            </div>
          </motion.div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
