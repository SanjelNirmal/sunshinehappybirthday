/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Heart, FileText, Check } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { IMAGES } from "../config/images";

export default function BirthdayLetter() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section
      id="birthday-letter"
      className="relative min-h-screen w-full py-24 flex flex-col justify-center items-center px-4 md:px-8 bg-[#090909] overflow-hidden border-t border-white/5"
    >
      {/* Background vintage letter visual asset */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.vintageLetter}
          alt="Vintage Letter background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-10 filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090909] via-transparent to-[#090909] z-10" />
      </div>

      <div className="max-w-4xl w-full relative z-20 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <FileText className="w-3.5 h-3.5" />
            Milestone 07
          </div>
          <h2 className="font-sans font-extrabold text-white text-3xl md:text-5xl tracking-tight uppercase">
            EDITORIAL BIRTHDAY LETTER
          </h2>
          <p className="text-white/50 text-sm font-light font-sans">
            A luxury magazine-style layout carrying a deep, timeless letter authored specifically for you.
          </p>
        </div>

        {/* Luxury Magazine Styled Board */}
        <GlassCard
          hoverEffect={false}
          className="bg-slate-950/45 border-white/15 p-8 md:p-12 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Subtle design grid watermark */}
          <div className="absolute inset-0 grid grid-cols-6 gap-2 opacity-[0.01] pointer-events-none">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="border-r border-b border-white h-24" />
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Editorial Info */}
            <div className="md:col-span-4 space-y-6 md:border-r md:border-white/10 md:pr-8">
              <span className="text-rose-300 font-mono text-[10px] uppercase tracking-widest block font-bold">
                Issue No. 01 • July 2026
              </span>
              
              <div className="space-y-2">
                <span className="font-serif italic text-white/55 text-sm block">Title Article</span>
                <h3 className="font-sans font-extrabold text-white text-2xl tracking-tight leading-none uppercase">
                  THE ART OF <br />
                  LOVING YOU
                </h3>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5 text-xs text-white/50 font-sans font-light leading-relaxed">
                <div><strong>Author:</strong> Your Favorite Person | Nirmal</div>
                <div><strong>Subject:</strong> My Dear Love</div>
                <div><strong>Duration:</strong> Eternity & Beyond</div>
              </div>

              {/* Reveal toggle button */}
              <button
                onClick={() => setRevealed(!revealed)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-rose-500/10 transition-all active:scale-95 focus:outline-none"
              >
                {revealed ? "Seal Letter" : "Unfold Letter"}
                <Heart className={`w-3.5 h-3.5 ${revealed ? "fill-white text-white" : ""}`} />
              </button>
            </div>

            {/* Right Column: Timeless Letter Content */}
            <div className="md:col-span-8 space-y-6">
              <AnimatePresence mode="wait">
                {!revealed ? (
                  <motion.div
                    key="sealed"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl animate-bounce shadow-inner">
                      ✉️
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg font-sans">This letter is sealed with love</h4>
                      <p className="text-white/50 text-xs font-light max-w-xs mx-auto mt-1 leading-relaxed">
                        Click the unfold button on the left to reveal the animated handwriting story.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="revealed"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6 text-left relative"
                  >
                    {/* Floating watermarked Heart */}
                    <Heart className="absolute -bottom-8 -right-8 w-44 h-44 text-rose-500/[0.01] pointer-events-none" />

                   <div className="space-y-4">
                      <p className="font-serif italic text-rose-200 text-lg md:text-xl font-bold">
                        My Dearest Budi,
                      </p>

                      <p className="text-white/85 text-sm md:text-base leading-relaxed font-sans font-light">
                        Happy Birthday, my Sunshine. ❤️
                        Today isn't just another day on the calendar. It's the day the world was blessed
                        with someone truly beautiful, and years later, that same person became the
                        greatest blessing in my life.
                      </p>

                      <p className="text-white/85 text-sm md:text-base leading-relaxed font-sans font-light">
                        Sometimes I still think about that tour. You were sitting on one side, and I was
                        on the other. We hardly knew each other, yet our eyes kept meeting. Neither of us
                        knew that such a small moment would become the beginning of our beautiful story.
                        Looking back now, I can't help but smile, because that single glance changed my
                        life forever.
                      </p>

                      <p className="text-white/85 text-sm md:text-base leading-relaxed font-sans font-light">
                        Since the first day of Poush, we've shared more than a year of laughter,
                        conversations, little arguments, unforgettable memories, and countless moments
                        that brought us closer. Every day with you has taught me what love truly means.
                        Thank you for staying beside me, believing in me, and loving me just the way I am.
                      </p>

                      <p className="text-white/85 text-sm md:text-base leading-relaxed font-sans font-light">
                        You are my Sunshine, my peace, my safe place, and the person who makes ordinary
                        days feel extraordinary. Your smile can brighten even my darkest days, and hearing
                        your voice is enough to make everything feel alright again. If someone ever asked
                        me where my happiness lives, my answer would always be—you.
                      </p>

                      <p className="text-white/85 text-sm md:text-base leading-relaxed font-sans font-light">
                        I pray that Shri Radha Rani and Shri Krishna always protect you, bless your life
                        with endless happiness, keep your beautiful smile shining, and give you strength
                        through every chapter of life. May every dream in your heart find its way to
                        reality, and may I be lucky enough to stand beside you while they do.
                      </p>

                      <p className="text-white/85 text-sm md:text-base leading-relaxed font-sans font-light">
                        My biggest dream isn't something extraordinary. It's simply to keep creating
                        memories with you—to celebrate more birthdays, to visit Vrindavan together, to
                        laugh at our silly jokes, to support each other through every challenge, and to
                        grow old hand in hand. If the future allows me one wish, it would be to spend it
                        with you.
                      </p>

                      <p className="text-white/85 text-sm md:text-base leading-relaxed font-sans font-light">
                        Thank you for being my happiness, my inspiration, my favorite person, and the
                        most beautiful chapter of my life.
                      </p>

                      <p className="text-white/90 text-base md:text-lg leading-relaxed font-serif italic">
                        Happy Birthday, my Budi.
                        <br />
                        I love you more than words will ever be able to express.
                        <br />
                        <span className="text-rose-300">— Yours, Nirmal ❤️</span>
                      </p>
                    </div>

                    {/* Handwriting signature animation */}
                    <div className="border-t border-white/10 pt-6 flex justify-between items-end">
                      <div className="space-y-1">
                        <span className="text-white/30 font-mono text-[9px] uppercase tracking-widest block font-semibold">
                          Date of sealing
                        </span>
                        <span className="text-white/60 font-mono text-xs">July 3, 2026</span>
                      </div>

                      <motion.div
                        initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="text-right"
                      >
                        <span className="text-rose-300 font-serif italic text-2xl md:text-3xl block filter drop-shadow">
                          Forever Yours, ❤️
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </GlassCard>

      </div>
    </section>
  );
}
