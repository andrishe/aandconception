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
        secondary: '#f1e7e6',
        black: '#303030',
        primary: '#a8797f',
        primaryDark: '#926368',
        primaryLight: '#d8c4c1',
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
    },
  },
  plugins: [
    function ({ addBase, theme }: any) {
      let colors = theme('colors');
      let newVars = Object.fromEntries(
        Object.entries(colors).flatMap(([key, value]) =>
          typeof value === 'string'
            ? [[`--${key}`, value]]
            : Object.entries(value).map(([shade, hex]) => [
                `--${key}-${shade}`,
                hex,
              ])
        )
      );

      addBase({
        ':root': newVars,
      });
    },
  ],
} satisfies Config;
