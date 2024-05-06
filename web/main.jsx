import React    from 'react'
import ReactDOM from 'react-dom/client'
import Provider from '@/site/Provider.jsx'
import site     from './config/site.js'
import sidebar  from './config/sidebar.jsx'
import './styles/badger-website.scss'

const pages = import.meta.glob(
  './pages/**/[a-z_]*.jsx',
  { eager: true }
)

ReactDOM
  .createRoot(
    document.getElementById('root')
  )
  .render(
    <React.StrictMode>
      <Provider
        site={site}
        pages={pages}
        sidebar={sidebar}
        // Sidebar={Sidebar}
      />
    </React.StrictMode>,
  )
