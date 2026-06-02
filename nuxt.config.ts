import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  srcDir: 'app/',
  css: [],

  alias: {
    '@pages': fileURLToPath(new URL('./app/pages', import.meta.url)),
    '@features': fileURLToPath(new URL('./app/features', import.meta.url)),
    '@entities': fileURLToPath(new URL('./app/entities', import.meta.url)),
    '@widgets': fileURLToPath(new URL('./app/widgets', import.meta.url)),
    '@shared': fileURLToPath(new URL('./app/shared', import.meta.url)),
  },

  typescript: {
    strict: true,
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },

  modules: ['@nuxt/image'],
});