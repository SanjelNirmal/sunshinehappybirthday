/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Sparkles, Heart, Plane, Home, TreePine } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { DREAMS } from "../data/storyData";
import { IMAGES } from "../config/images";

export default function OurFuture() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Travel" | "Home" | "Growth">("All");

  const filteredDreams = activeCategory === "All" 
    ? DREAMS 
    : DREAMS.filter(dream => dream.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Travel": return <Plane className="w-4 h-4 text-rose-300" />;
      case "Home": return <Home className="w-4 h-4 text-emerald-300" />;
      default: return <TreePine className="w-4 h-4 text-purple-300" />;
    }
  };

  return (
    <section
      id="our-future"
      className="relative min-h-screen w-full py-24 flex flex-col justify-center items-center px-4 md:px-8 bg-[#090909] overflow-hidden border-t border-white/5"
    >
      {/* Background visual asset layer - Frosted glass effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.glassCabin}
          alt="Our Future Glass Cabin Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-15 filter blur-xs scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090909] via-transparent to-[#090909] z-10" />
      </div>

      <div className="max-w-6xl w-full relative z-20 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Compass className="w-3.5 h-3.5" />
            Milestone 06
          </div>
          <h2 className="font-sans font-extrabold text-white text-3xl md:text-5xl tracking-tight uppercase">
            OUR FUTURE DREAMS
          </h2>
          <p className="text-white/50 text-sm font-light font-sans">
            A aspirational log of our goals, adventures, and quiet paths we look forward to walking.
          </p>
        </div>

        {/* Filter Categories Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 z-10 relative">
          {(["All", "Travel", "Home", "Growth"] as const).map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full border text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                  isSelected 
                    ? "bg-white text-[#090909] border-white font-bold" 
                    : "bg-white/5 text-white/65 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Dreams Grid with Layout Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredDreams.map((dream) => {
              return (
                <motion.div
                  key={dream.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassCard
                    hoverEffect={true}
                    className="h-full bg-gradient-to-br from-white/[0.02] to-white/[0.04] hover:to-indigo-500/5 border-white/10 hover:border-indigo-400/30 p-8 flex flex-col justify-between rounded-3xl min-h-[220px]"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            {getCategoryIcon(dream.category)}
                          </div>
                          <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest font-semibold">
                            {dream.category}
                          </span>
                        </div>
                        <span className="text-2xl filter drop-shadow-md select-none">{dream.emoji}</span>
                      </div>

                      <h3 className="font-sans font-extrabold text-white text-xl tracking-tight leading-snug">
                        {dream.title}
                      </h3>

                      <p className="text-white/70 text-sm leading-relaxed font-light font-sans">
                        {dream.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-rose-300 text-[10px] font-mono tracking-widest uppercase mt-6 pt-4 border-t border-white/5">
                      <Heart className="w-3 h-3 fill-rose-300 shrink-0" />
                      An Infinite Pledge
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
