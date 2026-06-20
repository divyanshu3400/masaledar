import { lazy } from "react";
import type { ComponentType } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

const Home = lazy(() => import("@/pages/Home"));
const Jokes = lazy(() => import("@/pages/Jokes"));
const Stories = lazy(() => import("@/pages/Stories"));
const StoryDetail = lazy(() => import("@/pages/StoryDetail"));
const Legal = lazy(() => import("@/pages/Legal"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export interface RouteConfig {
  path: string;
  /** Resolves the nav label from the current dictionary, so it's always in sync with the active language */
  label: (t: Dictionary) => string;
  element: ComponentType;
  /** Shown as a primary link in the navbar */
  showInNav: boolean;
  /** Shown in the footer instead (legal pages etc.) */
  showInFooter?: boolean;
}

/**
 * Every route in the app is declared exactly once, here.
 * - The router (`App.tsx`) maps over this to build <Routes>.
 * - The navbar/footer map over this (filtered by showInNav/showInFooter)
 *   to build their links, calling `label(t)` for the active language.
 * Add a page once in this array and it appears everywhere it needs to —
 * never add a <Link> or <Route> by hand elsewhere.
 */
export const routes: RouteConfig[] = [
  { path: "/", label: (t) => t.nav.home, element: Home, showInNav: true },
  { path: "/jokes", label: (t) => t.nav.jokes, element: Jokes, showInNav: true },
  { path: "/stories", label: (t) => t.nav.stories, element: Stories, showInNav: true },
  {
    path: "/stories/:slug",
    label: () => "Story",
    element: StoryDetail,
    showInNav: false,
  },
  {
    path: "/legal",
    label: (t) => t.nav.legal,
    element: Legal,
    showInNav: false,
    showInFooter: true,
  },
  { path: "*", label: () => "Not Found", element: NotFound, showInNav: false },
];
