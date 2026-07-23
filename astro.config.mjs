import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://patthub.github.io',
  base: '/michalinastopnickaart',
  vite: { plugins: [tailwindcss()] },
});
