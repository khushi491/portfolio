import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode based on 'class' in HTML tag
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6d28d9', // Deep Purple
          dark: '#c4b5fd',  // Light Purple
        },
        secondary: {
          light: '#db2777', // Rose
          dark: '#fda4af',  // Light Rose
        },
        accent: {
          light: '#10b981', // Emerald
          dark: '#6ee7b7',  // Light Emerald
        },
        background: {
          light: '#f3f4f6', // Gray 100
          dark: '#111827',  // Gray 900
        },
        text: {
          light: '#1f2937', // Gray 900
          dark: '#f9fafb',  // Gray 50
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans font
        mono: ['monospace'], // Keep default mono for now
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
