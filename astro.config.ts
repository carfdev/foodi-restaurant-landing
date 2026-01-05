import { defineConfig, fontProviders } from 'astro/config';
import { fileURLToPath } from 'url';

import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

import netlify from '@astrojs/netlify';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Poppins',
        weights: [500],
        styles: ['normal'],
        subsets: ['latin'],
        cssVariable: '--font-poppins',
      },
      {
        provider: fontProviders.google(),
        name: 'Inter',
        weights: [500, 600, 700, 800],
        styles: ['normal'],
        subsets: ['latin'],
        cssVariable: '--font-inter',
      },
    ],
  },

  integrations: [vue()],
  adapter: netlify(),
});
