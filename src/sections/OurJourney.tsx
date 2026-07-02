/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Star, Heart, Calendar } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { MILESTONES } from "../data/storyData";

export default function OurJourney() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MILESTONES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MILESTONES.length) % MILESTONES.length);
  };

  return (
    <section
      id="our-journey"
      className="relative min-h-screen w-full py-24 flex flex-col justify-center items-center px-4 md:px-8 bg-[#090909] overflow-hidden border-t border-white/5"
    >
      {/* Background Soft Mesh Ambient Glow */}
      <div className="absolute top-[40%] right-[10%] w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none z-0 animate-pulse" />

      <div className="max-w-6xl w-full relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Calendar className="w-3.5 h-3.5" />
            Milestone 02
          </div>
          <h2 className="font-sans font-extrabold text-white text-3xl md:text-5xl tracking-tight uppercase">
            OUR JOURNEY
          </h2>
          <p className="text-white/50 text-sm font-light font-sans">
            A beautiful horizontal odyssey documenting our most unforgettable steps together.
          </p>
        </div>

        {/* Milestone Horizontal Display Slider */}
        <div className="relative flex flex-col items-center gap-8 w-full">
          
          {/* Constellation Connector Line */}
          <div className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[85%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block z-0">
            {/* Pulsing focal point stars */}
            <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            <div className="absolute top-1/2 left-[50%] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping" />
            <div className="absolute top-1/2 left-[80%] -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 animate-ping" />
          </div>

          <div className="w-full max-w-4xl relative min-h-[380px] md:min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column: Huge visual year indicator with glowing circle */}
                  <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-3 z-10">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-rose-300 text-xl font-bold shadow-lg shadow-black/30">
                      {MILESTONES[currentIndex].emoji}
                    </div>
                    <div>
                      <span className="text-rose-300 font-mono text-xs tracking-wider uppercase block font-semibold">
                        {MILESTONES[currentIndex].location}
                      </span>
                      <h3 className="text-white font-extrabold text-4xl tracking-tight uppercase font-sans mt-1">
                        {MILESTONES[currentIndex].year}
                      </h3>
                    </div>
                  </div>

                  {/* Right Column: Liquid Glass story card detailing the memory */}
                  <div className="md:col-span-8 z-10">
                    <GlassCard
                      hoverEffect={true}
                      className="bg-gradient-to-br from-indigo-500/10 via-white/[0.02] to-rose-500/10 border-white/20 p-8 md:p-10 space-y-6 rounded-3xl"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-rose-300">
                          <Heart className="w-4 h-4 fill-rose-300" />
                          <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Milestone Chapter</span>
                        </div>
                        <h4 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                          {MILESTONES[currentIndex].title}
                        </h4>
                      </div>

                      <p className="text-white/80 text-sm md:text-base leading-relaxed font-light font-sans">
                        {MILESTONES[currentIndex].description}
                      </p>

                      <div className="flex items-center justify-between border-t border-white/10 pt-5 text-white/40 font-mono text-xs">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-indigo-300 animate-pulse" />
                          Constellation point {currentIndex + 1}
                        </span>
                        <span>{currentIndex + 1} OF {MILESTONES.length}</span>
                      </div>
                    </GlassCard>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Navigation controls & Indicators */}
          <div className="flex items-center gap-6 z-10">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
              title="Previous milestone"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Pagination Bullet Indicators */}
            <div className="flex items-center gap-2">
              {MILESTONES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-rose-500 w-6" : "bg-white/20 hover:bg-white/40"
                  }`}
                  title={`Go to milestone ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
              title="Next milestone"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
