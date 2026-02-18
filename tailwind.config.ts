import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A84FF', // Vibrant Blue
        secondary: '#3DDC84', // Complementary Green
        dark: { // Dark mode specific palette
          background: {
            DEFAULT: '#0A0A0A', // Main dark background
            medium: '#1A1A1A', // Slightly lighter dark background
            light: '#2A2A2A',  // Even lighter dark background
          },
          text: {
            primary: '#FFFFFF', // White text
            secondary: '#E0E0E0', // Soft gray text
          },
          border: '#3A3A3A', // Subtle border color
        },
        light: { // Light mode fallback (though focus is dark theme)
          background: {
            DEFAULT: '#FFFFFF',
            medium: '#F3F4F6',
            light: '#E5E7EB',
          },
          text: {
            primary: '#1F2937',
            secondary: '#4B5563',
          },
          border: '#D1D5DB',
        }
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
