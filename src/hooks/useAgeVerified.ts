import { useEffect, useState } from "react";

const STORAGE_KEY = "masaledar:age-verified";

/**
 * Tracks whether the visitor has confirmed they're 18+ this session/device.
 * Persisted to localStorage so returning visitors aren't re-gated every visit.
 */
export function useAgeVerified() {
  const [isVerified, setIsVerified] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  });

  useEffect(() => {
    if (isVerified) {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
  }, [isVerified]);

  const confirm = () => setIsVerified(true);

  return { isVerified, confirm };
}
