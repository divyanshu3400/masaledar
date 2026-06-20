/**
 * Typed mirror of src/styles/tokens.css.
 *
 * Components should reach for CSS (`var(--color-primary)`) for anything
 * that's just styling. This object exists only for the handful of cases
 * where a token value needs to live in JS/TS — e.g. inside a Framer Motion
 * `variants` object, a canvas/SVG attribute, or a chart library prop.
 *
 * Keep the keys here in lockstep with tokens.css. Never define a new color
 * directly in a component — add it to tokens.css first, then mirror it here
 * if (and only if) JS needs it.
 */
export const theme = {
  color: {
    bg: "var(--color-bg)",
    surface: "var(--color-surface)",
    surfaceRaised: "var(--color-surface-raised)",
    border: "var(--color-border)",
    borderStrong: "var(--color-border-strong)",
    text: "var(--color-text)",
    textMuted: "var(--color-text-muted)",
    textFaint: "var(--color-text-faint)",
    textOnPrimary: "var(--color-text-on-primary)",
    primary: "var(--color-primary)",
    primaryHover: "var(--color-primary-hover)",
    primarySoft: "var(--color-primary-soft)",
    accent: "var(--color-accent)",
    accentHover: "var(--color-accent-hover)",
    accentSoft: "var(--color-accent-soft)",
    success: "var(--color-success)",
    danger: "var(--color-danger)",
    spiceActive: "var(--color-spice-active)",
    spiceInactive: "var(--color-spice-inactive)",
    overlay: "var(--color-overlay)",
    scrim: "var(--color-scrim)",
  },
  font: {
    display: "var(--font-display)",
    body: "var(--font-body)",
    mono: "var(--font-mono)",
  },
  space: {
    1: "var(--space-1)",
    2: "var(--space-2)",
    3: "var(--space-3)",
    4: "var(--space-4)",
    5: "var(--space-5)",
    6: "var(--space-6)",
    8: "var(--space-8)",
    10: "var(--space-10)",
    12: "var(--space-12)",
  },
  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    pill: "var(--radius-pill)",
  },
  motion: {
    ease: [0.4, 0, 0.2, 1] as const, // numeric mirror of --ease-standard for Framer Motion
    fast: 0.15,
    base: 0.25,
    slow: 0.4,
  },
} as const;

export type Theme = typeof theme;
