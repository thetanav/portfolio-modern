import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
} satisfies Config;
