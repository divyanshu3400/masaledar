import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { motion } from "framer-motion";
import { useAgeVerified } from "@/hooks/useAgeVerified";
import { useInterstitialAd } from "@/hooks/useInterstitialAd";
import { useLanguage } from "@/i18n/LanguageContext";
import { AdSlot } from "./AdSlot";
import styles from "./Interstitial.module.css";

/**
 * A once-per-session ad overlay. Only renders after the age gate has
 * been cleared, so a first-time visitor sees age gate → interstitial →
 * site, in that order, never both at once.
 */
export function Interstitial() {
  const { isVerified } = useAgeVerified();
  const { shouldShow, dismiss } = useInterstitialAd();
  const { t } = useLanguage();

  if (!isVerified || !shouldShow) return null;

  return (
    <Dialog open={shouldShow} onClose={dismiss} className={styles.root}>
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
            <DialogTitle className={styles.label}>
              {t.interstitial.label}
            </DialogTitle>
            <AdSlot placementKey="interstitial-ad" />
            <button className={styles.close} onClick={dismiss}>
              {t.interstitial.close}
            </button>
          </motion.div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
