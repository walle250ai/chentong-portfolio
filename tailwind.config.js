/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e5e5e0',
        DarkLava: '#393632',
        SageGray: '#8b8b73',
        gold: '#cfa355',
      },
      fontFamily: {
        amiamie: ['"Amiamie"', 'sans-serif'],
        'amiamie-round': ['"Amiamie-Round"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 40s infinite linear',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap, 0px)))' },
        },
      },
    },
  },
  plugins: [],
}
