import React    from 'react'
import site     from './config/site.js'
import sidebar  from './config/sidebar.jsx'
import { Provider } from '@abw/badger-website'
import './styles/my-website.scss'

const pages = import.meta.glob(
  './pages/**/[a-z_]*.jsx',
  { eager: true }
)

const App = () =>
  <Provider
    site={site}
    pages={pages}
    sidebar={sidebar}
  />

export default App