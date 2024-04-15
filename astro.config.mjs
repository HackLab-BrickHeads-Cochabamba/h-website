import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import UnoCSS from 'unocss/astro'
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  site: 'https://hacklab-website.vercel.app/',
  integrations: [
    vue(),
    mdx(),
    UnoCSS(
      { injectReset: true,
      },
    ),
    sitemap(),
  ],
})
