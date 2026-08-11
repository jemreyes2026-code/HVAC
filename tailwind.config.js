/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /**
         * Warm neutral palette. The five supplied swatches are marked below;
         * the two `ink` mid-tones are derived slightly darker than the supplied
         * #7A746A so body text clears WCAG AA (4.5:1) on the cream background —
         * #7A746A itself lands at 4.04:1, which is why it's reserved for
         * dividers and decorative work as `stone`.
         */
        paper: {
          DEFAULT: '#F3EFE6', // supplied — page background
          alt: '#E2DFD6', //     supplied — alternating sections
          line: '#CFC9BC', //    derived  — borders
        },
        stone: '#B9B2A5', //     supplied — dividers, decorative rules
        ink: {
          DEFAULT: '#1F1E1C', // supplied — headings, footer ground
          muted: '#7A746A', //   supplied — large/decorative text only
          faint: '#6E6862', //   derived  — small labels (4.79:1)
          soft: '#5F594F', //    derived  — body copy (6.04:1)
        },
        crimson: {
          DEFAULT: '#C41230', // brand accent, matches the logo mark
          hover: '#A30E26',
          tint: '#F5E4E2',
          // Brand crimson only reaches 2.75:1 on the near-black header, which
          // fails AA. This lighter tint clears it at 4.67:1 and is used ONLY
          // on dark grounds, so the accent stays one colour family.
          light: '#E8536B',
        },
        /**
         * Cards and the header sit on a warm off-white rather than pure #FFF,
         * which reads harsh against cream. Overriding `white` themes every
         * existing `bg-white` / `text-white` utility in one place.
         */
        white: '#FBF9F4',
      },
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Warm-tinted shadows — neutral gray shadows go muddy over cream
        card: '0 1px 2px rgba(31,30,28,0.05), 0 8px 24px -14px rgba(31,30,28,0.20)',
        'card-hover': '0 2px 4px rgba(31,30,28,0.07), 0 16px 34px -16px rgba(31,30,28,0.26)',
        header: '0 1px 3px rgba(31,30,28,0.07)',
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
