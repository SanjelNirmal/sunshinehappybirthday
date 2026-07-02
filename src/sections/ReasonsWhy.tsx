/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reason } from "../types";
import { REASONS } from "../data/storyData";
import GlassCard from "../components/GlassCard";
import { ArrowLeft, ArrowRight, HeartHandshake, Star } from "lucide-react";

export default function ReasonsWhy() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % REASONS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + REASONS.length) % REASONS.length);
  };

  const currentReason = REASONS[index];

  // Colors mapping for reasons
  const categoryColors: Record<string, string> = {
    Soul: "from-purple-500/15 via-white/[0.01] to-indigo-500/15 border-purple-500/30 text-purple-200",
    Heart: "from-rose-500/15 via-white/[0.01] to-pink-500/15 border-rose-500/30 text-rose-200",
    Fun: "from-amber-500/15 via-white/[0.01] to-orange-500/15 border-amber-500/30 text-amber-200",
    Mind: "from-cyan-500/15 via-white/[0.01] to-teal-500/15 border-cyan-500/30 text-cyan-200",
    Comfort: "from-blue-500/15 via-white/[0.01] to-indigo-500/15 border-blue-500/30 text-blue-200",
  };

  // Variants for card swipe/flying effect
  const cardVariants = {
    enter: (dir: number) => ({
      x: dir * 180,
      opacity: 0,
      rotate: dir * 8,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      zIndex: 10,
    },
    exit: (dir: number) => ({
      x: dir * -180,
      opacity: 0,
      rotate: dir * -8,
      scale: 0.95,
      zIndex: 0,
    }),
  };

  return (
    <section
      id="reasons-why"
      className="relative min-h-screen w-full py-24 flex flex-col justify-center items-center px-4 md:px-8 bg-[#090909] overflow-hidden border-t border-white/5"
    >
      {/* Background Soft Mesh Ambient Glow */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-rose-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-6xl w-full relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <HeartHandshake className="w-3.5 h-3.5" />
            Milestone 04
          </div>
          <h2 className="font-sans font-extrabold text-white text-3xl md:text-5xl tracking-tight uppercase">
            REASONS WHY I LOVE YOU
          </h2>
          <p className="text-white/50 text-sm font-light font-sans">
            A small handful of the infinite reasons my heart choose you, day after day.
          </p>
        </div>

        {/* 3D Stacked Deck Visual Container */}
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="relative w-full max-w-md h-[340px] md:h-[300px] flex items-center justify-center">
            
            {/* Decorative background stacked layers representing remaining cards */}
            <div className="absolute top-4 w-[92%] h-full bg-white/[0.01] border border-white/5 rounded-3xl backdrop-blur-sm scale-[0.93] translate-y-3 opacity-30 z-0 pointer-events-none" />
            <div className="absolute top-2 w-[96%] h-full bg-white/[0.01] border border-white/10 rounded-3xl backdrop-blur-sm scale-[0.96] translate-y-1.5 opacity-50 z-1 pointer-events-none" />

            {/* Active Card Container with Motion Animations */}
            <div className="relative w-full h-full z-10">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentReason.id}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <GlassCard
                    hoverEffect={false}
                    className={`w-full h-full flex flex-col justify-between bg-gradient-to-br ${
                      categoryColors[currentReason.category] || "from-white/5 to-white/10 border-white/25"
                    } p-8 relative overflow-hidden rounded-3xl`}
                  >
                    {/* Floating Category Tag */}
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-widest text-white/70 font-semibold">
                        {currentReason.category}
                      </span>
                      <span className="text-3xl filter drop-shadow-md select-none">
                        {currentReason.emoji}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 my-4">
                      <h4 className="font-sans font-bold text-white text-xl md:text-2xl tracking-tight">
                        {currentReason.title}
                      </h4>
                      <p className="text-white/80 text-sm md:text-base font-light leading-relaxed font-sans">
                        {currentReason.description}
                      </p>
                    </div>

                    {/* Index Indicator */}
                    <div className="flex justify-between items-center border-t border-white/10 pt-4 text-white/40 font-mono text-xs">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
                        REASON 0{currentReason.id}
                      </span>
                      <span>/ 0{REASONS.length}</span>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 z-10">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
              title="Previous reason"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <span className="font-mono text-white/50 text-xs tracking-wider">
              {index + 1} OF {REASONS.length}
            </span>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
              title="Next reason"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
