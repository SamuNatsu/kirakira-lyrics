// Astro config
import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';

import { siteLocales } from './src/config';

// Integrations
import icon from 'astro-icon';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'zh-cn',
    locales: siteLocales,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
  integrations: [icon(), pagefind(), sitemap(), tailwind({ nesting: true })],
  site: 'https://kirakira-lyrics.github.io',
  vite: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@img-artist': resolve('src/assets/images/artists'),
        '@layouts': resolve('src/layouts')
      }
    }
  }
});
