/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#EDE8E0',
          light: '#F5F1EB',
          dark: '#E2DCD2',
          card: '#E8E3DA',
        },
        warm: {
          DEFAULT: '#1F1E1C',
          secondary: '#6B655C',
          tertiary: '#9B9590',
          border: 'rgba(0,0,0,0.06)',
          'border-strong': 'rgba(0,0,0,0.10)',
        },
        lassie: {
          DEFAULT: '#1F1E1C',
          green: '#4A7C59',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        nav: '0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)',
        card: '0 2px 12px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.08)',
        float: '0 4px 24px rgba(0,0,0,0.10)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-left': 'slide-left 0.7s ease-out forwards',
        'slide-right': 'slide-right 0.7s ease-out forwards',
        float: 'float 5s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
