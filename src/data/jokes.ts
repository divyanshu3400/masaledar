import type { Joke } from "@/types/content";

/**
 * Sample content only. Add more entries here (or wire this up to a CMS
 * later) — the rest of the app just reads from this array. Every joke
 * needs both an `en` and `hi` (Hinglish) version.
 */
export const jokes: Joke[] = [
  {
    id: "j1",
    category: "desi-shaadi",
    spice: 2,
    setup: {
      en: "On the wedding night, the bride whispered, 'Be gentle, this is my first time.'",
      hi: "Suhaag raat pe dulhan ne whisper kiya, 'Pyaar se, yeh mera first time hai.'",
    },
    punchline: {
      en: "The groom froze and said, 'Wait, you've never assembled IKEA furniture before either?'",
      hi: "Dulha ekdum freeze ho gaya aur bola, 'Ruko, tumne IKEA ka furniture bhi kabhi assemble nahi kiya?'",
    },
  },
  {
    id: "j2",
    category: "office-gossip",
    spice: 2,
    setup: {
      en: "HR asked why the new intern requested a transfer after one week.",
      hi: "HR ne poocha intern ne sirf ek hafte mein transfer kyun maanga.",
    },
    punchline: {
      en: "Apparently her manager kept calling every late-night email a 'deliverable.'",
      hi: "Pata chala uska manager har late-night email ko 'deliverable' bulata tha.",
    },
  },
  {
    id: "j3",
    category: "honeymoon",
    spice: 3,
    setup: {
      en: "The hotel manager asked the newlyweds how their first night was.",
      hi: "Hotel manager ne newlyweds se poocha unki pehli raat kaisi rahi.",
    },
    punchline: {
      en: "The husband said, 'Five stars — though housekeeping might want to knock first tomorrow.'",
      hi: "Pati bola, 'Five stars — bas housekeeping kal pehle knock kar le toh better hai.'",
    },
  },
  {
    id: "j4",
    category: "one-liners",
    spice: 1,
    punchline: {
      en: "My wife said I should be more spontaneous in bed, so last night I rearranged the pillows without warning her.",
      hi: "Biwi ne kaha bed pe thoda spontaneous bano, toh maine raat ko bina bataye pillows rearrange kar diye.",
    },
  },
  {
    id: "j5",
    category: "long-distance",
    spice: 2,
    setup: {
      en: "He texted his girlfriend, 'I miss you so much it physically hurts.'",
      hi: "Usne girlfriend ko text kiya, 'Tumhari yaad mein literally dard ho raha hai.'",
    },
    punchline: {
      en: "She replied, 'That's just the bad WiFi making you hold that pose for the video call.'",
      hi: "Usne reply kiya, 'Wo dard nahi, kharaab WiFi ki wajah se tum wahi pose pe atke ho video call mein.'",
    },
  },
  {
    id: "j6",
    category: "roommates",
    spice: 2,
    setup: {
      en: "My roommate put a sock on the doorknob to signal 'do not enter.'",
      hi: "Mere roommate ne doorknob pe sock laga di, matlab 'andar mat aana.'",
    },
    punchline: {
      en: "I put a sign that says 'me too, but mine says do NOT vacuum either.'",
      hi: "Maine bhi sign laga diya, 'mera bhi same, lekin saath mein vacuum bhi mat karna.'",
    },
  },
  {
    id: "j7",
    category: "desi-shaadi",
    spice: 1,
    setup: {
      en: "The pandit asked the groom if he was ready for married life.",
      hi: "Pandit ji ne dulha se poocha kya woh shaadi ki zindagi ke liye ready hai.",
    },
    punchline: {
      en: "The groom said, 'I trained for this — three years of being ghosted prepared me for anything.'",
      hi: "Dulha bola, 'Bilkul ready hoon — teen saal ghosted hone ne mujhe sab kuch sikha diya.'",
    },
  },
  {
    id: "j8",
    category: "office-gossip",
    spice: 3,
    setup: {
      en: "Two colleagues kept 'working late' on the same project every single Friday.",
      hi: "Do colleagues har Friday ek hi project pe 'late tak kaam' karte rehte the.",
    },
    punchline: {
      en: "Turns out the only deliverable getting submitted was each other's resignation from being single.",
      hi: "Pata chala asli deliverable yeh tha ki dono ne single rehne se resign kar diya tha.",
    },
  },
  {
    id: "j9",
    category: "one-liners",
    spice: 2,
    punchline: {
      en: "Relationship status: we said we'd just cuddle, and now we owe the laundromat an apology.",
      hi: "Relationship status: humne kaha tha sirf cuddle karenge, ab laundry wale se sorry bolna padega.",
    },
  },
  {
    id: "j10",
    category: "honeymoon",
    spice: 2,
    setup: {
      en: "The travel agent asked what kind of honeymoon package they wanted.",
      hi: "Travel agent ne poocha unko kis tarah ka honeymoon package chahiye.",
    },
    punchline: {
      en: "She said, 'Something with a Do Not Disturb sign that actually gets respected this time.'",
      hi: "Wo boli, 'Bas ek Do Not Disturb sign jo is baar sach mein respect ho.'",
    },
  },
  {
    id: "j11",
    category: "long-distance",
    spice: 3,
    setup: {
      en: "After three months apart, he told her the airport reunion would be 'PG-rated, I promise.'",
      hi: "Teen mahine baad, usne bola airport pe milna 'PG-rated hoga, promise.'",
    },
    punchline: {
      en: "She landed, looked at him, and said, 'That promise has a layover, baby, not a final destination.'",
      hi: "Wo land hui, usse dekha aur boli, 'Yeh promise ka bas layover hai jaan, final destination nahi.'",
    },
  },
  {
    id: "j12",
    category: "roommates",
    spice: 1,
    setup: {
      en: "My roommate asked why I bought a lock for my bedroom door.",
      hi: "Roommate ne poocha maine bedroom ke darwaze pe lock kyun lagaya.",
    },
    punchline: {
      en: "I said, 'Privacy.' She said, 'For sleeping?' I said, 'Let's not workshop this further.'",
      hi: "Maine kaha 'Privacy ke liye.' Usne poocha 'Sone ke liye?' Maine kaha, 'Isse aage discuss karna zaroori nahi hai.'",
    },
  },
];
