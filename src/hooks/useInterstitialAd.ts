import { useEffect, useState } from "react";

const STORAGE_KEY = "masaledar:interstitial-shown";

/**
 * Shows the interstitial once per browser session (sessionStorage, not
 * localStorage — unlike the age gate, this should reappear on a fresh
 * session). Waits for age verification to be handled first by whoever
 * renders it (see App.tsx ordering).
 */
export function useInterstitialAd() {
  const [hasShown, setHasShown] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return window.sessionStorage.getItem(STORAGE_KEY) === "true";
  });

  useEffect(() => {
    if (hasShown) {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
    }
  }, [hasShown]);

  const dismiss = () => setHasShown(true);

  return { shouldShow: !hasShown, dismiss };
}
