import type { ContentCategory } from "@/types/content";

export interface Dictionary {
  brand: {
    tagline: string;
    ageDisclaimer: string;
  };
  nav: {
    home: string;
    jokes: string;
    stories: string;
    legal: string;
  };
  categories: Record<ContentCategory, string>;
  home: {
    subhead: string;
    jokeOfDay: string;
    featuredStories: string;
    viewAll: string;
  };
  jokeCard: {
    tapToReveal: string;
  };
  spice: {
    mild: string;
    medium: string;
    extraHot: string;
  };
  jokesPage: {
    title: string;
    subtitle: string;
    allTab: string;
  };
  storiesPage: {
    title: string;
    subtitle: string;
  };
  readMinutes: (n: number) => string;
  storyDetail: {
    back: string;
  };
  ageGate: {
    heading: string;
    confirmAge: string;
    confirmButton: string;
    leaveButton: string;
  };
  legal: {
    title: string;
    updated: string;
    ageHeading: string;
    fictionalNotice: string;
    privacyHeading: string;
    privacyBody: string;
    privacyChildren: string;
    termsHeading: string;
    termsBody: string;
  };
  notFound: {
    title: string;
    body: string;
    link: string;
  };
  interstitial: {
    label: string;
    close: string;
  };
  footer: {
    copyright: string;
  };
}

const en: Dictionary = {
  brand: {
    tagline: "Spicy jokes & stories, served hot.",
    ageDisclaimer:
      "This site contains adult humor and is intended for users 18 years of age or older.",
  },
  nav: {
    home: "Home",
    jokes: "Jokes",
    stories: "Stories",
    legal: "Legal & 18+ Notice",
  },
  categories: {
    "desi-shaadi": "Shaadi Stories",
    "office-gossip": "Office Gossip",
    honeymoon: "Honeymoon Diaries",
    "one-liners": "One-Liners",
    "long-distance": "Long Distance",
    roommates: "Roommates",
  },
  home: {
    subhead:
      "Raunchy one-liners, shaadi stories gone sideways, and the kind of office gossip HR never hears about. 18+, always.",
    jokeOfDay: "Joke of the day",
    featuredStories: "Featured stories",
    viewAll: "View all →",
  },
  jokeCard: {
    tapToReveal: "Tap to reveal →",
  },
  spice: {
    mild: "Mild",
    medium: "Medium",
    extraHot: "Extra hot",
  },
  jokesPage: {
    title: "Jokes",
    subtitle: "Tap any card to reveal the punchline.",
    allTab: "All",
  },
  storiesPage: {
    title: "Stories",
    subtitle: "Short, spicy, and always fictional.",
  },
  readMinutes: (n) => `${n} min read`,
  storyDetail: {
    back: "← All stories",
  },
  ageGate: {
    heading: "is for grown-ups only",
    confirmAge:
      "By entering, you confirm you are at least 18 years old (or the age of majority in your jurisdiction).",
    confirmButton: "I'm 18+ — let me in",
    leaveButton: "I'm under 18 — take me away",
  },
  legal: {
    title: "Legal & 18+ Notice",
    updated: "Last updated: June 2026",
    ageHeading: "Age restriction",
    fictionalNotice:
      "All characters and scenarios depicted in our stories and jokes are fictional. Any resemblance to real persons or events is coincidental.",
    privacyHeading: "Privacy & advertising",
    privacyBody:
      "This site uses third-party advertising networks to display ads. These networks may use cookies or similar technologies to serve relevant ads and measure performance. By using this site, you consent to this use. You can control cookies through your browser settings.",
    privacyChildren:
      "We do not knowingly collect personal information from anyone under the age of 18.",
    termsHeading: "Terms of use",
    termsBody:
      "Content on this site is provided for entertainment purposes only. By accessing this site, you confirm you meet the minimum age requirement in your jurisdiction and agree not to redistribute content without permission.",
  },
  notFound: {
    title: "404",
    body: "This page wandered off. Even our jokes have better timing than this link.",
    link: "Back to home →",
  },
  interstitial: {
    label: "Before you continue",
    close: "Continue →",
  },
  footer: {
    copyright: "All rights reserved.",
  },
};

const hi: Dictionary = {
  brand: {
    tagline: "Masaledar jokes & kahaniyan, garam garam.",
    ageDisclaimer:
      "Is site pe adult humor hai aur yeh sirf 18 saal ya usse zyada age ke logon ke liye hai.",
  },
  nav: {
    home: "Home",
    jokes: "Jokes",
    stories: "Kahaniyan",
    legal: "Legal & 18+ Notice",
  },
  categories: {
    "desi-shaadi": "Shaadi Kahaniyan",
    "office-gossip": "Office Gossip",
    honeymoon: "Honeymoon Diaries",
    "one-liners": "One-Liners",
    "long-distance": "Long Distance",
    roommates: "Roommates",
  },
  home: {
    subhead:
      "Bindaas one-liners, shaadi ki kahaniyan jo side-track ho gayi, aur wo office gossip jo HR ko kabhi pata nahi chalti. 18+, hamesha.",
    jokeOfDay: "Aaj ka joke",
    featuredStories: "Featured kahaniyan",
    viewAll: "Sab dekho →",
  },
  jokeCard: {
    tapToReveal: "Punchline dekhne ke liye tap karo →",
  },
  spice: {
    mild: "Halka",
    medium: "Medium",
    extraHot: "Extra Garam",
  },
  jokesPage: {
    title: "Jokes",
    subtitle: "Punchline dekhne ke liye kisi bhi card pe tap karo.",
    allTab: "Sabhi",
  },
  storiesPage: {
    title: "Kahaniyan",
    subtitle: "Chhoti, masaledar, aur hamesha fictional.",
  },
  readMinutes: (n) => `${n} min ki kahani`,
  storyDetail: {
    back: "← Saari kahaniyan",
  },
  ageGate: {
    heading: "sirf bado'n ke liye hai",
    confirmAge:
      "Andar aakar, tum confirm karte ho ki tumhari age kam se kam 18 saal hai (ya tumhare jurisdiction mein majority ki age).",
    confirmButton: "Main 18+ hoon — andar aane do",
    leaveButton: "Main 18 se kam hoon — mujhe yahan se le jao",
  },
  legal: {
    title: "Legal & 18+ Notice",
    updated: "Last update: June 2026",
    ageHeading: "Age restriction",
    fictionalNotice:
      "Hamari jokes aur kahaniyon mein dikhaye gaye sabhi characters aur scenarios fictional hain. Kisi real insaan ya ghatna se milna sirf coincidence hai.",
    privacyHeading: "Privacy aur advertising",
    privacyBody:
      "Yeh site ads dikhane ke liye third-party advertising networks use karti hai. Yeh networks cookies ya similar technologies use kar sakte hain relevant ads dikhane aur performance measure karne ke liye. Is site ko use karke, tum is use ke liye consent dete ho. Tum apne browser settings se cookies control kar sakte ho.",
    privacyChildren:
      "Hum knowingly 18 saal se kam age ke kisi se bhi personal information collect nahi karte.",
    termsHeading: "Terms of use",
    termsBody:
      "Is site ka content sirf entertainment purpose ke liye hai. Is site ko access karke, tum confirm karte ho ki tum apne jurisdiction ki minimum age requirement poori karte ho aur bina permission content redistribute nahi karoge.",
  },
  notFound: {
    title: "404",
    body: "Yeh page kahin bhatak gaya. Hamari jokes ka timing bhi isse better hai.",
    link: "Home pe wapas jao →",
  },
  interstitial: {
    label: "Aage badhne se pehle",
    close: "Continue karo →",
  },
  footer: {
    copyright: "Sabhi rights reserved.",
  },
};

export const dictionaries: Record<"en" | "hi", Dictionary> = { en, hi };
