import { Suspense } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";

export function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <AnimatePresence mode="wait" initial={false}>
            <PageTransition key={location.pathname}>{outlet}</PageTransition>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
