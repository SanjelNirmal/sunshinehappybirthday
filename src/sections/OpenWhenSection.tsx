/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { OpenWhen } from "../types";
import { OPEN_WHEN_LETTERS } from "../data/storyData";
import GlassCard from "../components/GlassCard";
import { Mail, MailOpen, X, Sparkles, CheckCircle2 } from "lucide-react";

export default function OpenWhenSection() {
  const [selectedLetter, setSelectedLetter] = useState<OpenWhen | null>(null);
  const [copiedAction, setCopiedAction] = useState(false);

  const handleOpenLetter = (letter: OpenWhen) => {
    setSelectedLetter(letter);
    setCopiedAction(false);
  };

  const handleCloseLetter = () => {
    setSelectedLetter(null);
  };

  return (
    <section
      id="open-when"
      className="relative min-h-screen w-full py-24 flex flex-col justify-center items-center px-4 md:px-8 bg-[#090909] overflow-hidden border-t border-white/5"
    >
      {/* Background soft ambient glowing purple/blue meshes */}
      <div className="absolute top-[30%] left-[10%] w-[380px] h-[380px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-6xl w-full relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Mail className="w-3.5 h-3.5" />
            Milestone 05
          </div>
          <h2 className="font-sans font-extrabold text-white text-3xl md:text-5xl tracking-tight uppercase">
            OPEN WHEN...
          </h2>
          <p className="text-white/50 text-sm font-light font-sans">
            A digital collection of sealed envelopes preserved for special moments, moods, or hours of need.
          </p>
        </div>

        {/* Grid of Interactive Envelopes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {OPEN_WHEN_LETTERS.map((letter, index) => {
            const isCelebration = letter.trigger.includes("birthday");
            return (
              <GlassCard
                key={letter.id}
                onClick={() => handleOpenLetter(letter)}
                delay={index * 0.1}
                className={`group flex flex-col justify-between items-center text-center p-8 border-white/10 hover:border-indigo-400/30 transition-all duration-500 relative overflow-hidden rounded-3xl`}
              >
                {/* Envelope visual effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-400/5 rounded-full blur-2xl group-hover:bg-indigo-400/15 transition-all duration-500 pointer-events-none" />
                
                <div className="relative z-10 space-y-6 flex flex-col items-center w-full">
                  {/* Envelope Icon with springy hover animation */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-white/10 relative overflow-hidden ${
                      isCelebration 
                        ? "bg-gradient-to-tr from-pink-500/20 to-purple-500/20 text-pink-300 border-pink-400/30" 
                        : "bg-white/5 text-indigo-300"
                    }`}
                  >
                    <span className="relative z-10 filter drop-shadow-md select-none">{letter.emoji}</span>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.div>

                  {/* Title */}
                  <div className="space-y-2">
                    <span className="text-rose-300 font-mono text-[10px] uppercase tracking-widest block font-bold">
                      Open When
                    </span>
                    <h4 className="font-sans font-bold text-white text-lg tracking-tight group-hover:text-indigo-200 transition-colors">
                      {letter.trigger}
                    </h4>
                  </div>

                  {/* Prompt Button */}
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/55 font-medium px-4 py-2 rounded-full bg-white/5 border border-white/5 group-hover:bg-indigo-500/20 group-hover:text-white group-hover:border-indigo-400/30 transition-all duration-300">
                    Read Letter
                    <MailOpen className="w-3.5 h-3.5" />
                  </span>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>

      {/* Styled Glass Modal Overlay */}
      <AnimatePresence>
        {selectedLetter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseLetter}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Letter Dialog Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-xl bg-slate-950/45 backdrop-blur-3xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl shadow-black/80 z-10"
            >
              {/* Header Gradient Seal Accent */}
              <div className={`h-2.5 w-full bg-gradient-to-r ${selectedLetter.bgGradient}`} />

              <div className="p-6 sm:p-8 md:p-10 space-y-6 relative">
                {/* Close Button */}
                <button
                  onClick={handleCloseLetter}
                  className="absolute top-6 right-6 p-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all focus:outline-none z-20"
                  title="Close letter"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Letter Header */}
                <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl border border-white/10 shadow-inner">
                    {selectedLetter.emoji}
                  </div>
                  <div>
                    <span className="text-rose-300 font-mono text-[10px] uppercase tracking-widest block font-bold">
                      Open When: {selectedLetter.trigger}
                    </span>
                    <h3 className="font-sans font-bold text-white text-xl md:text-2xl tracking-tight leading-snug">
                      {selectedLetter.title}
                    </h3>
                  </div>
                </div>

                {/* Letter Core Content (Heartfelt Message) */}
                <div className="relative py-2 max-h-[280px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
                  {/* Decorative faint watermark icon */}
                  <MailOpen className="absolute -bottom-8 -right-8 w-40 h-40 text-white/[0.02] pointer-events-none rotate-12" />
                  
                  <p className="font-serif italic text-white/95 text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {selectedLetter.message}
                  </p>
                </div>

                {/* Actionable Interactive Sweet Cue */}
                <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 space-y-3">
                  <div className="flex items-center gap-1.5 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Special Action
                  </div>
                  <div className="flex items-start md:items-center justify-between gap-4 flex-col md:flex-row">
                    <p className="text-white/80 text-xs md:text-sm font-light font-sans">
                      {selectedLetter.actionText}
                    </p>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedLetter.actionText);
                        setCopiedAction(true);
                        setTimeout(() => setCopiedAction(false), 2000);
                      }}
                      className="shrink-0 flex items-center gap-1.5 text-xs text-white font-medium bg-indigo-500 hover:bg-indigo-600 border border-indigo-400/30 px-3.5 py-2 rounded-xl transition-all shadow-md shadow-indigo-500/20 active:scale-95 focus:outline-none"
                    >
                      {copiedAction ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Copied!
                        </>
                      ) : (
                        "Copy Action"
                      )}
                    </button>
                  </div>
                </div>

                {/* Closing signature */}
                <div className="flex justify-between items-center text-xs text-white/40 font-mono border-t border-white/10 pt-5">
                  <span>FOREVER & ALWAYS</span>
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
