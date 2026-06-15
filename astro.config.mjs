import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://leenkkk22.github.io',
  integrations: [tailwind()],
});
