/// Tailwind config
import type { Config } from 'tailwindcss';

// https://tailwindcss.com/docs/configuration
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config;
