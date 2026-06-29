import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  // TODO(Pedro): replace with your real deployment domain.
  site: 'https://pedro-rojas.vercel.app/'
})
