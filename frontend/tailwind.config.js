/** @type {import('tailwindcss').Config} */
export default {
  content: { relative: true, files: ['./index.html', './src/**/*.{js,jsx}'] },
  theme: {
    extend: {
      colors: {
        // Cameron HVAC reference palette: charcoal sections, red accents, white text.
        paper: {
          DEFAULT: 'rgb(var(--palette-paper) / <alpha-value>)',
          alt: 'rgb(var(--palette-paper) / <alpha-value>)',
          line: 'rgb(var(--palette-line) / <alpha-value>)',
        },
        surface: 'rgb(var(--palette-surface) / <alpha-value>)',
        night: '#0F0F0F',
        stone: 'rgb(var(--palette-stone) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--palette-ink) / <alpha-value>)',
          muted: 'rgb(var(--palette-faint) / <alpha-value>)',
          faint: 'rgb(var(--palette-faint) / <alpha-value>)',
          soft: 'rgb(var(--palette-soft) / <alpha-value>)',
        },
        crimson: {
          DEFAULT: '#D30C00',
          hover: '#830604',
          tint: 'rgb(var(--palette-tint) / <alpha-value>)',
          // Lighter red keeps small links and labels readable on charcoal.
          light: 'rgb(var(--palette-accent) / <alpha-value>)',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Neutral shadows coordinate with the charcoal surfaces
        card: '0 1px 2px rgba(0,0,0,0.05), 0 8px 24px -14px rgba(0,0,0,0.20)',
        'card-hover': '0 2px 4px rgba(0,0,0,0.07), 0 16px 34px -16px rgba(0,0,0,0.26)',
        header: '0 1px 3px rgba(0,0,0,0.07)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 46s linear infinite',
      },
    },
  },
  plugins: [],
};
