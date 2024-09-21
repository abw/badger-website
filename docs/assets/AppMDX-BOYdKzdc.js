const e=`import React    from 'react'
import site     from './config/site.js'
import sidebar  from './config/sidebar.js'
import { MDXProvider } from '@mdx-js/react'
import { SiteProvider, mdxComponents } from '@abw/badger-website'
import './styles/my-website.scss'

const pages = import.meta.glob(
  './pages/**/[a-z_]*.[jt]s?(x)',
  { eager: true }
)

const App = () =>
  <MDXProvider components={mdxComponents}>
    <SiteProvider
      site={site}
      pages={pages}
      sidebar={sidebar}
    />
  </MDXProvider>

export default App`;export{e as default};
