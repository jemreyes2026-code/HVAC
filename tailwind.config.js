/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0B0D',
          card: '#131416',
          border: 'rgba(255,255,255,0.08)',
          muted: '#1A1B1E',
        },
        light: {
          DEFAULT: '#FFFFFF',
          alt: '#F7F7F8',
          muted: '#F0F0F2',
        },
        accent: {
          DEFAULT: '#22C55E',
          hover: '#16A34A',
          glow: 'rgba(34,197,94,0.15)',
          soft: 'rgba(34,197,94,0.1)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          tertiary: '#71717A',
          dark: '#18181B',
          'dark-secondary': '#52525B',
        },
        border: {
          light: '#E4E4E7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.08), 0 8px 32px -8px rgba(0,0,0,0.12)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.1), 0 16px 48px -12px rgba(0,0,0,0.18)',
        glow: '0 0 40px rgba(34,197,94,0.15)',
        'dark-card': '0 1px 3px rgba(0,0,0,0.3), 0 8px 32px -8px rgba(0,0,0,0.5)',
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
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'activity-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'activity-in': 'activity-in 0.4s ease-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0A0B0D 0%, #131416 50%, #0A0B0D 100%)',
      },
    },
  },
  plugins: [],
};
