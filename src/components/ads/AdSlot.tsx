import { useEffect, useRef, useState } from "react";
import { adProviders, adPlacements } from "@/config/adProviders.config";
import styles from "./AdSlot.module.css";

const PROVIDER_SCRIPT_URL = "https://a.magsrv.com/ad-provider.js";
const PROVIDER_SCRIPT_ID = "exoclick-ad-provider";

/**
 * Tracks script load state globally so all AdSlot instances share it.
 * "idle"   — script never injected
 * "loading"— script tag added, waiting for onload
 * "ready"  — script fully loaded, AdProvider is available
 */
type ScriptState = "idle" | "loading" | "ready";
let scriptState: ScriptState = "idle";
const readyCallbacks: Array<() => void> = [];

function onScriptReady(cb: () => void) {
  if (scriptState === "ready") {
    cb();
    return;
  }
  readyCallbacks.push(cb);
}

function flushCallbacks() {
  scriptState = "ready";
  readyCallbacks.splice(0).forEach((cb) => cb());
}

function ensureScript() {
  if (scriptState !== "idle") return;
  scriptState = "loading";

  // If somehow it was added to DOM outside React (e.g. index.html), detect it
  if (document.getElementById(PROVIDER_SCRIPT_ID)) {
    flushCallbacks();
    return;
  }

  const script = document.createElement("script");
  script.id = PROVIDER_SCRIPT_ID;
  script.src = PROVIDER_SCRIPT_URL;
  script.async = true;
  script.type = "application/javascript";
  script.onload = () => flushCallbacks();
  script.onerror = () => {
    // reset so it can retry on next render
    scriptState = "idle";
    document.getElementById(PROVIDER_SCRIPT_ID)?.remove();
  };
  document.head.appendChild(script);
}

function serveAd() {
  window.AdProvider = window.AdProvider || [];
  window.AdProvider.push({ serve: {} });
}

// ─────────────────────────────────────────────────────────────────────────────

interface AdSlotProps {
  placementKey: string;
  className?: string;
}

export function AdSlot({ placementKey, className }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const insRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const servedRef = useRef(false);

  const placement = adPlacements.find((p) => p.key === placementKey);
  const provider = placement
    ? adProviders.find((p) => p.id === placement.providerId)
    : undefined;

  // Step 1 — lazy trigger via IntersectionObserver
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

  // Step 2 — once visible, inject <ins> then ensure script, then serve
  useEffect(() => {
    if (!isVisible || !provider?.enabled || !insRef.current) return;
    if (provider.id !== "exoclick") return;
    if (servedRef.current) return; // already served this slot
    servedRef.current = true;

    // 2a. Inject <ins> into DOM BEFORE loading script.
    //     If the script loads for the first time, it scans existing DOM and
    //     finds this tag immediately. If script is already loaded, we call
    //     serve() manually below.
    const ins = document.createElement("ins");
    ins.className = placement!.class;
    ins.setAttribute("data-zoneid", placement!.zoneId);
    ins.setAttribute("data-keywords", "keywords");
    ins.setAttribute("data-sub", "123450000");
    ins.setAttribute("data-block-ad-types", "0");
    ins.setAttribute("data-ex_av", "name");

    insRef.current.innerHTML = "";
    insRef.current.appendChild(ins);

    // 2b. Load script (no-op if already loading/loaded), then call serve()
    //     onScriptReady fires immediately if script is already ready.
    onScriptReady(() => {
      // Small tick to let the browser commit the <ins> paint before ExoClick reads it
      setTimeout(serveAd, 50);
    });

    ensureScript();
  }, [isVisible, provider, placement]);

  if (!placement || !provider || !provider.enabled) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.slot} ${className ?? ""}`}
      style={{
        minWidth:
          typeof placement.width === "number"
            ? `${placement.width}px`
            : placement.width,
        minHeight:
          typeof placement.height === "number"
            ? `${placement.height}px`
            : placement.height,
      }}
      aria-label="Advertisement"
    >
      <div ref={insRef} />
      <span className={styles.label}>Advertisement</span>
    </div>
  );
}