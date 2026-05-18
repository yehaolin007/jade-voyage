import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jade-voyage.pages.dev',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap()
  ],
  build: {
    inlineStylesheets: 'auto'
  }
});
