import type { Story } from "@/types/content";

/**
 * Sample content only. Add more entries here (or wire this up to a CMS
 * later) — the rest of the app just reads from this array. Every story
 * needs both an `en` and `hi` (Hinglish) version of title/excerpt/body.
 */
export const stories: Story[] = [
  {
    id: "s1",
    slug: "the-suhaag-raat-nobody-warned-her-about",
    title: {
      en: "The Suhaag Raat Nobody Warned Her About",
      hi: "Suhaag Raat Jiske Baare Mein Kisine Nahi Bataya",
    },
    category: "desi-shaadi",
    spice: 2,
    readMinutes: 4,
    excerpt: {
      en: "Riya expected nerves on her wedding night. She didn't expect to laugh this hard before anything else happened.",
      hi: "Riya ko suhaag raat pe nervous hone ki expectation thi. Itna haste hue pehle kuch hoga, yeh usne nahi socha tha.",
    },
    publishedAt: "2026-02-14",
    body: {
      en: [
        "The marigolds were still in Riya's hair when the door finally clicked shut behind her, and for the first time in fourteen hours, the room went quiet enough to hear her own heartbeat.",
        "Arjun was sitting at the edge of the bed, looking just as overdressed and just as unsure of what came next. 'My mother left a tray of badam milk outside the door,' he said. 'I think she's standing right there listening for it to go away.'",
        "Riya snorted, which was not the elegant, bridal sound she had practiced in the mirror for weeks. 'Drink the milk. Loudly. Make sounds. Give her something to report back to the aunties.'",
        "He laughed so hard he nearly knocked the tray over, and somewhere in that laugh, the nervousness she'd been carrying since the mehendi started loosening its grip.",
        "She kicked off her heels, finally, and felt three inches shorter and three years younger. 'Help me with this,' she said, turning so he could find the hook at the back of her blouse that the tailor had hidden too well.",
        "His hands were careful, deliberate, the way a man is when he's been told exactly once how expensive the outfit was. 'I've been wanting to do this since the baraat,' he admitted, voice dropping lower than the milk tray conversation had been.",
        "'Take off the lehenga or tell me that?' she asked, turning to face him properly for what felt like the first time all day — no relatives, no photographer, no schedule.",
        "'Both,' he said, and reached for the lamp switch instead of an answer, leaving just enough light to see her smile before the room went dim and the rest of the night belonged only to them.",
      ],
      hi: [
        "Riya ke baalon mein abhi bhi genda ke phool the jab darwaza finally band hua, aur chaudah ghante baad pehli baar kamra itna shaant hua ki apni heartbeat sun sake.",
        "Arjun bed ke kinare baitha tha, bilkul usi tarah overdressed aur confused jaise woh thi. 'Maa ne darwaze ke bahar badam milk ka tray rakha hai,' usne kaha. 'Lagta hai wahin khadi hai sunne ke liye ki kab khatam hota hai.'",
        "Riya itna haste hue ki royal bridal awaaz nahi rahi jo usne mirror ke saamne hafton practice ki thi. 'Milk pee lo. Loudly. Awaaz karo. Aunties ko kuch toh report karne do.'",
        "Woh itna hasaa ki tray girne wali thi, aur usi hasi mein, mehendi ke din se jo nervousness Riya carry kar rahi thi, woh dheere dheere kam hone lagi.",
        "Usne finally heels nikaal di, aur teen inch chhoti aur teen saal younger feel hui. 'Yeh hook khol do,' usne kaha, ghoom kar, jo tailor ne bohot achhe se hide kar diya tha blouse ke peeche.",
        "Uske haath careful the, dheere dheere, jaise koi mard jisko sirf ek baar bataya gaya ho outfit kitna expensive tha. 'Main yeh karna chahta tha baraat se hi,' usne admit kiya, awaaz milk tray wali baat se bhi neeche chali gayi.",
        "'Lehenga utaarna hai ya yeh bolna tha?' usne poocha, poori tarah uski taraf ghoomte hue — koi relative nahi, photographer nahi, schedule nahi, pehli baar pure din mein.",
        "'Dono,' usne kaha, aur jawab dene ke jagah lamp ka switch dhoonda, bas itni roshni chhodi ki uska smile dikh jaaye, phir kamra dim ho gaya aur baaki raat sirf unki thi.",
      ],
    },
  },
  {
    id: "s2",
    slug: "the-deliverable-due-after-hours",
    title: {
      en: "The Deliverable Due After Hours",
      hi: "Office Ke Baad Wala Deliverable",
    },
    category: "office-gossip",
    spice: 3,
    readMinutes: 5,
    excerpt: {
      en: "Meera and Karan had a strict no-mixing-business-with-pleasure rule. The 9 PM slide deck broke it in record time.",
      hi: "Meera aur Karan ka strict rule tha business aur pleasure mix nahi karna. 9 baje wali slide deck ne record time mein woh rule tod diya.",
    },
    publishedAt: "2026-03-02",
    body: {
      en: [
        "The office was empty except for the hum of the server room and the glow of two laptops facing each other across the conference table. Meera had loosened her blazer two buttons past 'professional' an hour ago.",
        "'If you reject this slide one more time I'm going to start taking it personally,' Karan said, not looking up from his screen, though the corner of his mouth gave him away.",
        "'It's not personal, Karan, it's typography. Comic Sans on a board deck is a personal attack on me, specifically.' She rolled her chair around the table until it was parked beside his.",
        "'Fine. Fix it yourself.' He turned the laptop toward her, and his hand stayed exactly where it had been when their fingers ended up sharing the same trackpad.",
        "Neither of them moved it. The slide deck sat half-finished and entirely forgotten while the silence between them turned into something with a pulse.",
        "'We said we'd never do this,' she said, not pulling away, her voice closer to his ear than the conversation strictly required.",
        "'We said a lot of things in the Q1 planning meeting too. Most of it was wrong.' He turned his chair so they were facing each other, knees touching under the table.",
        "The presentation was due at 9 AM. Neither of them looked at the clock again until the cleaning crew's keys jingled outside the door — by then the only thing that had actually gotten 'finalized' that night wasn't on anyone's calendar invite.",
      ],
      hi: [
        "Office khaali tha, sirf server room ki awaaz aur do laptops ki glow thi jo conference table ke aamne-saamne rakhe the. Meera ne blazer ke do button 'professional' se zyada khol diye the ek ghante pehle.",
        "'Agar tu yeh slide ek baar bhi reject karega toh main personally le lungi,' Karan ne kaha, screen se nazar nahi uthayi, par mouth ka corner sab bata raha tha.",
        "'Personal nahi hai Karan, typography hai. Comic Sans board deck pe mere upar personal attack hai.' Usne chair ghuma ke table ke around uske paas le aayi.",
        "'Theek hai, khud fix kar le.' Usne laptop uski taraf kar diya, aur uska haath wahin reh gaya jahan unki fingers trackpad share kar rahi thi.",
        "Kisi ne haath nahi hataya. Slide deck adhura aur bhula hua reh gaya, jabki dono ke beech ki khamoshi mein ek alag tarah ki pulse aane lagi.",
        "'Humne kaha tha yeh nahi karenge,' usne kaha, peeche nahi hati, awaaz uske kaan ke kareeb chali gayi jitna conversation ke liye zaroori tha.",
        "'Q1 planning meeting mein humne bahut kuch kaha tha. Zyadatar galat tha.' Usne chair ghumai taaki dono aamne-saamne ho jayein, ghutne table ke neeche touch karte hue.",
        "Presentation 9 baje subah due tha. Dono ne clock dobara nahi dekha jab tak cleaning crew ki keys darwaze ke bahar nahi baji — tab tak jo asli 'finalize' hua tha, woh kisi calendar invite mein nahi tha.",
      ],
    },
  },
  {
    id: "s3",
    slug: "do-not-disturb-and-mean-it",
    title: {
      en: "Do Not Disturb (And Mean It)",
      hi: "Do Not Disturb (Aur Sach Mein Mean Karo)",
    },
    category: "honeymoon",
    spice: 2,
    readMinutes: 4,
    excerpt: {
      en: "Six months of wedding planning bought them four days in Goa. Sanya intended to make every hour of it count.",
      hi: "Chhe mahine ki shaadi planning ne unhe Goa mein chaar din diye. Sanya ne har ghante ka full use karne ka plan banaya tha.",
    },
    publishedAt: "2026-04-10",
    body: {
      en: [
        "The villa had a private pool, a stocked minibar, and a hammock that Vikram had already declared 'his side of the marriage.' Sanya had other plans for the first afternoon.",
        "'You've been staring at that hammock since check-in,' she said, dropping her sunglasses onto the table and walking toward him slowly enough to make a point of it.",
        "'I'm committed to it. It's load-bearing for this relationship now,' he said, not quite managing to keep a straight face as she climbed in beside him, tipping it dangerously off balance.",
        "'Careful, we'll fall,' he warned, arms already wrapped around her waist to make sure they didn't — or to make sure they did, neither of them was being honest about which.",
        "The hammock swayed, the pool lights flicked on with the dusk timer, and somewhere past the curtain of the villa, the resort staff had learned three days ago not to knock on this particular door before sundown.",
        "'We have a king bed twenty feet away,' she pointed out, breath catching slightly as his hand found the small of her back.",
        "'We have four days and a Do Not Disturb sign with our names practically on it,' he said. 'The hammock's first. The bed's not going anywhere.'",
        "By the time either of them remembered the welcome champagne sitting unopened on ice, it had gone completely flat — and neither of them minded even a little.",
      ],
      hi: [
        "Villa mein private pool tha, stocked minibar tha, aur ek hammock jisko Vikram ne pehle hi 'shaadi ka uska side' declare kar diya tha. Sanya ke paas pehle afternoon ke liye alag plans the.",
        "'Check-in se hammock ko hi ghoor rahe ho,' usne kaha, sunglasses table pe rakh kar, dheere dheere uski taraf chalte hue point banane ke liye.",
        "'Main committed hoon. Yeh relationship ke liye load-bearing hai ab,' usne kaha, seedha face rakhne ki koshish karte hue jab woh uske paas chadhi, hammock ko dangerously off balance karte hue.",
        "'Sambhal ke, gir jayenge,' usne warning di, haath already uski waist ke around the, yeh sure karne ke liye ki nahi girenge — ya sure karne ke liye ki gir jayein, dono mein se koi honest nahi tha kis baat ke liye.",
        "Hammock swing kar raha tha, pool ki lights dusk timer se on ho gayi, aur villa ke curtain ke peeche kahin, resort staff ne teen din pehle hi seekh liya tha ki sundown se pehle is darwaze pe knock nahi karna.",
        "'Bistar bees feet door hi hai,' usne point kiya, breath thodi catch hui jab uska haath uski back ke neeche pahuncha.",
        "'Chaar din hain aur Do Not Disturb sign pe practically hamara naam hai,' usne kaha. 'Hammock pehle. Bistar kahin nahi ja raha.'",
        "Jab tak dono ko welcome champagne yaad aayi jo ice pe khuli padi thi, woh poori tarah flat ho chuki thi — aur dono mein se kisi ko bhi farq nahi pada.",
      ],
    },
  },
  {
    id: "s4",
    slug: "eleven-hour-layover",
    title: {
      en: "Eleven-Hour Layover",
      hi: "Gyarah Ghante Ka Layover",
    },
    category: "long-distance",
    spice: 3,
    readMinutes: 5,
    excerpt: {
      en: "Three months on different continents, one budget flight with a layover in the same city. Neha wasn't wasting a minute of it.",
      hi: "Teen mahine alag continents pe, ek budget flight ka layover same city mein. Neha ek minute bhi waste nahi karna chahti thi.",
    },
    publishedAt: "2026-05-01",
    body: {
      en: [
        "Arrivals at Terminal 2 looked the same as it always did — tired travelers, bad coffee, a flickering departures board — until Dev spotted her at the barrier and every bit of jet lag disappeared at once.",
        "Neha didn't wait for him to reach the gate properly. She crossed the last few feet at something close to a run, and the hug that followed lasted long enough that a security guard cleared his throat twice.",
        "'Eleven hours,' she said into his shoulder, not letting go yet. 'That's all we get before your connecting flight.'",
        "'Then we should stop standing in an airport talking about it,' he said, already reaching for her bag, already walking toward the hotel shuttle stop like a man with a plan and very little patience left for small talk.",
        "The hotel room was nothing special — airport-adjacent beige, a view of a parking structure — and neither of them so much as glanced at the window once the door was locked.",
        "'Three months of video calls and you still kiss like that?' she said between breaths, fingers already working at his jacket buttons faster than the cold weather had made him put them on.",
        "'Three months of video calls is exactly why,' he said, and whatever sentence he'd been planning to finish got lost somewhere between the doorway and the bed.",
        "Eleven hours turned out to be both far too long to wait and nowhere near enough time — and when the alarm for his connecting flight finally went off, neither of them moved to silence it right away.",
      ],
      hi: [
        "Terminal 2 ka arrival area hamesha jaisa hi laga — tired travelers, kharaab coffee, flicker karta departures board — jab tak Dev ne usse barrier pe dekha aur saara jet lag ek second mein gayab ho gaya.",
        "Neha ne uske gate tak aane ka wait nahi kiya. Woh almost running mein last kuch feet cross kar gayi, aur jo hug hua woh itna lamba chala ki security guard ne do baar throat clear ki.",
        "'Gyarah ghante,' usne uske shoulder mein kaha, abhi tak chhoda nahi. 'Itna hi milega tumhari connecting flight se pehle.'",
        "'Toh airport mein khade hoke baat karna band karte hain,' usne kaha, already uska bag utha liya, already hotel shuttle stop ki taraf chal pada jaise ek aadmi jiske paas plan hai aur small talk ke liye patience bilkul nahi.",
        "Hotel room kuch khaas nahi tha — airport ke paas wala beige color, parking structure ka view — aur darwaza lock hote hi dono ne window ki taraf bhi nahi dekha.",
        "'Teen mahine ki video calls ke baad bhi tum aise kiss karte ho?' usne breaths ke beech kaha, fingers already uski jacket ke buttons pe kaam kar rahi thi cold weather se zyada fast.",
        "'Teen mahine ki video calls isi liye thi,' usne kaha, aur jo sentence usne finish karna tha, woh kahin doorway aur bed ke beech mein kho gaya.",
        "Gyarah ghante bohot lambe bhi the wait karne ke liye aur bilkul kam bhi the — aur jab uski connecting flight ka alarm finally baja, dono mein se kisi ne usse jaldi off nahi kiya.",
      ],
    },
  },
];
