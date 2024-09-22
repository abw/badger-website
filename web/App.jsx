import React    from 'react'
import Provider from '@/site/Provider.jsx'
import site     from './config/site.js'
import sidebar  from './config/sidebar.js'

const pages = import.meta.glob(
  './pages/**/[a-z_]*.{js,jsx,ts,tsx,md,mdx}',
  { eager: true }
)

const snippets = import.meta.glob(
  './snippets/**/*',
  {
    query: '?raw',
    import: 'default',
  }
)

const examples = import.meta.glob(
  './examples/**/*',
  {
    import: 'default',
  }
)

const examplesSrc = import.meta.glob(
  './examples/**/*',
  {
    query: '?raw',
    import: 'default',
  }
)

export const App = () =>
  <Provider
    site={site}
    pages={pages}
    sidebar={sidebar}
    snippets={snippets}
    examples={examples}
    examplesSrc={examplesSrc}
    // prevNext={false}
    // prevNextArrows
    // debugPages
    // debugRouter
    // linkUp={false}
    // sidebarToc={false}
    // linkUpIcon='angle-up'
  />

export default App