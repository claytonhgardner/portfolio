// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// The site is served from https://claytonhgardner.github.io/portfolio/
// If a custom domain is connected later, change `site` to that domain
// and remove `base` (the site will then live at the domain root).
export default defineConfig({
  site: 'https://claytonhgardner.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
