import mdx   from '@mdx-js/rollup'
import svgr  from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

// NOT USED - causes node import problems

export const vitePlugins = ({
  reactOptions = {
    include: /\.(jsx|js|mdx|md|tsx|ts)$/
  },
  mdxOptions,
  svgrOptions,
}) => [
  {
    enforce: 'pre',
    ...mdx(mdxOptions)
  },
  react(reactOptions),
  svgr(svgrOptions)
]

export default vitePlugins