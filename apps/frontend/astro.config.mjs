import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import angular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
  outDir: '../../dist/apps/frontend',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'server',
  integrations: [
    angular(),
    tailwind({
      configFile: fileURLToPath(
        new URL('./tailwind.config.cjs', import.meta.url)
      ),
    }),
    sitemap(),
  ],
});
