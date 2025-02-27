const n=`import react            from '@vitejs/plugin-react'
import mdx              from '@mdx-js/rollup'
import svgr             from 'vite-plugin-svgr'
import jsconfigPaths    from 'vite-jsconfig-paths'
import rehypeCodeProps  from 'rehype-mdx-code-props'
import { defineConfig } from 'vite'

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
      include: /\\.(jsx|js|mdx|md|tsx|ts)$/
    }),
    svgr(),
    jsconfigPaths({ root: '../' }),
  ],
  root: 'web',
  base: '/my-website',
  envDir: '../',
  build: {
    emptyOutDir: true,
    outDir: '../docs',
    chunkSizeWarningLimit: 1800
  },
})
`;export{n as default};
