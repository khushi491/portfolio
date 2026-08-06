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
        // Single accent, used for every interactive and emphasis state.
        primary: {
          DEFAULT: '#EA5B26', // Accent for text, borders, icons
          light: '#FF8A5B', // Bright accent on dark surfaces
          deep: '#C4441A', // Solid button fill — white label clears 4.5:1 here, #EA5B26 does not
          dark: '#B8390F', // Pressed / hover on solid fills
        },
        // Warm near-black surfaces, darkest to lightest.
        ink: {
          DEFAULT: '#17100E', // Page background
          light: '#241A16', // Cards and panels
          lighter: '#2E211C', // Chips, hovered cards
          edge: '#3A2A24', // Hairline borders
        },
        // Warm off-whites for type, brightest to dimmest.
        cream: {
          DEFAULT: '#F5EFEC', // Headings
          muted: '#C9BAB2', // Body copy
          dim: '#8A7A72', // Labels and captions
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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
