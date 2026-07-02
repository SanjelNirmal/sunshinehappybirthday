/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image, X, ZoomIn, Eye, Sparkles } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { GALLERY_ITEMS } from "../data/storyData";

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <section
      id="gallery"
      className="relative min-h-screen w-full py-24 flex flex-col justify-center items-center px-4 md:px-8 bg-[#090909] overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-6xl w-full relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Image className="w-3.5 h-3.5" />
            Milestone 03
          </div>
          <h2 className="font-sans font-extrabold text-white text-3xl md:text-5xl tracking-tight uppercase">
            CINEMATIC GALLERY
          </h2>
          <p className="text-white/50 text-sm font-light font-sans">
            Glimpses of our golden hours, preserved forever like static frames of a timeless movie.
          </p>
        </div>

        {/* Gallery Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {GALLERY_ITEMS.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl h-[340px] md:h-[400px]"
              >
                {/* Image zoom on hover */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-[0.8] group-hover:brightness-[0.7]"
                />

                {/* Ambient glass glow filter */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                {/* Floating Cap / Interactive indicators */}
                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                  <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-semibold">
                    <ZoomIn className="w-3.5 h-3.5 text-rose-300" />
                    Expand Photo
                  </div>
                </div>

                {/* Captions */}
                <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-300 font-mono text-[10px] uppercase tracking-widest font-semibold">
                      {item.date}
                    </span>
                    <div className="h-[1px] w-6 bg-white/25" />
                    <span className="text-white/40 font-mono text-[9px] uppercase tracking-wider">
                      Click to inspect
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-white text-xl md:text-2xl tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm font-light leading-relaxed max-w-md line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Subtle border shine sweep */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-rose-400/35 transition-colors duration-500 rounded-3xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Frosted Glass Lightbox Dialog */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Dark glass backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Lightbox container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-4xl bg-black/35 border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-black/80 z-10 flex flex-col md:flex-row h-full md:h-auto max-h-[90vh]"
            >
              {/* Image side */}
              <div className="md:w-7/12 relative overflow-hidden h-[45%] md:h-[500px]">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              </div>

              {/* Story descriptive side with glass style */}
              <div className="md:w-5/12 p-8 flex flex-col justify-between bg-slate-950/45 backdrop-blur-3xl border-l border-white/10">
                
                {/* Close handle */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-6 right-6 p-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all focus:outline-none z-20"
                  title="Close Lightbox"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Content info */}
                <div className="space-y-6 mt-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-rose-300">
                      <Sparkles className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
                      <span className="text-rose-300 font-mono text-[10px] uppercase tracking-widest font-semibold block">
                        Preserved Moment
                      </span>
                    </div>
                    <span className="text-white/45 font-mono text-xs">{activeItem.date}</span>
                    <h3 className="font-sans font-extrabold text-white text-2xl md:text-3xl tracking-tight">
                      {activeItem.title}
                    </h3>
                  </div>

                  <div className="h-[1px] w-12 bg-gradient-to-r from-rose-400 to-transparent" />

                  <p className="text-white/80 text-sm md:text-base leading-relaxed font-light font-sans">
                    {activeItem.description}
                  </p>
                </div>

                {/* Footer signatures */}
                <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-6 md:mt-0 text-white/40 font-mono text-xs">
                  <span>FRAME #0{activeItem.id}</span>
                  <span>❤️</span>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
