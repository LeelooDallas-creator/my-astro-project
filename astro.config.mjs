import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://boisterous-marshmallow-3fdf60.netlify.app",
  integrations: [preact()]
});