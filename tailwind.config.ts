import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c9933a',
        'gold-dark': '#a87628',
        'gold-light': '#e0a84a',
        dark: '#1a1a1a',
        'dark-card': '#222222',
        'dark-card-2': '#2a2a2a',
        'dark-navy': '#1a2744',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'Helvetica Neue', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
