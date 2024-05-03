import { defineConfig } from 'vite'
import jsconfigPaths    from 'vite-jsconfig-paths'
import svgr             from 'vite-plugin-svgr'
import react            from '@vitejs/plugin-react'
import define           from  './vite.defs.js'
import copy             from 'rollup-plugin-copy'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    jsconfigPaths()
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
    include: ['test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['test/setup.js', 'test/lib'],
    coverage: {
      provider: 'v8',
      reporter: ['html']
    },
  },
  define,
  build: {
    // minify: true,
    sourcemap: true,
    lib: {
      entry: 'src/index.jsx',
      name: '@abw/badger-website',
      fileName: 'badger-website',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime'
      ],
      output: {
        globals: {
          'react': 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
      plugins: [
        copy({
          targets: [
            {
              src: ['styles/*', '!styles/build'],
              dest: 'dist/styles',
            },
            {
              src: ['src/index.d.ts'],
              dest: 'dist',
            },
          ],
          hook: 'writeBundle'
        })
      ]
    },
  },
})
