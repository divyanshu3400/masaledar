/**
 * Centralized ad network config — ExoClick + JuicyAds only, per current
 * setup. Add or remove a provider here only — never hardcode a script
 * src or zone ID inside a page or component. <AdSlot /> reads from this
 * file for ExoClick; JuicyAds is loaded globally (see GlobalAdScripts).
 *
 * loadStrategy:
 *   - "slot": needs a per-placement zone ID and a container element on
 *     the page (ExoClick's AdProvider multi-tag works this way — one
 *     script loads once, then fills every <ins data-zoneid> it finds).
 *   - "global": the script is self-contained and injects its own ad unit
 *     wherever it's placed — no zone ID/container needed from us.
 *     (JuicyAds' tag below is this kind: the zone/site params are baked
 *     into the script URL itself.)
 */

export type AdLoadStrategy = "slot" | "global";

export interface AdProviderConfig {
  id: string;
  name: string;
  enabled: boolean;
  loadStrategy: AdLoadStrategy;
  scriptSrc: string;
}

export const adProviders: AdProviderConfig[] = [
  {
    id: "exoclick",
    name: "ExoClick",
    enabled: true,
    loadStrategy: "slot",
    scriptSrc: "https://a.magsrv.com/ad-provider.js",
  },
  {
    id: "juicyads",
    name: "JuicyAds",
    enabled: true,
    loadStrategy: "global",
    scriptSrc:
      "https://js.juicyads.com/jp.php?c=4474v2u2p2a4u4r2p2b4y274a4&u=https%3A%2F%2Fwww.juicyads.rocks",
  },
];
export interface AdSlotPlacement {
  key: string;
  providerId: string;
  zoneId: string;
  class: string;
  width: number | string;
  height: number | string;
}
/**
 * Where each ExoClick ad slot on the site lives and which zone fills it.
 * Reorder, disable (by removing), or repoint a slot to a different zone
 * here — pages just reference the `key`, never a raw zone ID.
 */
export const adPlacements: AdSlotPlacement[] = [
  {
    key: "home-hero-banner",
    providerId: "exoclick",
    class: "eas6a97888e17",
    zoneId: "5955492",
    width: 728,
    height: 90,
  },
  {
    key: "interstitial-ad",
    providerId: "exoclick",
    zoneId: "5955490",
    class: "eas6a97888e35",
    width: 728,
    height: 90,
  },
  {
    key: "jokes-feed-native",
    providerId: "exoclick",
    zoneId: "5955498",
    class: "eas6a97888e20",
    width: "100%",
    height: 50,
  },
  {
    key: "story-detail-sidebar",
    providerId: "exoclick",
    zoneId: "5955488",
    class: "eas6a97888e2",
    width: 300,
    height: 600,
  },
  {
    key: "stories-feed-native",
    providerId: "exoclick",
    zoneId: "5955498",
    class: "eas6a97888e20",
    width: 300,
    height: 250,
  },
];
