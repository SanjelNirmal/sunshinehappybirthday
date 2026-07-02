/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Chapter, Milestone, GalleryItem, Reason, OpenWhen, Dream } from "../types";
import { IMAGES } from "../config/images";

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "The First Glance",
    subtitle: "The day an ordinary tour changed everything",
    description:
      "It was just another tour. You were sitting on one side, and I was on the other. We barely spoke, but our eyes kept meeting. In those quiet moments, something beautiful began. Without either of us realizing it, a simple glance was slowly becoming the beginning of our love story.",
    quote:
      "Sometimes, love doesn't begin with words. Sometimes, it begins with a single glance.",
    image: IMAGES.starryNight,
    accentColor: "from-rose-500/20 to-pink-500/20"
  },
  {
    id: 2,
    title: "Our Beautiful Journey",
    subtitle: "More than a year of memories, laughter, and love",
    description:
      "Since the first day of Poush, we've shared countless conversations, endless laughter, unforgettable memories, and moments that brought us even closer. Through every smile, every challenge, and every ordinary day, you've become the most beautiful part of my life. This journey may have started with a glance, but every day since then has made me love you even more.",
    quote:
      "Every day with you becomes another favorite memory.",
    image: IMAGES.cozyCafe,
    accentColor: "from-purple-500/20 to-rose-500/20"
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: 1,
    year: "The Tour",
    title: "The First Glance",
    description:
      "It all began during a tour. You were sitting on one side, and I was on the other. We didn't say much, but our eyes kept meeting. That simple moment became the beginning of everything.",
    location: "Our Tour",
    emoji: "🚌"
  },
  {
    id: 2,
    year: "Poush 1",
    title: "The Beginning of Us",
    description:
      "On the first day of Poush, our story officially began. A day I'll always remember because it gave me the greatest gift—you.",
    location: "The Beginning",
    emoji: "❤️"
  },
  {
    id: 3,
    year: "Our Journey",
    title: "More Than One Year Together",
    description:
      "More than a year filled with endless conversations, laughter, little arguments, understanding, and beautiful memories that brought us closer every single day.",
    location: "Every Moment With You",
    emoji: "🌸"
  },
  {
    id: 4,
    year: "Today",
    title: "Your Birthday",
    description:
      "Today, we celebrate the most beautiful person in my life. Thank you for every smile, every memory, and every moment you've shared with me.",
    location: "July 3",
    emoji: "🎂"
  },
  {
    id: 5,
    year: "Forever",
    title: "Our Future",
    description:
      "This is only the beginning. I hope our journey continues with more adventures, more dreams, more birthdays, and a lifetime of beautiful memories together.",
    location: "Us ❤️",
    emoji: "✨"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image: IMAGES.starryNight,
    title: "The First Glance",
    description:
      "An ordinary tour. You were sitting on one side, and I was on the other. We didn't know each other yet, but our eyes kept meeting. Looking back now, I realize that was the moment my heart quietly found its home.",
    date: "The Day We First Met"
  },
  {
    id: 2,
    image: IMAGES.cozyCafe,
    title: "The Beginning of Our Story",
    description:
      "On Poush 1, our story officially began. What started with a simple glance slowly became conversations, laughter, trust, and a love I never imagined I would find.",
    date: "Poush 1 ❤️"
  },
  {
    id: 3,
    image: IMAGES.roadTrip,
    title: "More Than One Year of Us",
    description:
      "More than one year has passed, yet every day with you gives me another reason to smile. From our happiest moments to the challenges we've overcome together, every memory has become one of my greatest treasures.",
    date: "Our Journey Together"
  },
  {
    id: 4,
    image: IMAGES.rooftopSunset,
    title: "Happy Birthday, My Sunshine",
    description:
      "Today, I celebrate the girl who changed my life with nothing more than a smile. Thank you for your love, your kindness, your patience, and for making every ordinary day feel extraordinary. I hope this little website reminds you how deeply you are loved.",
    date: "July 3, 2026 🎂"
  },
  {
    id: 5,
    image: IMAGES.sunsetBeach,
    title: "Our Future Together",
    description:
      "This is only the beginning. I look forward to a lifetime of adventures, dreams, and birthdays with you. Here's to us, to our love, and to the countless memories we have yet to create.",
    date: "Forever ❤️"
  },
  {
    id: 6,
    image: IMAGES.vintageLetter,
    title: "A Letter from My Heart",
    description:
      "This is a letter I've been wanting to write for a long time. It's filled with all the things I want you to know about how much you mean to me.",
    date: "Always ❤️"
  },
  {
    id: 7,
    image: IMAGES.lanternWishes,
    title: "A Wish for You",
    description:
      "I wish for your happiness, your dreams to come true, and for our love to grow stronger with each passing day. You are my everything.",
    date: "My Wish for You"
  },
  {
    id: 8,
    image: IMAGES.glassCabin,
    title: "Our Little World",
    description:
      "I dream of a little home where we can be together, filled with laughter, love, and the warmth of our shared moments.",
    date: "Our Dream Home"
  }
];

export const REASONS: Reason[] = [
  {
    id: 1,
    title: "The Way You Laugh",
    description: "It is the most genuine, musical sound in the world. It has the power to instantly clear the darkest clouds from my mind.",
    emoji: "💖",
    category: "Soul"
  },
  {
    id: 2,
    title: "Your Infinite Kindness",
    description: "You care so deeply about others and bring a soft warmth to everyone you interact with. You make the world a gentler place.",
    emoji: "🌸",
    category: "Heart"
  },
  {
    id: 3,
    title: "Our Inside Jokes",
    description: "The silly, wordless understanding we share that makes us burst out laughing in completely silent rooms.",
    emoji: "🤪",
    category: "Fun"
  },
  {
    id: 4,
    title: "Your Passion & Dreams",
    description: "Watching your eyes light up when you speak about things you love. Your determination inspires me to be a better person daily.",
    emoji: "✨",
    category: "Mind"
  },
  {
    id: 5,
    title: "The Safety in Your Hugs",
    description: "The moment we embrace, the entire noise of the world gets muted. It's my ultimate sanctuary and favorite spot on earth.",
    emoji: "🧸",
    category: "Comfort"
  },
  {
    id: 6,
    title: "Your Boundless Creativity",
    description: "You see beauty in things most people walk past. Your unique perspective makes life look like an exquisite canvas.",
    emoji: "🎨",
    category: "Mind"
  }
];

export const OPEN_WHEN_LETTERS: OpenWhen[] = [
  {
    id: 1,
    trigger: "When you miss me",
    title: "A Gentle Whisper Across the Miles",
    message: "Close your eyes for just a second and breathe. No matter where we are, we are looking at the exact same sky, and my thoughts are always wrapped around you. I am only ever a heartbeat, a message, or a call away. I love you to the stars and back.",
    actionText: "Send me a '🐧' emoji right now to get a surprise hug!",
    emoji: "📫",
    bgGradient: "from-blue-600/30 to-indigo-600/30"
  },
  {
    id: 2,
    trigger: "When you need a laugh",
    title: "The Ultimate Pocket Cheerleader",
    message: "Remember that time we tried to cook and ended up setting off the smoke detector while singing at the top of our lungs? Or when we both got lost but decided it was an 'expedition'? You are the funniest, most delightful partner in crime. Smile, because your grin is literally my favorite sight.",
    actionText: "Tap the audio player and let the rhythm carry your worries away!",
    emoji: "🎉",
    bgGradient: "from-amber-500/30 to-rose-500/30"
  },
  {
    id: 3,
    trigger: "When you have a hard day",
    title: "A Safe Harbor for Your Soul",
    message: "It is okay to feel tired, and it is okay to not be okay. You carry so much with such grace, but you don't have to carry it alone. Put down your heavy bags, take a deep breath, and let me hold the weight for a while. You are strong, but you are also allowed to rest.",
    actionText: "Take 3 deep breaths, make a cup of warm chamomile, and relax.",
    emoji: "🌿",
    bgGradient: "from-emerald-600/30 to-teal-600/30"
  },
  {
    id: 4,
    trigger: "When it is your birthday morning",
    title: "The Grand Celebration of YOU!",
    message: "Happy Birthday, my beautiful human! Today, the world is a brighter place because you were born. I wish you a year ahead filled with warm cups of coffee, sudden fits of laughter, soft blankets, and endless dreams coming true. I am so lucky to share this life journey with you.",
    actionText: "Make a wish right now—I'm working on making it come true!",
    emoji: "🎂",
    bgGradient: "from-pink-500/30 to-purple-600/30"
  }
];

export const DREAMS: Dream[] = [
  {
    id: 1,
    title: "A Pilgrimage to Vrindavan",
    description:
      "One of my biggest dreams is to walk through the sacred streets of Vrindavan with you, take darshan together, sing the holy names of Radha-Krishna, and create memories in the place where divine love lives forever.",
    category: "Spiritual",
    emoji: "🦚"
  },
  {
    id: 2,
    title: "Creating Our Little Home",
    description:
      "A peaceful home filled with laughter, love, late-night conversations, morning tea together, and a small corner where we can pray to Radha-Krishna every day.",
    category: "Home",
    emoji: "🏡"
  },
  {
    id: 3,
    title: "Growing Together",
    description:
      "To keep learning, supporting, and inspiring each other through every chapter of life, celebrating every success and standing together through every challenge.",
    category: "Life",
    emoji: "🌱"
  },
  {
    id: 4,
    title: "A Lifetime of Birthdays",
    description:
      "To celebrate not just this birthday, but every birthday that follows—making new memories, sharing laughter, and reminding you every year how deeply you are loved.",
    category: "Forever",
    emoji: "🎂"
  },
  {
    id: 5,
    title: "Growing Old Together",
    description:
      "No matter where life takes us, my greatest dream is simple—to hold your hand through every season of life and continue writing our story together.",
    category: "Forever",
    emoji: "💍"
  }
];
