import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Burnt orange accent — text, borders, active nav, emphasis.
        primary: {
          DEFAULT: '#C96C3F',
          light: '#E08B5F',
          dark: '#A9542D', // Pressed / hover on solid fills
        },
        // Charcoal paper surfaces, darkest to lightest.
        // DEFAULT matches the portrait artwork's own background exactly so the
        // image composites into the page with no visible seam.
        ink: {
          DEFAULT: '#151513', // Page background
          light: '#1C1C19', // Cards and panels
          lighter: '#23231F', // Chips, hovered cards
          edge: '#34342C', // Hairline borders
        },
        // Warm ivory type, brightest to dimmest.
        cream: {
          DEFAULT: '#DED3B9', // Headings
          muted: '#B5AE9C', // Body copy
          dim: '#8A8474', // Labels and captions
        },
        olive: {
          DEFAULT: '#4A4A22', // Filled button
          light: '#5C5C2B', // Its hover
        },
        sage: '#77775D',
        gold: '#A58A50', // Hairline outlines on ghost buttons
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono: ['"Fira Code"', 'monospace'], // Fira Code for monospace
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
