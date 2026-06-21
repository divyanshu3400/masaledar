import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AgeGate } from "@/components/common/AgeGate";
import { GlobalAdScripts } from "@/components/ads/GlobalAdScripts";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { routes } from "@/config/routes.config";

/**
 * Converts an absolute path from routes.config ("/", "/jokes", "/stories/:slug")
 * into the relative path React Router expects for a nested child route.
 * "/" becomes an index route; everything else just drops the leading slash.
 */
function toChildRouteProps(path: string) {
  if (path === "/") return { index: true as const };
  return { path: path === "*" ? "*" : path.replace(/^\//, "") };
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <GlobalAdScripts />
        <AgeGate />
        <Routes>
          <Route element={<Layout />}>
            {routes.map((route) => {
              const Element = route.element;
              return (
                <Route
                  key={route.path}
                  {...toChildRouteProps(route.path)}
                  element={<Element />}
                />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
