// src/pages/Jokes/Jokes.tsx
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { motion } from "framer-motion";
import { jokes } from "@/data/jokes";
import { categoryIds } from "@/config/brand.config";
import { useLanguage } from "@/i18n/LanguageContext";
import { JokeCard } from "@/components/common/JokeCard";
import { AdSlot } from "@/components/ads/AdSlot";
import styles from "./Jokes.module.css";

export default function Jokes() {
  const { t } = useLanguage();

  const allTabs = [
    { id: "all" as const, label: t.jokesPage.allTab },
    ...categoryIds.map((id) => ({ id, label: t.categories[id] })),
  ];

  return (
    <div className={`container ${styles.page}`}>
      <h1 className={styles.title}>{t.jokesPage.title}</h1>
      <p className={styles.subtitle}>{t.jokesPage.subtitle}</p>

      <TabGroup>
        <TabList className={styles.tabList}>
          {allTabs.map((tab) => (
            <Tab key={tab.id} className={styles.tab}>
              {tab.label}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {allTabs.map((tab) => {
            const filtered =
              tab.id === "all"
                ? jokes
                : jokes.filter((j) => j.category === tab.id);
            return (
              <TabPanel key={tab.id} className={styles.grid}>
                {filtered.map((joke, i) => (
                  <motion.div
                    key={joke.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                    style={{ cursor: "pointer" }}
                  >
                    {/*
                      Pass disabled onClick to JokeCard so it doesn't
                      navigate itself — the wrapper above handles it.
                      If your JokeCard uses <Link> internally, change it
                      to accept an onCardClick prop and call that instead
                      of navigating, or use e.preventDefault() inside.
                    */}
                    <JokeCard joke={joke} />
                  </motion.div>
                ))}
              </TabPanel>
            );
          })}
        </TabPanels>
      </TabGroup>
      <AdSlot placementKey="jokes-feed-native" />
    </div>
  );
}