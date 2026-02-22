// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tonguepunch.com', // Replace with your actual domain later
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});