import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'day': "url(../src/stardew-day.png)",
        'night': "url(../src/stardew-night.png)",
        'wood': "url(../src/wood-panel.png)",
        'wood-footer': "url(../src/wood-panel-3.png)",
        'border': "(../src/border.png)",
        'farm': "url(../src/farm.png)",
        'night-farm': "url(../src/night-farm.png)",
        'board': "url(../src/board.png)",
        'book': "url(../src/book.png)",
        'picnic': "url(../src/picnic-pattern.jpg)"
      },
      fontFamily: {
        'pixelify': ["Pixelify Sans", "serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
