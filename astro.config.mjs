// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://datawithaditya.github.io',
  // User site (username.github.io) → served from root, no `base` needed.
  trailingSlash: 'never',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
