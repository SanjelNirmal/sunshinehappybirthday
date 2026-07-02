/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { Chapter } from "../types";
import GlassCard from "./GlassCard";
import { Heart, Sparkles, MapPin, Gift } from "lucide-react";

interface ScrollTimelineProps {
  chapters: Chapter[];
}

export default function ScrollTimeline({ chapters }: ScrollTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate opacity transforms for each background image
  const bgOpacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 1], [1, 1, 0, 0]);
  const bgOpacity2 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5, 0.6, 1], [0, 0, 1, 1, 0, 0]);
  const bgOpacity3 = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.8, 0.9, 1], [0, 0, 1, 1, 0, 0]);
  const bgOpacity4 = useTransform(scrollYProgress, [0, 0.8, 0.9, 1], [0, 0, 1, 1]);

  // Calculate subtle cinematic zoom (scale) transforms for parallax effect
  const bgScale1 = useTransform(scrollYProgress, [0, 0.3], [1.05, 1.15]);
  const bgScale2 = useTransform(scrollYProgress, [0.2, 0.6], [1.05, 1.15]);
  const bgScale3 = useTransform(scrollYProgress, [0.5, 0.9], [1.05, 1.15]);
  const bgScale4 = useTransform(scrollYProgress, [0.8, 1.0], [1.05, 1.15]);

  const bgOpacities = [bgOpacity1, bgOpacity2, bgOpacity3, bgOpacity4];
  const bgScales = [bgScale1, bgScale2, bgScale3, bgScale4];

  // Icons for progress indicators
  const sectionIcons = [
    <Sparkles className="w-4 h-4" />,
    <Heart className="w-4 h-4" />,
    <MapPin className="w-4 h-4" />,
    <Gift className="w-4 h-4" />
  ];

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full" id="narrative-timeline">
      {/* Fixed full-bleed cinematic background stack */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0">
        {/* Dark overlay grid for extra contrast & romance */}
        <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none backdrop-brightness-[0.85]" />
        
        {/* Soft, floating ambient color meshes */}
        <div className="absolute inset-0 z-10 opacity-30 mix-blend-screen pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-indigo-500/30 blur-[100px] animate-pulse" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-rose-500/30 blur-[120px] animate-pulse" />
        </div>

        {chapters.map((chapter, index) => {
          return (
            <motion.div
              key={chapter.id}
              style={{
                opacity: bgOpacities[index],
                scale: bgScales[index],
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={chapter.image}
                alt={chapter.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Vertical Floating Navigation Indicator */}
      <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-6">
        <div className="h-40 w-[2px] bg-white/10 relative rounded-full overflow-hidden">
          <motion.div 
            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }} 
            className="w-full bg-gradient-to-b from-rose-400 to-indigo-400 absolute top-0 left-0"
          />
        </div>
        
        {chapters.map((chapter, index) => {
          // Determine scale and color based on scroll position
          const indicatorY = index * 0.25;
          const isSelected = useTransform(
            scrollYProgress,
            [indicatorY - 0.12, indicatorY, indicatorY + 0.12],
            [0.8, 1.2, 0.8]
          );
          const indicatorColor = useTransform(
            scrollYProgress,
            [indicatorY - 0.12, indicatorY, indicatorY + 0.12],
            ["rgba(255,255,255,0.3)", "rgb(244,63,94)", "rgba(255,255,255,0.3)"]
          );

          return (
            <button
              key={chapter.id}
              onClick={() => {
                const element = document.getElementById(`chapter-section-${index}`);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative flex items-center justify-center p-2 focus:outline-none"
              title={chapter.title}
            >
              <motion.div
                style={{ scale: isSelected, backgroundColor: indicatorColor }}
                className="w-4 h-4 rounded-full flex items-center justify-center shadow-lg shadow-black/20"
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              
              {/* Tooltip */}
              <div className="absolute right-10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
                <div className="bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap">
                  {chapter.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Foreground Scrollable Chapters Content */}
      <div className="relative z-20 w-full flex flex-col">
        {chapters.map((chapter, index) => {
          return (
            <div
              key={chapter.id}
              id={`chapter-section-${index}`}
              className="h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 relative"
            >
              {/* Chapter Content Wrapper */}
              <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Visual Accent Title / Left Column */}
                <div className="md:col-span-4 text-left flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="space-y-2"
                  >
                    <span className="font-serif italic text-rose-300 text-2xl md:text-3xl block">
                      Chapter 0{chapter.id}
                    </span>
                    <h2 className="font-sans font-bold text-white text-3xl md:text-5xl tracking-tight leading-none">
                      {chapter.title}
                    </h2>
                    <div className="h-1 w-12 bg-gradient-to-r from-rose-400 to-indigo-400 rounded-full mt-4" />
                  </motion.div>
                </div>

                {/* Narrative Floating Card / Right Column */}
                <div className="md:col-span-8">
                  <GlassCard
                    id={`chapter-card-${chapter.id}`}
                    className={`bg-gradient-to-br ${chapter.accentColor} border-white/15`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-rose-300 border border-white/10">
                          {sectionIcons[index]}
                        </div>
                        <span className="text-white/60 font-mono text-xs tracking-wider uppercase">
                          {chapter.subtitle}
                        </span>
                      </div>

                      <p className="text-white/90 text-sm md:text-base leading-relaxed font-light">
                        {chapter.description}
                      </p>

                      <div className="border-t border-white/10 pt-6">
                        <p className="font-serif italic text-rose-200 text-lg md:text-xl leading-relaxed">
                          "{chapter.quote}"
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>

              </div>

              {/* Gentle scrolling indicator arrow at bottom for early chapters */}
              {index < chapters.length - 1 && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 animate-bounce">
                  <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Scroll Down</span>
                  <div className="w-5 h-5 border-b-2 border-r-2 border-white/40 transform rotate-45" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
