/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Hero from "./sections/Hero";
import TheDayWeMet from "./sections/TheDayWeMet";
import OurJourney from "./sections/OurJourney";
import Gallery from "./sections/Gallery";
import ReasonsWhy from "./sections/ReasonsWhy";
import OpenWhenSection from "./sections/OpenWhenSection";
import OurFuture from "./sections/OurFuture";
import BirthdayLetter from "./sections/BirthdayLetter";
import FinalSection from "./sections/FinalSection";
import AudioPlayer from "./components/AudioPlayer";

export default function App() {
  const handleStartJourney = () => {
    const nextSection = document.getElementById("the-day-we-met");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate light, organic floating background particles/stars
  const particles = Array.from({ length: 45 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2.5 + 1,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 5,
  }));

  return (
    <div className="min-h-screen bg-[#090909] text-white selection:bg-rose-500/30 selection:text-rose-200 overflow-x-hidden relative font-sans">
      
      {/* Ambient background grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-1" />

      {/* Floating Constellation Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-1">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
              ease: "easeInOut",
            }}
            className="absolute bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.4)]"
          />
        ))}
      </div>

      {/* Floating Pill Custom Audio Player (Global Controller Overlay) */}
      <AudioPlayer />

      {/* Section 01: Hero cover */}
      <Hero onStart={handleStartJourney} />

      {/* Section 02: The Day We Met (First spark & stories) */}
      <TheDayWeMet />

      {/* Section 03: Our Journey (Horizontal timeline milestones) */}
      <OurJourney />

      {/* Section 04: Cinematic Gallery (Lightbox and parallax) */}
      <Gallery />

      {/* Section 05: Reasons Why I Love You (Swipeable 3D Deck) */}
      <ReasonsWhy />

      {/* Section 06: Open When (Envelopes Grid & Modal) */}
      <OpenWhenSection />

      {/* Section 07: Our Future (Aspirational Dreams) */}
      <OurFuture />

      {/* Section 08: Editorial Birthday Letter (Handwriting Reveal) */}
      <BirthdayLetter />

      {/* Section 10: Final Thank You (Floating Fireflies Scene) */}
      <FinalSection />

    </div>
  );
}
