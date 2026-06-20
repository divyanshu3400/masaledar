import { useEffect, useRef, useState } from "react";
import { adProviders, adPlacements } from "@/config/adProviders.config";
import { loadProviderScript } from "@/lib/adScriptLoader";
import styles from "./AdSlot.module.css";

interface AdSlotProps {
  /** Key into adPlacements, e.g. "home-hero-banner" */
  placementKey: string;
  className?: string;
}

/**
 * Renders one ExoClick ad unit, resolved entirely from
 * adProviders.config.ts / adPlacements. Pages never touch a zone ID —
 * only the slot's key.
 *
 * Markup matches ExoClick's standard "AdProvider" multi-tag format:
 * one global script (loaded once, lazily) + an <ins class="eas6a97888e2"
 * data-zoneid="..."> per slot, which the script finds and fills.
 * If you add another slot-based provider later, give it its own render
 * branch below — each network's container markup is genuinely different,
 * so this is the one place that's allowed to know that.
 */
export function AdSlot({ placementKey, className }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const placement = adPlacements.find((p) => p.key === placementKey);
  const provider = placement
    ? adProviders.find((p) => p.id === placement.providerId)
    : undefined;

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && provider?.enabled) {
      loadProviderScript(provider);
    }
  }, [isVisible, provider]);

  if (!placement || !provider || !provider.enabled) {
    return null; // unknown/disabled slot — fails quietly, never breaks layout
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.slot} ${className ?? ""}`}
      style={{ minWidth: placement.width, minHeight: placement.height }}
      aria-label="Advertisement"
    >
      {isVisible && provider.id === "exoclick" && (
        <ins className="eas6a97888e2" data-zoneid={placement.zoneId} />
      )}
      <span className={styles.label}>Advertisement</span>
    </div>
  );
}
