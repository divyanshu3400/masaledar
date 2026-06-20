import type { AdProviderConfig } from "@/config/adProviders.config";

const loadedScripts = new Set<string>();

/**
 * Injects a provider's script tag into <head> at most once per page
 * load, regardless of how many slots/components try to load it.
 */
export function loadProviderScript(provider: AdProviderConfig) {
  if (!provider.scriptSrc || loadedScripts.has(provider.id)) return;
  const script = document.createElement("script");
  script.src = provider.scriptSrc;
  script.async = true;
  document.head.appendChild(script);
  loadedScripts.add(provider.id);
}
