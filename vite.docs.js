import { defineConfig } from 'vite'
import jsconfigPaths    from 'vite-jsconfig-paths'
import svgr             from 'vite-plugin-svgr'
import react            from '@vitejs/plugin-react'
import mdx              from '@mdx-js/rollup'
import define           from  './vite.defs.js'
import fs               from 'node:fs'
import rehypeCodeProps  from 'rehype-mdx-code-props'

// These are my locally generated self-signed certificates which only work
// for me.  You can create your own using https://github.com/FiloSottile/mkcert
// or set the useHttps option below to false.  Note that clipboard copy doesn't
// work if you're not running under https
const useHttps = true
const https = useHttps
  ? {
      key:  fs.readFileSync('etc/certs/badger-website.local.wardley.org-key.pem'),
      cert: fs.readFileSync('etc/certs/badger-website.local.wardley.org.pem'),
    }
  : undefined

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        rehypePlugins: [rehypeCodeProps],
        providerImportSource: '@mdx-js/react'
      })
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

