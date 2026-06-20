import { useEffect } from "react";
import { adProviders } from "@/config/adProviders.config";
import { loadProviderScript } from "@/lib/adScriptLoader";

/**
 * Mount once near the root of the app. Loads every enabled provider
 * whose loadStrategy is "global" (currently JuicyAds) — these scripts
 * are self-contained and don't need a per-slot container.
 */
export function GlobalAdScripts() {
  useEffect(() => {
    adProviders
      .filter((p) => p.enabled && p.loadStrategy === "global")
      .forEach(loadProviderScript);
  }, []);

  return null;
}
