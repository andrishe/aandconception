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

        // bg-[#a8797f] hover:bg-[#926368] focus:ring-4 focus:ring-[#d8c4c1]
      },
    },
  },
  plugins: [],
} satisfies Config;
