/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, Sparkles, Star } from "lucide-react";
import GlassCard from "../components/GlassCard";

export default function FinalSection() {
  // Generate floating fireflies/particles
  const fireflies = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    bottom: `${Math.random() * 40}%`,
    left: `${Math.random() * 90 + 5}%`,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="final-section"
      className="relative min-h-screen w-full py-24 flex flex-col justify-center items-center px-4 md:px-8 bg-[#090909] overflow-hidden border-t border-white/5"
    >
      {/* Background Soft Atmospheric Mesh Glow */}
      <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-gradient-to-t from-rose-500/10 via-indigo-500/10 to-transparent blur-[140px] pointer-events-none z-0 animate-pulse" />

      {/* Floating Fireflies / Golden particles */}
      <div className="absolute inset-x-0 bottom-0 h-[60vh] pointer-events-none z-1 overflow-hidden">
        {fireflies.map((ff) => (
          <motion.div
            key={ff.id}
            style={{
              width: ff.size,
              height: ff.size,
              bottom: ff.bottom,
              left: ff.left,
            }}
            animate={{
              y: [-20, -180, -20],
              x: [-10, 10, -10],
              opacity: [0.1, 0.9, 0.1],
              scale: [1, 1.4, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: ff.duration,
              delay: ff.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-rose-400 shadow-[0_0_12px_3px_rgba(244,63,94,0.6)]"
          />
        ))}
      </div>

      <div className="max-w-3xl w-full relative z-10 text-center space-y-12">
        
        {/* Pulsing visual star / heart centerpiece */}
        <div className="relative inline-flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.25, 1, 1.25, 1] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/25 flex items-center justify-center shadow-lg shadow-rose-500/20"
          >
            <Heart className="w-7 h-7 fill-rose-500 text-rose-400" />
          </motion.div>

          <div className="absolute top-[-10px] right-[-10px]">
            <Star className="w-4 h-4 text-amber-300 animate-bounce" />
          </div>
        </div>

        {/* Big visual title */}
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-rose-300 font-mono text-xs tracking-widest uppercase font-semibold block"
          >
            Our Timeless Promise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-rose-200 text-4xl sm:text-6xl md:text-7xl tracking-tighter uppercase leading-none"
          >
            THANK YOU FOR <br />
            BEING YOU
          </motion.h2>
        </div>

        {/* Final editorial glass quote block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          <GlassCard
            hoverEffect={true}
            className="bg-white/[0.02] border-white/10 p-8 md:p-10 max-w-2xl mx-auto rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-2 right-4 text-white/[0.01] font-serif text-9xl font-bold leading-none pointer-events-none">
              “
            </div>

            <p className="font-serif italic text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed">
              "And I would choose you; in a hundred lifetimes, in a hundred worlds, in any version of reality, I'd find you and I'd choose you, over and over."
            </p>
            
            <div className="h-[1px] w-8 bg-rose-500/40 mx-auto my-6 rounded-full" />
            
            <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase block">
              Forever & Always • Happy Birthday, My Love
            </span>
          </GlassCard>
        </motion.div>

        {/* Back to top guide button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-4"
        >
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-white/45 hover:text-white transition-colors text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 mx-auto focus:outline-none"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
            Rewind Storybook
          </button>
        </motion.div>

      </div>

      {/* Clean elegant brand watermark footer */}
      <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-white/20 font-mono tracking-wider uppercase select-none">
        <a
          href="https://nirmalsanjel.com.np"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          © 2026 • Crafted with love by Nirmal Sanjel
        </a>
      </footer>
    </section>
  );
}
