/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Music, Heart, Gift } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Happy Birthday frequencies and durations (in beats)
const G4 = 392.00, A4 = 440.00, B4 = 493.88, C5 = 523.25;
const D5 = 587.33, E5 = 659.25, F5 = 698.46, G5 = 783.99;

const birthdayMelody = [
  { f: G4, d: 0.5 }, { f: G4, d: 0.5 }, { f: A4, d: 1 }, { f: G4, d: 1 }, { f: C5, d: 1 }, { f: B4, d: 2 },
  { f: G4, d: 0.5 }, { f: G4, d: 0.5 }, { f: A4, d: 1 }, { f: G4, d: 1 }, { f: D5, d: 1 }, { f: C5, d: 2 },
  { f: G4, d: 0.5 }, { f: G4, d: 0.5 }, { f: G5, d: 1 }, { f: E5, d: 1 }, { f: C5, d: 1 }, { f: B4, d: 1 }, { f: A4, d: 2 },
  { f: F5, d: 0.5 }, { f: F5, d: 0.5 }, { f: E5, d: 1 }, { f: C5, d: 1 }, { f: D5, d: 1 }, { f: C5, d: 2 }
];

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [useSynth, setUseSynth] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);
  
  // Track references
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthTimeoutRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noteIndexRef = useRef(0);

  // Play/pause handler
  const handleTogglePlay = () => {
    if (showTooltip) setShowTooltip(false);
    
    if (isPlaying) {
      if (useSynth) {
        stopSynth();
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      if (useSynth) {
        startSynth();
      } else if (audioRef.current) {
        audioRef.current.play().catch(() => {
          setUseSynth(true);
          startSynth();
        });
      }
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const startSynth = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      playNextNote();
    } catch (e) {
      console.error("Synthesizer failed to start", e);
    }
  };

  const playNextNote = () => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    let note = birthdayMelody[noteIndexRef.current];

    // Reset and pause if at the end of the song
    if (!note) {
      noteIndexRef.current = 0;
      synthTimeoutRef.current = window.setTimeout(playNextNote, 2000); // 2 second pause between loops
      return;
    }

    const tempo = 450; // ms per beat (adjust this to make the song faster or slower)
    const durationInSeconds = (note.d * tempo) / 1000;

    playBell(note.f, 0.15, durationInSeconds, "triangle");

    noteIndexRef.current++;
    synthTimeoutRef.current = window.setTimeout(playNextNote, note.d * tempo);
  };

  const playBell = (frequency: number, volume: number, duration: number, type: OscillatorType = "triangle") => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filterNode = ctx.createBiquadFilter();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    // Filter for a softer, music-box feel
    filterNode.type = "lowpass";
    filterNode.frequency.setValueAtTime(1200, ctx.currentTime);

    // Snappy attack for melody, long tail for a ringing bell effect
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.05); // sharp attack
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration + 0.8); // ringing decay

    osc.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration + 1.0);
  };

  const stopSynth = () => {
    if (synthTimeoutRef.current) {
      clearTimeout(synthTimeoutRef.current);
      synthTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      stopSynth();
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed top-6 left-6 z-50 flex flex-col gap-2 items-start" id="audio-player">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 bg-black/35 backdrop-blur-xl border border-white/15 px-4 py-2.5 rounded-full shadow-lg shadow-black/20 relative"
      >
        <button
          onClick={handleTogglePlay}
          className="w-10 h-10 rounded-full bg-rose-500 hover:bg-rose-600 flex items-center justify-center text-white shadow-md shadow-rose-500/20 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-[1px]" />}
        </button>

        <div className="flex flex-col pr-1 max-w-[120px] md:max-w-[160px]">
          <div className="flex items-center gap-1.5 overflow-hidden">
            <Gift className="w-3.5 h-3.5 text-rose-300 shrink-0" />
            <span className="text-white text-xs font-semibold tracking-wide truncate">
              {useSynth ? "Happy Birthday" : "Party Track"}
            </span>
          </div>
          <span className="text-white/50 text-[10px] font-mono tracking-wider truncate mt-0.5 uppercase">
            {isPlaying ? "Playing Live Synth" : "Track Paused"}
          </span>
        </div>

        <div className="flex items-end gap-[3px] h-3.5 w-6 px-1 justify-center shrink-0">
          <motion.div
            animate={isPlaying ? { height: [4, 14, 4] } : { height: 4 }}
            transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
            className="w-[3px] bg-rose-400 rounded-full"
          />
          <motion.div
            animate={isPlaying ? { height: [4, 10, 4] } : { height: 4 }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="w-[3px] bg-rose-300 rounded-full"
          />
          <motion.div
            animate={isPlaying ? { height: [4, 12, 4] } : { height: 4 }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut", delay: 0.1 }}
            className="w-[3px] bg-indigo-400 rounded-full"
          />
          <motion.div
            animate={isPlaying ? { height: [4, 7, 4] } : { height: 4 }}
            transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut", delay: 0.3 }}
            className="w-[3px] bg-indigo-300 rounded-full"
          />
        </div>

        {!useSynth && (
          <audio
            ref={audioRef}
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
            loop
            preload="auto"
          />
        )}

        <button
          onClick={() => {
            const nextMode = !useSynth;
            setUseSynth(nextMode);
            if (isPlaying) {
              if (nextMode) {
                if (audioRef.current) audioRef.current.pause();
                startSynth();
              } else {
                stopSynth();
                setTimeout(() => {
                  if (audioRef.current) audioRef.current.play().catch(() => {
                    setUseSynth(true);
                    startSynth();
                  });
                }, 50);
              }
            }
          }}
          className="text-white/40 hover:text-white transition-colors p-1.5 focus:outline-none"
          title={useSynth ? "Switch to MP3" : "Switch to Happy Birthday Synth"}
        >
          <Heart className={`w-3.5 h-3.5 ${useSynth ? "text-rose-400 fill-rose-400" : ""}`} />
        </button>
      </motion.div>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 2.0 }}
            className="bg-rose-500 text-white text-[10px] md:text-xs font-semibold px-3 py-1.5 rounded-xl border border-rose-400/30 shadow-lg shadow-rose-500/20 max-w-[190px] leading-snug ml-2"
          >
            🎵 Play me for a special birthday surprise!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}