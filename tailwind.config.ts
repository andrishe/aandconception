import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Palette héritée (pages Services / Blog / Signin)
        secondary: '#f1e7e6',
        black: '#303030',
        bgWite: '#F5EEEF',
        primary: '#a8797f',
        primaryDark: '#926368',
        primaryLight: '#d8c4c1',
        // Nouvelle identité
        cream: '#FAF6F1',
        sand: '#F3EDE4',
        ink: '#2B2724',
        inkSoft: '#3A3531',
        clay: '#B65440',
        clayDark: '#9A4331',
        muted: '#6F665E',
        line: '#E8DFD3',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 12px 40px -18px rgba(43, 39, 36, 0.25)',
        float: '0 18px 50px -20px rgba(43, 39, 36, 0.35)',
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    function ({ addBase, theme }: any) {
      const colors = theme('colors');
      const newVars = Object.fromEntries(
        Object.entries(colors).flatMap(([key, value]) => {
          // Vérifie si `value` est un objet
          if (typeof value === 'object' && value !== null) {
            return Object.entries(value).map(([shade, hex]) => [
              `--${key}-${shade}`,
              hex,
            ]);
          } else if (typeof value === 'string') {
            return [[`--${key}`, value]];
          }
          return [];
        })
      );

      addBase({
        ':root': newVars,
      });
    },
  ],
} satisfies Config;
