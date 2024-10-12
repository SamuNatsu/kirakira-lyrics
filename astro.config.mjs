// Astro config
import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';

// Integrations
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'zh-TW'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
  integrations: [sitemap(), tailwind({ nesting: true })],
  site: 'https://kirakira-lyrics.github.io',
  vite: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@layouts': resolve('src/layouts')
      }
    }
  }
});
