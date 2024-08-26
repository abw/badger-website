import React    from 'react'
import Provider from '@/site/Provider.jsx'
import site     from './config/site.js'
import sidebar  from './config/sidebar.jsx'

const pages = import.meta.glob(
  './pages/**/[a-z_]*.jsx',
  { eager: true }
)

export const App = () =>
  <Provider
    site={site}
    pages={pages}
    sidebar={sidebar}
  />

export default App