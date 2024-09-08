const e=`import React    from 'react'
import site     from './config/site.js'
import sidebar  from './config/sidebar.jsx'
import { SiteProvider } from '@abw/badger-website'
import './styles/my-website.scss'

const pages = import.meta.glob(
  './pages/**/[a-z_]*.[jt]s?(x)',
  { eager: true }
)

const App = () =>
  <SiteProvider
    site={site}
    pages={pages}
    sidebar={sidebar}
  />

export default App`;export{e as default};
