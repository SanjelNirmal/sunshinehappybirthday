/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        mono: ["Space Grotesk", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      backgroundImage: {
        "liquid-glass-radial": "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.15), transparent)",
        "mesh-glow": "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glass-inner": "inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.15)",
        "glass-outer": "0 20px 40px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
} satisfies Config;
