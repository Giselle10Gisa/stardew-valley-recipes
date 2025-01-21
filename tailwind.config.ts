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
        'wood-dashboard': "url(../src/wood-panel-2.png)",
        'wood-footer': "url(../src/wood-panel-3.png)",
        'border': "(../src/border.png)",
        'farm': "url(../src/farm.png)",
        'night-farm': "url(../src/night-farm.png)",
        'board': "url(../src/board.png)",
        'book': "url(../src/book.png)",
        'picnic': "url(../src/picnic-pattern.jpg)",
        'dashboard': "url(https://stardewvalley.net/wp-content/uploads/2017/12/stardewbackground.png)"
      },
      fontFamily: {
        'pixelify': ["Pixelify Sans", "serif"]
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100%) rotate(12deg)', opacity: '0' },
          '100%': { transform: 'translateY(0) rotate(12deg)', opacity: '1' },
        },
        pendulum: {
          '0%': { transform: 'rotate(30deg)' },
          '25%': { transform: 'rotate(-25deg)' },
          '50%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-15deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        confettiFall: {
          '0%': { 
            transform: 'translateY(-20px) rotate(0deg)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100vh) rotate(360deg)',
            opacity: '0'
          }
        }
      },
      animation: {
        fall: 'fall 0.5s ease-out forwards',
        pendulum: 'pendulum 0.5s ease-in-out forwards',
        confettiFall: 'confettiFall 5s linear forwards'
      }
    },
  },
  plugins: [],
} satisfies Config;
