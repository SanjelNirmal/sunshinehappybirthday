/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
  id?: string;
  delay?: number;
  key?: any;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  onClick,
  id,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverEffect ? { y: -6, scale: 1.02, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)" } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-2xl shadow-black/10
        rounded-3xl
        p-6 md:p-8
        transition-all duration-300
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {/* Liquid glass light gleam sweep effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
      
      {/* Inner subtle glow border */}
      <div className="absolute inset-[1px] rounded-[23px] border border-white/5 pointer-events-none" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
