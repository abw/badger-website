import { defineConfig } from 'vite'
import jsconfigPaths    from 'vite-jsconfig-paths'
import svgr             from 'vite-plugin-svgr'
import react            from '@vitejs/plugin-react'
import mdx              from '@mdx-js/rollup'
import define           from  './vite.defs.js'
import fs               from 'node:fs'

const https = {
  key:  fs.readFileSync('etc/certs/badger-website.local.wardley.org.key'),
  cert: fs.readFileSync('etc/certs/badger-website.local.wardley.org.crt'),
}

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({/* jsxImportSource: …, otherOptions… */})
    },
    react({
      include: /\.(jsx|js|mdx|md|tsx|ts)$/
    }),
    svgr(),
    jsconfigPaths({ root: '../' }),
  ],
  root: 'web',
  base: '/badger-website',
  envDir: '../',
  define,
  build: {
    emptyOutDir: true,
    outDir: '../docs',
    chunkSizeWarningLimit: 1800
  },
  server: {
    host: 'badger-website.local.wardley.org',
    port: 3012,
    https
  }
})

