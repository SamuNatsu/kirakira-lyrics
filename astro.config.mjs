// Astro config
import { defineConfig } from 'astro/config';

// Integrations
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind({ nesting: true })],
  site: 'https://kirakira-lyrics.github.io'
});
