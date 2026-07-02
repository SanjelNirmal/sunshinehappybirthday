/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, Calendar, Star } from "lucide-react";
import GlassCard from "../components/GlassCard";

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-8 text-center overflow-hidden bg-[#090909]"
    >
      {/* Soft atmospheric background mesh glow */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] rounded-full bg-gradient-to-tr from-rose-500/10 via-purple-500/10 to-indigo-500/10 blur-[130px] pointer-events-none z-0" />

      {/* Hero Visual Foreground Grid */}
      <div className="max-w-4xl w-full space-y-8 relative z-10 mt-12 md:mt-0 flex flex-col items-center">
        
        {/* Date / Metadata Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono uppercase tracking-widest backdrop-blur-xl shadow-lg shadow-black/10"
        >
          <Calendar className="w-3.5 h-3.5 text-rose-300" />
          July 3, 2005 • For My Always
        </motion.div>

        {/* Display Typography Header */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-2 text-rose-200 text-lg md:text-xl font-serif italic"
          >
            <Star className="w-4 h-4 text-rose-300 animate-spin" style={{ animationDuration: "10s" }} />
            Happy Birthday, Suntia Sijapati ❤️
            <Star className="w-4 h-4 text-rose-300 animate-spin" style={{ animationDuration: "12s" }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-rose-100 to-indigo-100 text-5xl sm:text-7xl md:text-8xl tracking-tighter leading-none uppercase"
          >
            AN INFINITE <br />
            LOVE STORY
          </motion.h1>
        </div>

        {/* Liquid Glass Descriptive Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl"
        >
          <GlassCard
            hoverEffect={true}
            className="bg-white/[0.03] border-white/10 p-6 md:p-8 rounded-3xl"
          >
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-light font-sans">
              Welcome to our story.

            Every photograph, every word, and every moment here has been carefully chosen to celebrate the person who changed my world.

            Inside, you'll find the memories we've created together, the reasons my heart chooses you every single day, and little letters written with love—ready for every chapter of your life.
            
            Happy Birthday, Kanxi ❤️
          </p>
          </GlassCard>
        </motion.div>

        {/* Action Button & Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="flex flex-col items-center gap-4 mt-6"
        >
          <button
            onClick={onStart}
            className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#090909] font-bold tracking-wide text-sm hover:bg-rose-500 hover:text-white border border-transparent hover:border-rose-400/30 transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] shadow-2xl shadow-white/5 hover:shadow-rose-500/20 focus:outline-none"
          >
            Open Storybook
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <span className="text-white/30 font-mono text-[9px] uppercase tracking-widest">
            Scroll to begin our timeline
          </span>
        </motion.div>

      </div>

      {/* Bottom atmospheric dark gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090909] to-transparent pointer-events-none z-10" />
    </section>
  );
}
