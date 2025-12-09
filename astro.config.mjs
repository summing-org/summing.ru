// astro.config.mjs
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://summing.ru', // или твоё фактическое
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});