/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, Compass, MapPin } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { CHAPTERS } from "../data/storyData";

export default function TheDayWeMet() {
  const chapter = CHAPTERS[0]; // "The First Spark"
  const cozyChapter = CHAPTERS[1]; // "Quiet Havens"

  return (
    <section
      id="the-day-we-met"
      className="relative min-h-screen w-full py-24 flex flex-col justify-center items-center px-4 md:px-8 bg-[#090909] overflow-hidden"
    >
      {/* Background visual asset layer - Frosted and dimmed to support overlay text */}
      <div className="absolute inset-0 z-0">
        <img
          src={chapter.image}
          alt="The Day We Met Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-20 scale-105 filter blur-sm transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090909] via-transparent to-[#090909] z-10" />
      </div>

      <div className="max-w-6xl w-full relative z-20 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold tracking-wider uppercase font-mono"
          >
            <Compass className="w-3.5 h-3.5" />
            Milestone 01
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.1 }}
            className="font-sans font-extrabold text-white text-3xl md:text-5xl tracking-tight uppercase"
          >
            THE DAY WE MET | The First Signs of an Infinite Love Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-sm font-light font-sans"
          >
            Rewinding back to the sweet coordinates of our very first tour.
          </motion.p>
        </div>

        {/* Narrative layout splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Large portrait photograph styled as custom polaroid/museum canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src={chapter.image}
              alt="First Spark Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-[350px] md:h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Overlay Image details */}
            <div className="absolute bottom-6 left-6 z-20 space-y-1">
              <span className="text-white/50 font-mono text-[10px] tracking-widest uppercase block">Coordinates</span>
              <div className="flex items-center gap-1.5 text-white font-medium text-sm">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                Pathivara, Nepal
              </div>
            </div>
          </motion.div>

          {/* Liquid glass card container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <GlassCard
              hoverEffect={false}
              className="bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border-white/15 p-8 md:p-10 space-y-6 rounded-3xl"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-rose-300 border border-white/10">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-white/60 font-mono text-xs tracking-wider uppercase">
                  {chapter.subtitle}
                </span>
              </div>

              <h3 className="font-serif italic text-white text-2xl md:text-3xl font-semibold leading-snug">
                "{chapter.quote}"
              </h3>

              <p className="text-white/80 text-sm md:text-base leading-relaxed font-light font-sans">
                {chapter.description}
              </p>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest block">The Aftermath</span>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  We stayed talking until the barista politely informed us the cafe had been closed for half an hour. That night, I walked home looking up at the stars, realizing my universe had permanently shifted on its axis.
                </p>
              </div>
            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
